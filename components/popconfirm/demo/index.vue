<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import COPlacement from './o-placement';
import COPlacementString from '!raw-loader!./o-placement';
import CCustomizeIcon from './customize-icon';
import CCustomizeIconString from '!raw-loader!./customize-icon';
import CLocaleText from './locale-text';
import CLocaleTextString from '!raw-loader!./locale-text';
import CConditionalTrigger from './conditional-trigger';
import CConditionalTriggerString from '!raw-loader!./conditional-trigger';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Popconfirm

点击元素，弹出气泡式的确认框。

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 ‘confirm’ 弹出的全屏居中模态对话框相比，交互形式更轻量。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '气泡确认框',
  type: 'Feedback',
  zhType: '反馈',
  cols: 2,
  title: 'Popconfirm',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={COPlacementString}><COPlacement /></demo-container>
            <demo-container code={CCustomizeIconString}><CCustomizeIcon /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CLocaleTextString}><CLocaleText /></demo-container>
            <demo-container code={CConditionalTriggerString}><CConditionalTrigger /></demo-container>
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
