<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CSliderWithIcon from './slider-with-icon';
import CSliderWithIconString from '!raw-loader!./slider-with-icon';
import CEvent from './event';
import CEventString from '!raw-loader!./event';
import CVertical from './vertical';
import CVerticalString from '!raw-loader!./vertical';
import CReverse from './reverse';
import CReverseString from '!raw-loader!./reverse';
import CSliderWithInputnumber from './slider-with-inputnumber';
import CSliderWithInputnumberString from '!raw-loader!./slider-with-inputnumber';
import CCustomizeTooltip from './customize-tooltip';
import CCustomizeTooltipString from '!raw-loader!./customize-tooltip';
import CMark from './mark';
import CMarkString from '!raw-loader!./mark';
import CControlVisibleOfTooltip from './control-visible-of-tooltip';
import CControlVisibleOfTooltipString from '!raw-loader!./control-visible-of-tooltip';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

## 何时使用

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '滑动输入条',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Slider',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CSliderWithIconString}><CSliderWithIcon /></demo-container>

<demo-container code={CEventString}><CEvent /></demo-container>

<demo-container code={CVerticalString}><CVertical /></demo-container>

<demo-container code={CReverseString}><CReverse /></demo-container>

<demo-container code={CSliderWithInputnumberString}><CSliderWithInputnumber /></demo-container>

<demo-container code={CCustomizeTooltipString}><CCustomizeTooltip /></demo-container>

<demo-container code={CMarkString}><CMark /></demo-container>

<demo-container code={CControlVisibleOfTooltipString}><CControlVisibleOfTooltip /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>