<cn>
#### 单选组合 - 配合 name 使用 

可以为 Radio.Group 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。
</cn>
<us>
#### Radio_group With Name
</us>
<template>
  <a-radio-group name="radioGroup" :default-value="1">
    <a-radio :value="1">
      A
    </a-radio>
    <a-radio :value="2">
      B
    </a-radio>
    <a-radio :value="3">
      C
    </a-radio>
    <a-radio :value="4">
      D
    </a-radio>
  </a-radio-group>
</template>