<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CText_Icon from './text-_-icon';
import CText_IconString from '!raw-loader!./text-_-icon';
import CLoading from './loading';
import CLoadingString from '!raw-loader!./loading';
import CDisabled from './disabled';
import CDisabledString from '!raw-loader!./disabled';
import CTwoSizes from './two-sizes';
import CTwoSizesString from '!raw-loader!./two-sizes';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 \`checkbox\`的区别是，切换 \`switch\` 会直接触发状态改变，而 \`checkbox\` 一般用于状态标记，需要和提交操作配合。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '开关',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Switch',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>

<demo-container code={CText_IconString}><CText_Icon /></demo-container>

<demo-container code={CLoadingString}><CLoading /></demo-container>

<demo-container code={CDisabledString}><CDisabled /></demo-container>

<demo-container code={CTwoSizesString}><CTwoSizes /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>