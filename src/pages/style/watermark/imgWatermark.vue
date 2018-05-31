<template>
  <div class="img_watermark_container">
    <div class="sub_setting_item">
      <span class="sub_setting_label">水印图片</span>
      <div class="sub_setting_content">
        <el-input placeholder="请输入图片URL" v-model="watermarkName" clearable class="watermark_url_input">
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
      <div class="sub_setting_label">
        <tag name="原图限制" tooltip="原图的宽或高大于限定的宽高，将不做打水印处理"></tag>
      </div>
      <div class="sub_setting_content">
        <srcImgWatermarkLimit></srcImgWatermarkLimit>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPercent } from '@/utils'
import tag from '@/components/tag'
import srcImgWatermarkLimit from './srcImgWatermarkLimit'
import watermarkPosition from './watermarkPosition'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      minWatermarkOpacity: 1,
      alignBaseline: {
        alignItems: 'baseline'
      }
    }
  },
  computed: {
    watermarkName: {
      get () {
        return this.$store.state.userImgStyle.watermarkName
      },
      set (value) {
        this.SET_WATERMARK_NAME(value)
      }
    },
    watermarkOpacity: {
      get () {
        return this.$store.state.userImgStyle.watermarkOpacity
      },
      set (value) {
        this.SET_WATERMARK_OPACITY(value)
      }
    }
  },
  components: {
    tag,
    srcImgWatermarkLimit,
    watermarkPosition
  },
  methods: {
    ...mapMutations([
      'SET_WATERMARK_NAME',
      'SET_WATERMARK_OPACITY'
    ]),
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
