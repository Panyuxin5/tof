<template>
  <div class="navbar">
    <div class="container">
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span class="user-avatar">{{username}}</span>
          <i class="el-icon-arrow-down" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  inject: ["reload"],
  components: {},
  data(){
    return{
      logo: require('../../assets/logo.png'),
      username:''
    }
  },
  computed: {
    ...mapState({
      routerName: "routerName",
    }),
    ...mapGetters(["sidebar", "avatar"]),
  },
  mounted() {
    // this.username = 'Admin'
    this.username = sessionStorage.getItem('username')
  },
  methods: {
    async logout() {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('refreshToken');
      localStorage.removeItem('username');
      // this.$store.commit('permission/RESET_ALL_ROUTES')
      setTimeout(() => {
        this.$router.replace({
          path: '/login',
        });
      }, 1000);
    }
  },
};
</script>

<style lang="scss" scoped>
// ::v-deep .right-menu{
  // display: none;
// }
.openSidebar .navbar {
  left: 200px;
  -webkit-transition: left 0.28s;
  transition: left 0.28s;
}
.hideSidebar .navbar {
  left: 54px;
  -webkit-transition: left 0.28s;
  transition: left 0.28s;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: fixed;
  background: linear-gradient(to right, #1879fe 0%, #1879fe 100%);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  top: 0;
  left: 200px;
  width: 100%;
  height: 50px;
  z-index: 99;
  .container {
    line-height: 50px;
    span {
      font-size: 20px;
      color: #f7faff;
    }
    span:first-child {
      margin-left: 20px;
    }
    span {
      margin-right: 60px;
    }
  }

  .right-menu {
    position: fixed;
    right: 30px;
    height: 40px;
    line-height: 40px;

    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      color: #fff;
      display: block;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          font-size: 20px;
        }

        .el-icon-arrow-down {
          cursor: pointer;
          position: absolute;
          right: -20px;
          // top: 2px;
          bottom: 12px;
          font-size: 12px;
        }
      }
    }
  }
}
.sidebar-logo-link {
    height: 50px;
    line-height: 47px;

    & .sidebar-logo {
      width: 184px;
      height: 30px;
      vertical-align: middle;
    }
}


</style>
