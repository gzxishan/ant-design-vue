<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CCustomizedStyle from './customized-style';
import CCustomizedStyleString from '!raw-loader!./customized-style';
import CPlacement from './placement';
import CPlacementString from '!raw-loader!./placement';
import CNotificationWithIcon from './notification-with-icon';
import CNotificationWithIconString from '!raw-loader!./notification-with-icon';
import CCustomizedIcon from './customized-icon';
import CCustomizedIconString from '!raw-loader!./customized-icon';
import CDurationAfterWhichTheNotificationBoxIsClosed from './duration-after-which-the-notification-box-is-closed';
import CDurationAfterWhichTheNotificationBoxIsClosedString from '!raw-loader!./duration-after-which-the-notification-box-is-closed';
import CCustomCloseButton from './custom-close-button';
import CCustomCloseButtonString from '!raw-loader!./custom-close-button';
import CUpdateMessageContent from './update-message-content';
import CUpdateMessageContentString from '!raw-loader!./update-message-content';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 通知提醒框

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '通知提醒框',
  type: 'Feedback',
  zhType: '反馈',
  cols: 2,
  title: 'Notification',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CCustomizedStyleString}><CCustomizedStyle /></demo-container>
            <demo-container code={CPlacementString}><CPlacement /></demo-container>
            <demo-container code={CNotificationWithIconString}><CNotificationWithIcon /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CCustomizedIconString}><CCustomizedIcon /></demo-container>
            <demo-container code={CDurationAfterWhichTheNotificationBoxIsClosedString}><CDurationAfterWhichTheNotificationBoxIsClosed /></demo-container>
            <demo-container code={CCustomCloseButtonString}><CCustomCloseButton /></demo-container>
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
