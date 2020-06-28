<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CPosition from './position';
import CPositionString from '!raw-loader!./position';
import CFadeIn from './fade-in';
import CFadeInString from '!raw-loader!./fade-in';
import CScrollAutomatically from './scroll-automatically';
import CScrollAutomaticallyString from '!raw-loader!./scroll-automatically';
import CCustomPaging from './custom-paging';
import CCustomPagingString from '!raw-loader!./custom-paging';
import CCustomArrows from './custom-arrows';
import CCustomArrowsString from '!raw-loader!./custom-arrows';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。代码演示`
};

export default {
  category: 'Components',
  subtitle: '走马灯',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'Carousel',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CPositionString}><CPosition /></demo-container>
            <demo-container code={CFadeInString}><CFadeIn /></demo-container>
            <demo-container code={CScrollAutomaticallyString}><CScrollAutomatically /></demo-container>
            <demo-container code={CCustomPagingString}><CCustomPaging /></demo-container>
            <demo-container code={CCustomArrowsString}><CCustomArrows /></demo-container>
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
