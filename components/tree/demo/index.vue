<script>
import CControlledTree from './controlled-tree';
import CControlledTreeString from '!raw-loader!./controlled-tree';
import CReplacefields from './replacefields';
import CReplacefieldsString from '!raw-loader!./replacefields';
import CDraggable from './draggable';
import CDraggableString from '!raw-loader!./draggable';
import CTreeWithLine from './tree-with-line';
import CTreeWithLineString from '!raw-loader!./tree-with-line';
import CDirectory from './directory';
import CDirectoryString from '!raw-loader!./directory';
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CCustomizeIcon from './customize-icon';
import CCustomizeIconString from '!raw-loader!./customize-icon';
import CLoadDataAsynchronously from './load-data-asynchronously';
import CLoadDataAsynchronouslyString from '!raw-loader!./load-data-asynchronously';
import CSearchable from './searchable';
import CSearchableString from '!raw-loader!./searchable';
import CCustomizeCollapse_expandIcon from './customize-collapse_expand-icon';
import CCustomizeCollapse_expandIconString from '!raw-loader!./customize-collapse_expand-icon';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 树形控件

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用\`树控件\`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '树形控件',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Tree',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CControlledTreeString}><CControlledTree /></demo-container>
            <demo-container code={CReplacefieldsString}><CReplacefields /></demo-container>
            <demo-container code={CDraggableString}><CDraggable /></demo-container>
            <demo-container code={CTreeWithLineString}><CTreeWithLine /></demo-container>
            <demo-container code={CDirectoryString}><CDirectory /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CCustomizeIconString}><CCustomizeIcon /></demo-container>
            <demo-container code={CLoadDataAsynchronouslyString}><CLoadDataAsynchronously /></demo-container>
            <demo-container code={CSearchableString}><CSearchable /></demo-container>
            <demo-container code={CCustomizeCollapse_expandIconString}><CCustomizeCollapse_expandIcon /></demo-container>
          </a-col>
        </a-row>
        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>
