<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CTags from './tags';
import CTagsString from '!raw-loader!./tags';
import CGetValueOfSelectedItem from './get-value-of-selected-item';
import CGetValueOfSelectedItemString from '!raw-loader!./get-value-of-selected-item';
import CCoordinate from './coordinate';
import CCoordinateString from '!raw-loader!./coordinate';
import CSearchBox from './search-box';
import CSearchBoxString from '!raw-loader!./search-box';
import CSearchAndSelectUsers from './search-and-select-users';
import CSearchAndSelectUsersString from '!raw-loader!./search-and-select-users';
import CHideAlreadySelected from './hide-already-selected';
import CHideAlreadySelectedString from '!raw-loader!./hide-already-selected';
import CCustomSelectionRender from './custom-selection-render';
import CCustomSelectionRenderString from '!raw-loader!./custom-selection-render';
import CSizes from './sizes';
import CSizesString from '!raw-loader!./sizes';
import CAutomaticTokenization from './automatic-tokenization';
import CAutomaticTokenizationString from '!raw-loader!./automatic-tokenization';
import CMultipleSelection from './multiple-selection';
import CMultipleSelectionString from '!raw-loader!./multiple-selection';
import COptionGroup from './option-group';
import COptionGroupString from '!raw-loader!./option-group';
import CSelectWithSearchField from './select-with-search-field';
import CSelectWithSearchFieldString from '!raw-loader!./select-with-search-field';
import CSuffix from './suffix';
import CSuffixString from '!raw-loader!./suffix';
import CCustomDropdown from './custom-dropdown';
import CCustomDropdownString from '!raw-loader!./custom-dropdown';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Select 选择器

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/ant-design/components/radio-cn/) 是更好的选择。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '选择器',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Select',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>

<demo-container code={CTagsString}><CTags /></demo-container>

<demo-container code={CGetValueOfSelectedItemString}><CGetValueOfSelectedItem /></demo-container>

<demo-container code={CCoordinateString}><CCoordinate /></demo-container>

<demo-container code={CSearchBoxString}><CSearchBox /></demo-container>

<demo-container code={CSearchAndSelectUsersString}><CSearchAndSelectUsers /></demo-container>

<demo-container code={CHideAlreadySelectedString}><CHideAlreadySelected /></demo-container>

<demo-container code={CCustomSelectionRenderString}><CCustomSelectionRender /></demo-container>

<demo-container code={CSizesString}><CSizes /></demo-container>

<demo-container code={CAutomaticTokenizationString}><CAutomaticTokenization /></demo-container>

<demo-container code={CMultipleSelectionString}><CMultipleSelection /></demo-container>

<demo-container code={COptionGroupString}><COptionGroup /></demo-container>

<demo-container code={CSelectWithSearchFieldString}><CSelectWithSearchField /></demo-container>

<demo-container code={CSuffixString}><CSuffix /></demo-container>

<demo-container code={CCustomDropdownString}><CCustomDropdown /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>