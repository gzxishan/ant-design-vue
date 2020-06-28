<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CWithForm from './with-form';
import CWithFormString from '!raw-loader!./with-form';
import CDisabledOrReadonly from './disabled-or-readonly';
import CDisabledOrReadonlyString from '!raw-loader!./disabled-or-readonly';
import CAsynchronousLoading from './asynchronous-loading';
import CAsynchronousLoadingString from '!raw-loader!./asynchronous-loading';
import CCustomizeTriggerToken from './customize-trigger-token';
import CCustomizeTriggerTokenString from '!raw-loader!./customize-trigger-token';
import CPlacemen from './placemen';
import CPlacemenString from '!raw-loader!./placemen';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Mentions提及 (版本：1.5.0+)

提及组件。

## 何时使用

- 用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '提及',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Mentions',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>
            <demo-container code={CWithFormString}><CWithForm /></demo-container>
            <demo-container code={CDisabledOrReadonlyString}><CDisabledOrReadonly /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CAsynchronousLoadingString}><CAsynchronousLoading /></demo-container>
            <demo-container code={CCustomizeTriggerTokenString}><CCustomizeTriggerToken /></demo-container>
            <demo-container code={CPlacemenString}><CPlacemen /></demo-container>
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
