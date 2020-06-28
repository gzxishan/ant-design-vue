<cn>
#### Warning 

警告类型的结果。
</cn>
<us>
#### Warning
</us>

```tpl
<template>
  <a-result status="warning" title="There are some problems with your operation.">
    <template #extra>
      <a-button key="console" type="primary">
        Go Console
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
```