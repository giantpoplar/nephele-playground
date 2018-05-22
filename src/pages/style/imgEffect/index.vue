<template>
  <div>
  <customImg title="原图" :src="src"></customImg>
  <div class="result_img_container">
    <customImg title="运行结果" :src="src" ></customImg>
  </div>
  </div>
</template>

<script>
import sohoImg from '../../../assets/soho.jpg'
import customImg from './customImg'
export default {
  data () {
    return {
      src: sohoImg
    }
  },
  components: {
    customImg
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
