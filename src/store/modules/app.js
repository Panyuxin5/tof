const state = {
  sidebar: {
    opened: localStorage.getItem('sidebarStatus') ? !!+localStorage.getItem('sidebarStatus') : true, // false:sidebar侧边栏隐藏，open 展开
    withoutAnimation: false //设置显示，隐藏sidebar侧边栏 是否有动画，false：有；true：动画消失
  },
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
}

export default {
  namespaced: true, //不同页面中引入getter、actions、mutations时，需要加上所属的模块名
  state,
  mutations,
  actions
}
