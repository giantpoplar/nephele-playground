<template>
  <div class="img_label_params_container" v-if="selectedResizeType !== null">
    <div class="input_wrapper" v-if="isWidthParmShow">
      <span>宽度</span>
      <el-input placeholder="1-9999" v-model="inputWidth" class="number_input" size="medium" type="number" min="1" max="9999">
        <template slot="append">PX</template>
      </el-input>
    </div>
    <div class="input_wrapper" v-if="isHeightParmShow">
      <span>高度</span>
      <el-input placeholder="1-99999" v-model="inputHeight" class="number_input" size="medium" type="number" min="1" max="9999">
        <template slot="append">PX</template>
      </el-input>
    </div>
    <div class="input_wrapper" v-if="selectedResizeType === 'resize-wh-percent'">
      <span>原图缩放</span>
      <el-input placeholder="1-999" v-model="inputZoomPercent" class="number_input" size="medium" type="number" min=1 max=999>
        <template slot="append">%</template>
      </el-input>
    </div>
    <div class="input_wrapper">
      <span>允许结果图大于原图</span>
      <el-switch v-model="limitResultSize">
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputWidth: 200,
      inputHeight: 200,
      inputZoomPercent: 50,
      limitResultSize: true
    }
  },
  computed: {
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
  props: ['selectedResizeType']
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
