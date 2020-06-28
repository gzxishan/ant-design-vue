<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CRadioStyle from './radio-style';
import CRadioStyleString from '!raw-loader!./radio-style';
import CVerticalRadiogroup from './vertical-radiogroup';
import CVerticalRadiogroupString from '!raw-loader!./vertical-radiogroup';
import CRadio_groupWithName from './radio_group-with-name';
import CRadio_groupWithNameString from '!raw-loader!./radio_group-with-name';
import CSize from './size';
import CSizeString from '!raw-loader!./size';
import CDisabled from './disabled';
import CDisabledString from '!raw-loader!./disabled';
import CSolidRadioButton from './solid-radio-button';
import CSolidRadioButtonString from '!raw-loader!./solid-radio-button';
import CRadiogroupGroupOptional from './radiogroup-group---optional';
import CRadiogroupGroupOptionalString from '!raw-loader!./radiogroup-group---optional';
import CRadioGroup from './radio-group';
import CRadioGroupString from '!raw-loader!./radio-group';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。代码演示`
};

export default {
  category: 'Components',
  subtitle: '单选框',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Radio',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CRadioStyleString}><CRadioStyle /></demo-container>

<demo-container code={CVerticalRadiogroupString}><CVerticalRadiogroup /></demo-container>

<demo-container code={CRadio_groupWithNameString}><CRadio_groupWithName /></demo-container>

<demo-container code={CSizeString}><CSize /></demo-container>

<demo-container code={CDisabledString}><CDisabled /></demo-container>

<demo-container code={CSolidRadioButtonString}><CSolidRadioButton /></demo-container>

<demo-container code={CRadiogroupGroupOptionalString}><CRadiogroupGroupOptional /></demo-container>

<demo-container code={CRadioGroupString}><CRadioGroup /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>