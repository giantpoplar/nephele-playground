<template>
  <div>
    <div>
      <el-radio v-model="paramType" label="wh"  border>宽高模式</el-radio>
      <el-radio v-model="paramType" label="p"  border>百分比模式</el-radio>
    </div>
    <div class="crop_sample_box">
      <div class="sample_img_wrapper">
        <img src="@/assets/crop/crop-sample-img.png">
        <div class="gravity" :class="gravityActiveClass"></div>
        <div :class="originalCropBoxClass"></div>
        <div class="final" :class="cropBoxClass" :style="offsetStyle" v-if="cropType === '2'"></div>
      </div>
    </div>
    <div class="crop_params_wrapper">
      <div class="input_wrapper" v-if="paramType === 'wh'">
        <span>宽度</span>
        <el-input placeholder="1-9999" v-model="cropWidth" class="number_input" size="medium" type="number" min="1" max="9999">
          <template slot="append">PX</template>
        </el-input>
      </div>
      <div class="input_wrapper" v-if="paramType === 'wh'">
        <span>高度</span>
        <el-input placeholder="1-9999" v-model="cropHeight" class="number_input" size="medium" type="number" min="1" max="9999">
          <template slot="append">PX</template>
        </el-input>
      </div>
      <div class="input_wrapper" v-if="paramType === 'p'">
        <span>占比</span>
        <el-input placeholder="1-99" v-model="cropPercent" class="number_input" size="medium" type="number" min="1" max="99">
          <template slot="append">%</template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      paramType: 'wh',
      cropWidth: 200,
      cropHeight: 200,
      cropPercent: 20
    }
  },
  props: ['cropType'],
  computed: {
    ...mapState({
      selectedGravity: state => state.userImgStyle.selectedGravity,
      xOffset: state => state.userImgStyle.cropXOffset,
      yOffset: state => state.userImgStyle.cropYOffset,
      offsetType: state => state.userImgStyle.cropOffsetType
    }),
    gravityActiveClass: function () {
      return {
        'center': this.selectedGravity === 'Center',
        'east': this.selectedGravity === 'East',
        'north': this.selectedGravity === 'North',
        'north_west': this.selectedGravity === 'NorthWest',
        'west': this.selectedGravity === 'West',
        'south': this.selectedGravity === 'South'
      }
    },
    cropBoxClass: function () {
      if (this.cropType === '2') {
        return {
          'crop_box_wh': this.paramType === 'wh',
          'crop_box_p': this.paramType === 'p',
          'north_west': this.selectedGravity === 'NorthWest',
          'center': this.selectedGravity === 'Center'
        }
      }
      return {}
    },
    originalCropBoxClass: function () {
      const c = this.cropBoxClass
      if (this.cropType === '2') {
        c['final'] = true
      } else {
        c['crop_box_full'] = true
        c['margin_top_h'] = true
      }
      return c
    },
    offsetStyle: function () {
      if (this.cropType !== '2' || this.selectedGravity !== 'NorthWest' || this.offsetType === '0') {
        return {}
      }
      let xOffset = '0px'
      let yOffset = '0px'
      if (this.xOffset > 0) {
        xOffset = '10px'
      } else if (this.xOffset < 0) {
        xOffset = '-10px'
      }
      if (this.yOffset > 0) {
        yOffset = '10px'
      } else if (this.yOffset < 0) {
        yOffset = '-10px'
      }
      return {
        transform: `translateX(${xOffset}) translateY(${yOffset})`
      }
    },
    originalBackground: function () {
      if (this.cropType === '3') {
        return {
          
        }
      } else {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .crop_sample_box {
    position: relative;
    width: 280px;
    height: 160px;
    margin-bottom: 20px;
    .sample_img_wrapper {
      width: 171px;
      height: 111px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -55px 0 0 -85px;
      z-index: 1;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .gravity {
        width: 10px;
        height: 10px;
        position: absolute;
        z-index: 2;
        background: url(../../../assets/crop/highlight.png) no-repeat 50%/100%;
        &.center, &.north, &.south {
          margin-left: -5px;
        }
        &.center, &.east, &.west {
          margin-top: -5px;
        }
      }
      .crop_box_full {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        &.margin_top_h {
          background: url(../../../assets/crop/crop-margin-top-h.png) no-repeat 50%/100%
        }
      }
      .crop_box_wh {
        position: absolute;
        width: 110px;
        height: 80px;
        &.final {
          background: url(../../../assets/crop/final-region-wh.png) no-repeat 50%/100%;
        }
        &.original {
          background: url(../../../assets/crop/original-region-wh.png) no-repeat 50%/100%;
        }
        &.center, &.north, &.south {
          margin-left: -55px;
        }
        &.center, &.east, &.west {
          margin-top: -40px;
        }
      }
      .crop_box_p {
        position: absolute;
        width: 112px;
        height: 74px;
        &.final {
          background: url(../../../assets/crop/final-region-p.png) no-repeat 50%/100%;
        }
        &.original {
          background: url(../../../assets/crop/original-region-p.png) no-repeat 50%/100%;
        }
        &.center, &.north, &.south {
          margin-left: -56px;
        }
        &.center, &.east, &.west {
          margin-top: -37px;
        }
      }
      .east, .north_east, .south_east {
        right: 0px;
      }
      .north, .north_east, .north_west {
        top: 0px;
      }
      .south, .south_east, .south_west {
        bottom: 0px;
      }
      .north_west, .south_west, .west {
        left: 0px;
      }
      .center, .north, .south {
        left: 50%;
      }
      .center, .east, .west {
        top: 50%;
      }
    }
  };
  .crop_params_wrapper {
      @include fa();
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
  .offset_wrapper {
    margin-top: 20px;
  }
</style>
