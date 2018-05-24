<template>
  <div>
  <img-viewer title="原图" :src="originUrl" :enableReload="false"></img-viewer>
  <div class="result_img_container">
    <img-viewer title="运行结果" :src="resultUrl" :enableReload="true"></img-viewer>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import imgViewer from '@/components/imgViewer'
// import sohoImg from '../../../assets/soho.jpg'
export default {
  data () {
    return {
      demoUri: 'image/demo-big.jpg'
    }
  },
  computed: {
    ...mapState({
      host: state => state.app.nepheleService.host,
      port: state => state.app.nepheleService.port,
      cmd: state => state.userImgStyle.styleCmd
    }),
    originUrl: function () {
      return `http://${this.host}:${this.port}/${this.demoUri}`
    },
    resultUrl: function () {
      return `${this.originUrl}?${this.cmd}`
    }
  },
  components: {
    imgViewer
  }
}
</Script>

<style lang="scss" scoped>
  .result_img_container{
    margin-top: 50px;
    padding-top: 30px;
    border: 1px solid #f0f3fa;
    border-width: 1px 0 0 0;
    width: 100%
  }
</style>
