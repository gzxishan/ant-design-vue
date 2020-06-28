<cn>
#### 禁用 

禁用时间选择。
</cn>
<us>
#### Disabled
</us>

```tpl
<template>
  <a-time-picker :default-value="moment('12:08:23', 'HH:mm:ss')" disabled />
</template>
<script>
import moment from 'moment';
export default {
  methods: {
    moment,
  },
};
</script>
```