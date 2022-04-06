<template>
  <div>
    <seach-form-compent :inputArray="inputArray" @search="search" />
    <table-compent
      title="清理人路线管理"
      :fields="fields"
      :tableData="tableData"
      :czbtnData="czbtnData"
      :table-length="tableLength"
      @handleBtn="handleBtn"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
import seachFormCompent from '@/components/seachFormCompent/seachFormCompent.vue'
import TableCompent from '@/components/tableCompent/tableCompent.vue'
import myMixin from '@/mixin'
import { fields } from './table.config'

export default {
  name: 'cleanerRoute',
  data() {
    return{
      fields,
      czbtnData: ['配置'],
      tableData: [{name: 'tof'}],
      inputArray: [{
        placeholder: '名称',
        prop: 'name'
      }]
    }
  },
  mixins: [myMixin],
  components: {
    seachFormCompent,
    TableCompent
  },
  methods: {
    handleBtn(e) {
      if (e.btn == '配置') {
        console.log(e.btn)
      }
    }
  }

}
</script>

<style>

</style>
