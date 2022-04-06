<template>
  <div class="w-100 h-100">
    <router-view :key="key" />
  </div>

</template>

<script>
export default {
  name: 'childMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  height: calc(100vh);
  width: 100%;
  position: relative;
  overflow: auto;
  /*padding: 60PX 20PX 20px;*/
}
.app-main::-webkit-scrollbar{
  display:none
}

.fixed-header+.app-main {
  padding-top: 50PX;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15PX;
  }
}
</style>
