<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import COverflowCount from './overflow-count';
import COverflowCountString from '!raw-loader!./overflow-count';
import CStatus from './status';
import CStatusString from '!raw-loader!./status';
import CTitle from './title';
import CTitleString from '!raw-loader!./title';
import CStandalone from './standalone';
import CStandaloneString from '!raw-loader!./standalone';
import CDot from './dot';
import CDotString from '!raw-loader!./dot';
import CDynamic from './dynamic';
import CDynamicString from '!raw-loader!./dynamic';
import CColorfulBadge from './colorful-badge';
import CColorfulBadgeString from '!raw-loader!./colorful-badge';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Badge徽标数

图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '徽标数',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Badge',
  render() {
    return (
      <div id="components-badge-demo">
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={COverflowCountString}><COverflowCount /></demo-container>
            <demo-container code={CStatusString}><CStatus /></demo-container>
            <demo-container code={CTitleString}><CTitle /></demo-container>
</a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CStandaloneString}><CStandalone /></demo-container>
            <demo-container code={CDotString}><CDot /></demo-container>
            <demo-container code={CDynamicString}><CDynamic /></demo-container>
            <demo-container code={CColorfulBadgeString}><CColorfulBadge /></demo-container>
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
  #components-badge-demo-dot .anticon-notification[data-v-195a2a3e]{width:16px;height:16px;line-height:16px;font-size:16px}
  #components-badge-demo-title .ant-badge[data-v-6f8b4e4f]:not(.ant-badge-status){margin-right:20px}
  .head-example[data-v-6f8b4e4f]{width:42px;height:42px;border-radius:4px;background:#eee;display:inline-block}
  #components-badge-demo .ant-badge:not(.ant-badge-not-a-wrapper){margin-right:20px}
  #components-badge-demo .head-example{width:42px;height:42px;border-radius:4px;background:#eee;display:inline-block;vertical-align:middle}
  #components-badge-demo .ant-badge-not-a-wrapper:not(.ant-badge-status){margin-right:8px}
</style>
