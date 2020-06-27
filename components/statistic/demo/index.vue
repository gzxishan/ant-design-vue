<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CInCard from './in-card';
import CInCardString from '!raw-loader!./in-card';
import CUnit from './unit';
import CUnitString from '!raw-loader!./unit';
import CCountdown from './countdown';
import CCountdownString from '!raw-loader!./countdown';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Statistic 统计数值

展示统计数值。

## 何时使用

- 当需要突出某个或某组数字时
- 当需要展示带描述的统计类数据时使用

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '统计数值',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Statistic',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CInCardString}><CInCard /></demo-container>

<demo-container code={CUnitString}><CUnit /></demo-container>

<demo-container code={CCountdownString}><CCountdown /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>