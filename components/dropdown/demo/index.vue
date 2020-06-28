<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CButtonWithDropdownMenu from './button-with-dropdown-menu';
import CButtonWithDropdownMenuString from '!raw-loader!./button-with-dropdown-menu';
import COtherElements from './other-elements';
import COtherElementsString from '!raw-loader!./other-elements';
import CPlacement from './placement';
import CPlacementString from '!raw-loader!./placement';
import CTriggerMode from './trigger-mode';
import CTriggerModeString from '!raw-loader!./trigger-mode';
import CContextMenu from './context-menu';
import CContextMenuString from '!raw-loader!./context-menu';
import CClickEvent from './click-event';
import CClickEventString from '!raw-loader!./click-event';
import CTheWayOfHidingMenu_ from './the-way-of-hiding-menu_';
import CTheWayOfHidingMenu_String from '!raw-loader!./the-way-of-hiding-menu_';
import CCascadingMenu from './cascading-menu';
import CCascadingMenuString from '!raw-loader!./cascading-menu';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 下拉菜单

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '下拉菜单',
  type: 'Navigation',
  zhType: '导航',
  cols: 2,
  title: 'Dropdown',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CButtonWithDropdownMenuString}><CButtonWithDropdownMenu /></demo-container>
            <demo-container code={COtherElementsString}><COtherElements /></demo-container>
            <demo-container code={CPlacementString}><CPlacement /></demo-container>
            <demo-container code={CTriggerModeString}><CTriggerMode /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CContextMenuString}><CContextMenu /></demo-container>
            <demo-container code={CClickEventString}><CClickEvent /></demo-container>
            <demo-container code={CTheWayOfHidingMenu_String}><CTheWayOfHidingMenu_ /></demo-container>
            <demo-container code={CCascadingMenuString}><CCascadingMenu /></demo-container>
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
