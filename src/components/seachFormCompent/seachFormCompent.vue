<template>
  <div class="table-tool d-flex">
    <!--左侧按钮-->
    <div v-if="l_btnFlag" class="d-flex font-14 l_btn mx-1">
      <div class="l_btns" :class="l_btnFlags == 1 ? 'l_btn_act' : ''" @click="l_btnFlags = 1">
        日报
      </div>
      <div
        class="l_btns"
        :class="l_btnFlags == 2 ? 'l_btn_act' : ''"
        style="border-right: 1px solid #0893fd; border-left: 1px solid #0893fd"
        @click="l_btnFlags = 2"
      >
        月报
      </div>
      <div class="l_btns" :class="l_btnFlags == 3 ? 'l_btn_act' : ''" @click="l_btnFlags = 3">
        年报
      </div>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline d-flex flex-flow-wrap">
      <!--选择框-->
      <div v-if="selectArray.length > 0">
        <el-form-item v-for="(item, index) in selectArray" :key="index">
          <el-select
            ref="searchSelect"
            v-model="formInline[item.prop]"
            :placeholder="item.placeholder"
            @change="selectHander($event, item.prop)"
          >
            <el-option v-if="!item.defaultIndex" label="全部" value="" />
            <el-option v-for="(items, index) in item.data" :key="index" :label="items.lable" :value="items.value" />
          </el-select>
        </el-form-item>
      </div>
      <!--输入框-->
      <div v-if="inputArray.length > 0">
        <el-form-item v-for="(inputItem, inputIndex) in inputArray" :key="inputIndex + '-key'">
          <el-input v-model="formInline[inputItem.prop]" class="input" :placeholder="inputItem.placeholder" />
        </el-form-item>
      </div>
      <!--特殊输入框 产品选择-->
      <div v-if="specialArray.length > 0">
        <el-form-item v-for="(inputItem, inputIndex) in specialArray" :key="inputIndex + '-key'">
          <el-input
            v-model="formInline[inputItem.prop]"
            class="input"
            readonly
            :placeholder="inputItem.placeholder"
            @focus="inputFocus"
          />
        </el-form-item>
      </div>

      <!--日期选择1 带默认时间-->
      <div>
        <el-form-item v-if="defaultDateFlag">
          <el-date-picker
              v-model="formInline.date1"
              class="input"
              :format="dateInfo.format"
              :value-format="dateInfo.valueFormat"
              :type="dateInfo.type"
              :clearable="true"
              range-separator="至"
              @change="changedate"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
          />
        </el-form-item>
        <!--日期选择1 带默认时间去X-->
        <el-form-item v-if="defaultDateFlag1">
          <el-date-picker
              v-model="formInline.date2"
              class="input"
              :format="dateInfo.format"
              :value-format="dateInfo.valueFormat"
              :type="dateInfo.type"
              :clearable="false"
              range-separator="至"
              @change="changedate"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
          />
        </el-form-item>
        <!--日期选择2-->
        <el-form-item v-if="calendarFlag&&calendarFlaghidden&&!reportFlag">
          <el-date-picker
              v-model="formInline.date"
              class="input"
              :format="dateInfo.format"
              :value-format="dateInfo.valueFormat"
              :type="dateInfo.type"
              :clearable="true"
              range-separator="至"
              @change="changedate"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
          />
        </el-form-item>
        <!--单年份-->
        <el-form-item v-if="calendarFlag_year">
          <el-date-picker
              v-model="formInline.value3"
              class="input"
              type="year"
              value-format="yyyy"
              placeholder="选择年"
              :clearable="false"
          />
        </el-form-item>
        <!--单日期-->
        <el-form-item v-if="calendarFlag_one">
          <el-date-picker
              v-model="formInline.value2"
              class="input"
              type="month"
              value-format="yyyy-MM"
              placeholder="选择月"
              :clearable="false"
          />
        </el-form-item>
        <el-form-item v-if="calendarFlag_oneN">
          <el-date-picker
              v-model="formInline.value2"
              class="input"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择时间"
          />
        </el-form-item>

        <!--年份范围-->
        <el-form-item v-if="calendarYearRange">
          <el-date-picker
              v-model="formInline.startYear"
              class="input"
              type="year"
              value-format="yyyy"
              key="startYear"
              placeholder="请选择年份"
          />
          <span class="zhi">至</span>
          <el-date-picker
              v-model="formInline.endYear"
              class="input"
              type="year"
              key="endYear"
              value-format="yyyy"
              placeholder="请选择年份"
          />
        </el-form-item>
        <!--生产报表-->
        <el-form-item v-if="reportFlag">
          <el-date-picker
              ref="reportDaily"
              v-show="reportType==1"
              v-model="formInline.date"
              class="input"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              type="daterange"
              :clearable="true"
              range-separator="至"
              @change="changedate"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
          />
          <el-date-picker
              v-show="reportType==2"
              v-model="formInline.dateStr"
              type="month"
              format="yyyy-MM"
              value-format="yyyy-MM"
              placeholder="选择月份">
          </el-date-picker>
          <el-select
              v-show="reportType==3"
              v-model="formInline.dateStr"
              placeholder="选择季度"
          >
            <el-option
                label="第一季度"
                :value="1">
            </el-option>
            <el-option
                label="第二季度"
                :value="2">
            </el-option>
            <el-option
                label="第三季度"
                :value="3">
            </el-option>
            <el-option
                label="第四季度"
                :value="4">
            </el-option>
          </el-select>
          <el-date-picker
              v-show="reportType==4"
              v-model="formInline.dateStr"
              type="year"
              format="yyyy"
              value-format="yyyy"
              placeholder="选择年份">
          </el-date-picker>
        </el-form-item>
      </div>


      <el-form-item>
        <el-button class="button button-search"  icon="el-icon-search" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>
    <div class="flex-fill" />
    <!--右侧按钮-->
    <div v-if="r_btnFlag" style="margin: 5px 10px" @click="r_onclick">
      <el-button class="button" type="primary">{{ r_btnName }}</el-button>
    </div>
    <!-- 按钮组 -->
    <div v-if="btnFlag.length > 0" class="tit-btn-box">
      <div v-for="(btnFlagitem, btnFlagIndex) in btnFlag" :key="btnFlagIndex">
        <el-button
          v-if="btnFlagitem != '导入'"
          v-has
          :class="'button-' + getColor(btnFlagitem)"
          class="button mt-05"
          :icon="getIcon(btnFlagitem)"
          :btn-name="btnFlagitem"
          @click="titleBtn(btnFlagitem)"
        >{{ btnFlagitem }}
        </el-button>
        <upload-btn
          v-if="btnFlagitem == '导入'"
          :class="'button-' + getColor(btnFlagitem)"
          class="mt-05 mr-05"
          :upload-url="uploadUrl"
          v-on="$listeners"
        />
      </div>
    </div>

    <div v-if="zcry" class="tit-btn-box">
      <div class="fontsize24">在厂人员：<span class="red">{{ zcryrs }}</span></div>
    </div>

    <el-dialog
      class="specialDialog"
      title=""
      :visible.sync="dialogVisible"
      :show-close="false"
      :modal="false"
      width="70%"
    >
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="材料">
          <el-radio-group v-model="mradio">
            <el-radio v-for="(val, key) in material" :key="key" :label="key">{{ val }}</el-radio>
          </el-radio-group>
        </el-tab-pane>
        <el-tab-pane label="产品">
          <el-radio-group v-model="mradio">
            <el-radio v-for="(val, key) in production" :key="key" :label="key">{{ val }}</el-radio>
          </el-radio-group>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button class="button" @click="handleCancel">取 消</el-button>
        <el-button class="button button-add" type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getYMD
} from '@/utils'
import uploadBtn from '@/components/uploadBtn_security/uploadBtn_security'
import {
  qs_getProductData
} from '@/api/quality'
import Logo from '../../layout/components/Sidebar/Logo'
export default {
  name: 'SeachFormCompent',
  components: {
    uploadBtn
  },
  props: {
    r_btnName: {
      type: String,
      default: '查看计划'
    },
    uploadUrl: {
      type: String,
      default: ''
    },
    l_btnFlag: {
      type: Boolean,
      default: false
    },
    r_btnFlag: {
      type: Boolean,
      default: false
    },
    tabChange: {
      type: Number,
      default: 1
    },
    calendarFlag_year: {
      type: Boolean,
      default: false
    },
    calendarFlag_one: {
      type: Boolean,
      default: false
    },
    calendarFlag_oneN: {
      type: Boolean,
      default: false
    },
    // 是否展示日期选择
    calendarFlag: {
      type: Boolean,
      default: false
    },
    // 生产报表
    reportFlag: {
      type: Boolean,
      default: false
    },
    // 选择框内容
    selectArray: {
      type: Array,
      default: () => []
    },
    // 选择框内容
    selectArray1: {
      type: Array,
      default: () => []
    },
    // 输入框内容
    inputArray: {
      type: Array,
      default: () => []
    },
    specialArray: {
      type: Array,
      default: () => []
    },
    // 表格标题右侧按钮
    btnFlag: {
      type: Array,
      default: () => []
    },
    calendarDate: {
      type: Array,
      default: () => []
    },
    calendarFlag_oneData: {
      type: String,
      default: ''
    },
    // 是否展示默认日期选择
    defaultDateFlag: {
      type: Boolean,
      default: false
    },
    // 是否展示默认日期选择
    defaultDateFlag1: {
      type: Boolean,
      default: false
    },
    // 是否在厂人员
    zcry: {
      type: Boolean,
      default: false
    },
    // 在厂人员人数
    zcryrs: {
      type: Number,
      default: 0
    },
    calendarFlag_yearData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      reportType:1,
      searchVal: {},
      l_btnFlags: 1,
      formInline: {
        date: [],
        date1: [],
        date2: [],
        value2: '',
        value3: '',
        startYear:'',
        endYear:'',
        dateStr:'',
      },
      dialogVisible: false,
      tabPosition: 'left',
      mradio: '',
      pradio: '',
      material: {},
      production: {},
      dateInfo: {
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
        type: 'daterange'
      },
      flag: 0,
      calendarYearRange:false,
      calendarFlaghidden:true
    }
  },
  computed: {
    plant: function() {
      return this.formInline.plant
    }
  },
  watch: {
    tabChange: {
      handler: function(val, oldVal) {
        this.$nextTick(() => {
          this.formInline.channel = null
          this.formInline.address = null
        })
      },
      deep: true
    },
    plant: {
      handler: function(val, oldVal) {
        // console.log(this.plant)
        // if (this.formInline.plant) {
        this.$emit('getplant', this.plant)
        // }
      },
      deep: true
    },
    selectArray: {
      handler: function(newVal, oldVal) {
        if (newVal.length > 0) {
          console.log(newVal)
          for (const i in newVal) {
            if (newVal[i].defaultIndex && newVal[i].data.length > 0) {
              this.formInline[newVal[i].prop] = newVal[i].data[0].value
              if (this.flag == 0) {
                this.search()
                this.flag++
              }
            } else if (newVal[i].defaultIndex && newVal[i].data.length == 0) {
              this.formInline[newVal[i].prop] = ''
            }
          }
        }
      },
      deep: true
    },
    reportType(newV,oldV){
      let date = new Date();
      let  String = date.getFullYear().toString()
      if(newV==1){
        this.formInline.date = this.calendarDate
        this.$emit('changeReport',{type:newV,date:this.formInline.date})
        return
      }
      if(newV==2){
        this.formInline.dateStr = date.getFullYear() + "-" + ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1))
        this.$emit('changeReport',{type:newV,date:this.formInline.dateStr})
        return
      }
      if(newV==3){
        this.formInline.dateStr =1
        this.$emit('changeReport',{type:newV,date:this.formInline.dateStr})
        return
      }
      if(newV==4){
        this.formInline.dateStr = String
        this.$emit('changeReport',{type:newV,date:this.formInline.dateStr})
        return
      }

    },
  },
  created() {
    if (this.calendarDate) {
      this.formInline.date = this.calendarDate
    }
    if (this.calendarFlag_oneData) {
      this.formInline.value2 = this.calendarFlag_oneData
    }
    if (this.calendarFlag_yearData) {
      this.formInline.value3 = this.calendarFlag_yearData
    }

  },
  mounted() {
    // if (this.selectArray.length > 0) {
    //   for (let i in this.selectArray) {
    //     if (!this.selectArray[i].defval && this.selectArray[i].defval != 0) {
    //       return;
    //     }
    //     // this.formInline[this.selectArray[i].prop]=this.selectArray[i].data[this.selectArray[i].defval].value
    //     this.$set(
    //       this.formInline,
    //       this.selectArray[i].prop,
    //       this.selectArray[i].data[this.selectArray[i].defval].value
    //     );
    //   }
    // }
    this.getNowTime()
  },
  destroyed() {
    this.flag = 0
  },
  methods: {
    selectHander(val, prop) {
      console.log(val,prop)
      if(prop=="reportType"){
        this.reportType = val
      }
      if(prop=='workshopId'){
        console.log(this.formInline);
        this.formInline.processId=''
        this.$emit('search2', this.formInline)
      }
      if (prop == 'specialType') {
        if (val == 1) {
          this.calendarFlaghidden = true
          this.calendarYearRange = false
          this.dateInfo = {
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd',
            type: 'daterange'
          }
        }
        if (val == 2) {
          this.calendarFlaghidden = true
          this.calendarYearRange = false
          this.dateInfo = {
            format: 'yyyy-MM',
            valueFormat: 'yyyy-MM',
            type: 'monthrange'
          }
        }
        if (val == 3) {
          this.calendarFlaghidden = false
          this.calendarYearRange = true
          this.dateInfo = {
            format: 'yyyy',
            valueFormat: 'yyyy',
            type: 'monthrange'
          }
        }
        this.formInline.date = ['', '']
        this.formInline.value3 = ''
      }
      this.$forceUpdate()
    },
    r_onclick(event) {
      this.$emit('r_onclick')
    },
    changedate(e) {
      if (!e) {
        this.formInline.startTime = ''
        this.formInline.endTime = ''
        this.formInline.value3 = ''
      }
    },
    search() {
      if (!!this.formInline.date && this.calendarFlag) {
        if(this.calendarYearRange){
          this.formInline.date[0] = this.formInline.startYear
          this.formInline.date[1] = this.formInline.endYear
        }else{
          this.formInline.startTime = this.formInline.date[0]
          this.formInline.endTime = this.formInline.date[1]
        }
      } else {
        this.formInline.date = []
      }
      if (!!this.formInline.date1 && this.defaultDateFlag) {
        this.formInline.startTime = this.formInline.date1[0]
        this.formInline.endTime = this.formInline.date1[1]
      } else {
        this.formInline.date1 = []
      }
      if (!!this.formInline.date2 && this.defaultDateFlag1) {
        this.formInline.startTime = this.formInline.date2[0]
        this.formInline.endTime = this.formInline.date2[1]
      } else {
        this.formInline.date2 = []
      }
      this.formInline.time = this.formInline.value3
      for (let i = 0; i < this.inputArray.length; i++) {
        if (this.formInline[this.inputArray[i].prop]) {
          this.formInline[this.inputArray[i].prop] =
              this.formInline[this.inputArray[i].prop].trim()
        }
      }
      this.flag++
      this.$emit('search', this.formInline)
      // this.bus.$emit('back_page_1',1)
    },
    getColor(name) {
      if (name == '添加') {
        return 'add'
      }
      if (name == '删除') {
        return 'delete'
      }
      return 'add'
    },
    /**
       * 表格标题右侧按钮图标
       */
    getIcon(name) {
      if (name == '添加') {
        return 'el-icon-plus'
      }
      if (name == '导出' || name == '导出模板') {
        return 'el-icon-upload2'
      }
      if (name == '检修') {
        return 'el-icon-setting'
      }
      if (name == '正常') {
        return 'el-icon-check'
      }
      if (name == '导入') {
        return 'el-icon-download'
      }
      if (name == '排序') {
        return 'el-icon-s-fold'
      }
      if (name == '删除') {
        return 'el-icon-delete'
      }
    },
    /**
       * 表格标题右侧按钮事件
       */
    titleBtn(name) {
      this.$emit('titleBtn', name)
    },
    inputFocus() {
      qs_getProductData({})
        .then((res) => {
          this.material = res.data.material
          this.production = res.data.production
          this.dialogVisible = true
        })
        .catch((res) => {
          // console.log(res)
        })
    },
    handleConfirm() {
      this.formInline['name'] =
          this.material[this.mradio] || this.production[this.mradio]
      this.formInline['id'] = this.mradio
      this.dialogVisible = false
    },
    handleCancel() {
      this.mradio = ''
      this.formInline['name'] = ''
      this.formInline['id'] = ''
      this.dialogVisible = false
    },
    getNowTime() {
      const now = new Date()
      const year = now.getFullYear() // 得到年份
      let month = now.getMonth() // 得到月份
      let date = now.getDate() // 得到日期
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      const defaultDate = `${year}-${month}-${date}`
      this.$set(this.formInline, 'date1', [defaultDate, defaultDate])
      this.$set(this.formInline, 'date2', [defaultDate, defaultDate])
      let String = JSON.stringify(this.formInline)
      this.searchVal = JSON.parse(String)
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .button {
    width: auto;
  }

  .l_btn_act {
    background-color: #0893fd !important;
    color: #ffffff !important;
  }

  .l_btn {
    border: 1px solid #0893fd;
    height: 28px;
    margin-top: 10px;
    border-radius: 5px;
    overflow: hidden;
  }

  .l_btns {
    height: 28px;
    line-height: 28px;
    padding: 0 2em;
  }

  .r_btn {
    font-size: 18px;
    color: white;
    background-color: #2a82e4;
    display: flex;
    height: fit-content;
    padding: 0 10px;
    height: 44px;
  }

  ::v-deep .el-date-editor .el-range-separator {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::v-deep .el-select {
    width: 249px;
  }

  ::v-deep .el-input {
    width: 249px;
  }

  .table-tool {
    background: #ffffff !important;
    min-height: 80px !important;
    // line-height: 50px !important;
    margin: 0px !important;
    border-radius: 8px !important;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 10%) !important;
    padding: 14px 15px;
    display: flex;
    justify-content: space-between;

    .el-form-item {
      margin: 5px 10px;
    }

    .table-tool {
      background: #ffffff !important;
      min-height: 80px !important;
      line-height: 50px !important;
      margin: 0px !important;
      border-radius: 8px !important;
      box-shadow: 0px 2px 4px rgb(0 0 0 / 10%) !important;
      padding: 14px 15px;
      display: flex;
      justify-content: space-between;

      .el-form-item {
        margin: 5px 10px;
      }

      .tit-btn-box {
        display: flex;

        ::v-deep .el-button {
          vertical-align: top;
          margin: 0 10px;
        }
      }
    }
  }
  .zhi{
    margin: 0 10px;
  }
  .fontsize24{
    font-size: 24px;
    margin-top: 10px;
    margin-right: 10px;
  }
  .red{
    color: red;
    font-size: 24px;
  }
  ::v-deep .el-range-editor.el-input__inner{
    padding:1.5px 10px !important;
  }
</style>
