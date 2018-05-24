<template>
  <div>
    <div>
      <el-radio v-model="watermarkType" label="0" border>不加水印</el-radio>
      <el-radio v-model="watermarkType" label="1" border>图片水印</el-radio>
    </div>
    <imgWatermark v-if="watermarkType === '1'"></imgWatermark>
  </div>
</template>

<script>
import imgWatermark from './imgWatermark'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    watermarkType: {
      get () {
        return this.$store.state.userImgStyle.watermarkType
      },
      set (value) {
        this.SET_WATERMARK_TYPE(value)
      }
    }
  },
  components: {
    imgWatermark
  },
  methods: {
    ...mapMutations([
      'SET_WATERMARK_TYPE'
    ])
  }
}
</script>
