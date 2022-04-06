<template>
  <div>
    <seach-form-compent
    :input-array="inputArray"
    :calendar-flag="true"
    :select-array="selectArray"
    :calendarDate="getCurMonth"
    @search="search" />

    <table-compent
      title="医废追溯"
      :btn-flag="btnFlag"
      :table-data="tableData"
      :fields="fields"
      :czbtn-data="czbtnData"
      :table-length="tableLength"
      @titleBtn="titleBtn"
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
  name: 'medicalWasteTracing',
  data() {
    return {
      fields,
      btnFlag: ['导出'],
      inputArray: [
        {
          placeholder: '袋编号',
          prop: 'bagId'
        },
        {
          placeholder: '设备号',
          prop: 'equipmentId'
        },
      ],
      selectArray: [
        {
          placeholder: '科室',
          prop: 'department',
          data: [],
        },
        {
          placeholder: '清理人/交接人',
          prop: 'name',
          data: [],
        },
        {
          placeholder: '医废类型',
          prop: 'type',
          data: [],
        },
        {
          placeholder: '医废状态',
          prop: 'state',
          data: [],
        },
      ],
      czbtnData: ['detail','edit', 'delete'],
    }
  },
  mixins: [myMixin],
  components: {
    SeachFormCompent,
    TableCompent,
  },
}
</script>

<style lang="scss" scoped>
</style>
