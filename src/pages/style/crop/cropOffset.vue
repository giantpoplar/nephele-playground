<template>
  <div class="offset_wrapper">
    <div>
      <el-radio v-model="offsetType" label="0"  border>不偏移</el-radio>
      <el-radio v-model="offsetType" label="1"  border>偏移</el-radio>
    </div>
    <div class="offset_params_wrapper" v-if="offsetType === '1'">
      <div class="input_wrapper">
        <span>水平方向偏移</span>
        <el-input placeholder="1-9999" v-model="xOffset" class="number_input" size="medium" type="number" min="1" max="9999">
          <template slot="append">PX</template>
        </el-input>
      </div>
      <div class="input_wrapper">
        <span>垂直方向偏移</span>
        <el-input placeholder="1-9999" v-model="yOffset" class="number_input" size="medium" type="number" min="1" max="9999">
          <template slot="append">PX</template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    offsetType: {
      get () {
        return this.$store.state.userImgStyle.cropOffsetType
      },
      set (value) {
        this.SET_CROP_OFFSET_TYPE(value)
      }
    },
    xOffset: {
      get () {
        return this.$store.state.userImgStyle.cropXOffset
      },
      set (value) {
        this.SET_CROP_X_OFFSET(value)
      }
    },
    yOffset: {
      get () {
        return this.$store.state.userImgStyle.cropYOffset
      },
      set (value) {
        this.SET_CROP_Y_OFFSET(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_CROP_X_OFFSET',
      'SET_CROP_Y_OFFSET',
      'SET_CROP_OFFSET_TYPE'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .offset_params_wrapper {
      margin-top: 30px;
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
</style>
