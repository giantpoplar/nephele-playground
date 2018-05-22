<template>
  <div class="custom_img_container">
    <div class="img_info">{{ title}} (大小: 209.49 KB&nbsp;&nbsp;宽: 640 PX&nbsp;&nbsp;高: 427 PX)</div>
    <div class="img_wrapper">
      <img :src="src">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'src',
    'title'
  ]
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .custom_img_container {
    .img_info {
      font-size: 14px;
      font-weight: 400;
      color: $regularTextColor;
      margin: 0 0 15px;
    }
    .img_wrapper{
      text-align: center;
      img {
        padding: 9px;
        background-color: #fafbfc;
        border: 1px solid #e6e9f0;
        border-radius: 5px;
        max-width: 95%;
      }
    }
  }
</style>
