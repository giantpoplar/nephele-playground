<template>
  <div class="img_watermark_container">
    <div class="sub_setting_item">
      <span class="sub_setting_label">水印图片</span>
      <div class="sub_setting_content">
        <el-input placeholder="请输入图片URL" v-model="watermarkUrl" clearable class="watermark_url_input">
        </el-input>
      </div>
    </div>
    <div class="sub_setting_item">
      <span class="sub_setting_label">水印透明度</span>
      <div class="sub_setting_content">
        <el-slider v-model="watermarkOpacity" :min="minWatermarkOpacity" :format-tooltip="formatPercent"
         show-input class="watermark_opacity_slider">
        </el-slider>
      </div>
    </div>
    <div class="sub_setting_item">
      <span class="sub_setting_label">水印位置</span>
      <div class="sub_setting_content">
        <watermarkPosition></watermarkPosition>
      </div>
    </div>
    <div class="sub_setting_item" :style="alignBaseline">
      <span class="sub_setting_label">原图限制</span>
      <div class="sub_setting_content">
        <srcImgWatermarkLimit></srcImgWatermarkLimit>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPercent } from '@/utils'
import srcImgWatermarkLimit from './srcImgWatermarkLimit'
import watermarkPosition from './watermarkPosition'
export default {
  data () {
    return {
      watermarkUrl: '',
      watermarkOpacity: 100,
      minWatermarkOpacity: 1,
      alignBaseline: {
        alignItems: 'baseline'
      }
    }
  },
  components: {
    srcImgWatermarkLimit,
    watermarkPosition
  },
  methods: {
    formatPercent
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .img_watermark_container {
    margin-top: 20px;
    .sub_setting_item {
      @include fa();
      padding: 40px 0;
      border-top: 1px solid #e6e9f0;
      .sub_setting_label {
        flex: 2;
        line-height: 2;
        font-size: 14px;
        color: $regularTextColor;
        font-weight: 400;
      }
      .sub_setting_content {
        flex: 8;
        .watermark_url_input {
          width: 50%
        }
        .watermark_opacity_slider {
          width: 60%
        }
      }
    }
  }
</style>
