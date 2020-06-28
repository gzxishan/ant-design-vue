<script>
import CVertical from './vertical';
import CVerticalString from '!raw-loader!./vertical';
import CHorizontal from './horizontal';
import CHorizontalString from '!raw-loader!./horizontal';
import CDividerWithTitle from './divider-with-title';
import CDividerWithTitleString from '!raw-loader!./divider-with-title';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '分割线',
  type: 'Other',
  zhType: '其他',
  cols: 1,
  title: 'Divider',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CVerticalString}><CVertical /></demo-container>
            <demo-container code={CHorizontalString}><CHorizontal /></demo-container>
            <demo-container code={CDividerWithTitleString}><CDividerWithTitle /></demo-container>
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
