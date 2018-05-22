import {
  SET_SELECTED_GRAVITY,
  SET_CROP_X_OFFSET,
  SET_CROP_Y_OFFSET,
  SET_CROP_OFFSET_TYPE
} from '../mutation-types'
const userImgStyle = {
  state: {
    selectedGravity: '',
    cropOffsetType: '0',
    cropXOffset: 0,
    cropYOffset: 0
  },

  mutations: {
    [SET_SELECTED_GRAVITY] (state, selectedGravity) {
      state.selectedGravity = selectedGravity
    },
    [SET_CROP_X_OFFSET] (state, xOffset) {
      state.cropXOffset = xOffset
    },
    [SET_CROP_Y_OFFSET] (state, yOffset) {
      state.cropYOffset = yOffset
    },
    [SET_CROP_OFFSET_TYPE] (state, offsetType) {
      state.cropOffsetType = offsetType
    }
  },

  actions: {
  }
}

export default userImgStyle
