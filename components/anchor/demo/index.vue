<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CCustomizeTheClickEvent from './customize-the-click-event';
import CCustomizeTheClickEventString from '!raw-loader!./customize-the-click-event';
import CListeningForAnchorLinkChange from './listening-for-anchor-link-change';
import CListeningForAnchorLinkChangeString from '!raw-loader!./listening-for-anchor-link-change';
import CStatic from './static';
import CStaticString from '!raw-loader!./static';
import CCustomizeTheAnchorHighlight from './customize-the-anchor-highlight';
import CCustomizeTheAnchorHighlightString from '!raw-loader!./customize-the-anchor-highlight';
import CSetAnchorScrollOffset from './set-anchor-scroll-offset';
import CSetAnchorScrollOffsetString from '!raw-loader!./set-anchor-scroll-offset';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Anchor 锚点

用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '锚点',
  type: 'Other',
  zhType: '其他',
  cols: 2,
  title: 'Anchor',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CCustomizeTheClickEventString}><CCustomizeTheClickEvent /></demo-container>
            <demo-container code={CListeningForAnchorLinkChangeString}><CListeningForAnchorLinkChange /></demo-container>
</a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CStaticString}><CStatic /></demo-container>
            <demo-container code={CCustomizeTheAnchorHighlightString}><CCustomizeTheAnchorHighlight /></demo-container>
            <demo-container code={CSetAnchorScrollOffsetString}><CSetAnchorScrollOffset /></demo-container>
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
