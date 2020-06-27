<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CCustomizeInputComponent from './customize-input-component';
import CCustomizeInputComponentString from '!raw-loader!./customize-input-component';
import CCustomized from './customized';
import CCustomizedString from '!raw-loader!./customized';
import CLookupPatternsCertainCategory from './lookup-patterns---certain-category';
import CLookupPatternsCertainCategoryString from '!raw-loader!./lookup-patterns---certain-category';
import CNonCaseSensitiveAutocomplete from './non-case-sensitive-autocomplete';
import CNonCaseSensitiveAutocompleteString from '!raw-loader!./non-case-sensitive-autocomplete';
import CLookupPatternsUncertainCategory from './lookup-patterns---uncertain-category';
import CLookupPatternsUncertainCategoryString from '!raw-loader!./lookup-patterns---uncertain-category';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# AutoComplete 自动完成

输入框自动完成功能。

## 何时使用

需要自动完成时。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '自动完成',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'AutoComplete',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>

<demo-container code={CCustomizeInputComponentString}><CCustomizeInputComponent /></demo-container>

<demo-container code={CCustomizedString}><CCustomized /></demo-container>

<demo-container code={CLookupPatternsCertainCategoryString}><CLookupPatternsCertainCategory /></demo-container>

<demo-container code={CNonCaseSensitiveAutocompleteString}><CNonCaseSensitiveAutocomplete /></demo-container>

<demo-container code={CLookupPatternsUncertainCategoryString}><CLookupPatternsUncertainCategory /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>