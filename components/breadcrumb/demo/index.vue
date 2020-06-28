<script>
import CBasicUsage from './basic-usage-';
import CBasicUsageString from '!raw-loader!./basic-usage-';
import CConfiguringTheSeparator from './configuring-the-separator';
import CConfiguringTheSeparatorString from '!raw-loader!./configuring-the-separator';
import CConfiguringTheSeparator_1 from './configuring-the-separator_1';
import CConfiguringTheSeparator_1String from '!raw-loader!./configuring-the-separator_1';
import CWithAnIcon from './with-an-icon';
import CWithAnIconString from '!raw-loader!./with-an-icon';
import CVueRouterIntegration from './vue-router-integration';
import CVueRouterIntegrationString from '!raw-loader!./vue-router-integration';
import CBreadCrumbsWithDropDownMenu from './bread-crumbs-with-drop-down-menu';
import CBreadCrumbsWithDropDownMenuString from '!raw-loader!./bread-crumbs-with-drop-down-menu';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Breadcrumb面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。代码演示`
};

export default {
  category: 'Components',
  subtitle: '面包屑',
  type: 'Navigation',
  zhType: '导航',
  cols: 2,
  title: 'Breadcrumb',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>
            <demo-container code={CConfiguringTheSeparatorString}><CConfiguringTheSeparator /></demo-container>
            <demo-container code={CConfiguringTheSeparator_1String}><CConfiguringTheSeparator_1 /></demo-container>
</a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CWithAnIconString}><CWithAnIcon /></demo-container>
            <demo-container code={CVueRouterIntegrationString}><CVueRouterIntegration /></demo-container>
            <demo-container code={CBreadCrumbsWithDropDownMenuString}><CBreadCrumbsWithDropDownMenu /></demo-container>
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
