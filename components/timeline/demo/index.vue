<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CLastNode from './last-node';
import CLastNodeString from '!raw-loader!./last-node';
import CAlternate from './alternate';
import CAlternateString from '!raw-loader!./alternate';
import CColor from './color';
import CColorString from '!raw-loader!./color';
import CCustom from './custom';
import CCustomString from '!raw-loader!./custom';
import CRightAlternate from './right-alternate';
import CRightAlternateString from '!raw-loader!./right-alternate';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 时间轴

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。代码演示`
};

export default {
  category: 'Components',
  subtitle: '时间轴',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Timeline',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CLastNodeString}><CLastNode /></demo-container>

<demo-container code={CAlternateString}><CAlternate /></demo-container>

<demo-container code={CColorString}><CColor /></demo-container>

<demo-container code={CCustomString}><CCustom /></demo-container>

<demo-container code={CRightAlternateString}><CRightAlternate /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>