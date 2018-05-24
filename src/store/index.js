import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import userImgStyle from './modules/userImgStyle'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    userImgStyle
  }
})

export default store
