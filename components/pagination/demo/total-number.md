<cn>
#### 总数 

通过设置 `showTotal` 展示总共有多少数据。
</cn>
<us>
#### Total Number
</us>

```tpl
<template>
  <div>
    <a-pagination
      :total="85"
      :show-total="total => `Total ${total} items`"
      :page-size="20"
      :default-current="1"
    />
    <br />
    <a-pagination
      :total="85"
      :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
      :page-size="20"
      :default-current="1"
    />
  </div>
</template>
```