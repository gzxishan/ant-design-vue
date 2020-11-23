<script>
import CCoordinatedControls from './coordinated-controls';
import CCoordinatedControlsString from '!raw-loader!./coordinated-controls';
import CDynamicRules from './dynamic-rules';
import CDynamicRulesString from '!raw-loader!./dynamic-rules';
import CInlineLoginForm from './inline-login-form';
import CInlineLoginFormString from '!raw-loader!./inline-login-form';
import CFormLayout from './form-layout';
import CFormLayoutString from '!raw-loader!./form-layout';
import CCustomizedValidation from './customized-validation';
import CCustomizedValidationString from '!raw-loader!./customized-validation';
import CHandleFormDataManually from './handle-form-data-manually';
import CHandleFormDataManuallyString from '!raw-loader!./handle-form-data-manually';
import CAdvancedSearch from './advanced-search';
import CAdvancedSearchString from '!raw-loader!./advanced-search';
import CCustomizedFormControls from './customized-form-controls';
import CCustomizedFormControlsString from '!raw-loader!./customized-form-controls';
import CDynamicFormItem from './dynamic-form-item';
import CDynamicFormItemString from '!raw-loader!./dynamic-form-item';
import CFormInModalToCreate from './form-in-modal-to-create';
import CFormInModalToCreateString from '!raw-loader!./form-in-modal-to-create';
import CGlobalState from './global-state';
import CGlobalStateString from '!raw-loader!./global-state';
import CVuex from './vuex';
import CVuexString from '!raw-loader!./vuex';
import CNormalLogin from './normal-login';
import CNormalLoginString from '!raw-loader!./normal-login';
import CRegistration from './registration';
import CRegistrationString from '!raw-loader!./registration';
import CTimeRelatedControls from './time-related-controls';
import CTimeRelatedControlsString from '!raw-loader!./time-related-controls';
import CValidateOther from './validate-other';
import CValidateOtherString from '!raw-loader!./validate-other';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Form 表单(废弃)

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

#### 如需要使用 \`v-model\` 双向绑定式的校验功能可使用新的表单 \`a-form-model\`。

## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 表单

我们为 \`form\` 提供了以下三种排列方式：

- 水平排列：标签和表单控件水平排列；（默认）
- 垂直排列：标签和表单控件上下垂直排列；
- 行内排列：表单项水平行内排列。

## 表单域

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

这里我们封装了表单域 \`<Form.Item />\` 。

## 注意：

1、如果使用 \`Form.create\` 处理表单使其具有自动收集数据并校验的功能，建议使用\`jsx\`。2、如果不是使用Vue.use(Form)形式注册的\`Form\`组件，你需要自行将\`$form\`挂载到Vue原型上。\`Vue.prototype.$form = Form\`

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '表单',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 1,
  title: 'Form',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CCoordinatedControlsString}><CCoordinatedControls /></demo-container>
            <demo-container code={CDynamicRulesString}><CDynamicRules /></demo-container>
            <demo-container code={CInlineLoginFormString}><CInlineLoginForm /></demo-container>
            <demo-container code={CFormLayoutString}><CFormLayout /></demo-container>
            <demo-container code={CCustomizedValidationString}><CCustomizedValidation /></demo-container>
            <demo-container code={CHandleFormDataManuallyString}><CHandleFormDataManually /></demo-container>
            <demo-container code={CAdvancedSearchString}><CAdvancedSearch /></demo-container>
            <demo-container code={CCustomizedFormControlsString}><CCustomizedFormControls /></demo-container>
            <demo-container code={CDynamicFormItemString}><CDynamicFormItem /></demo-container>
            <demo-container code={CFormInModalToCreateString}><CFormInModalToCreate /></demo-container>
            <demo-container code={CGlobalStateString}><CGlobalState /></demo-container>
            <demo-container code={CVuexString}><CVuex /></demo-container>
            <demo-container code={CNormalLoginString}><CNormalLogin /></demo-container>
            <demo-container code={CRegistrationString}><CRegistration /></demo-container>
            <demo-container code={CTimeRelatedControlsString}><CTimeRelatedControls /></demo-container>
            <demo-container code={CValidateOtherString}><CValidateOther /></demo-container>
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

<style>
  .ant-advanced-search-form{padding:24px;background:#fbfbfb;border:1px solid #d9d9d9;border-radius:6px}.ant-advanced-search-form .ant-form-item{display:flex}.ant-advanced-search-form .ant-form-item-control-wrapper{flex:1}#components-form-demo-advanced-search .ant-form{max-width:none}#components-form-demo-advanced-search .search-result-list{margin-top:16px;border:1px dashed #e9e9e9;border-radius:6px;background-color:#fafafa;min-height:200px;text-align:center;padding-top:80px}.dynamic-delete-button{cursor:pointer;position:relative;top:4px;font-size:24px;color:#999;transition:all .3s}.dynamic-delete-button:hover{color:#777}.dynamic-delete-button[disabled]{cursor:not-allowed;opacity:.5}#components-form-demo-global-state .language-bash,#components-form-demo-vuex .language-bash{max-width:400px;border-radius:6px;margin-top:24px}#components-form-demo-normal-login .login-form{max-width:300px}#components-form-demo-normal-login .login-form-forgot{float:right}#components-form-demo-normal-login .login-form-button{width:100%}#components-form-demo-validate-other .dropbox{height:180px;line-height:1.5}.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical){max-width:600px}
</style>
