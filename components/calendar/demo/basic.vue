<cn>
#### 基本 

一个通用的日历面板，支持年/月切换。
</cn>
<us>
#### Basic
</us>


<template>
  <a-calendar @panelChange="onPanelChange" />
</template>
<script>
export default {
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
};
</script>
