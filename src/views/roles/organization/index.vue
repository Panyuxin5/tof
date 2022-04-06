<template>
  <div>
    <seach-form-compent :input-array="inputArray" @search="search"/>
    <table-compent
      title="组织体系管理"
      :btn-flag="btnFlag"
      :table-data="tableData"
      :fields="fields"
      :czbtn-data="czbtnData"
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
  name: 'Organization',
  data() {
    return {
      fields,
      btnFlag: ['新增'],
      czbtnData: ['edit', 'delete'],
      tableData: [{name: 'tof', number: '1', level: '总院'}],
      inputArray: [
        {
          placeholder: '名称',
          prop: 'name'
        }
      ],
    }
  },
  mixins: [myMixin],
  components: {
    SeachFormCompent,
    TableCompent,
  },
  methods: {
    handleClose(){
      this.dialogVisible=false
    },
    titleBtn(e) {
      if (e == '新增') {
        this.$router.push('/organization/add')
      }
    },
    handleBtn(e) {
      let params={
        pickingCode:e.row.pickingCode
      }
      if (e.btn == "edit") {
        this.$router.push({
          path:'/yt-production/pick/picking/add',
          query:{
            id:e.row.pickingCode
          }
        })
        return
      }
      if (e.btn == "detail") {
        this.type=0
        sc_picking_info(e.row.pickingCode).then(res=>{
          if(res.code==0){
            this.dialogData=res.data
            this.dialogVisible=true
          }
        })
        return
      }
      if (e.btn == "delete") {
        this.$confirm('确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          sc_picking_delete(params).then(res=>{
            if(res.code==0){
              if (res.code == 0) {
                this.$message.success('删除成功')
                if((this.offset-1) * this.limit == (this.tableLength - 1) && this.offset !== 0){
                  this.offset = this.offset - 1
                }
                this.gettableData()
              }
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
        return
      }
      if (e.btn == "print") {
        this.type=1
        sc_picking_info(e.row.pickingCode).then(res=>{
          if(res.code==0){
            this.dialogData=res.data
            this.dialogVisible=true
          }
        })
        return
      }
    },
    gettableData() {
      console.log('list')
    }
  }
}
</script>

<style>

</style>
