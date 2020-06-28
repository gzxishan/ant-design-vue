<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CMiniVersion from './mini-version';
import CMiniVersionString from '!raw-loader!./mini-version';
import CWithIcon from './with-icon';
import CWithIconString from '!raw-loader!./with-icon';
import CSwitchStep from './switch-step';
import CSwitchStepString from '!raw-loader!./switch-step';
import CVertical from './vertical';
import CVerticalString from '!raw-loader!./vertical';
import CVerticalMiniVersion from './vertical-mini-version';
import CVerticalMiniVersionString from '!raw-loader!./vertical-mini-version';
import CErrorStatus from './error-status';
import CErrorStatusString from '!raw-loader!./error-status';
import CDotStyle from './dot-style';
import CDotStyleString from '!raw-loader!./dot-style';
import CCustomizedDotStyle from './customized-dot-style';
import CCustomizedDotStyleString from '!raw-loader!./customized-dot-style';
import CClickable from './clickable';
import CClickableString from '!raw-loader!./clickable';
import CNavigationSteps from './navigation-steps';
import CNavigationStepsString from '!raw-loader!./navigation-steps';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Steps

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '步骤条',
  type: 'Navigation',
  zhType: '导航',
  cols: 1,
  title: 'Steps',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CMiniVersionString}><CMiniVersion /></demo-container>
            <demo-container code={CWithIconString}><CWithIcon /></demo-container>
            <demo-container code={CSwitchStepString}><CSwitchStep /></demo-container>
            <demo-container code={CVerticalString}><CVertical /></demo-container>
            <demo-container code={CVerticalMiniVersionString}><CVerticalMiniVersion /></demo-container>
            <demo-container code={CErrorStatusString}><CErrorStatus /></demo-container>
            <demo-container code={CDotStyleString}><CDotStyle /></demo-container>
            <demo-container code={CCustomizedDotStyleString}><CCustomizedDotStyle /></demo-container>
            <demo-container code={CClickableString}><CClickable /></demo-container>
            <demo-container code={CNavigationStepsString}><CNavigationSteps /></demo-container>
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
