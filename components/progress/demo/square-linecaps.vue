<cn>
#### 圆角/方角边缘 

`strokeLinecap="square|round"` 可以调整进度条边缘的形状。
</cn>
<us>
#### Square Linecaps
</us>
<template>
  <div>
    <a-progress stroke-linecap="square" :percent="75" />
    <a-progress stroke-linecap="square" :percent="75" type="circle" />
    <a-progress stroke-linecap="square" :percent="75" type="dashboard" />
  </div>
</template>