<script>
import CProgressBar from './progress-bar';
import CProgressBarString from '!raw-loader!./progress-bar';
import CMiniSizeProgressBar from './mini-size-progress-bar';
import CMiniSizeProgressBarString from '!raw-loader!./mini-size-progress-bar';
import CDynamicCircularProgressBar from './dynamic-circular-progress-bar';
import CDynamicCircularProgressBarString from '!raw-loader!./dynamic-circular-progress-bar';
import CDynamic from './dynamic';
import CDynamicString from '!raw-loader!./dynamic';
import CProgressBarWithSuccessSegment from './progress-bar-with-success-segment';
import CProgressBarWithSuccessSegmentString from '!raw-loader!./progress-bar-with-success-segment';
import CCustomLineGradient from './custom-line-gradient';
import CCustomLineGradientString from '!raw-loader!./custom-line-gradient';
import CCircularProgressBar from './circular-progress-bar';
import CCircularProgressBarString from '!raw-loader!./circular-progress-bar';
import CMiniSizeCircularProgressBar from './mini-size-circular-progress-bar';
import CMiniSizeCircularProgressBarString from '!raw-loader!./mini-size-circular-progress-bar';
import CCustomTextFormat from './custom-text-format';
import CCustomTextFormatString from '!raw-loader!./custom-text-format';
import CDashboard from './dashboard';
import CDashboardString from '!raw-loader!./dashboard';
import CSquareLinecaps from './square-linecaps';
import CSquareLinecapsString from '!raw-loader!./square-linecaps';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。代码演示`
};

export default {
  category: 'Components',
  subtitle: '进度条',
  type: 'Feedback',
  zhType: '反馈',
  cols: 2,
  title: 'Progress',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CProgressBarString}><CProgressBar /></demo-container>

<demo-container code={CMiniSizeProgressBarString}><CMiniSizeProgressBar /></demo-container>

<demo-container code={CDynamicCircularProgressBarString}><CDynamicCircularProgressBar /></demo-container>

<demo-container code={CDynamicString}><CDynamic /></demo-container>

<demo-container code={CProgressBarWithSuccessSegmentString}><CProgressBarWithSuccessSegment /></demo-container>

<demo-container code={CCustomLineGradientString}><CCustomLineGradient /></demo-container>

<demo-container code={CCircularProgressBarString}><CCircularProgressBar /></demo-container>

<demo-container code={CMiniSizeCircularProgressBarString}><CMiniSizeCircularProgressBar /></demo-container>

<demo-container code={CCustomTextFormatString}><CCustomTextFormat /></demo-container>

<demo-container code={CDashboardString}><CDashboard /></demo-container>

<demo-container code={CSquareLinecapsString}><CSquareLinecaps /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>