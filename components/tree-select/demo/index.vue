<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CMultipleSelection from './multiple-selection';
import CMultipleSelectionString from '!raw-loader!./multiple-selection';
import CSuffix from './suffix';
import CSuffixString from '!raw-loader!./suffix';
import CCheckable from './checkable';
import CCheckableString from '!raw-loader!./checkable';
import CGenerateFormTreeData from './generate-form-tree-data';
import CGenerateFormTreeDataString from '!raw-loader!./generate-form-tree-data';
import CAsynchronousLoading from './asynchronous-loading';
import CAsynchronousLoadingString from '!raw-loader!./asynchronous-loading';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 树型选择控件

## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '树型选择控件',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'TreeSelect',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CMultipleSelectionString}><CMultipleSelection /></demo-container>

<demo-container code={CSuffixString}><CSuffix /></demo-container>

<demo-container code={CCheckableString}><CCheckable /></demo-container>

<demo-container code={CGenerateFormTreeDataString}><CGenerateFormTreeData /></demo-container>

<demo-container code={CAsynchronousLoadingString}><CAsynchronousLoading /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>