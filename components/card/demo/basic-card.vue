<cn>
#### 典型卡片 

包含标题、内容、操作区域。
可通过设置size为`default`或者`small`，控制尺寸
</cn>
<us>
#### Basic Card
</us>


<template>
  <div>
    <a-card title="Default size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <br />
    <a-card size="small" title="Small size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </div>
</template>
