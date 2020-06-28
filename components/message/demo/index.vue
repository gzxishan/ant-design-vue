<script>
import CNormalPrompt from './normal-prompt';
import CNormalPromptString from '!raw-loader!./normal-prompt';
import CMessageWithLoadingIndicator from './message-with-loading-indicator';
import CMessageWithLoadingIndicatorString from '!raw-loader!./message-with-loading-indicator';
import CPromiseInterface from './promise-interface';
import CPromiseInterfaceString from '!raw-loader!./promise-interface';
import CCustomizeDuration from './customize-duration';
import CCustomizeDurationString from '!raw-loader!./customize-duration';
import COtherTypesOfMessage from './other-types-of-message';
import COtherTypesOfMessageString from '!raw-loader!./other-types-of-message';
import CUpdateMessageContent from './update-message-content';
import CUpdateMessageContentString from '!raw-loader!./update-message-content';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '全局提示',
  type: 'Feedback',
  zhType: '反馈',
  cols: 2,
  title: 'Message',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CNormalPromptString}><CNormalPrompt /></demo-container>
            <demo-container code={CMessageWithLoadingIndicatorString}><CMessageWithLoadingIndicator /></demo-container>
            <demo-container code={CPromiseInterfaceString}><CPromiseInterface /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CCustomizeDurationString}><CCustomizeDuration /></demo-container>
            <demo-container code={COtherTypesOfMessageString}><COtherTypesOfMessage /></demo-container>
            <demo-container code={CUpdateMessageContentString}><CUpdateMessageContent /></demo-container>
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
