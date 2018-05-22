<template>
  <div>
    <div>
      <el-radio v-model="watermarkType" label="1" border>不加水印</el-radio>
      <el-radio v-model="watermarkType" label="2" border>图片水印</el-radio>
    </div>
    <imgWatermark v-if="watermarkType === '2'"></imgWatermark>
  </div>
</template>

<script>
import imgWatermark from './imgWatermark'
export default {
  data () {
    return {
      watermarkType: '1'
    }
  },
  components: {
    imgWatermark
  }
}
</script>
