<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CControllingTheCloseOfTheDialog from './controlling-the-close-of-the-dialog';
import CControllingTheCloseOfTheDialogString from '!raw-loader!./controlling-the-close-of-the-dialog';
import CThreeWaysToTrigger from './three-ways-to-trigger';
import CThreeWaysToTriggerString from '!raw-loader!./three-ways-to-trigger';
import CArrowPointing from './arrow-pointing';
import CArrowPointingString from '!raw-loader!./arrow-pointing';
import CPlacement from './placement';
import CPlacementString from '!raw-loader!./placement';
import CHoverWithClickPopover from './hover-with-click-popover';
import CHoverWithClickPopoverString from '!raw-loader!./hover-with-click-popover';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Popover

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 \`Tooltip\` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '气泡卡片',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Popover',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CControllingTheCloseOfTheDialogString}><CControllingTheCloseOfTheDialog /></demo-container>
            <demo-container code={CThreeWaysToTriggerString}><CThreeWaysToTrigger /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CArrowPointingString}><CArrowPointing /></demo-container>
            <demo-container code={CPlacementString}><CPlacement /></demo-container>
            <demo-container code={CHoverWithClickPopoverString}><CHoverWithClickPopover /></demo-container>
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
