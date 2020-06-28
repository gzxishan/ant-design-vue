<script>
import Banner from './banner';
import Basic from './basic';
import Closable from './closable';
import CloseText from './close-text';
import Description from './description';
import Icon from './icon';
import Style from './style';
import SmoothClosed from './smooth-closed';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
const md = {
  cn: `# Alert 警告提示
          警告提示，展现需要关注的信息。
## 何时使用
- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
          ## 代码演示`,
  us: `# Alert
          Alert component for feedback.
## When To Use
- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.
## Examples
`,
};
export default {
  category: 'Components',
  subtitle: '警告提示',
  type: 'Feedback',
  zhType: '反馈',
  cols:2,
  title: 'Alert',
  render() {
    return (
      <div id="components-alert-demo">
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <Banner />
            <Basic />
            <Closable />
            <CloseText />
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <Description />
            <Icon />
            <Style />
            <SmoothClosed />
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
<style>
#components-alert-demo .ant-alert {
  margin-bottom: 16px;
}
</style>
