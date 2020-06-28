<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CDisabled from './disabled';
import CDisabledString from '!raw-loader!./disabled';
import CCheckboxGroup from './checkbox-group';
import CCheckboxGroupString from '!raw-loader!./checkbox-group';
import CCheckAll from './check-all';
import CCheckAllString from '!raw-loader!./check-all';
import CControlledCheckbox from './controlled-checkbox';
import CControlledCheckboxString from '!raw-loader!./controlled-checkbox';
import CUseWithGrid from './use-with-grid';
import CUseWithGridString from '!raw-loader!./use-with-grid';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Checkbox多选框

多选框

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。代码演示`
};

export default {
  category: 'Components',
  subtitle: '多选框',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Checkbox',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CDisabledString}><CDisabled /></demo-container>
            <demo-container code={CCheckboxGroupString}><CCheckboxGroup /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CCheckAllString}><CCheckAll /></demo-container>
            <demo-container code={CControlledCheckboxString}><CControlledCheckbox /></demo-container>
            <demo-container code={CUseWithGridString}><CUseWithGrid /></demo-container>
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
