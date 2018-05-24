<template>
  <div>
    <div>
        <el-radio v-model="qualityType" label="0" border>默认质量</el-radio>
        <el-radio v-model="qualityType" label="1" border>自定义质量</el-radio>
      </div>
    <div v-if="qualityType === '1'" class="quality_wrapper">
      <el-slider v-model="quality" :min="minQuality" :format-tooltip="formatPercent" show-input class="quality_slider">
      </el-slider>
    </div>
  </div>
</template>

<script>
import { formatPercent } from '@/utils'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      minQuality: 1
    }
  },
  computed: {
    qualityType: {
      get () {
        return this.$store.state.userImgStyle.qualityType
      },
      set (value) {
        this.SET_QUALITY_TYPE(value)
      }
    },
    quality: {
      get () {
        return this.$store.state.userImgStyle.quality
      },
      set (value) {
        this.SET_QUALITY(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_QUALITY_TYPE',
      'SET_QUALITY'
    ]),
    formatPercent
  }
}
</script>

<style lang="scss" scoped>
  .quality_wrapper {
    margin-top: 20px;
    .quality_slider {
      width: 50%
    }
  }
</style>
