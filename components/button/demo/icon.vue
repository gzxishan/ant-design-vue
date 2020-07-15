<cn>
#### 图标按钮 

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。
如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
</cn>
<us>
#### Icon
</us>


<template>
  <div>
    <a-button type="primary" shape="circle" icon="search" />
    <a-button type="primary" shape="circle">
      A
    </a-button>
    <a-button type="primary" icon="search">
      Search
    </a-button>
    <a-button shape="circle" icon="search" />
    <a-button icon="search">
      Search
    </a-button>
    <a-button shape="circle" icon="search" />
    <a-button icon="search">
      Search
    </a-button>
    <a-button type="dashed" shape="circle" icon="search" />
    <a-button type="dashed" icon="search">
      Search
    </a-button>
  </div>
</template>
