<template>
  <div>
    <el-slider v-model="quality" :min="minQuality" :format-tooltip="formatPercent" show-input class="quality_slider">
    </el-slider>
  </div>
</template>

<script>
import { formatPercent } from '@/utils'
export default {
  data () {
    return {
      quality: 75,
      minQuality: 1
    }
  },
  methods: {
    formatPercent
  }
}
</script>

<style lang="scss" scoped>
  .quality_slider {
    width: 50%
  }
</style>
