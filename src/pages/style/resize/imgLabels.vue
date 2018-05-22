<template>
<div>
  <div class="img_labels_container">
    <label v-for="(listType, index) in listTypes" :key="index" :for="index" :class="{ blue_border: selectedResizeType == listType, gray_border: selectedResizeType != listType}">
      <input type="radio" name="resizeType" v-model="selectedResizeType"  :id="index" :value="listType" >
      <img :src="allResizeTypes[listType].img">
      <span>{{ allResizeTypes[listType].description }}</span>
    </label>
  </div>
  <imgLabelParams :selectedResizeType="selectedResizeType"></imgLabelParams>
</div>
</template>

<script>
import resizeHWAuto from '../../../assets/resize_type/resize-h-w-auto.png'
import resizeWHAuto from '../../../assets/resize_type/resize-w-h-auto.png'
import resizeWHContain from '../../../assets/resize_type/resize-wh-contain.png'
import resizeWHForce from '../../../assets/resize_type/resize-wh-force.png'
import resizeWHPercent from '../../../assets/resize_type/resize-wh-percent.png'
import imgLabelParams from './imgLabelParams.vue'

export default {
  data () {
    return {
      selectedResizeType: this.initResizeType,
      allResizeTypes: {
        'resize-h-w-auto': {description: '高度固定, 宽度自适应', img: resizeHWAuto},
        'resize-w-h-auto': {description: '宽度固定, 高度自适应', img: resizeWHAuto},
        'resize-wh-contain': {description: '缩放至指定宽高区域内', img: resizeWHContain},
        'resize-wh-force': {description: '指定宽高, 强行缩放', img: resizeWHForce},
        'resize-wh-percent': {description: '原图按百分比缩放', img: resizeWHPercent}
      }
    }
  },
  components: {
    imgLabelParams
  },
  props: ['listTypes', 'initResizeType'],
  watch: {
    initResizeType: function (newValue, oldValue) {
      this.selectedResizeType = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .blue_border {
    border:1px solid $blue;
  }
  .gray_border {
    border:1px solid #dcdfe5;
  }
  .img_labels_container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
    margin-top: 30px;
    padding-top: 40px;
    border-top: 1px solid #f0f3fa;
    label {
      cursor: pointer;
      width: 20%;
      max-width: 200px;
      padding: 20px 10px 10px;
      text-align: center;
      margin: 0 10px 10px 0;
      border-radius: 5px;
      font-weight: 700;
      img {
        width: 90px;
        max-width: 100%;
        margin-bottom: 10px;
        display: inline-block;
        vertical-align: middle;
      }
      input {
        display: none;
      }
      span {
        display: block;
        font-size: 12px;
      }
    }
  }
</style>
