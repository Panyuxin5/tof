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
      <el-form-item label="点位编号" prop="code">
        <el-input v-model="form.code"></el-input>
      </el-form-item>
      <el-form-item label="点位名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
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
export default {
  name: "addOtherRoles",
  data() {
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
        code: [{ required: true, message: "请输入点位编号", trigger: "blur" }],
        name: [{ required: true, message: "请输入点位名称", trigger: "blur" }],
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
            // sc_process_update(this.form).then((res) => {
            //   if (res.code == 0) {
            //     this.$message.success("修改成功");
            //     this.$router.go(-1);
            //   }
            // });
          } else {
            // sc_process_save(this.form).then((res) => {
            //   if (res.code == 0) {
            //     this.$message.success("保存成功");
            //     this.$router.go(-1);
            //   }
            // });
          }
        } else {
          return false;
        }
      });
    },
    // getCodeList(wid) {
    //   sc_reactor_codeList(wid).then((res) => {
    //     if (res.code == 200) {
    //       this.codeList = res.data;
    //     }
    //   });
    // },
    // workshopChange() {
    //   //获得反应釜
    //   if (this.form.reactorId != null) {
    //     this.form.reactorId = "";
    //   }
    //   this.getCodeList(this.form.workshopId);
    // },
  },
  created() {
    //获得所有的车间
    // sc_process_workshop().then((res) => {
    //   if (res.code == 0) {
    //     this.workshopList = res.data;
    //   }
    // });
    if (this.$route.query.id) {
      this.title = "编辑角色";
      // sc_reactor_buyId(this.$route.query.id).then((res) => {
      //   if (res.code == 200) {
      //     this.form = res.data;
      //   }
      // });
    } else {
      this.title = "新增角色";
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
