<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CPrefixAndSuffix from './prefix-and-suffix';
import CPrefixAndSuffixString from '!raw-loader!./prefix-and-suffix';
import CSearchBoxWithLoading from './search-box-with-loading';
import CSearchBoxWithLoadingString from '!raw-loader!./search-box-with-loading';
import CInputGroup from './input-group';
import CInputGroupString from '!raw-loader!./input-group';
import CPre_PostTab from './pre-_-post-tab';
import CPre_PostTabString from '!raw-loader!./pre-_-post-tab';
import CWithClearIcon from './with-clear-icon';
import CWithClearIconString from '!raw-loader!./with-clear-icon';
import CAutosizingTheHeightToFitTheContent from './autosizing-the-height-to-fit-the-content';
import CAutosizingTheHeightToFitTheContentString from '!raw-loader!./autosizing-the-height-to-fit-the-content';
import CSearchBox from './search-box';
import CSearchBoxString from '!raw-loader!./search-box';
import CThreeSizesOfInput from './three-sizes-of-input';
import CThreeSizesOfInputString from '!raw-loader!./three-sizes-of-input';
import CTextarea from './textarea';
import CTextareaString from '!raw-loader!./textarea';
import CFormatTooltipInput from './format-tooltip-input';
import CFormatTooltipInputString from '!raw-loader!./format-tooltip-input';
import CPasswordBox from './password-box';
import CPasswordBoxString from '!raw-loader!./password-box';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。代码演示`
};

export default {
  category: 'Components',
  subtitle: '输入框',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Input',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>

<demo-container code={CPrefixAndSuffixString}><CPrefixAndSuffix /></demo-container>

<demo-container code={CSearchBoxWithLoadingString}><CSearchBoxWithLoading /></demo-container>

<demo-container code={CInputGroupString}><CInputGroup /></demo-container>

<demo-container code={CPre_PostTabString}><CPre_PostTab /></demo-container>

<demo-container code={CWithClearIconString}><CWithClearIcon /></demo-container>

<demo-container code={CAutosizingTheHeightToFitTheContentString}><CAutosizingTheHeightToFitTheContent /></demo-container>

<demo-container code={CSearchBoxString}><CSearchBox /></demo-container>

<demo-container code={CThreeSizesOfInputString}><CThreeSizesOfInput /></demo-container>

<demo-container code={CTextareaString}><CTextarea /></demo-container>

<demo-container code={CFormatTooltipInputString}><CFormatTooltipInput /></demo-container>

<demo-container code={CPasswordBoxString}><CPasswordBox /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>