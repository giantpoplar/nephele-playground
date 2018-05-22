<template>
<div>
    <div>
      <el-radio v-model="resizeType" label="1" border>不缩放</el-radio>
      <el-radio v-model="resizeType" label="2" border>固定宽高缩放</el-radio>
      <el-radio v-model="resizeType" label="3" border>比例缩放</el-radio>
    </div>
    <imgLabels :initResizeType="initResizeType" v-if="resizeType !== '1'" :listTypes="listTypes" ></imgLabels>
</div>
</template>

<script>
import imgLabels from './imgLabels.vue'
import imgLableParams from './imgLabelParams.vue'
export default {
  data () {
    return {
      resizeType: '1'
    }
  },
  components: {
    imgLabels,
    imgLableParams
  },
  computed: {
    listTypes: function () {
      if (this.resizeType === '2') {
        return ['resize-wh-force']
      } else if (this.resizeType === '3') {
        return ['resize-h-w-auto', 'resize-w-h-auto', 'resize-wh-contain', 'resize-wh-percent']
      }
    },
    initResizeType: function () {
      if (this.resizeType === '2') {
        return 'resize-wh-force'
      } else if (this.resizeType === '3') {
        return 'resize-h-w-auto'
      }
    }
  }
}
</script>
