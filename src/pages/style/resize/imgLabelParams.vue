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
    <div class="limit_input_warpper">
      <span>允许结果图大于原图</span>
      <el-tooltip effect="light" content="" placement="right">
        <div slot="content" class="tooltip_content">开启后，当指定宽或高大于原图时，会对图片进行放大处理；否则直接返回原图</div>
        <i class="el-icon-question"></i>
      </el-tooltip>
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
      if (t === 'resize-w-h-auto' || t === 'resize-wh-contain' || t === 'resize-wh-force' || t === 'resize-wh-adapt') {
        return true
      }
      return false
    },
    isHeightParmShow: function () {
      const t = this.selectedResizeType
      if (t === 'resize-h-w-auto' || t === 'resize-wh-contain' || t === 'resize-wh-force' || t === 'resize-wh-adapt') {
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
   .tooltip_content {
      word-wrap: break-word;
      word-break: normal;
      width: 206px;
  }
  .img_label_params_container {
    padding-top: 30px;
    border-top: 1px solid #f0f3fa;
    display: flex;
    flex-direction: row;
    align-items: center;
    .input_wrapper {
      margin-right: 30px;
      span{
        font-size: 14px;
        color: $secondaryTextColor;
        margin-right: 10px;
      }
      .number_input {
        width: 150px
      }
    }
    .limit_input_warpper {
      margin-right: 30px;
      span{
        font-size: 14px;
        color: $secondaryTextColor
      }
      i {
        position: relative;
        top: -5px;
        font-size: 13px;
        color: $placeholderTextColor;
         margin-right: 10px;
      }
    }
  }
</style>
