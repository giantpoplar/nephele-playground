<template>
<div>
    <div>
      <el-radio v-model="resizeMode" label="" border>不缩放</el-radio>
      <el-radio v-model="resizeMode" label="fixed" border>固定宽高缩放</el-radio>
      <el-radio v-model="resizeMode" label="lfit" border>比例缩放</el-radio>
    </div>
    <imgLabels  v-if="resizeMode !== ''" :listTypes="listTypes" ></imgLabels>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
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
      if (this.resizeMode === 'fixed') {
        return ['resize-wh-force']
      } else if (this.resizeMode === 'lfit') {
        return ['resize-h-w-auto', 'resize-w-h-auto', 'resize-wh-contain', 'resize-wh-percent']
      }
    },
    resizeMode: {
      get () {
        return this.$store.state.userImgStyle.resizeMode
      },
      set (value) {
        this.SET_RESIZE_MODE(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_RESIZE_MODE'
    ])
  }
}
</script>
