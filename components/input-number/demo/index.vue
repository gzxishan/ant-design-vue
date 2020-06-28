<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CDisabled from './disabled';
import CDisabledString from '!raw-loader!./disabled';
import CFormatter from './formatter';
import CFormatterString from '!raw-loader!./formatter';
import CSizes from './sizes';
import CSizesString from '!raw-loader!./sizes';
import CDecimals from './decimals';
import CDecimalsString from '!raw-loader!./decimals';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '数字输入框',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'InputNumber',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CDisabledString}><CDisabled /></demo-container>
            <demo-container code={CFormatterString}><CFormatter /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CSizesString}><CSizes /></demo-container>
            <demo-container code={CDecimalsString}><CDecimals /></demo-container>
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
