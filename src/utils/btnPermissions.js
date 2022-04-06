import Vue from 'vue'
const has = Vue.directive('has', {
  bind: function (el, binding, vnode) {
    // 获取按钮权限
    let btnName = vnode.data.attrs.btnName
    if (btnName == '批量录入' && vnode.context.$route.meta.title == '质量管理'){  //质量管理的批量录入 特殊
      btnName = '录入'
    }
    let btnPermissions = vnode.context.$route.meta.btnPermissions
    // console.log(btnName)
    // console.log(btnPermissions)
    // console.log(vnode.context.$route.meta)
    if (btnName in btnPermissions){
      //console.log(vnode.data.attrs.btnName)
      if (!btnPermissions[btnName].bind){ //权限false 移除按钮
        el.style.display = 'none'
      }
    }
  },
  update: function (el, binding, vnode) {
    // 获取按钮权限
    let btnName = vnode.data.attrs.btnName
    if (btnName == '批量录入' && vnode.context.$route.meta.title == '质量管理') {  //质量管理的批量录入 特殊
      btnName = '录入'
    }
    let btnPermissions = vnode.context.$route.meta.btnPermissions
    // console.log(btnName)
    // console.log(btnPermissions)
    // console.log(vnode.context.$route.meta)
    if (btnName in btnPermissions) {
      //console.log(vnode.data.attrs.btnName)
      if (!btnPermissions[btnName].bind) { //权限false 移除按钮
        el.style.display = 'none'
      }
    }
  }
});


export { has };
