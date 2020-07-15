<cn>
#### 分隔符 

使用 `Breadcrumb.Separator` 可以自定义分隔符。
</cn>
<us>
#### Configuring The Separator
</us>


<template>
  <a-breadcrumb separator="">
    <a-breadcrumb-item>Location</a-breadcrumb-item>
    <a-breadcrumb-separator>:</a-breadcrumb-separator>
    <a-breadcrumb-item href="">
      Application Center
    </a-breadcrumb-item>
    <a-breadcrumb-separator />
    <a-breadcrumb-item href="">
      Application List
    </a-breadcrumb-item>
    <a-breadcrumb-separator />
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>
