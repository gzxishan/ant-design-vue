<cn>
#### 小型进度条 

适合放在较狭窄的区域内。
</cn>
<us>
#### Mini Size Progress Bar
</us>


<template>
  <div style="width: 170px">
    <a-progress :percent="30" size="small" />
    <a-progress :percent="50" size="small" status="active" />
    <a-progress :percent="70" size="small" status="exception" />
    <a-progress :percent="100" size="small" />
  </div>
</template>
