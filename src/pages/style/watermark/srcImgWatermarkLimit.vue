<template>
  <div>
    <div>
      <el-radio v-model="isSrcImgWatermarkLimit" label="0" border>不限制</el-radio>
      <el-radio v-model="isSrcImgWatermarkLimit" label="1" border>限制</el-radio>
    </div>
    <div class="limit_params_container" v-if="isSrcImgWatermarkLimit === '1'">
      <div class="input_wrapper">
        <span>限制宽</span>
        <el-input placeholder="1-9999" v-model="limitWidth" class="number_input" size="medium" type="number" min="1" max="9999">
          <template slot="append">PX</template>
        </el-input>
      </div>
      <div class="input_wrapper">
        <span>限制高</span>
        <el-input placeholder="1-99999" v-model="limitWidth" class="number_input" size="medium" type="number" min="1" max="9999">
          <template slot="append">PX</template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSrcImgWatermarkLimit: '0',
      limitWidth: 200,
      limitHeight: 200
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .limit_params_container {
    margin-top: 20px;
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
