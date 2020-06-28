<cn>
#### 从浮层内关闭 

使用 `visible` 属性控制浮层显示。
</cn>
<us>
#### Controlling The Close Of The Dialog
</us>

```tpl
<template>
  <a-popover v-model="visible" title="Title" trigger="click">
    <a slot="content" @click="hide">Close</a>
    <a-button type="primary">
      Click me
    </a-button>
  </a-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    hide() {
      console.log(111);
      this.visible = false;
    },
  },
};
</script>
```