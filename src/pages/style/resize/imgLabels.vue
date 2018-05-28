<template>
<div>
  <div class="img_labels_container">
    <el-tooltip effect="dark" placement="top" v-for="(listType, index) in listTypes" :key="index" class="tooltip">
      <div slot="content" class="tooltip_content">{{ allResizeTypes[listType].tooltip }}</div>
      <label :for="index" :class="{ blue_border: selectedResizeType == listType, gray_border: selectedResizeType != listType}">
        <input type="radio" name="resizeType" v-model="selectedResizeType"  :id="index" :value="listType" >
        <el-badge value="常用" :hidden="!allResizeTypes[listType].badgeShow">
          <img :src="allResizeTypes[listType].img">
        </el-badge>
        <span>{{ allResizeTypes[listType].description }}</span>
      </label>
    </el-tooltip>
  </div>
  <imgLabelParams :selectedResizeType="selectedResizeType"></imgLabelParams>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import resizeHWAuto from '../../../assets/resize_type/resize-h-w-auto.png'
import resizeWHAuto from '../../../assets/resize_type/resize-w-h-auto.png'
import resizeWHContain from '../../../assets/resize_type/resize-wh-contain.png'
import resizeWHForce from '../../../assets/resize_type/resize-wh-force.png'
import resizeWHAdapt from '../../../assets/resize_type/resize-wh-adapt.png'
import resizeWHPercent from '../../../assets/resize_type/resize-wh-percent.png'
import imgLabelParams from './imgLabelParams.vue'

export default {
  data () {
    return {
      allResizeTypes: {
        'resize-h-w-auto': {description: '指定高度, 宽度自适应', img: resizeHWAuto, tooltip: '保持原图宽高比，指定高度，宽度自适应'},
        'resize-w-h-auto': {description: '指定宽度, 高度自适应', img: resizeWHAuto, tooltip: '保持原图宽高比，指定宽度，高度自适应'},
        'resize-wh-contain': {description: '缩放至指定宽高区域内', img: resizeWHContain, tooltip: '保持原图宽高比，宽和高缩放至完全覆盖指定宽高区域的最小图片'},
        'resize-wh-force': {description: '指定宽高, 强行缩放', img: resizeWHForce, tooltip: '指定宽高，强行缩放，图片可能变形'},
        'resize-wh-percent': {description: '原图按百分比缩放', img: resizeWHPercent, tooltip: '保持原图宽高比，原图按比例缩放'},
        'resize-wh-adapt': {description: '按指定宽高比居中裁剪后缩放', img: resizeWHAdapt, tooltip: '按指定宽高比，原图居中裁剪后缩放', badgeShow: true}
      }
    }
  },
  components: {
    imgLabelParams
  },
  computed: {
    ...mapState({
      resizeMode: state => state.userImgStyle.resizeMode
    }),
    selectedResizeType: {
      get () {
        return this.$store.state.userImgStyle.resizeType[this.resizeMode]
      },
      set (value) {
        this.SET_RESIZE_TYPE(value)
      }
    }
  },
  props: ['listTypes'],
  methods: {
    ...mapMutations([
      'SET_RESIZE_TYPE'
    ])
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
      width: 26%;
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
