<cn>
#### 上一步和下一步 

修改上一步和下一步为文字链接。
</cn>
<us>
#### Prev And Next
</us>


<template>
  <a-pagination :total="500" :item-render="itemRender" />
</template>
<script>
export default {
  methods: {
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>;
      } else if (type === 'next') {
        return <a>Next</a>;
      }
      return originalElement;
    },
  },
};
</script>
