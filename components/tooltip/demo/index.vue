<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CArrowPointingAtTheCenter from './arrow-pointing-at-the-center';
import CArrowPointingAtTheCenterString from '!raw-loader!./arrow-pointing-at-the-center';
import COPlacement from './o-placement';
import COPlacementString from '!raw-loader!./o-placement';
import CAdjustPlacementAutomatically from './adjust-placement-automatically';
import CAdjustPlacementAutomaticallyString from '!raw-loader!./adjust-placement-automatically';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Tooltip

简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 ‘title’ 提示，提供一个’按钮/文字/操作’的文案解释。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '文字提示',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Tooltip',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CArrowPointingAtTheCenterString}><CArrowPointingAtTheCenter /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={COPlacementString}><COPlacement /></demo-container>
            <demo-container code={CAdjustPlacementAutomaticallyString}><CAdjustPlacementAutomatically /></demo-container>
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
