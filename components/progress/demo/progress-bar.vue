<cn>
#### 进度条 

标准的进度条。
</cn>
<us>
#### Progress Bar
</us>


<template>
  <div>
    <a-progress :percent="30" />
    <a-progress :percent="50" status="active" />
    <a-progress :percent="70" status="exception" />
    <a-progress :percent="100" />
    <a-progress :percent="50" :show-info="false" />
  </div>
</template>
