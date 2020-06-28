<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CInsideAContainer from './inside-a-container';
import CInsideAContainerString from '!raw-loader!./inside-a-container';
import CCustomizedDescription from './customized-description';
import CCustomizedDescriptionString from '!raw-loader!./customized-description';
import CCustomSpinningIndicator from './custom-spinning-indicator';
import CCustomSpinningIndicatorString from '!raw-loader!./custom-spinning-indicator';
import CSize from './size';
import CSizeString from '!raw-loader!./size';
import CEmbeddedMode from './embedded-mode';
import CEmbeddedModeString from '!raw-loader!./embedded-mode';
import CDelay from './delay';
import CDelayString from '!raw-loader!./delay';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '加载中',
  type: 'Feedback',
  zhType: '反馈',
  cols: 2,
  title: 'Spin',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
		<a-row style="margin-left: -8px;margin-right: -8px;">
		  <a-col span={12} class="code-boxes-col-2-1">
			<demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>
			<demo-container code={CInsideAContainerString}><CInsideAContainer /></demo-container>
			<demo-container code={CCustomizedDescriptionString}><CCustomizedDescription /></demo-container>
			<demo-container code={CCustomSpinningIndicatorString}><CCustomSpinningIndicator /></demo-container>
		  </a-col>
		  <a-col span={12} class="code-boxes-col-2-1">
        <demo-container code={CSizeString}><CSize /></demo-container>
        <demo-container code={CEmbeddedModeString}><CEmbeddedMode /></demo-container>
        <demo-container code={CDelayString}><CDelay /></demo-container>
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
