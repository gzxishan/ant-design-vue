<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CDisabledDate_Time from './disabled-date-_-time';
import CDisabledDate_TimeString from '!raw-loader!./disabled-date-_-time';
import CExtraFooter from './extra-footer';
import CExtraFooterString from '!raw-loader!./extra-footer';
import CControlledPanels from './controlled-panels';
import CControlledPanelsString from '!raw-loader!./controlled-panels';
import CThreeSizes from './three-sizes';
import CThreeSizesString from '!raw-loader!./three-sizes';
import CChooseTime from './choose-time';
import CChooseTimeString from '!raw-loader!./choose-time';
import CSuffix from './suffix';
import CSuffixString from '!raw-loader!./suffix';
import CCustomizedDateRendering from './customized-date-rendering';
import CCustomizedDateRenderingString from '!raw-loader!./customized-date-rendering';
import CDisabled from './disabled';
import CDisabledString from '!raw-loader!./disabled';
import CDateFormat from './date-format';
import CDateFormatString from '!raw-loader!./date-format';
import CPresetRanges from './preset-ranges';
import CPresetRangesString from '!raw-loader!./preset-ranges';
import CCustomizedRangePicker from './customized-range-picker';
import CCustomizedRangePickerString from '!raw-loader!./customized-range-picker';
import CCustumTime from './custum-time';
import CCustumTimeString from '!raw-loader!./custum-time';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# DatePicker 日期选择框

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '日期选择框',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'DatePicker',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CDisabledDate_TimeString}><CDisabledDate_Time /></demo-container>

<demo-container code={CExtraFooterString}><CExtraFooter /></demo-container>

<demo-container code={CControlledPanelsString}><CControlledPanels /></demo-container>

<demo-container code={CThreeSizesString}><CThreeSizes /></demo-container>

<demo-container code={CChooseTimeString}><CChooseTime /></demo-container>

<demo-container code={CSuffixString}><CSuffix /></demo-container>

<demo-container code={CCustomizedDateRenderingString}><CCustomizedDateRendering /></demo-container>

<demo-container code={CDisabledString}><CDisabled /></demo-container>

<demo-container code={CDateFormatString}><CDateFormat /></demo-container>

<demo-container code={CPresetRangesString}><CPresetRanges /></demo-container>

<demo-container code={CCustomizedRangePickerString}><CCustomizedRangePicker /></demo-container>

<demo-container code={CCustumTimeString}><CCustumTime /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>