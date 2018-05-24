<template>
  <div class="img_label_params_container" v-if="selectedResizeType !== null">
    <div class="input_wrapper" v-if="isWidthParmShow">
      <span>宽度</span>
      <el-input placeholder="1-9999" v-model="width" class="number_input"  type="number" min="1" max="9999">
        <template slot="append">PX</template>
      </el-input>
    </div>
    <div class="input_wrapper" v-if="isHeightParmShow">
      <span>高度</span>
      <el-input placeholder="1-99999" v-model="height" class="number_input" type="number" min="1" max="9999">
        <template slot="append">PX</template>
      </el-input>
    </div>
    <div class="input_wrapper" v-if="selectedResizeType === 'resize-wh-percent'">
      <span>原图缩放</span>
      <el-input placeholder="1-999" v-model="percent" class="number_input" type="number" min=1 max=999>
        <template slot="append">%</template>
      </el-input>
    </div>
    <div class="input_wrapper">
      <span>允许结果图大于原图</span>
      <el-switch v-model="limit">
      </el-switch>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    width: {
      get () {
        return this.$store.state.userImgStyle.resizeWidth
      },
      set (value) {
        this.SET_RESIZE_WIDTH(value)
      }
    },
    height: {
      get () {
        return this.$store.state.userImgStyle.resizeHeight
      },
      set (value) {
        this.SET_RESIZE_HEIGHT(value)
      }
    },
    percent: {
      get () {
        return this.$store.state.userImgStyle.resizePercent
      },
      set (value) {
        this.SET_RESIZE_PERCENT(value)
      }
    },
    limit: {
      get () {
        return this.$store.state.userImgStyle.resizeLimit
      },
      set (value) {
        this.SET_RESIZE_LIMIT(value)
      }
    },
    isWidthParmShow: function () {
      const t = this.selectedResizeType
      if (t === 'resize-w-h-auto' || t === 'resize-wh-contain' || t === 'resize-wh-force') {
        return true
      }
      return false
    },
    isHeightParmShow: function () {
      const t = this.selectedResizeType
      if (t === 'resize-h-w-auto' || t === 'resize-wh-contain' || t === 'resize-wh-force') {
        return true
      }
      return false
    },
    isPercentParamShow: function () {
      if (this.selectedResizeType !== 'resize-wh-percent') {
        return false
      }
      return true
    }
  },
  props: ['selectedResizeType'],
  methods: {
    ...mapMutations([
      'SET_RESIZE_WIDTH',
      'SET_RESIZE_HEIGHT',
      'SET_RESIZE_PERCENT',
      'SET_RESIZE_LIMIT'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .img_label_params_container {
    padding-top: 30px;
    border-top: 1px solid #f0f3fa;
    display: flex;
    flex-direction: row;
    align-items: center;
    .input_wrapper {
      float: left;
      position: relative;
      margin-right: 30px;
      span{
        margin-right: 10px;
        font-size: 14px;
        color: $secondaryTextColor
      }
      .number_input {
        width: 150px
      }
    }
  }
</style>
