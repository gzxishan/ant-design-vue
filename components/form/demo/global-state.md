<cn>
#### 表单数据存储于上层组件

通过使用 `onFieldsChange` 与 `mapPropsToFields`，可以把表单的数据存储到上层组件。注意：`mapPropsToFields` 里面返回的表单域数据必须使用 `Form.createFormField` 包装。如果你使用`Form.create`，上层组件传递的属性，必须在`Form.create({ props: ...})`的props中声明。如果使用`this.$form.createForm`，你可以使用任何数据，不仅仅局限于上层组件的属性。
</cn>
<us>
#### Store Form Data Into Upper Component
</us>

```tpl
<template>
  <div id="components-form-demo-global-state">
    <customized-form :username="fields.username" @change="handleFormChange" />
    <pre class="language-bash">
      {{ JSON.stringify(fields, null, 2) }}
    </pre>
  </div>
</template>

<script>
const CustomizedForm = {
  props: ['username'],
  template: `
    <a-form layout='inline' :form="form">
      <a-form-item label='Username'>
        <a-input
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: 'Username is required!' }],
            }
          ]"
        />
      </a-form-item>
    </a-form>
  `,
  created() {
    this.form = this.$form.createForm(this, {
      name: 'global_state',
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            ...this.username,
            value: this.username.value,
          }),
        };
      },
      onValuesChange(_, values) {
        console.log(values);
      },
    });
  },
  watch: {
    username() {
      this.form.updateFields({
        username: this.$form.createFormField({
          ...this.username,
          value: this.username.value,
        }),
      });
    },
  },
};

export default {
  components: {
    CustomizedForm,
  },
  data() {
    return {
      fields: {
        username: {
          value: 'benjycui',
        },
      },
    };
  },
  methods: {
    handleFormChange(changedFields) {
      console.log('changedFields', changedFields);
      this.fields = { ...this.fields, ...changedFields };
    },
  },
};
</script>
<style>
#components-form-demo-global-state .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
```