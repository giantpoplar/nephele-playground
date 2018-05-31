<template>
  <div class="process_cmd_container">
    <span>处理命令</span>
    <div class="process_cmd">
      <div class="process_cmd_codes">{{ cmd }}</div>
      <div class="cmd_copy">
        <div class="cmd_text_wrap" @click="doCopy">
          <a>复制命令</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      cmdOrder: state => state.userImgStyle.cmdOrder,
      autoOrient: state => state.userImgStyle.autoOrient,
      // resize
      resizeMode: state => state.userImgStyle.resizeMode,
      resizeType: state => state.userImgStyle.resizeType,
      resizeWidth: state => state.userImgStyle.resizeWidth,
      resizeHeight: state => state.userImgStyle.resizeHeight,
      resizePercent: state => state.userImgStyle.resizePercent,
      resizeLimit: state => state.userImgStyle.resizeLimit,
      // crop
      cropType: state => state.userImgStyle.cropType,
      cropParamType: state => state.userImgStyle.cropParamType,
      cropWidth: state => state.userImgStyle.cropWidth,
      cropHeight: state => state.userImgStyle.cropHeight,
      cropPercent: state => state.userImgStyle.cropPercent,
      cropOffsetType: state => state.userImgStyle.cropOffsetType,
      cropXOffset: state => state.userImgStyle.cropXOffset,
      cropYOffset: state => state.userImgStyle.cropYOffset,
      cropGravity: state => state.userImgStyle.cropGravity,
      cropCenterGravityMarginMode: state => state.userImgStyle.cropCenterGravityMarginMode,
      // format
      format: state => state.userImgStyle.format,
      // quality
      qualityType: state => state.userImgStyle.qualityType,
      quality: state => state.userImgStyle.quality,
      // rotate
      rotateType: state => state.userImgStyle.rotateType,
      rotateAngle: state => state.userImgStyle.rotateAngle,
      // watermark
      watermarkType: state => state.userImgStyle.watermarkType,
      watermarkName: state => state.userImgStyle.watermarkName,
      watermarkOpacity: state => state.userImgStyle.watermarkOpacity,
      watermarkGravity: state => state.userImgStyle.watermarkGravity,
      watermarkPaddingX: state => state.userImgStyle.watermarkPaddingX,
      watermarkPaddingY: state => state.userImgStyle.watermarkPaddingY,
      watermarkSrcLimit: state => state.userImgStyle.watermarkSrcLimit,
      watermarkSrcLimitWidth: state => state.userImgStyle.watermarkSrcLimitWidth,
      watermarkSrcLimitHeight: state => state.userImgStyle.watermarkSrcLimitHeight
    }),
    cmd: function () {
      const m = {
        'resize': this.resize,
        'crop': this.crop,
        'rotate': this.rotate,
        'watermark': this.watermark,
        'autoorient': this.autoOrientCmd,
        'quality': this.qualityCmd,
        'format': this.outFormat
      }
      let processCmd = `x-nephele-process=image/`
      for (let c of this.cmdOrder) {
        processCmd += m[c]
      }
      processCmd = processCmd.substr(0, processCmd.length - 1)
      this.SET_STYLE_CMD(processCmd)
      return processCmd
    },
    autoOrientCmd: function () {
      if (this.autoOrient === '0') {
        return ''
      }
      return 'autoorient/'
    },
    resize: function () {
      const resizeCmd = []
      switch (this.resizeMode) {
        case '':
          return ''
        default:
          if (this.resizeType[this.resizeMode] === 'resize-wh-adapt') {
            resizeCmd.push('crop,m_resize')
          } else {
            resizeCmd.push(`resize,m_${this.resizeMode}`)
          }
      }
      switch (this.resizeType[this.resizeMode]) {
        case 'resize-wh-adapt':
        case 'resize-wh-force':
        case 'resize-wh-contain':
          resizeCmd.push(`w_${this.resizeWidth},h_${this.resizeHeight}`)
          break
        case 'resize-h-w-auto':
          resizeCmd.push(`w_0,h_${this.resizeHeight}`)
          break
        case 'resize-w-h-auto':
          resizeCmd.push(`w_${this.resizeWidth},h_0`)
          break
        case 'resize-wh-percent':
          resizeCmd.push(`p_${this.resizePercent}`)
          break
      }
      if (this.resizeLimit) {
        resizeCmd.push(`limit_1`)
      } else {
        resizeCmd.push(`limit_0`)
      }
      return resizeCmd.join(',') + '/'
    },
    crop: function () {
      const cropCmd = []
      switch (this.cropType) {
        case '':
          return ''
        case 'cutout':
          switch (this.cropGravity[this.cropType]) {
            case 'NorthWest':
              cropCmd.push('crop,m_crop')
              if (this.cropOffsetType === '1') {
                cropCmd.push(`x_${this.cropXOffset},y_${this.cropYOffset}`)
              }
              break
            case 'Center':
              cropCmd.push('crop,m_c')
              break
          }
          cropCmd.push(this.cropParamType === 'wh' ? `w_${this.cropWidth},h_${this.cropHeight}` : `p_${this.cropPercent}`)
          break
        case 'cutMargin':
          switch (this.cropGravity[this.cropType]) {
            case 'North':
              cropCmd.push('crop,m_t')
              cropCmd.push(this.cropParamType === 'wh' ? `h_${this.cropHeight}` : `p_${this.cropPercent}`)
              break
            case 'South':
              cropCmd.push('crop,m_b')
              cropCmd.push(this.cropParamType === 'wh' ? `h_${this.cropHeight}` : `p_${this.cropPercent}`)
              break
            case 'West':
              cropCmd.push('crop,m_l')
              cropCmd.push(this.cropParamType === 'wh' ? `w_${this.cropWidth}` : `p_${this.cropPercent}`)
              break
            case 'East':
              cropCmd.push('crop,m_r')
              cropCmd.push(this.cropParamType === 'wh' ? `w_${this.cropWidth}` : `p_${this.cropPercent}`)
              break
            case 'Center':
              if (this.cropCenterGravityMarginMode === 'wc') {
                cropCmd.push('crop,m_wc')
                cropCmd.push(this.cropParamType === 'wh' ? `w_${this.cropWidth}` : `p_${this.cropPercent}`)
              } else {
                cropCmd.push('crop,m_hc')
                cropCmd.push(this.cropParamType === 'wh' ? `w_${this.cropHeight}` : `p_${this.cropPercent}`)
              }
          }
          break
      }
      return cropCmd.join(',') + '/'
    },
    outFormat: function () {
      if (this.format === 'same') {
        return ''
      }
      return `format,v_${this.format}/`
    },
    qualityCmd: function () {
      if (this.qualityType === '0') {
        return ''
      }
      return `quality,v_${this.quality}/`
    },
    watermark: function () {
      const watermarkCmd = []
      if (this.watermarkType === '0') {
        return ''
      }
      watermarkCmd.push(`watermark,n_${btoa(this.watermarkName)},d_${this.watermarkOpacity},l_${this.watermarkGravity},x_${this.watermarkPaddingX},y_${this.watermarkPaddingY}`)
      if (this.watermarkSrcLimit === '1') {
        watermarkCmd.push(`mw_${this.watermarkSrcLimitWidth},mh_${this.watermarkSrcLimitHeight}`)
      }
      return watermarkCmd.join(',') + '/'
    },
    rotate: function () {
      if (this.rotateType === '0') {
        return ''
      }
      return `rotate,v_${this.rotateAngle}/`
    }
  },
  methods: {
    ...mapMutations([
      'SET_STYLE_CMD'
    ]),
    doCopy: function (e) {
      this.$copyText(this.cmd).then(() => {
        this.$message({
          message: '已复制到剪切板',
          type: 'success'
        })
      }, () => {
        this.$message({
          message: '复制到剪切板失败',
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .process_cmd_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    border-bottom: 1px solid #e6e9f0;
    padding: 0 30px 30px 30px;
    span {
      width: 14.2%;
      color: $regularTextColor;
    }
    .process_cmd {
      width: 70%;
      position: relative;
      .process_cmd_codes {
        color: $secondaryTextColor;
        padding: 12px;
        word-wrap: break-word;
        border: 1px solid #dcdfe5;
        margin-right: 100px;
        border-radius: 5px 0 0 5px;
        font-size: 13px;
      }
      .cmd_copy {
        right: 0;
        top: 0;
        position: absolute;
        height: 96.5%;
        width: 100px;
        text-align: center;
        border: 1px solid #dcdfe5;
        border-left-width: 0;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        .cmd_text_wrap {
          display: table;
          width: 100%;
          height: 100%;
          a {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            color: $blue;
            font-weight: 500;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
