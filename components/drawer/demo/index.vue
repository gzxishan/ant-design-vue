<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CSubmitFormInDrawer from './submit-form-in-drawer';
import CSubmitFormInDrawerString from '!raw-loader!./submit-form-in-drawer';
import CMultiLevelDrawer from './multi-level-drawer';
import CMultiLevelDrawerString from '!raw-loader!./multi-level-drawer';
import CCustomPlacement from './custom-placement';
import CCustomPlacementString from '!raw-loader!./custom-placement';
import CPreviewDrawer from './preview-drawer';
import CPreviewDrawerString from '!raw-loader!./preview-drawer';
import CRenderInCurrentDom from './render-in-current-dom';
import CRenderInCurrentDomString from '!raw-loader!./render-in-current-dom';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '抽屉',
  type: 'Feedback',
  zhType: '反馈',
  cols: 2,
  title: 'Drawer',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CSubmitFormInDrawerString}><CSubmitFormInDrawer /></demo-container>

<demo-container code={CMultiLevelDrawerString}><CMultiLevelDrawer /></demo-container>

<demo-container code={CCustomPlacementString}><CCustomPlacement /></demo-container>

<demo-container code={CPreviewDrawerString}><CPreviewDrawer /></demo-container>

<demo-container code={CRenderInCurrentDomString}><CRenderInCurrentDom /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>