<template>
  <div>
    <processCmd></processCmd>
    <div class="style_container">
      <div class="cmd_container">
        <div class="cmd_item">
          <span class="cmd_name">缩放方式</span>
          <resize class="cmd_detail"></resize>
        </div>
        <div class="cmd_item">
          <span class="cmd_name">图片剪裁</span>
          <crop class="cmd_detail"></crop>
        </div>
        <div class="cmd_item">
          <span class="cmd_name">图片旋转</span>
          <rotate class="cmd_detail"></rotate>
        </div>
        <div class="cmd_item">
          <span class="cmd_name">图片水印</span>
          <watermark class="cmd_detail"></watermark>
        </div>
        <div class="cmd_item">
          <div class="cmd_name">
            <span >自动旋正</span>
            <question-icon :tooltip="'开启后，会根据图片EXIF中的信息进行旋转'" :iconSize="14"></question-icon>
          </div>
          <auto-orient class="cmd_detail"></auto-orient>
        </div>
        <div class="cmd_item">
          <span class="cmd_name">输出格式</span>
          <output-format class="cmd_detail"></output-format>
        </div>
        <div class="cmd_item">
          <span class="cmd_name">图片质量</span>
          <quality class="cmd_detail"></quality>
        </div>
      </div>
      <div class="effect_container">
        <img-effect></img-effect>
      </div>
    </div>
  </div>
</template>

<script>
import autoOrient from './autoOrient'
import crop from './crop'
import imgEffect from './imgEffect'
import outputFormat from './outputFormat'
import processCmd from './processCmd'
import quality from './quality'
import resize from './resize'
import rotate from './rotate'
import watermark from './watermark'
import questionIcon from '@/components/questionIcon'
export default {
  data () {
    return {
    }
  },
  components: {
    autoOrient,
    crop,
    imgEffect,
    outputFormat,
    processCmd,
    questionIcon,
    quality,
    resize,
    rotate,
    watermark
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .style_container {
    display: flex;
    flex-direction: row;
    align-items: start;
    .cmd_container {
      width: 70%;
      border-right: 1px solid #dcdfe5;
      padding-bottom: 50px;
      .cmd_item {
        margin-top: 50px;
        padding-bottom: 50px;
        border-bottom: 1px solid #e6e9f0;
        @include fa(baseline);
        .cmd_name {
          flex: 2;
          margin-left: 30px;
          font-size: 16px;
          color: $regularTextColor;
        }
        .cmd_detail {
          flex: 8;
        }
      }
    };
    .effect_container{
      width: 30%;
      padding: 50px 20px 50px 40px
    }
  }
</style>
