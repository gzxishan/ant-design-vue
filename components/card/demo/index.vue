<script>
import CBasicCard from './basic-card';
import CBasicCardString from '!raw-loader!./basic-card';
import CCustomizedContent from './customized-content';
import CCustomizedContentString from '!raw-loader!./customized-content';
import CCardInColumn from './card-in-column';
import CCardInColumnString from '!raw-loader!./card-in-column';
import CLoadingCard from './loading-card';
import CLoadingCardString from '!raw-loader!./loading-card';
import CSimpleCard from './simple-card';
import CSimpleCardString from '!raw-loader!./simple-card';
import CNoBorder from './no-border';
import CNoBorderString from '!raw-loader!./no-border';
import CGridCard from './grid-card';
import CGridCardString from '!raw-loader!./grid-card';
import CInnerCard from './inner-card';
import CInnerCardString from '!raw-loader!./inner-card';
import CSupportMoreContentConfiguration from './support-more-content-configuration';
import CSupportMoreContentConfigurationString from '!raw-loader!./support-more-content-configuration';
import CWithTabs from './with-tabs';
import CWithTabsString from '!raw-loader!./with-tabs';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Card 卡片

通用卡片容器

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '卡片',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Card',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicCardString}><CBasicCard /></demo-container>

<demo-container code={CCustomizedContentString}><CCustomizedContent /></demo-container>

<demo-container code={CCardInColumnString}><CCardInColumn /></demo-container>

<demo-container code={CLoadingCardString}><CLoadingCard /></demo-container>

<demo-container code={CSimpleCardString}><CSimpleCard /></demo-container>

<demo-container code={CNoBorderString}><CNoBorder /></demo-container>

<demo-container code={CGridCardString}><CGridCard /></demo-container>

<demo-container code={CInnerCardString}><CInnerCard /></demo-container>

<demo-container code={CSupportMoreContentConfigurationString}><CSupportMoreContentConfiguration /></demo-container>

<demo-container code={CWithTabsString}><CWithTabs /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>