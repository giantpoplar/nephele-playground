<template>
  <el-tooltip effect="light" placement="right">
    <div slot="content" class="tooltip_content">{{ tooltip }}</div>
    <i class="el-icon-question" :style="styleObject"></i>
  </el-tooltip>
</template>

<script>
export default {
  data () {
    return {
      fontSize: this.iconSize || 13,
      styleObject: {
        fontSize: `${this.iconSize}px`
      }
    }
  },
  props: [
    'tooltip',
    'iconSize'
  ]
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  i {
    position: relative;
    top: -5px;
    color: $placeholderTextColor;
    margin-right: 10px;
  }
</style>
