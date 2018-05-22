<template>
  <div class="cutout_setting_container">
    <div class="sub_setting_item">
      <span class="sub_setting_label">选择原点</span>
      <div class="sub_setting_content">
        <gravity
          :validGravity="['NorthWest', 'Center']"
          :initGravity="'NorthWest'"
          :gravityImg="gravityDemoImg"
          :hint="'点击下图中的圆点，选取抠图原点'">
        </gravity>
      </div>
    </div>
    <div class="sub_setting_item">
      <span class="sub_setting_label">设置裁剪区域</span>
      <div class="sub_setting_content">
        <crop-region cropType="2"></crop-region>
      </div>
    </div>
    <div class="sub_setting_item" v-if="selectedGravity === 'NorthWest'">
      <span class="sub_setting_label">设置偏移量</span>
      <div class="sub_setting_content">
        <crop-offset></crop-offset>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import gravityDemoImg from '../../../assets/crop/cutout-gravity.png'
import cropOffset from './cropOffset'
import cropRegion from './cropRegion'
import gravity from './gravity'
export default {
  data () {
    return {
      gravityDemoImg: gravityDemoImg
    }
  },
  components: {
    cropOffset,
    cropRegion,
    gravity
  },
  computed: {
    ...mapState({
      selectedGravity: state => state.userImgStyle.selectedGravity
    })
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .cutout_setting_container {
    margin-top: 20px;
    .sub_setting_item {
      padding: 40px 0;
      border-top: 1px solid #e6e9f0;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      font-size: 14px;
      .sub_setting_label {
        flex: 2;
        color: $regularTextColor;
        font-weight: 400;
      }
      .sub_setting_content {
        flex: 8;
      }
    }
  }
</style>
