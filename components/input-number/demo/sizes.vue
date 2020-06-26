<cn>
#### 三种大小 

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。
</cn>
<us>
#### Sizes
</us>
<template>
  <div>
    <a-input-number size="large" :min="1" :max="100000" :default-value="3" @change="onChange" />
    <a-input-number :min="1" :max="100000" :default-value="3" @change="onChange" />
    <a-input-number size="small" :min="1" :max="100000" :default-value="3" @change="onChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(value) {
      console.log('changed', value);
    },
  },
};
</script>
<style scoped>
.ant-input-number {
  margin-right: 10px;
}
</style>