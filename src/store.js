import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    behavior: ""
  },
  mutations: {
    updateBehavior(state, payload){
      state.behavior = payload.behavior;
    }
  },
  actions: {

  }
})
