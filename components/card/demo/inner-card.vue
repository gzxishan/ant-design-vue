<cn>
#### 内部卡片 

可以放在普通卡片内部，展示多层级结构的信息
</cn>
<us>
#### Inner Card
</us>


<template>
  <a-card title="Card title">
    <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">
      Group title
    </p>
    <a-card title="Inner card title">
      <a slot="extra" href="#">More</a>
      Inner Card content
    </a-card>
    <a-card title="Inner card title" :style="{ marginTop: '16px' }">
      <a slot="extra" href="#">More</a>
      Inner Card content
    </a-card>
  </a-card>
</template>
