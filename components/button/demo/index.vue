<script>
import CType from './type';
import CTypeString from '!raw-loader!./type';
import CDisabled from './disabled';
import CDisabledString from '!raw-loader!./disabled';
import CIcon from './icon';
import CIconString from '!raw-loader!./icon';
import CMultipleButtons from './multiple-buttons';
import CMultipleButtonsString from '!raw-loader!./multiple-buttons';
import CBlockButton from './block-button';
import CBlockButtonString from '!raw-loader!./block-button';
import CButtonGroup from './button-group';
import CButtonGroupString from '!raw-loader!./button-group';
import CGhostButton from './ghost-button';
import CGhostButtonString from '!raw-loader!./ghost-button';
import CLoading from './loading';
import CLoadingString from '!raw-loader!./loading';
import CSize from './size';
import CSizeString from '!raw-loader!./size';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 组件注册

\`\`\`
import { Button } from 'ant-design-vue';
Vue.use(Button);
\`\`\`

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '按钮',
  type: 'General',
  zhType: '通用',
  cols: 2,
  title: 'Button',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CTypeString}><CType /></demo-container>

<demo-container code={CDisabledString}><CDisabled /></demo-container>

<demo-container code={CIconString}><CIcon /></demo-container>

<demo-container code={CMultipleButtonsString}><CMultipleButtons /></demo-container>

<demo-container code={CBlockButtonString}><CBlockButton /></demo-container>

<demo-container code={CButtonGroupString}><CButtonGroup /></demo-container>

<demo-container code={CGhostButtonString}><CGhostButton /></demo-container>

<demo-container code={CLoadingString}><CLoading /></demo-container>

<demo-container code={CSizeString}><CSize /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>