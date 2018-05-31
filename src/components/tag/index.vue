<template>
  <div>
    <span>{{ name }}</span>
    <el-tooltip effect="light" placement="right" v-if="tooltip != null">
      <div slot="content" class="tooltip_content">{{ tooltip }}</div>
      <i class="el-icon-question" :style="styleObject"></i>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    let fontSize = this.iconSize || 13
    return {
      size: 13,
      styleObject: {
        fontSize: `${fontSize}px`
      }
    }
  },
  props: [
    'name',
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
