<script>
import CCollapse from './collapse';
import CCollapseString from '!raw-loader!./collapse';
import CAccordion from './accordion';
import CAccordionString from '!raw-loader!./accordion';
import CNestedPanel from './nested-panel';
import CNestedPanelString from '!raw-loader!./nested-panel';
import CBorderless from './borderless';
import CBorderlessString from '!raw-loader!./borderless';
import CCustomPanel from './custom-panel';
import CCustomPanelString from '!raw-loader!./custom-panel';
import CNoArrow from './no-arrow';
import CNoArrowString from '!raw-loader!./no-arrow';
import CExtraNode from './extra-node';
import CExtraNodeString from '!raw-loader!./extra-node';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Collapse折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- ‘手风琴’ 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '折叠面板',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'Collapse',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CCollapseString}><CCollapse /></demo-container>

<demo-container code={CAccordionString}><CAccordion /></demo-container>

<demo-container code={CNestedPanelString}><CNestedPanel /></demo-container>

<demo-container code={CBorderlessString}><CBorderless /></demo-container>

<demo-container code={CCustomPanelString}><CCustomPanel /></demo-container>

<demo-container code={CNoArrowString}><CNoArrow /></demo-container>

<demo-container code={CExtraNodeString}><CExtraNode /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>