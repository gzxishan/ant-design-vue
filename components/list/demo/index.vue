<script>
import CBasicList from './basic-list';
import CBasicListString from '!raw-loader!./basic-list';
import CGrid from './grid';
import CGridString from '!raw-loader!./grid';
import CLoadMore from './load-more';
import CLoadMoreString from '!raw-loader!./load-more';
import CResponsiveGridList from './responsive-grid-list';
import CResponsiveGridListString from '!raw-loader!./responsive-grid-list';
import CSimpleList from './simple-list';
import CSimpleListString from '!raw-loader!./simple-list';
import CVertical from './vertical';
import CVerticalString from '!raw-loader!./vertical';
import CScrollingLoaded from './scrolling-loaded';
import CScrollingLoadedString from '!raw-loader!./scrolling-loaded';
import CInfinite_Virtualized from './infinite-_-virtualized';
import CInfinite_VirtualizedString from '!raw-loader!./infinite-_-virtualized';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 列表

通用列表。

## 何时使用

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '列表',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'List',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CBasicListString}><CBasicList /></demo-container>
            <demo-container code={CGridString}><CGrid /></demo-container>
            <demo-container code={CLoadMoreString}><CLoadMore /></demo-container>
            <demo-container code={CResponsiveGridListString}><CResponsiveGridList /></demo-container>
            <demo-container code={CSimpleListString}><CSimpleList /></demo-container>
            <demo-container code={CVerticalString}><CVertical /></demo-container>
            <demo-container code={CScrollingLoadedString}><CScrollingLoaded /></demo-container>
            <demo-container code={CInfinite_VirtualizedString}><CInfinite_Virtualized /></demo-container>
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
