<template>
  <div>
    <seach-form-compent :selectArray="selectArray" :inputArray="inputArray" @search="search" />
    <table-compent
      title="其他角色管理"
      :btn-flag="btnFlag"
      :fields="fields"
      :tableData="tableData"
      :czbtnData="czbtnData"
      :table-length="tableLength"
      @titleBtn="titleBtn"
      @handleBtn="handleBtn"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
import SeachFormCompent from '@/components/seachFormCompent/seachFormCompent'
import TableCompent from '@/components/tableCompent/tableCompent.vue'
import { fields } from './table.config'
import myMixin from '@/mixin/'

export default {
  name: 'otherRoles',
  data() {
    return {
      fields,
      btnFlag: ['新增'],
      czbtnData: ['生成二维码', 'edit', 'delete'],
      tableData: [{name: 'tof'}],
      selectArray: [{
          placeholder: '角色类型',
          prop: 'userType',
          data: []
      }],
      inputArray: [{
        placeholder: '名称',
        prop: 'name',
      },
      {
        placeholder: '编号',
        prop: 'number'
      }]
    }
  },
  mixins: [myMixin],
  components: {
    SeachFormCompent,
    TableCompent,
  },
  methods: {
    handleBtn(e) {
      console.log(e.btn)
    },
    titleBtn(e) {
      if (e == "新增") {
        this.$router.push('/other_roles/add')
      }
    },
  }
}
</script>

<style>

</style>
