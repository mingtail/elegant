import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // plugins: debug ? [createLogger()] : [],
  state: {
    tabState: true,
    transitionName: 'fade',
  },
  getters: {
    tabState: state => state.tabState,
    transitionName: state => state.transitionName,
  },
  mutations: {
    setTabState(state, tab) {
      state.tabState = tab;
    },
    setTransitionName(state, name) {
      state.transitionName = name;
    },
  },
  actions: {}
})
