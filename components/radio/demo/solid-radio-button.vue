<cn>
#### 填底的按钮样式 

实色填底的单选按钮样式。
</cn>
<us>
#### Solid Radio Button
</us>


<template>
  <div>
    <div>
      <a-radio-group default-value="a" button-style="solid">
        <a-radio-button value="a">
          Hangzhou
        </a-radio-button>
        <a-radio-button value="b">
          Shanghai
        </a-radio-button>
        <a-radio-button value="c">
          Beijing
        </a-radio-button>
        <a-radio-button value="d">
          Chengdu
        </a-radio-button>
      </a-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <a-radio-group default-value="c" button-style="solid">
        <a-radio-button value="a">
          Hangzhou
        </a-radio-button>
        <a-radio-button value="b" disabled>
          Shanghai
        </a-radio-button>
        <a-radio-button value="c">
          Beijing
        </a-radio-button>
        <a-radio-button value="d">
          Chengdu
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
