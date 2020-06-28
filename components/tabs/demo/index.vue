<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CDisabled from './disabled';
import CDisabledString from '!raw-loader!./disabled';
import CIcon from './icon';
import CIconString from '!raw-loader!./icon';
import CSlide from './slide';
import CSlideString from '!raw-loader!./slide';
import CExtraContent from './extra-content';
import CExtraContentString from '!raw-loader!./extra-content';
import CSize from './size';
import CSizeString from '!raw-loader!./size';
import CPosition from './position';
import CPositionString from '!raw-loader!./position';
import CCardTypeTab from './card-type-tab';
import CCardTypeTabString from '!raw-loader!./card-type-tab';
import CAdd_CloseTab from './add-_-close-tab';
import CAdd_CloseTabString from '!raw-loader!./add-_-close-tab';
import CContainerOfCardTypeTab from './container-of-card-type-tab';
import CContainerOfCardTypeTabString from '!raw-loader!./container-of-card-type-tab';
import CCustomizedTriggerOfNewTab from './customized-trigger-of-new-tab';
import CCustomizedTriggerOfNewTabString from '!raw-loader!./customized-trigger-of-new-tab';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Tabs 标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- [RadioButton](/ant-design/components/radio-cn/) 可作为更次级的页签来使用。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '标签页',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'Tabs',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>
            <demo-container code={CDisabledString}><CDisabled /></demo-container>
            <demo-container code={CIconString}><CIcon /></demo-container>
            <demo-container code={CSlideString}><CSlide /></demo-container>
            <demo-container code={CExtraContentString}><CExtraContent /></demo-container>
            <demo-container code={CSizeString}><CSize /></demo-container>
            <demo-container code={CPositionString}><CPosition /></demo-container>
            <demo-container code={CCardTypeTabString}><CCardTypeTab /></demo-container>
            <demo-container code={CAdd_CloseTabString}><CAdd_CloseTab /></demo-container>
            <demo-container code={CContainerOfCardTypeTabString}><CContainerOfCardTypeTab /></demo-container>
            <demo-container code={CCustomizedTriggerOfNewTabString}><CCustomizedTriggerOfNewTab /></demo-container>
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
