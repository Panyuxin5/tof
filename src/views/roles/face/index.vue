<template>
  <div>
    <seach-form-compent :selectArray="selectArray" :inputArray="inputArray" @search="search"/>
    <table-compent
      title="人脸管理"
      :fields="fields"
      :tableData="tableData"
      :czbtnData="czbtnData"
      :tableLength="tableLength"
      @handleBtn="handleBtn"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
import SeachFormCompent from '@/components/seachFormCompent/seachFormCompent.vue'
import TableCompent from '@/components/tableCompent/tableCompent.vue'
import myMixin from '@/mixin'
import { fields } from './table.config'

export default {
  name: 'face',
  components: {SeachFormCompent, TableCompent},
  data() {
    return {
      fields,
      tableData: [{name: 'tof'}],
      czbtnData: ['配置'],
      selectArray: [
        {
          placeholder: '角色类型',
          prop: 'userType',
          data: []
        },
        {
          placeholder: '科室',
          prop: 'department',
          data: []
        }
      ],
      inputArray: [
        {
          placeholder: '名称',
          prop: 'name'
        },
        {
          placeholder: '编号',
          prop: 'number'
        }
      ]
    }
  },
  mixins: [myMixin],
  methods: {
    handleBtn(e){
      console.log(e)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
