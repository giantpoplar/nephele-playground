<template>
  <div >
    <div>
      <el-radio v-model="cropType" label="1" border>不剪裁</el-radio>
      <el-radio v-model="cropType" label="2" border>抠图</el-radio>
      <el-radio v-model="cropType" label="3" border>裁剪边缘</el-radio>
    </div>
    <cutout v-if="cropType === '2'"></cutout>
    <cut-margin v-if="cropType === '3'"></cut-margin>
  </div>
</template>

<script>
import cutout from './cutout'
import cutMargin from './cutMargin'
export default {
  data () {
    return {
      cropType: '1'
    }
  },
  components: {
    cutout,
    cutMargin
  }
}
</script>
