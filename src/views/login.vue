<template>
  <div class="login-container">
    <div class="login-content">
      <!-- <img class="logo" src="../assets/login/logo.png" alt=""> -->
      <!-- <img class="logo logs" src="@/assets/login/logs.png" alt="" /> -->
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <div class="title-container">
          <img class="title" src="@/assets/login/login_title.png" alt="" />
        </div>

        <el-form-item prop="username">
          <!-- <span class="svg-container">
          <i class="el-icon-user"></i>
        </span> -->
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <!-- <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span> -->
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.native.enter="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <i class="el-icon-view" />
          </span>
        </el-form-item>

        <el-button
          :loading="loading"
          type="primary"
          class="login-button"
          @click.native.prevent="handleLogin"
        >
          登录
        </el-button>

        <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: 123</span>
      </div> -->
      </el-form>
    </div>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import { login } from '@/api/user'

export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // this.$store.dispatch('user/login', this.loginForm).then(() => {
          //   this.$router.push({ path: this.redirect || '/' })
          //   this.loading = false
          // }).catch(() => {
          //   this.loading = false
          // })
          const param = {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
          login(param).then(async (res) => {
            if(res.code === 200){
              this.loading = false
              sessionStorage.setItem('token',res.data)
              sessionStorage.setItem('refreshToken',res.data.refreshToken)
              sessionStorage.setItem('username','Admin')
              this.$router.push({ path: '/' })
            }else{
              this.loading = false
            }
          }).catch((res) => {
            this.loading = false
          })

        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 100%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #666666;
      height: 47px;
      caret-color: #666666;

      // &:-webkit-autofill {
      //   box-shadow: 0 0 0px 1000px $bg inset !important;
      //   -webkit-text-fill-color: $cursor !important;
      // }
    }
  }

  .el-form-item {
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    color: #666666;
    margin-bottom: 40px;
  }
  .login-button {
    width: 360px;
    height: 50px;
    margin: 50px 0 30px;
    background: #0055a6;
    border-radius: 25px;
    font-size: 22px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-image: url("../assets/login/login_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  .login-content {
    position: relative;
    padding: 120px 0 0 0;
    .logo {
      width: 475px;
      height: 64px;
      position: absolute;
      left: 40px;
      top: 32px;
    }
    .logs {
      width: 281px;
      height: 94px;
    }
  }
  .login-form {
    position: relative;
    width: 580px;
    height: 600px;
    max-width: 100%;
    padding: 70px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 25px #cac6c6;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    i {
      font-size: 20px;
    }
  }

  .title-container {
    position: relative;

    .title {
      font-size: 56px;
      color: #0055a6;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
      font-style: oblique;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
