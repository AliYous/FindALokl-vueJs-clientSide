import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios';

Vue.use(Vuex)

export default {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },

  actions: {
    async login({ commit }, user) {
      commit('auth_request')
      const resp = await axios.post('/user/login', user )
      const token = resp.data
      user = resp.data.user
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = token
      commit('auth_success', token, user)
      return user;
    },
    async register({ commit }, user) {
      commit('auth_request')
      const resp = await axios.post('/user/register', user )
      console.log(resp)
    },
    logout({ commit }) {
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']    
      commit('logout')
    }
  },

  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
      state.user = {}
    },
  },
  modules: {
  }
}
