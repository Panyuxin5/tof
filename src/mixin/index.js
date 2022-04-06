// 定义一个混入对象

var myMixin = {
    data(){
        return{
            limit: 10,
            offset: 1,
            tableLength: 0, //数据总数
            params: {}, //搜索框数据
            tableData: []
        }
    },
    methods: {
        /**
       * 每页显示数据数量
       */
        sizeChange(e) {
            this.limit = e
            this.gettableData()
        },
        /**
         * 切换页
         */
        currentChange(e) {
            this.offset = e
            this.gettableData()
        },
        /**
         *搜索
         */
        search(e) {
            this.offset = 1
            this.params = e
            this.gettableData()
        },
        /**
         * messagebox弹窗
         */
        messageHandle(title,fun) {
            this.$confirm(title, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                fun()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },
        /**
         *搜索
         */
        getPointTypeCh(val) {
            switch (val) {
                case 1:
                  return "温度";
                case 2:
                  return "液位";
                case 3:
                  return "流量";
                case 4:
                  return "压力";
              }
        },
    },
    filters: {
        addUnit: function (value) {
          if (value) return value+'吨'
        }
      },
  computed: {
    getCurMonth() {
      let date = new Date();
      return [
        date.getFullYear() + "-" + ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1)) + "-01",
        date.getFullYear() + "-" + ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1)) + "-" + date.getDate(),
      ];
    },
  },
}

export default myMixin
