

<template>
  <div class="ant-row">
    <div class="ant-col ant-col-12">
      <div style="font-size: 14px; line-height: 22px; margin-bottom: 7px; color: rgba(0, 0, 0, 0.65098);">
        <p style="margin-right: 8px; display: inline-block; color: rgba(0, 0, 0, 0.85098);">
          {{title}}
        </p>
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:["title","content"]
  }
</script>

<style>
</style>

