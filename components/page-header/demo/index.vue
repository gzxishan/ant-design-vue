<script>
import CBasicPageHeader from './basic-page-header';
import CBasicPageHeaderString from '!raw-loader!./basic-page-header';
import CUseWithBreadcrumbs from './use-with-breadcrumbs';
import CUseWithBreadcrumbsString from '!raw-loader!./use-with-breadcrumbs';
import CVariousFormsOfPageheader from './various-forms-of-pageheader';
import CVariousFormsOfPageheaderString from '!raw-loader!./various-forms-of-pageheader';
import CResponsive from './responsive';
import CResponsiveString from '!raw-loader!./responsive';
import CWhiteBackgroundMode from './white-background-mode';
import CWhiteBackgroundModeString from '!raw-loader!./white-background-mode';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# PageHeader 页头 (版本: 1.5.0+)

页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。

## 何时使用

当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '页头',
  type: 'Navigation',
  zhType: '导航',
  cols: 1,
  title: 'PageHeader',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicPageHeaderString}><CBasicPageHeader /></demo-container>

<demo-container code={CUseWithBreadcrumbsString}><CUseWithBreadcrumbs /></demo-container>

<demo-container code={CVariousFormsOfPageheaderString}><CVariousFormsOfPageheader /></demo-container>

<demo-container code={CResponsiveString}><CResponsive /></demo-container>

<demo-container code={CWhiteBackgroundModeString}><CWhiteBackgroundMode /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>