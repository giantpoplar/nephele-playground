import {
  SET_AUTO_ORIENT,
  SET_CMD_ORDER,
  SET_CROP_TYPE,
  SET_CROP_GRAVITY,
  SET_CROP_PARAM_TYPE,
  SET_CROP_WIDTH,
  SET_CROP_HEIGHT,
  SET_CROP_PERCENT,
  SET_CROP_X_OFFSET,
  SET_CROP_Y_OFFSET,
  SET_CROP_OFFSET_TYPE,
  SET_CROP_CENTER_GRAVITY_MARGIN_MODE,
  SET_FORMAT,
  SET_QUALITY_TYPE,
  SET_QUALITY,
  SET_RESIZE_MODE,
  SET_RESIZE_TYPE,
  SET_RESIZE_WIDTH,
  SET_RESIZE_HEIGHT,
  SET_RESIZE_PERCENT,
  SET_RESIZE_LIMIT,
  SET_ROTATE_TYPE,
  SET_ROTATE_ANGLE,
  SET_WATERMARK_TYPE,
  SET_WATERMARK_NAME,
  SET_WATERMARK_OPACITY,
  SET_WATERMARK_GRAVITY,
  SET_WATERMARK_PADDING_X,
  SET_WATERMARK_PADDING_Y,
  SET_WATERMARK_SRC_LIMIT,
  SET_WATERMARK_SRC_LIMIT_WIDTH,
  SET_WATERMARK_SRC_LIMIT_HEIGHT,
  SET_STYLE_CMD
} from '../mutation-types'
const userImgStyle = {
  state: {
    cmdOrder: ['resize', 'crop', 'rotate', 'watermark', 'autoorient', 'format', 'quality'],
    autoOrient: '0',
    // resize parameter
    resizeMode: '',
    resizeType: {
      fixed: 'resize-wh-force',
      lfit: 'resize-wh-adapt'
    },
    resizeWidth: 200,
    resizeHeight: 200,
    resizePercent: 50,
    resizeLimit: false,
    // crop parameter
    cropType: '',
    cropGravity: {
      cutout: 'NorthWest',
      cutMargin: 'North'
    },
    cropParamType: 'wh',
    cropWidth: 200,
    cropHeight: 200,
    cropPercent: 20,
    cropOffsetType: '0',
    cropXOffset: 0,
    cropYOffset: 0,
    cropCenterGravityMarginMode: 'wc',
    // watermark paramter
    watermarkType: '0',
    watermarkName: 'wm1.png',
    watermarkOpacity: 100,
    watermarkGravity: 'se',
    watermarkPaddingX: 10,
    watermarkPaddingY: 10,
    watermarkSrcLimit: '0',
    watermarkSrcLimitWidth: 200,
    watermarkSrcLimitHeight: 200,
    // rotate paramter
    rotateType: '0',
    rotateAngle: 0,
    // format
    format: 'same',
    // qualtiy
    qualityType: '0',
    quality: 75,
    // composite style cmd
    styleCmd: ''
  },

  mutations: {
    [SET_AUTO_ORIENT] (state, auto) {
      state.autoOrient = auto
    },
    [SET_CMD_ORDER] (state, order) {
      state.cmdOrder = order
    },
    [SET_CROP_TYPE] (state, type) {
      state.cropType = type
    },
    [SET_CROP_PARAM_TYPE] (state, type) {
      state.cropParamType = type
    },
    [SET_CROP_WIDTH] (state, width) {
      state.cropWidth = width
    },
    [SET_CROP_HEIGHT] (state, height) {
      state.cropHeight = height
    },
    [SET_CROP_PERCENT] (state, percent) {
      state.cropPercent = percent
    },
    [SET_CROP_GRAVITY] (state, gravity) {
      state.cropGravity[state.cropType] = gravity
    },
    [SET_CROP_X_OFFSET] (state, xOffset) {
      state.cropXOffset = xOffset
    },
    [SET_CROP_Y_OFFSET] (state, yOffset) {
      state.cropYOffset = yOffset
    },
    [SET_CROP_OFFSET_TYPE] (state, offsetType) {
      state.cropOffsetType = offsetType
    },
    [SET_CROP_CENTER_GRAVITY_MARGIN_MODE] (state, mode) {
      state.cropCenterGravityMarginMode = mode
    },
    [SET_FORMAT] (state, format) {
      state.format = format
    },
    [SET_QUALITY_TYPE] (state, type) {
      state.qualityType = type
    },
    [SET_QUALITY] (state, quality) {
      state.quality = quality
    },
    [SET_RESIZE_MODE] (state, mode) {
      state.resizeMode = mode
    },
    [SET_RESIZE_TYPE] (state, type) {
      state.resizeType[state.resizeMode] = type
    },
    [SET_RESIZE_WIDTH] (state, width) {
      state.resizeWidth = width
    },
    [SET_RESIZE_HEIGHT] (state, height) {
      state.resizeHeight = height
    },
    [SET_RESIZE_PERCENT] (state, percent) {
      state.resizePercent = percent
    },
    [SET_RESIZE_LIMIT] (state, isLimit) {
      state.resizeLimit = isLimit
    },
    [SET_ROTATE_TYPE] (state, type) {
      state.rotateType = type
    },
    [SET_ROTATE_ANGLE] (state, angle) {
      state.rotateAngle = angle
    },
    [SET_WATERMARK_TYPE] (state, type) {
      state.watermarkType = type
    },
    [SET_WATERMARK_NAME] (state, name) {
      state.watermarkName = name
    },
    [SET_WATERMARK_OPACITY] (state, opacity) {
      state.watermarkOpacity = opacity
    },
    [SET_WATERMARK_GRAVITY] (state, gravity) {
      state.watermarkGravity = gravity
    },
    [SET_WATERMARK_PADDING_X] (state, x) {
      state.watermarkPaddingX = x
    },
    [SET_WATERMARK_PADDING_Y] (state, y) {
      state.watermarkPaddingY = y
    },
    [SET_WATERMARK_SRC_LIMIT] (state, limit) {
      state.watermarkSrcLimit = limit
    },
    [SET_WATERMARK_SRC_LIMIT_WIDTH] (state, width) {
      state.watermarkSrcLimitWidth = width
    },
    [SET_WATERMARK_SRC_LIMIT_HEIGHT] (state, height) {
      state.watermarkSrcLimitHeight = height
    },
    [SET_STYLE_CMD] (state, cmd) {
      state.styleCmd = cmd
    }
  },
  actions: {
  }
}

export default userImgStyle
