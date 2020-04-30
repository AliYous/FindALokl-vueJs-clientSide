import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/local'
import local from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    local,
    auth
  }
})
