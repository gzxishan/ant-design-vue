<cn>
#### 选择图片 

可以通过设置 `image` 为 `Empty.PRESENTED_IMAGE_SIMPLE` 选择另一种风格的图片。
</cn>
<us>
#### Chose Image
</us>

<template>
  <a-empty :image="simpleImage" />
</template>
<script>
import { Empty } from 'ant-design-vue';
export default {
  beforeCreate() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  },
};
</script>
