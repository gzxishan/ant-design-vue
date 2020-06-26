<script>
import CBasicForm from './basic-form';
import CBasicFormString from '!raw-loader!./basic-form';
import CInlineLoginForm from './inline-login-form';
import CInlineLoginFormString from '!raw-loader!./inline-login-form';
import CFormLayout from './form-layout';
import CFormLayoutString from '!raw-loader!./form-layout';
import CValidation from './validation';
import CValidationString from '!raw-loader!./validation';
import CCustomValidationRules from './custom-validation-rules';
import CCustomValidationRulesString from '!raw-loader!./custom-validation-rules';
import CDynamicFormItem from './dynamic-form-item';
import CDynamicFormItemString from '!raw-loader!./dynamic-form-item';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# FormModel 表单 (支持 v-model 检验)(版本：1.5.0+)

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 何时使用

- 需要对输入的数据类型进行校验时。

## 表单

我们为 \`form\` 提供了以下三种排列方式：

- 水平排列：标签和表单控件水平排列；（默认）
- 垂直排列：标签和表单控件上下垂直排列；
- 行内排列：表单项水平行内排列。

## 表单域

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

这里我们封装了表单域 \`<FormModel.Item />\` 。

## 组件注册

\`
import { FormModel } from 'ant-design-vue';
Vue.use(FormModel);
\`

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '表单',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 1,
  title: 'FormModel',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicFormString}><CBasicForm /></demo-container>

<demo-container code={CInlineLoginFormString}><CInlineLoginForm /></demo-container>

<demo-container code={CFormLayoutString}><CFormLayout /></demo-container>

<demo-container code={CValidationString}><CValidation /></demo-container>

<demo-container code={CCustomValidationRulesString}><CCustomValidationRules /></demo-container>

<demo-container code={CDynamicFormItemString}><CDynamicFormItem /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>