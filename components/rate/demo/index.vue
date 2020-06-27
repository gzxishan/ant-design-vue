<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CShowCopywriting from './show-copywriting';
import CShowCopywritingString from '!raw-loader!./show-copywriting';
import CClearStar from './clear-star';
import CClearStarString from '!raw-loader!./clear-star';
import CHalfStar from './half-star';
import CHalfStarString from '!raw-loader!./half-star';
import CReadOnly from './read-only';
import CReadOnlyString from '!raw-loader!./read-only';
import COtherCharacter from './other-character';
import COtherCharacterString from '!raw-loader!./other-character';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Rate

评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。代码演示`
};

export default {
  category: 'Components',
  subtitle: '评分',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Rate',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CShowCopywritingString}><CShowCopywriting /></demo-container>

<demo-container code={CClearStarString}><CClearStar /></demo-container>

<demo-container code={CHalfStarString}><CHalfStar /></demo-container>

<demo-container code={CReadOnlyString}><CReadOnly /></demo-container>

<demo-container code={COtherCharacterString}><COtherCharacter /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>