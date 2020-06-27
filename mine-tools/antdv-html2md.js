//将ant-design-vue官方文档html转换为md

const $ = require('cheerio');
const fs = require('fs');
const path = require("path");
const DIR = __dirname.replace(/\\/g, "/");

const mdUtils = {
  _parseContent(node, end = "\n") {
    node.find("a").each((index, e) => {
      let a = $(e);
      a.before(`[${a.text()}](${a.attr("href")})`);
    });
    node.find("a").remove();
    node.find("code").each((index, e) => {
      let code = $(e);
      code.before("`" + code.html() + "`");
    });
    node.find("code").remove();
    return {
      text: node.text() + end
    }
  },
  parseH(node) {
    switch (node.get(0).tagName) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
        {
          node.find("a.anchor").remove();

          node.find("code").each((index, e) => {
            let code = $(e);
            code.before("`" + code.html() + "`");
          });
          node.find("code").remove();

          let len = parseInt(node.get(0).tagName.substring(1));
          let items = [];
          for (let i = 0; i < len; i++) {
            items.push("#");
          }
          items.push(" ", node.text(), "\n");

          return {
            text: items.join("")
          }
        }
        break;
      default:
        return false;
        break;
    }
  },
  parseP(node) {
    if (node.get(0).tagName == "p") {
      return this._parseContent(node);
    } else {
      return false;
    }
  },
  parsePre(node, codeWrap) {
    if (node.get(0).tagName == "pre" && node.children("code").length > 0) {
      let text = node.children("code").text().trim();
      if (codeWrap) {
        text = "```\n" + text + "\n```\n";
      }
      return {
        text
      }
    } else {
      return false;
    }
  },
  parseTable(node) {
    if (node.get(0).tagName == "table") {
      let mds = [];
      let ths = [];
      let _ths = [];
      node.children("thead").find("th").each((index, e) => {
        let th = $(e);
        ths.push(th.text());
        _ths.push("---");
      });

      mds.push("| " + ths.join(" | ") + " |"); //表头
      mds.push("| " + _ths.join(" | ") + " |"); //分隔线

      node.children("tbody").find("tr").each((index, e) => {
        let tr = $(e);
        let tds = [];
        tr.find("td").each((index, e) => {
          let td = $(e);
          let rs = this._parseTd(td);
          tds.push(rs.text);
        });
        mds.push("| " + tds.join(" | ") + " |");
      });

      return {
        text: mds.join("\n") + "\n"
      }
    } else {
      return false;
    }
  },
  _parseTd(node) {
    if (node.get(0).tagName == "td") {
      return this._parseContent(node, "");
    } else {
      return false;
    }
  },
  parseUl(node) {
    if (node.get(0).tagName == "ul") {
      let mds = [];
      node.children().each((index, e) => {
        let li = $(e);
        let rs = this._parseContent(li, "");
        mds.push("- " + rs.text);
      });

      return {
        text: mds.join("\n") + "\n"
      }
    } else {
      return false;
    }
  },
  parseOl(node) {
    if (node.get(0).tagName == "ol") {
      let mds = [];
      node.children().each((index, e) => {
        let li = $(e);
        let rs = this._parseContent(li, "");
        mds.push((index + 1) + ". " + rs.text);
      });

      return {
        text: mds.join("\n") + "\n"
      }
    } else {
      return false;
    }
  },
  parseBlockquote(node) {
    if (node.get(0).tagName == "blockquote") {
      let rs = this._parseContent(node);
      return {
        text: "> " + rs.text.trim()
      }
    } else {
      return false;
    }
  }
};


//转换markdown
function parseMarkdown(domObj, codeWrap = true) {

  if (domObj.children("div.demo-description").length > 0) {
    domObj = domObj.children("div.demo-description");
  }

  let items = [];

  domObj.children().each((index, e) => {
    let node = $(e);
    let rs = mdUtils.parseH(node);
    if (!rs) {
      rs = mdUtils.parseP(node);
    }

    if (!rs) {
      rs = mdUtils.parsePre(node, codeWrap);
    }

    if (!rs) {
      rs = mdUtils.parseTable(node);
    }

    if (!rs) {
      rs = mdUtils.parseUl(node);
    }

    if (!rs) {
      rs = mdUtils.parseOl(node);
    }

    if (!rs) {
      rs = mdUtils.parseBlockquote(node);
    }

    if (rs) {
      items.push(rs.text);
    } else if (!node.hasClass("code-box-actions")) {
      console.warn("unknown tag:", node.get(0).tagName);
      console.warn($.html(node));
    }
  });
  return items.join("\n").trim();
}

function writeFile(path, data) {
  console.log(`write file:${path}`);
  fs.writeFileSync(path, data, 'utf8');
}

//转换实例
function parseDemos(nodes, dir, type, isCN, demos) {
  let items = [];
  nodes.find("section.code-box").each((index, e) => {
    let section = $(e);
    let anchorId = section.attr("id").substring(`components-${type}-demo-`.length).replace(/[\/,&]/g, "_");

    let name = child(section, 0, 0).attr("id");

    if (name) {
      name = name.substring(`components-${type}-demo-`.length).replace(/[\/,&]/g, "_");
    } else {
      name = anchorId;
    }

    let anchorNames = anchorId.split("-");
    for (let i = 0; i < anchorNames.length; i++) {
      if (anchorNames.length > 0) {
        anchorNames[i] = anchorNames[i].substring(0, 1).toUpperCase() + anchorNames[i].substring(1);
      }
    }

    let description = parseMarkdown(child(section, 1));
    let code = parseMarkdown(child(section, 2), false);

    let data = isCN ? `<cn>\n${description}\n</cn>\n` : `<us>\n${description}\n</us>\n`;
    if (isCN) {
      data = `<cn>\n${description}\n</cn>\n<us>\n#### ${anchorNames.join(" ")}\n</us>\n`;
    } else {
      data = `<us>\n${description}\n</us>\n`;
    }

    data += code || "";

    demos.push({
      name,
      usName: anchorNames.join(" ")
    });
    writeFile(`${dir}/${name}.vue`, data);
  });
  return items.join("\n");
}

function child($obj) {
  let c = $obj;
  for (let i = 1; i < arguments.length && c; i++) {
    let index = arguments[i];
    if (typeof c.children == "function") {
      c = $(c.children()[index]);
    } else {
      c = null;
      break;
    }
  }
  return c ? $(c) : null;
}

function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

/**
 * 转换帮助文档
 * @param htmlStr 含外层div
 */
function parseDoc(htmlStr, dir, isCN, option) {

  dir = `${dir}/build`;
  mkdirsSync(`${dir}/demo`);

  let names = [];
  for (let i = 0; i < option.title.length; i++) {
    if (option.title.charCodeAt(i) >= 65 && option.title.charCodeAt(i) <= 90) {
      if (i > 0) {
        names.push("-");
      }
      names.push(option.title.charAt(i).toLowerCase());
    } else {
      names.push(option.title.charAt(i));
    }
  }

  let type = names.join("");

  let rdom = $(htmlStr);
  console.log(`doc.length:${rdom.children().length}`);

  //顶部md
  let md0 = parseMarkdown(child(rdom, 0)) || "";
  md0 = md0.replace(/`/g, "\\`");

  let demos = []; //例子文件名
  //中间实例
  parseDemos(child(rdom, 1), `${dir}/demo`, type, isCN, demos);
  let demoContainers = [];
  let indexVue = `<script>\n`;
  demos.forEach(({
    name,
    usName
  }) => {
    let subNames = name.split("-");
    for (let i = 0; i < subNames.length; i++) {
      subNames[i] = subNames[i].substring(0, 1).toUpperCase() + subNames[i].substring(1);
    }
    let uname = subNames.join("");
    indexVue += `import C${uname} from './${name}';\nimport C${uname}String from '!raw-loader!./${name}';\n`;
    demoContainers.push(`<demo-container code={C${uname}String}><C${uname} /></demo-container>\n`);
  });

  indexVue += `import CN from '../index.zh-CN';\nimport US from '../index.en-US';\n\nconst md = {\n`;

  if (isCN) {
    indexVue += "us:``,\n";
    indexVue += "cn:`";
  } else {
    indexVue += "cn:``,\n";
    indexVue += "us:`";
  }

  indexVue += md0 + "`\n};\n\n"

  indexVue +=
    `export default {
  category: '${option.category}',
  subtitle: '${option.subtitle}',
  type: '${option.type}',
  zhType: '${option.zhType}',
  cols: ${option.cols},
  title: '${option.title}',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        ${demoContainers.join('\n')}
        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>`;

  writeFile(`${dir}/demo/index.vue`, indexVue);



  //底部api
  let mdApi = parseMarkdown(child(rdom, 2, 1)); //跳过广告
  let apiName;
  let emptyApiName;
  if (isCN) {
    apiName = "index.zh-CN.md";
    emptyApiName = "index.en-US.md";
  } else {
    apiName = "index.en-US.md";
    emptyApiName = "index.zh-CN.md";
  }
  writeFile(`${dir}/${apiName}`, mdApi);
  writeFile(`${dir}/${emptyApiName}`, "");
}

function parseDocFromFile(name = "test.html", isCN = true, option = {
  category: 'Components',
  subtitle: '导航菜单',
  type: 'Navigation',
  zhType: '导航',
  cols: 1,
  title: 'Menu',
}) {
  let htmlStr = fs.readFileSync(`${DIR}/${name}`, 'utf-8');
  parseDoc(htmlStr, `${DIR}`, isCN, option);
}

parseDocFromFile();
