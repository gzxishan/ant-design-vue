<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CTarget from './target';
import CTargetString from '!raw-loader!./target';
import CCallback from './callback';
import CCallbackString from '!raw-loader!./callback';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Affix 固钉

将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '固钉',
  type: 'Navigation',
  zhType: '导航',
  cols: 2,
  title: 'Affix',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CTargetString}><CTarget /></demo-container>
</a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CCallbackString}><CCallback /></demo-container>
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
