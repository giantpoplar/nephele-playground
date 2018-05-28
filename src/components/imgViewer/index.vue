<template>
  <div class="img_viewer_container">
    <div class="img_info">{{ title}} {{imgInfo}}</div>
    <div class="img_wrapper" v-loading="loading">
      <a :href="src" target="_blank" v-show="!showErr">
        <img :src="srcUrl" ref="img" title="点击查看原图" @load="load" @error="error" >
      </a>
      <el-alert v-if="showErr"
        class="error_alert"
        title="图片加载出错"
        type="info"
        :closable="false"
        show-icon>
        <div class="err_description">{{ errDescription }}</div>
      </el-alert>
    </div>
    <div class="reload_btn_wrapper" v-if="enableReload">
      <el-button type="primary" size=small :loading="reloading" plain round @click="reload" class="reload_btn">重新加载</el-button>
    </div>
  </div>
</template>

<script>
import { addTimestampToUrl } from '@/utils'
export default {
  data () {
    return {
      srcUrl: this.addTimestampToUrl(this.src),
      loading: true,
      reloading: false,
      showErr: false,
      errDescription: '',
      imgWidth: 0,
      imgHeight: 0
    }
  },
  props: [
    'src',
    'title',
    'enableReload'
  ],
  computed: {
    imgInfo: function () {
      if (this.imgWidth !== 0 || this.imgHeight !== 0) {
        return `(宽: ${this.imgWidth} PX 高: ${this.imgHeight} PX)`
      }
    }
  },
  watch: {
    src: function (value) {
      this.loading = true
      this.reloading = false
      this.imgWidth = 0
      this.imgHeight = 0
      this.srcUrl = this.addTimestampToUrl(this.src)
    }
  },
  methods: {
    load: function () {
      this.loading = false
      this.reloading = false
      this.showErr = false
      this.imgWidth = this.$refs.img.naturalWidth
      this.imgHeight = this.$refs.img.naturalHeight
    },
    error: function () {
      this.loading = false
      this.reloading = false
      this.showErr = true
      this.imgWidth = 0
      this.imgHeight = 0
      this.errDescription = `url: ${this.src}`
    },
    reload: function () {
      this.loading = true
      this.reloading = true
      this.imgWidth = 0
      this.imgHeight = 0
      this.srcUrl = this.addTimestampToUrl(this.src)
    },
    addTimestampToUrl
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .err_description {
    font-size: 12px;
    margin: 5px 0 0;
    word-break: break-all;
  }
  .img_viewer_container {
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
      .error_alert {
        text-align: left;
      }
    }
    .reload_btn_wrapper {
      text-align: center;
      .reload_btn {
        margin-top: 20px;
        display: inline-block;
      }
    }
  }
</style>
