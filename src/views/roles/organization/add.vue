<template>
  <div class="add-form-box">
    <h3>{{ title }}</h3>
    <el-form
      ref="form"
      :model="form"
      label-width="120px"
      class="add-form"
      :rules="rules"
    >
      <el-form-item label="点位名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <!--      <el-form-item label="点位编号" prop="code">-->
      <!--        <el-input v-model="form.code"></el-input>-->
      <!--      </el-form-item>-->
      <el-form-item label="点位类型" required>
        <el-radio-group v-model="form.type">
          <el-radio :label="1">温度</el-radio>
          <el-radio :label="2">液位</el-radio>
          <el-radio :label="3">流量</el-radio>
          <el-radio :label="4">压力</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="换算系数" prop="coefficient" v-if="form.type == 3">
        <el-input v-model="form.coefficient"></el-input>
      </el-form-item>
      <el-form-item label="是否为关键点位" required>
        <el-radio-group v-model="form.isKey">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="所属车间" prop="workshopId">
        <el-select
          v-model="form.workshopId"
          placeholder="请选择"
          ref="workshop"
        >
          <el-option
            v-for="item in workshopList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!--      <el-form-item label="所属工艺段" prop="sectionId">-->
      <!--        <el-select v-model="form.sectionId" placeholder="请选择" ref="section">-->
      <!--          <el-option-->
      <!--            v-for="item in processList"-->
      <!--            :key="item.id"-->
      <!--            :label="item.name"-->
      <!--            :value="item.id"-->
      <!--          >-->
      <!--          </el-option>-->
      <!--        </el-select>-->
      <!--      </el-form-item>-->
      <el-form-item label="单位" prop="unit">
        <el-input v-model="form.unit"></el-input>
      </el-form-item>
      <el-form-item label="IOT序列" prop="iotCode">
        <el-input v-model="form.iotCode"></el-input>
        <span style="margin-left: 15px">(root.yuntao.车间层.设备.测点)</span>
      </el-form-item>

      <el-form-item label="低报" prop="lowLimit">
        <el-input v-model="form.lowAlarm"></el-input>
      </el-form-item>
      <el-form-item label="高报" prop="highLimit">
        <el-input v-model="form.heightAlarm"></el-input>
      </el-form-item>
      <!--      <el-form-item label="关联反应釜" required>-->
      <!--        <div class="inline-form-item">-->
      <!--          <el-form-item prop="workshopId">-->
      <!--            <el-select-->
      <!--              v-model="form.workshopId"-->
      <!--              placeholder="请先选择车间"-->
      <!--              ref="workshop"-->
      <!--              @change="workshopChange"-->
      <!--            >-->
      <!--              <el-option-->
      <!--                v-for="item in workshopList"-->
      <!--                :key="item.wid"-->
      <!--                :label="item.name"-->
      <!--                :value="item.wid"-->
      <!--              >-->
      <!--              </el-option>-->
      <!--            </el-select>-->
      <!--          </el-form-item>-->
      <!--          <el-form-item prop="reactorId">-->
      <!--            <el-select-->
      <!--              v-model="form.reactorId"-->
      <!--              placeholder="请选择关联反应釜"-->
      <!--              ref="reactor"-->
      <!--              class="ml-1"-->
      <!--            >-->
      <!--              <el-option-->
      <!--                v-for="item in codeList"-->
      <!--                :key="item.id"-->
      <!--                :label="item.name"-->
      <!--                :value="item.id"-->
      <!--              >-->
      <!--              </el-option>-->
      <!--            </el-select>-->
      <!--          </el-form-item>-->
      <!--        </div>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="关联类型" required>-->
      <!--        <el-radio-group v-model="form.bindType">-->
      <!--          <el-radio :label="1">进料点位</el-radio>-->
      <!--          <el-radio :label="2">出料点位</el-radio>-->
      <!--          <el-radio :label="3">其它点位</el-radio>-->
      <!--        </el-radio-group>-->
      <!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary button button-back" @click="$router.go(-1)"
          >返回</el-button
        >
        <el-button type="primary button button-save" @click="onSubmit"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  sc_process_list,
  sc_process_workshop,
  sc_reactor_codeList,
  sc_process_save,
  sc_process_update,
  sc_process_buyId,
} from "@/api/production";
export default {
  name: "addOrganization",
  data() {
    var checkNumber = (rule, value, callback) => {
      var re = /^[0-9]+.?[0-9]*/;
      if (!value) {
        return callback(new Error("请输入换算系数"));
      }

      if (!re.test(value)) {
        callback(new Error("请输入非负数数字值"));
      } else {
        callback();
      }
    };
    return {
      title: "",
      processList: [],
      form: {
        type: 1,
        isKey: 0,
      },
      workshopList: [],
      codeList: [],
      rules: {
        name: [{ required: true, message: "请输入点位名称", trigger: "blur" }],
        type: [{ required: true, message: "请选择点位类型", trigger: "change" }],
        workshopId: [{ required: true, message: "请选择车间", trigger: "change" }],
        unit: [{ required: true, message: "请输入单位", trigger: "blur" }],
        iotCode: [{ required: true, message: "请输入IOT序列", trigger: "blur" }],
        coefficient: [{ required: true, validator: checkNumber, trigger: "blur" }],
      },
    };
  },
  components: {},
  methods: {
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.form.workshopName = this.$refs.workshop.selected.label;
          if (this.$route.query.id) {
            this.form.id = this.$route.query.id;
            sc_process_update(this.form).then((res) => {
              if (res.code == 0) {
                this.$message.success("修改成功");
                this.$router.go(-1);
              }
            });
          } else {
            sc_process_save(this.form).then((res) => {
              if (res.code == 0) {
                this.$message.success("保存成功");
                this.$router.go(-1);
              }
            });
          }
        } else {
          return false;
        }
      });
    },
    getCodeList(wid) {
      sc_reactor_codeList(wid).then((res) => {
        if (res.code == 200) {
          this.codeList = res.data;
        }
      });
    },
    workshopChange() {
      //获得反应釜
      if (this.form.reactorId != null) {
        this.form.reactorId = "";
      }
      this.getCodeList(this.form.workshopId);
    },
  },
  created() {
    //获得所有的车间
    sc_process_workshop().then((res) => {
      if (res.code == 0) {
        this.workshopList = res.data;
      }
    });
    if (this.$route.query.id) {
      this.title = "编辑工艺点位";
      sc_process_buyId(this.$route.query.id).then((res) => {
        if (res.code == 0) {
          this.form = res.data;
          this.form.coefficient =
            this.form.type != 3 ? "" : this.form.coefficient;
        }
      });
    } else {
      this.title = "新增工艺点位";
    }
  },
};
</script>
<style lang='scss' scoped>
.add-form-box {
  margin-top: 15px;
  border-radius: 8px;
  padding: 10px 30px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
  background-color: #fff;
  h3 {
    font-size: 20px;
  }
  .el-input {
    width: 260px;
  }
  .inline-form-item {
    display: flex;
    margin-bottom: 10px;
    .add-form-input {
      width: 200px;
    }
    .icon-btn {
      height: 30px;
      padding: 6px;
      margin-top: 5px;
      margin-left: 20px;
    }
  }
}
</style>
