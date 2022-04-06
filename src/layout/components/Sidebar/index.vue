<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <div class="menuBtnClass" @click="toggleSideBar">
      <img v-if="open" src="../../../assets/save_img/open.png">
      <img v-else src="../../../assets/save_img/close.png">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  data() {
    return {
      open:true
    }
  },
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
      //return  JSON.parse(localStorage.getItem('routerPath'))
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  watch:{
    $route:function(newVal){
      console.log("***",newVal)
    }
  },
  mounted() {
    console.log('*******',this.$router.options.routes)
  },
  methods:{
    toggleSideBar() {
      this.open=!this.open
      this.$store.dispatch('app/toggleSideBar')
    },
  }
}
</script>
<style lang="scss" scoped>
  .hideSidebar .menuBtnClass{
    position: fixed;
    top: 40%;
    left: 54px;
    -webkit-transition: left 0.28s;
    transition: left 0.28s;
    cursor: pointer;
  }
  .openSidebar .menuBtnClass{
    position: fixed;
    top: 40%;
    left: 200px;
    -webkit-transition: left 0.28s;
    transition: left 0.28s;
    cursor: pointer;
  }
</style>
