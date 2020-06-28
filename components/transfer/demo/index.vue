<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CSearch from './search';
import CSearchString from '!raw-loader!./search';
import CAdvanced from './advanced';
import CAdvancedString from '!raw-loader!./advanced';
import CCustomDatasource from './custom-datasource';
import CCustomDatasourceString from '!raw-loader!./custom-datasource';
import CTableTransfer from './table-transfer';
import CTableTransferString from '!raw-loader!./table-transfer';
import CTreeTransfer from './tree-transfer';
import CTreeTransferString from '!raw-loader!./tree-transfer';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 穿梭框

双栏穿梭选择框。

## 何时使用

- 需要在多个可选项中进行多选时。
- 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。

穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。

选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。其中，左边一栏为 \`source\`，右边一栏为 \`target\`，API 的设计也反映了这两个概念。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '穿梭框',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 1,
  title: 'Transfer',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CSearchString}><CSearch /></demo-container>
            <demo-container code={CAdvancedString}><CAdvanced /></demo-container>
            <demo-container code={CCustomDatasourceString}><CCustomDatasource /></demo-container>
            <demo-container code={CTableTransferString}><CTableTransfer /></demo-container>
            <demo-container code={CTreeTransferString}><CTreeTransfer /></demo-container>
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
