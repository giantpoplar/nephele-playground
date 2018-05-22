<template>
  <div class="watermark_pos_container">
    <div class="watermark_gravity_container">
      <label v-for="gravity in gravities" :key="gravity.id" class="watermark_gravity_label" :style="labelActiveStyle(gravity.id)">
        <input name="watermark.gravity" type="radio" v-model="watermarkGravity" :value="gravity.id">
        {{ gravity.name }}
        <div class="circle_check" :style="activeCircleCheck(gravity.id)">
          <i class="el-icon-circle-check"></i>
        </div>
      </label>
    </div>
    <div class="watermark_offset_container">
      <div class="arrow_left"></div>
      <div class="number_input_container">
        <span>水平边距</span>
        <el-input placeholder="水平边距" v-model="watermarkPaddingX" class="number_input">
          <template slot="append">PX</template>
        </el-input>
      </div>
      <div class="number_input_container">
        <span>垂直边距</span>
        <el-input placeholder="垂直边距" v-model="watermarkPaddingY" class="number_input">
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
      watermarkGravity: 'se',
      watermarkPaddingX: 10,
      watermarkPaddingY: 10,
      gravities: [
        {id: 'nw', name: '左上'},
        {id: 'north', name: '中上'},
        {id: 'ne', name: '右上'},
        {id: 'west', name: '左中'},
        {id: 'center', name: '正中'},
        {id: 'east', name: '右中'},
        {id: 'sw', name: '左下'},
        {id: 'south', name: '中下'},
        {id: 'se', name: '右下'}
      ]
    }
  },
  methods: {
    labelActiveStyle: function (gravityId) {
      if (this.watermarkGravity === gravityId) {
        return {
          backgroundColor: '#fff',
          color: '#1989fa'
        }
      }
    },
    activeCircleCheck: function (gravityId) {
      if (this.watermarkGravity === gravityId) {
        return {
          display: 'block'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .watermark_pos_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    .watermark_gravity_container {
      width: 150px;
      float: left;
      margin-right: 25px;
      .watermark_gravity_label {
        border-radius: 5px 0 0 0;
        position: relative;
        cursor: pointer;
        display: block;
        float: left;
        width: 50px;
        height: 42px;
        box-sizing: border-box;
        background-color: #f5f7fa;
        color: #8d9199;
        border: 1px solid #e6e9f0;
        margin: 0;
        text-align: center;
        line-height: 44px;
        font-weight: 700;
        font-size: 14px;
        input {
          display: none
        }
        .circle_check {
          position: absolute;
          right: 2px;
          bottom: 2px;
          line-height: 1;
          font-size: 10px;
          display: none;
        }
      }
    }
    .watermark_offset_container {
      position: relative;
      float: left;
      border: 1px solid #e6e9f0;
      border-radius: 5px;
      padding: 7px 17px 17px 17px;
      .arrow_left {
        position: absolute;
        top: 50%;
        margin-top: -10px;
        left: -10px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #e6e9f0;
        &:after {
          position: absolute;
          top: -8px;
          right: -10px;
          content: "";
          display: block;
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 8px solid #fff;
        }
      }
      .number_input_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
        span {
          margin-right: 10px;
          font-size: 13px;
          color: $secondaryTextColor;
        }
        .number_input {
          width: 120px;
        }
      }
    }
  }
</style>
