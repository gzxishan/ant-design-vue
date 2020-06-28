<cn>
#### 获得选项的文本 

默认情况下 `onChange` 里只能拿到 value，如果需要拿到选中的节点文本 label，可以使用 `labelInValue` 属性。
选中项的 label 会被包装到 value 中传递给 `onChange` 等函数，此时 value 是一个对象。
</cn>
<us>
#### Get Value Of Selected Item
</us>

<template>
  <a-select
    label-in-value
    :default-value="{ key: 'lucy' }"
    style="width: 120px"
    @change="handleChange"
  >
    <a-select-option value="jack">
      Jack (100)
    </a-select-option>
    <a-select-option value="lucy">
      Lucy (101)
    </a-select-option>
  </a-select>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    },
  },
};
</script>
