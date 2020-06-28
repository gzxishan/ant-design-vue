<script>
import CSuccess from './success';
import CSuccessString from '!raw-loader!./success';
import CWarning from './warning';
import CWarningString from '!raw-loader!./warning';
import C404 from './404';
import C404String from '!raw-loader!./404';
import CError from './error';
import CErrorString from '!raw-loader!./error';
import CInfo from './info';
import CInfoString from '!raw-loader!./info';
import C403 from './403';
import C403String from '!raw-loader!./403';
import C500 from './500';
import C500String from '!raw-loader!./500';
import CCustomIcon from './custom-icon';
import CCustomIconString from '!raw-loader!./custom-icon';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Result 结果 (版本: 1.5.0+)

用于反馈一系列操作任务的处理结果。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '结果',
  type: 'Feedback',
  zhType: '反馈',
  cols: 2,
  title: 'Result',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CSuccessString}><CSuccess /></demo-container>
            <demo-container code={CWarningString}><CWarning /></demo-container>
            <demo-container code={C404String}><C404 /></demo-container>
            <demo-container code={CErrorString}><CError /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CInfoString}><CInfo /></demo-container>
            <demo-container code={C403String}><C403 /></demo-container>
            <demo-container code={C500String}><C500 /></demo-container>
            <demo-container code={CCustomIconString}><CCustomIcon /></demo-container>
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
