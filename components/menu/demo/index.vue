<script>
import CTopNavigation from './top-navigation';
import CTopNavigationString from '!raw-loader!./top-navigation';
import CInlineMenu from './inline-menu';
import CInlineMenuString from '!raw-loader!./inline-menu';
import CCollapsedInlineMenu from './collapsed-inline-menu';
import CCollapsedInlineMenuString from '!raw-loader!./collapsed-inline-menu';
import COpenCurrentSubmenuOnly from './open-current-submenu-only';
import COpenCurrentSubmenuOnlyString from '!raw-loader!./open-current-submenu-only';
import CVerticalMenu from './vertical-menu';
import CVerticalMenuString from '!raw-loader!./vertical-menu';
import CMenuThemes from './menu-themes';
import CMenuThemesString from '!raw-loader!./menu-themes';
import CSwitchTheMenuType from './switch-the-menu-type';
import CSwitchTheMenuTypeString from '!raw-loader!./switch-the-menu-type';
import CSingleFileRecursiveMenu from './single-file-recursive-menu';
import CSingleFileRecursiveMenuString from '!raw-loader!./single-file-recursive-menu';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '导航菜单',
  type: 'Navigation',
  zhType: '导航',
  cols: 1,
  title: 'Menu',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CTopNavigationString}><CTopNavigation /></demo-container>
            <demo-container code={CInlineMenuString}><CInlineMenu /></demo-container>
            <demo-container code={CCollapsedInlineMenuString}><CCollapsedInlineMenu /></demo-container>
            <demo-container code={COpenCurrentSubmenuOnlyString}><COpenCurrentSubmenuOnly /></demo-container>
            <demo-container code={CVerticalMenuString}><CVerticalMenu /></demo-container>
            <demo-container code={CMenuThemesString}><CMenuThemes /></demo-container>
            <demo-container code={CSwitchTheMenuTypeString}><CSwitchTheMenuType /></demo-container>
            <demo-container code={CSingleFileRecursiveMenuString}><CSingleFileRecursiveMenu /></demo-container>
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
