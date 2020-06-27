<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CComplexCombination from './complex-combination';
import CComplexCombinationString from '!raw-loader!./complex-combination';
import CActiveAnimation from './active-animation';
import CActiveAnimationString from '!raw-loader!./active-animation';
import CContainsSubComponent from './contains-sub-component';
import CContainsSubComponentString from '!raw-loader!./contains-sub-component';
import CList from './list';
import CListString from '!raw-loader!./list';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 加载占位图

在需要等待加载内容的位置提供一个占位图。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '骨架屏',
  type: 'Feedback',
  zhType: '反馈',
  cols: 1,
  title: 'Skeleton',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CComplexCombinationString}><CComplexCombination /></demo-container>

<demo-container code={CActiveAnimationString}><CActiveAnimation /></demo-container>

<demo-container code={CContainsSubComponentString}><CContainsSubComponent /></demo-container>

<demo-container code={CListString}><CList /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>