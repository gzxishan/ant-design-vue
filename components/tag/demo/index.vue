<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CColorfulTag from './colorful-tag';
import CColorfulTagString from '!raw-loader!./colorful-tag';
import CHotTags from './hot-tags';
import CHotTagsString from '!raw-loader!./hot-tags';
import CCheckable from './checkable';
import CCheckableString from '!raw-loader!./checkable';
import CAdd_RemoveDynamically from './add-_-remove-dynamically';
import CAdd_RemoveDynamicallyString from '!raw-loader!./add-_-remove-dynamically';
import CControlled from './controlled';
import CControlledString from '!raw-loader!./controlled';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 标签 Tag

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '标签',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Tag',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>

<demo-container code={CColorfulTagString}><CColorfulTag /></demo-container>

<demo-container code={CHotTagsString}><CHotTags /></demo-container>

<demo-container code={CCheckableString}><CCheckable /></demo-container>

<demo-container code={CAdd_RemoveDynamicallyString}><CAdd_RemoveDynamically /></demo-container>

<demo-container code={CControlledString}><CControlled /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>