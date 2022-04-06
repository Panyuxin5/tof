<template>
  <div class="table-box">
    <div class="table-titleName">
      <div class="title d-flex">
        <div style="margin-right: 8px" v-if="titleBlack">
          <el-button @click="$emit('back',true)"   class="button" type="primary">返回</el-button>
        </div>
        <span class="flex-center  font-18">{{ title }}</span>
        <div class="h-100 flex-flow-wrap" v-if="searchFlag">
          <el-select
            v-if="selectFlag"
            class="margin-top ml-1 "
            style="width: 260px"
            v-model="formInline.subcomid"
            placeholder="所有车间"
          >
            <el-option label="全部" value=""> </el-option>
            <el-option
              v-for="items in Subcomdata"
              :key="items.id"
              :label="items.name"
              :value="items.id"
            >
            </el-option>
          </el-select>
          <el-input v-if="wx?0:1"
            class="input ml-1 "
            style="width: 260px"
            v-model="formInline.code"
            placeholder="位号"
          />
          <el-input v-if="msFlag&&!xfFlag"
            class="input ml-1 "
            style="width: 260px"
            v-model="formInline.address"
            placeholder="描述"
          />
          <el-input v-if="xfFlag"
            class="input ml-1 "
            style="width: 260px"
            v-model="formInline.address"
            placeholder="位置"
          />
          <el-input v-if="wx"
            class="input ml-1 "
            style="width: 260px"
            v-model="formInline.code"
            placeholder="设备编号"
          />
          <el-input v-if="wx"
            class="input ml-1 "
            style="width: 260px"
            v-model="formInline.address"
            placeholder="点位名称"
          />
          <el-input v-if="xfFlag"
            class="input ml-1 "
            style="width: 260px"
            v-model="formInline.hostName"
            placeholder="机柜名称"
          />
          <el-input v-if="dqFlag"
            class="input ml-1 "
            style="width: 260px"
            v-model="formInline.entityid"
            placeholder="电气柜号"
          />
          <!-- <el-date-picker v-if="calendarFlag"
            v-model="formInline.date"
            class="input ml-1"
            :format="dateInfo.format"
            :value-format="dateInfo.valueFormat"
            :type="dateInfo.type"
            :clearable="true"
            range-separator="至"
            @change="changedate"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          /> -->
          <el-button
            class="button ml-1 "
            type="primary button-search"
            icon="el-icon-search"
            @click="search"
            >搜索</el-button
          >
        </div>
        <div class="flex-fill"></div>
        <div class="tablebar-right d-flex" v-if="btnFlag.length > 0">
          <div v-for="(btnFlagitem, btnFlagIndex) in btnFlag" :key="btnFlagIndex">
            <!-- <el-button v-if="btnFlagitem !='导入'" :type="getColor(btnFlagitem)" class="button " :icon="getIcon(btnFlagitem)" @click="titleBtn(btnFlagitem)">{{ btnFlagitem }}</el-button> -->
            <el-button
              v-if="btnFlagitem != '导入'"
              :style="{ width: btnFlagitem == '导出模板' ? '98px' : '' }"
              :type="getColor(btnFlagitem)"
              class="button "
              :class="'button-' + getColor(btnFlagitem)"
              :icon="getIcon(btnFlagitem)"
              :btnName="btnFlagitem"
              @click="titleBtn(btnFlagitem)"
              >{{ btnFlagitem }}</el-button
            >
            <upload-btn
              v-on="$listeners"
              class="mr-right"
              :icon="getIcon(btnFlagitem)"
              v-if="btnFlagitem == '导入'"
              :postParam="postParam"
              :uploadUrl="uploadUrl"
            ></upload-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="table-table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        :empty-text="emptyText"
        :cell-style="cellSstyle"
        @selection-change="selectionChange"
        style="width: 100%"
      >
        <el-table-column v-if="table_select" type="selection" width="55">
        </el-table-column>
        <template v-for="(item, index) in fields">
          <el-table-column
            :key="index"
            :prop="item.key"
            :label="item.label"
            v-if="!item.hidden&&!item.Aclick"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
              :key="index"
              :prop="item.key"
              :label="item.label"
              v-if="!item.hidden&&item.Aclick"
              :show-overflow-tooltip="true"
          >
            <template slot-scope="scope">
                <p style="color:#0893fd;cursor: pointer" @click="$emit('Aclick',scope.row)">{{ scope.row[item.key] }}</p>
            </template>
          </el-table-column>
        </template>
        <el-table-column label="操作" :width="btnTdwidth" v-if="czbtnData.length > 0">
          <template slot-scope="scope">
            <div v-if="scope.row.cz || scope.row.cz == 0">
              <el-button
                  v-for="(btnItem, btnIndex) in czbtnData[scope.row.cz].btnName"
                  :key="btnIndex"
                  style="padding: 7px; display: inline-block"
                  :class="'button-' + getColor(btnItem)"
                  size="mini"
                  :btnName="getChineseBtn(btnItem)"
                  @click="handleBtn(scope.$index, scope.row, btnItem)"
              >{{ getChineseBtn(btnItem) }}
              </el-button>
            </div>
            <div v-if="!scope.row.cz && scope.row.cz != 0">
              <el-button
                  v-for="(btnItem, btnIndex) in czbtnData"
                  :key="btnIndex"
                  :class="'button-' + getColor(btnItem)"
                  size="mini"
                  :btnName="getChineseBtn(btnItem)"
                  style="padding: 7px"
                  @click="handleBtn(scope.$index, scope.row, btnItem)"
              >{{ getChineseBtn(btnItem) }}
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination" v-if="isPage">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableLength"
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="currentPage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { Wx_getSubcomList } from "@/api/security";
import uploadBtn from "@/components/uploadBtn_security/uploadBtn_security";
export default {
  name: "tableCompent",
  components: { uploadBtn },
  props: {
    uploadUrl: {
      type: String,
      default: "",
    },
    postParam: {
      type: String,
      default: "",
    },
    //总条数
    tableLength: {
      type: Number,
      default: 0,
    },
    //返回按钮
    titleBlack:{
      type: Boolean,
      default: false,
    },
    //表格多选
    table_select: {
      type: Boolean,
      default: false,
    },
    //搜索组下拉框标识
    selectFlag: {
      type: Boolean,
      default: true,
    },
    //表格标题搜索组
    searchFlag: {
      type: Boolean,
      default: false,
    },
    //表格标题右侧按钮
    btnFlag: {
      type: Array,
      default: () => [],
    },
    //表格标题
    title: {
      type: String,
    },
    //表格数据
    tableData: {
      type: [Array, Function],
      default: () => [],
    },
    //表格字段形式
    fields: {
      type: Array,
      default: () => [],
    },
    //操作按钮数据
    czbtnData: {
      type: Array,
      default: () => [],
    },
    //页码是否显示
    isPage: {
      type: Boolean,
      default: true,
    },
    // 是否展示日期选择
    calendarFlag: {
      type: Boolean,
      default: false
    },
    // 是否搜索描述
    msFlag: {
      type: Boolean,
      default: false
    },
    // 是否搜索主机名称（消防）
    xfFlag: {
      type: Boolean,
      default: false
    },
    // 是否搜索电气柜（电气）
    dqFlag: {
      type: Boolean,
      default: false
    },
    wx: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      searchVal: {},
      currentPage: 1,
      Subcomdata: [],
      formInline: {
        date: [],
      },
      dialogDetailVisible: false,
      indexArray: [], //存在style的列下标
      emptyText: " ",
      dateInfo: {
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
        type: 'daterange'
      },
    };
  },
  computed: {
    btnTdwidth() {
      let czbtnData = this.czbtnData;
      if (typeof czbtnData[0] == "object") {
        return czbtnData[czbtnData.length - 1].btnName.length * 70;
      } else {
        return czbtnData.length * 80;
      }
    },
  },
  watch: {
    tableData() {
      this.watchTable()
    },
  },
  mounted() {
    /*
    页面上有(reading '$on')报错，22-3-28注释
    this.bus.$on('back_page_1',data=>{
      setTimeout(()=>{
        this.currentPage = 1
      },100)
    }) */
    this.filter();
    if (this.searchFlag) {
      Wx_getSubcomList()
        .then((res) => {
          this.Subcomdata = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    }
  },
  methods: {
    changedate(e) {
      if (!e) {
        this.formInline.startTime = ''
        this.formInline.endTime = ''
        this.formInline.value3 = ''
      }
    },
    watchTable() {
      this.$nextTick(() => {
        if (this.tableData.length == 0) {
          this.emptyText = "暂无数据";
        }
      });
    },
    selectionChange(e) {
      this.$emit("selectionChange", e);
    },
    search() {
      if (!!this.formInline.code) {
        this.formInline.code = this.formInline.code.trim();
      }
      if (!!this.formInline.name) {
        this.formInline.name = this.formInline.name.trim();
      }
      if (!!this.formInline.entityid) {
        this.formInline.entityid = this.formInline.entityid.trim();
      }
      if (!!this.formInline.address) {
        this.formInline.address = this.formInline.address.trim();
      }
      if (!!this.formInline.date && this.calendarFlag) {
          this.formInline.startTime = this.formInline.date[0]
          this.formInline.endTime = this.formInline.date[1]
      } else {
        this.formInline.date = []
      }
      this.$emit("search", this.formInline);
      setTimeout(()=>{
        this.currentPage = 1
      },100)
    },
    /**
     * 每页显示数据数量
     */
    sizeChange(e) {
      // this.currentPage = 1
      this.$emit("sizeChange", e)
    },
    /**
     * 切换页
     */
    currentChange(e) {
      this.currentPage = e
      this.$emit("currentChange", e)
    },
    /**
     * 表格标题右侧按钮事件
     */
    titleBtn(name) {
      this.$emit("titleBtn", name);
    },
    /**
     * 表格标题右侧按钮图标颜色 默认返回蓝色
     */
    getColor(btnItem) {
      if (
        btnItem == "shenhe" ||
        btnItem == "操作日志" ||
        btnItem == "报警日志" ||
        btnItem == "审批" ||
        btnItem == "二审" ||
        btnItem == "复核"
      ) {
        return "search";
      }
      if (btnItem == "delete"||btnItem == "删除") {
        return "delete";
      }
      if (
        btnItem == "sure" ||
        btnItem == "print" ||
        btnItem == "已处置" ||
        btnItem == "edit" ||
        btnItem == "编辑" ||
        btnItem == "完成" ||
        btnItem == "确认"
      ) {
        return "edit";
      }
      // if (
      //   btnItem == "detail" ||
      //   btnItem == "曲线图" ||
      //   btnItem == "详情" ||
      //   btnItem == "运行趋势" ||
      //   btnItem == "导入" ||
      //   btnItem == "导出模板" ||
      //   btnItem == "导出" ||
      //   btnItem == "添加" ||
      //   btnItem == "处置" ||
      //   btnItem == "suyuan" ||
      //   btnItem == "预警设置"
      // ) {
      //   return "add";
      // }
      return "detail";
      // if (
      //   btnItem == "detail" ||
      //   btnItem == "曲线图" ||
      //   btnItem == "详情" ||
      //   btnItem == "运行趋势" ||
      //   btnItem == "导入" ||
      //   btnItem == "导出模板" ||
      //   btnItem == "导出" ||
      //   btnItem == "添加" ||
      //   btnItem == "处置" ||
      //   btnItem == "suyuan" ||
      //   btnItem == "预警设置"||
      //   btnItem == "批量录入"||
      //   btnItem == "录入"
      // ) {
      //   return "add";
      // }
      // return "primary";
    },
    /**
     * 表格标题右侧按钮图标
     */
    getIcon(name) {
      if (name == "添加") {
        return "el-icon-plus";
      }
      if (name == "导出" || name == "导出模板") {
        return "el-icon-upload2";
      }
      if (name == "检修") {
        return "el-icon-setting";
      }
      if (name == "正常") {
        return "el-icon-check";
      }
      if (name == "导入") {
        return "el-icon-download";
      }
      if (name == "排序") {
        return "el-icon-s-fold";
      }
      if (name == "删除") {
        return "el-icon-delete";
      }
      if (name == "新增") {
        return "el-icon-plus";
      }
    },
    /**
     * 筛选存在style的表格配置
     */
    filter() {
      let styleArray = [];
      styleArray = this.fields.filter((item) => {
        return !!item.cloumnstyle;
      });
      if (styleArray.length > 0) {
        this.indexArray = styleArray.map((item) => {
          if (this.fields.findIndex((items) => items.key == item.key) > -1) {
            return {
              index: this.fields.findIndex((items) => items.key == item.key),
              cloumnstyle: item.cloumnstyle,
            };
          }
        });
      }
    },
    /**
     * 单元格赋色
     */
    cellSstyle({ column, columnIndex }) {
      // console.log(columnIndex)
      let flag = this.indexArray.filter((item) => {
        return item.index == columnIndex;
      });
      if (flag.length > 0) {
        return flag[0].cloumnstyle;
      }
    },
    /**
     * 得到按钮中文名
     * @param Eng
     * @returns {string}
     */
    getChineseBtn(Eng) {
      if (Eng == "add") {
        return "新增";
      }
      if (Eng == "edit") {
        return "编辑";
      }
      if (Eng == "delete") {
        return "删除";
      }
      if (Eng == "detail") {
        return "详情";
      }
      if (Eng == "shenhe") {
        return "审核";
      }
      if (Eng == "sure") {
        return "确认";
      }
      if (Eng == "xiafa") {
        return "下发";
      }
      if (Eng == "print") {
        return "打印";
      }
      if (Eng == "suyuan") {
        return "溯源";
      }
      if (Eng == "look") {
        return "查看";
      }
      if (Eng == "download") {
        return "导出";
      }
      if (Eng == "power") {
        return "权限";
      }
      /**
       * 英文转换
       */
      if (Eng == "confirm") {
        return "确认";
      }
      if (Eng == "assign") {
        return "指派";
      }
      if (Eng == "check") {
        return "查看";
      }
      if (Eng == "recheck") {
        return "复核";
      }
      if (Eng == "export") {
        return "导出模板";
      }
      return Eng;
    },
    toggleAdd() {
      this.$router.push({ path: "/set/recorddetail" });
    },
    handleBtn(index, row, btn) {
      this.$emit("handleBtn", { index: index, row: row, btn: btn });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .button {
  min-width: auto;
}
::v-deep .el-button {
  margin-right: 6px;
}
// ::v-deep .el-table .cell {
  // white-space: pre-line; /*保留换行符*/  //不需要，展示不全时候，鼠标移动展示全部
  // min-width: 150px;
// }
::v-deep.el-form-item {
  margin-bottom: 0;
}
// ::v-deep .el-input__inner{
//   height: 40px;
//   line-height: 40px;
// }
.table-box {
  /*  margin-left: 10px;
  margin-right: 10px;*/
  border: none !important;
  margin-top: 15px;
  border-radius: 8px;
  padding-bottom: 15px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
  background-color: #fff;

  .table-titleName {
    margin-left: 20px;
    font-size: 16px;
    color: #111;
    font-weight: bold;
    padding: 16px 0;
    .title{
      align-items: center;
      span{
        height: 36px;
        line-height: 36px;
      }
    }
    .tablebar-right {
      margin-right: 10px;
      .button {
        margin-right: 10px;
      }
      .mr-right{
        margin-right: 10px;
      }
    }
  }
  ::v-deep .el-button + .el-button {
    margin-left: 0;
  }
  .table-table {
    margin-left: 20px;
    margin-right: 20px;
  }

  .pagination {
    text-align: right;
    margin: 10px 0 0;
    padding: 7px 15px 0;
  }
}

.printer {
  text-align: right;
}

.table-padding {
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px 10px 20px;
  box-shadow: 0px 5px 5px rgb(0 0 0 / 10%);
  background: #fff;
  box-sizing: border-box;

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .layui-table {
    width: 100%;
    background-color: #fff;
    color: #666;

    .table-title {
      font-size: 24px;
      padding: 15px;
    }

    tr {
      margin: 0;
      padding: 0;
    }

    td,
    th {
      position: relative;
      padding: 9px 15px;
      min-height: 20px;
      line-height: 20px;
      font-size: 14px;
      border: 1px solid #f2f2f2;
    }

    th {
      color: #666;
    }

    td {
      border: 1px solid #f2f2f2;
      text-align: center;
    }
  }
}
</style>
