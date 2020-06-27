<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CCustomRender from './custom-render';
import CCustomRenderString from '!raw-loader!./custom-render';
import CDefaultValue from './default-value';
import CDefaultValueString from '!raw-loader!./default-value';
import CHover from './hover';
import CHoverString from '!raw-loader!./hover';
import CSearch from './search';
import CSearchString from '!raw-loader!./search';
import CCustomFieldNames from './custom-field-names';
import CCustomFieldNamesString from '!raw-loader!./custom-field-names';
import CChangeOnSelect from './change-on-select';
import CChangeOnSelectString from '!raw-loader!./change-on-select';
import CCustomTrigger from './custom-trigger';
import CCustomTriggerString from '!raw-loader!./custom-trigger';
import CDisabledOption from './disabled-option';
import CDisabledOptionString from '!raw-loader!./disabled-option';
import CLoadOptionsLazily from './load-options-lazily';
import CLoadOptionsLazilyString from '!raw-loader!./load-options-lazily';
import CSize from './size';
import CSizeString from '!raw-loader!./size';
import CSuffix from './suffix';
import CSuffixString from '!raw-loader!./suffix';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Cascader 级联选择

级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。代码演示`
};

export default {
  category: 'Components',
  subtitle: '级联选择',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Cascader',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CCustomRenderString}><CCustomRender /></demo-container>

<demo-container code={CDefaultValueString}><CDefaultValue /></demo-container>

<demo-container code={CHoverString}><CHover /></demo-container>

<demo-container code={CSearchString}><CSearch /></demo-container>

<demo-container code={CCustomFieldNamesString}><CCustomFieldNames /></demo-container>

<demo-container code={CChangeOnSelectString}><CChangeOnSelect /></demo-container>

<demo-container code={CCustomTriggerString}><CCustomTrigger /></demo-container>

<demo-container code={CDisabledOptionString}><CDisabledOption /></demo-container>

<demo-container code={CLoadOptionsLazilyString}><CLoadOptionsLazily /></demo-container>

<demo-container code={CSizeString}><CSize /></demo-container>

<demo-container code={CSuffixString}><CSuffix /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>