<cn>
#### 销毁确认对话框 

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。
</cn>
<us>
#### Destroy Confirmation Modal Dialog
</us>


<template>
  <a-button @click="showConfirm">
    Confirm
  </a-button>
</template>
<script>
export default {
  methods: {
    showConfirm() {
      const self = this;
      for (let i = 0; i < 3; i += 1) {
        setTimeout(() => {
          this.$confirm({
            content: 'destroy all',
            onOk() {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              }).catch(() => console.log('Oops errors!'));
            },
            cancelText: 'Click to destroy all',
            onCancel() {
              self.destroyAll();
            },
          });
        }, i * 500);
      }
    },
    destroyAll() {
      this.$destroyAll();
    },
  },
};
</script>
