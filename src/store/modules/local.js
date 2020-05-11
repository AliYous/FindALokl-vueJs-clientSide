import axios from '@/axios';

  const state = {
    citySearched: '',
    lastSearchedLocals: []
  }

  const getters = {
    citySearched: state => state.citySearched,
    lastLoadedLocals: state => state.lastSearchedLocals,
  }

  const actions = {
    async fetchLocalPreviews({ commit }, city) {
        await axios.get(`/locals/previews/city/${city}`).then(res => {
            let localPreviewsArray = [];
            Object.entries(res.data).forEach((entry) => {
                localPreviewsArray.push(entry[1]);
            })
            commit('SET_LOCAL_PREVIEWS', {localPreviewsArray, city})
        }).catch(err => {
            console.log(err)
        })
    },
  }
 

  const mutations = {
    SET_LOCAL_PREVIEWS(state, data) {
        state.citySearched = data.city
        state.lastSearchedLocals = data.localPreviewsArray
    }
  }

  // const modules = {
  // }


export default {
  state,
  getters,
  actions,
  mutations
}


