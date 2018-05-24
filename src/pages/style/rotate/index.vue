<template>
  <div>
    <div>
      <el-radio v-model="rotateType" label="0" border>不旋转</el-radio>
      <el-radio v-model="rotateType" label="1" border>自定义角度</el-radio>
    </div>
      <div class="rotate_params_container" v-if="rotateType === '1'">
        <div class="input_wrapper">
          <span class="input_label">旋转角度</span>
          <el-input placeholder="1-360" v-model="rotateAngle" class="number_input" size="medium" type="number" min="1" max="360">
            <template slot="append">度</template>
          </el-input>
        </div>
        <!-- <div class="input_wrapper">
          <span class="input_label">背景颜色</span>
          <el-color-picker v-model="backgroundColor"></el-color-picker>
        </div> -->
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    rotateType: {
      get () {
        return this.$store.state.userImgStyle.rotateType
      },
      set (value) {
        this.SET_ROTATE_TYPE(value)
      }
    },
    rotateAngle: {
      get () {
        return this.$store.state.userImgStyle.rotateAngle
      },
      set (value) {
        this.SET_ROTATE_ANGLE(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_ROTATE_TYPE',
      'SET_ROTATE_ANGLE'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .rotate_params_container {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .input_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 30px;
      .input_label {
        margin-right: 10px;
        font-size: 14px;
        color: $secondaryTextColor;
      }
      .number_input {
        width: 120px;
      }
    }
  }
</style>
