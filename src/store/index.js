import Vue from 'vue'
import Vuex from 'vuex'
import userImgStyle from './modules/userImgStyle'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userImgStyle
  }
})

export default store
