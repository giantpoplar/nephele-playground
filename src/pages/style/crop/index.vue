<template>
  <div >
    <div>
      <el-radio v-model="cropType" label="" border>不剪裁</el-radio>
      <el-radio v-model="cropType" label="cutout" border>抠图</el-radio>
      <el-radio v-model="cropType" label="cutMargin" border>裁剪边缘</el-radio>
    </div>
    <cropParam v-if="cropType !== ''" :cropType="cropType"></cropParam>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import cropParam from './cropParam'
export default {
  data () {
    return {}
  },
  components: {
    cropParam
  },
  computed: {
    cropType: {
      get () {
        return this.$store.state.userImgStyle.cropType
      },
      set (value) {
        this.SET_CROP_TYPE(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_CROP_TYPE'
    ])
  }
}
</script>
