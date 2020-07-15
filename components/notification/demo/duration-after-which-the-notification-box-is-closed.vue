<cn>
#### 自动关闭的延时 

自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。
</cn>
<us>
#### Duration After Which The Notification Box Is Closed
</us>


<template>
  <a-button type="primary" @click="openNotification">
    Open the notification box
  </a-button>
</template>
<script>
export default {
  methods: {
    openNotification() {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0,
      });
    },
  },
};
</script>
