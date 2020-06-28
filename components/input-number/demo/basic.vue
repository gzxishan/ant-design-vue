<cn>
#### 基本

数字输入框。
</cn>
<us>
#### Basic
</us>

<template>
  <div>
    <a-input-number id="inputNumber" v-model="value" :min="1" :max="1000" maxlength="2" placeholder="maxlength=2" @change="onChange" />
    当前值：{{ value }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
  methods: {
    onChange(value) {
      console.log('changed', value);
    },
  },
};
</script>

