<template>
  <div>
    <div>
      <el-radio v-model="watermarkSrcLimit" label="0" border>不限制</el-radio>
      <el-radio v-model="watermarkSrcLimit" label="1" border>限制</el-radio>
    </div>
    <div class="limit_params_container" v-if="watermarkSrcLimit === '1'">
      <div class="input_wrapper">
        <span>限制宽</span>
        <el-input placeholder="1-9999" v-model="watermarkSrcLimitWidth" class="number_input" size="medium" type="number" min="1" max="9999">
          <template slot="append">PX</template>
        </el-input>
      </div>
      <div class="input_wrapper">
        <span>限制高</span>
        <el-input placeholder="1-99999" v-model="watermarkSrcLimitHeight" class="number_input" size="medium" type="number" min="1" max="9999">
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
    return {}
  },
  computed: {
    watermarkSrcLimit: {
      get () {
        return this.$store.state.userImgStyle.watermarkSrcLimit
      },
      set (value) {
        this.SET_WATERMARK_SRC_LIMIT(value)
      }
    },
    watermarkSrcLimitWidth: {
      get () {
        return this.$store.state.userImgStyle.watermarkSrcLimitWidth
      },
      set (value) {
        this.SET_WATERMARK_SRC_LIMIT_WIDTH(value)
      }
    },
    watermarkSrcLimitHeight: {
      get () {
        return this.$store.state.userImgStyle.watermarkSrcLimitHeight
      },
      set (value) {
        this.SET_WATERMARK_SRC_LIMIT_HEIGHT(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_WATERMARK_SRC_LIMIT',
      'SET_WATERMARK_SRC_LIMIT_HEIGHT',
      'SET_WATERMARK_SRC_LIMIT_WIDTH'
    ])
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
