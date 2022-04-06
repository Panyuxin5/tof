import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
// import routers from './modules/routers' //路由处理


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    app,
    settings,
    // routers
  },
  mutations:{
  },
  actions:{
  },
  getters,
  // plugins: [createPersistedState()]
})

export default store
