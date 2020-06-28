<script>
import C12Hours from './12-hours';
import C12HoursString from '!raw-loader!./12-hours';
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CHourAndMinute from './hour-and-minute';
import CHourAndMinuteString from '!raw-loader!./hour-and-minute';
import CThreeSizes from './three-sizes';
import CThreeSizesString from '!raw-loader!./three-sizes';
import CSuffix from './suffix';
import CSuffixString from '!raw-loader!./suffix';
import CAddon from './addon';
import CAddonString from '!raw-loader!./addon';
import CDisabled from './disabled';
import CDisabledString from '!raw-loader!./disabled';
import CIntervalOption from './interval-option';
import CIntervalOptionString from '!raw-loader!./interval-option';
import CUnderControl from './under-control';
import CUnderControlString from '!raw-loader!./under-control';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# TimePicker 时间选择框

输入或选择时间的控件。

## 何时使用

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '时间选择框',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'TimePicker',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={C12HoursString}><C12Hours /></demo-container>
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CHourAndMinuteString}><CHourAndMinute /></demo-container>
            <demo-container code={CThreeSizesString}><CThreeSizes /></demo-container>
            <demo-container code={CSuffixString}><CSuffix /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CAddonString}><CAddon /></demo-container>
            <demo-container code={CDisabledString}><CDisabled /></demo-container>
            <demo-container code={CIntervalOptionString}><CIntervalOption /></demo-container>
            <demo-container code={CUnderControlString}><CUnderControl /></demo-container>
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
