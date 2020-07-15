<cn>
#### 基本 

头像有三种尺寸，两种形状可选。
</cn>
<us>
#### Basic
</us>


<template>
  <div>
    <div>
      <a-avatar :size="64" icon="user" />
      <a-avatar size="large" icon="user" />
      <a-avatar icon="user" />
      <a-avatar size="small" icon="user" />
    </div>
    <br />
    <div>
      <a-avatar shape="square" :size="64" icon="user" />
      <a-avatar shape="square" size="large" icon="user" />
      <a-avatar shape="square" icon="user" />
      <a-avatar shape="square" size="small" icon="user" />
    </div>
  </div>
</template>
