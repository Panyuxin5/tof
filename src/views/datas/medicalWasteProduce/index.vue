<template>
  <div style="" v-cloak>
    <div class="app-container">
      <!-- <div style="width: 100%;height: auto;margin-bottom: 20px;">
                <el-button type="primary" @click="dialogVisible = true">添加</el-button>
            </div> -->
      <el-form
        :inline="true"
        :model="Userform"
        class="demo-form-inline"
        @submit.native.prevent
      >
        <el-form-item>
          <el-input
            v-model="Userform.username"
            placeholder="用户名"
            @keyup.enter.native="
              Userform.current = 1;
              getUserList();
            "
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="button button-search"
            type="primary"
            icon="el-icon-search"
            @click="
              Userform.current = 1;
              getUserList();
            "
            >查询</el-button
          >
        </el-form-item>
      </el-form>

      <el-card>
        <div class="header">
          <div class="left">人员管理</div>
          <div class="right">
            <el-button
              class="button button-add"
              type="success"
              icon="el-icon-plus"
              @click="
                dialogVisible = true;
                title = '添加';
              "
              >添加</el-button
            >
          </div>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
          <el-table-column label="序号" width="80">
            <template slot-scope="scope">
              <span style="">{{
                scope.$index + 1 + (Userform.current - 1) * Userform.size
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="用户名" width="200">
            <template slot-scope="scope">
              <span style="">{{ scope.row.username }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名" width="200">
            <template slot-scope="scope">
              <span style="">{{ scope.row.realName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="性别" width="80">
            <template slot-scope="scope">
              <span style="">{{ scope.row.sex }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车间" width="" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span style="">{{ scope.row.wid }}</span>
            </template>
          </el-table-column>
          <el-table-column label="部门" width="" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span style="">{{ scope.row.did }}</span>
            </template>
          </el-table-column>
          <el-table-column label="职务" width="" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span style="">{{ scope.row.job }}</span>
            </template>
          </el-table-column>
          <el-table-column label="状态" width="200">
            <template slot-scope="scope">
              <span style="" v-if="scope.row.status === 1">正常</span>
              <span style="" v-if="scope.row.status === 0">禁用</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                class="min-button button-edit"
                @click="handleEdit(scope.row.id, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                class="min-button button-add"
                @click="handleInit(scope.row.id, scope.row)"
                >重置密码</el-button
              >
              <el-button
                size="mini"
                class="min-button button-delete"
                v-if="scope.row.status === 1"
                @click="disable(scope.row)"
                >禁用</el-button
              >
              <el-button
                size="mini"
                class="min-button button-edit"
                v-else
                @click="enable(scope.row)"
                >启用</el-button
              >
              <el-button
                size="mini"
                class="min-button button-delete"
                @click="handleDelete(scope.row.id, scope.row)"
                >删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          style="margin-top: 10px; width: 100%; text-align: right"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="Userform.current"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="Userform.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-card>

      <!-- 添加/编辑用户 -->
      <el-dialog
        :title="title === 'edit' ? '编辑' : '添加'"
        :visible.sync="dialogVisible"
        width="50%"
        height="800px"
        @close="close()"
      >
        <el-form
          :model="addform"
          label-width="80px"
          :rules="addFormRules"
          ref="addformRef"
          @submit.native.prevent
        >
          <el-form-item label="id" hidden>
            <el-input v-model="addform.id"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="addform.username"
              placeholder="请输入用户名(手机号)"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="realName">
            <el-input
              v-model="addform.realName"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item v-if="title == '添加'" label="密码" prop="password">
            <el-input
              v-model="addform.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="职务" prop="job">
            <el-input v-model="addform.job" placeholder="请输入职务"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="addform.sex">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="addform.status">
              <el-option
                v-for="item in statuslist"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="部门" prop="did">
            <el-checkbox-group v-model="addform.did">
              <el-checkbox
                v-for="item in didlist"
                :key="item.did"
                :label="item.did"
                name="type"
                >{{ item.name }}</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="角色" prop="rid">
            <el-select v-model="addform.rid">
              <el-option
                v-for="item in rolelist"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="车间" prop="wid">
            <el-checkbox-group v-model="addform.wid">
              <el-checkbox
                v-for="item in widlist"
                :key="item.wid"
                :label="item.wid"
                name="type2"
                >{{ item.name }}</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button class="button-back" @click="dialogVisible = false"
            >取 消</el-button
          >
          <el-button
            class="button-save"
            type="primary"
            v-if="title == '添加'"
            @click="adduser"
            >确 定</el-button
          >
          <el-button
            class="button-save"
            type="primary"
            v-if="title == '编辑'"
            @click="edituser"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { trim } from "@/assets/js/jq.js";
// import {
//   selectAll,
//   getOneUser,
//   addsysUser,
//   editsysUser,
//   deleteUser,
//   checkUserName,
//   selectAllNoPage,
//   getselectAllworkshop,
//   selectAllNoPagedepartment,
// } from "@/api/basicsApi.js";
export default {
  // el: '#app',
  data() {
    return {
      flag: 0,
      yname: "",
      dialogVisible: false,
      ifromeurl: "",
      idList: [],
      title: "",
      msg: "hello",
      menulist: [],
      statuslist: [
        {
          label: "正常",
          value: 1,
        },
        {
          label: "禁用",
          value: 0,
        },
      ],
      rolelist: [],
      widlist: [],
      didlist: [],
      Userform: {
        id: undefined,
        username: undefined,
        password: undefined,
        status: undefined,
        mobile: undefined,
        size: 10,
        pages: 1,
        current: 1,
      },
      addform: {
        id: undefined,
        username: undefined,
        password: undefined,
        status: 1,
        realName: undefined,
        rid: undefined,
        sex: "男",
        wid: [],
        did: [],
        job: undefined,
      },
      total: undefined,
      addformRef: {
        username: undefined,
        realName: undefined,
        password: undefined,
        status: undefined,
        mobile: undefined,
        job: undefined,
        rid: undefined,
      },
      addFormRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            pattern:
              /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            message: "请输入正确的手机号码",
          },
        ],
        realName: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        rid: [
          {
            required: true,
            message: "请选择角色",
            trigger: "change",
          },
        ],
        job: [
          {
            required: true,
            message: "请输入职务",
            trigger: "blur",
          },
        ],
        // did:[
        //   {
        //     required: true,
        //     message: "请选择部门",
        //     trigger: "change",
        //   }
        // ],
        // wid:[
        //   {
        //     required: true,
        //     message: "请选择车间",
        //     trigger: "change",
        //   }
        // ],
        status: [
          {
            type: "String",
            required: true,
            message: "请选择状态",
            trigger: "change",
          },
        ],
      },
      editFormRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            pattern:
              /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            message: "请输入正确的手机号码",
          },
        ],
        realName: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
        rid: [
          {
            required: true,
            message: "请选择角色",
            trigger: "change",
          },
        ],
        job: [
          {
            required: true,
            message: "请输入职务",
            trigger: "blur",
          },
        ],
        // did:[
        //   {
        //     required: true,
        //     message: "请选择部门",
        //     trigger: "change",
        //   }
        // ],
        // wid:[
        //   {
        //     required: true,
        //     message: "请选择车间",
        //     trigger: "change",
        //   }
        // ],
        status: [
          {
            type: "String",
            required: true,
            message: "请选择状态",
            trigger: "change",
          },
        ],
      },
      tableData: [],
    };
  },
  created: function () {
    this.getUserList();
    this.getrolelist();
    this.getwidlist();
    this.getdidlist();
    // console.info("created")
    // var self = this;
  },
  mounted() {
    // console.log("dsad")
    // document.getElementById("app").style.display = "block";
  },
  methods: {
    indexMethod(index) {
      return index * 2;
    },
    // 改改每页显示数据条数
    handleSizeChange(val) {
      this.Userform.size = val;
      this.getUserList();
    },
    // 获取用户列表
    getUserList() {
      this.Userform.username = this.Userform.username
        ? trim(this.Userform.username)
        : undefined;
      this.Userform.mobile = this.Userform.mobile
        ? trim(this.Userform.mobile)
        : undefined;
      selectAll(this.Userform)
        .then((res) => {
          this.tableData = res.data.records;
          this.flag = this.tableData.length;
          this.total = res.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除用户
    handleDelete(id, row) {
      this.idList.push(id);
      this.handleDeleteAll();
    },
    // 获取角色列表
    getrolelist() {
      this.rolelist = [];
      selectAllNoPage()
        .then((res) => {
          if (res.code == 0) {
            for (var i in res.data) {
              var val = {
                id: res.data[i].id,
                name: res.data[i].nameZh,
              };
              this.rolelist.push(val);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取车间列表
    getwidlist() {
      this.widlist = [];
      getselectAllworkshop()
        .then((res) => {
          if (res.code == 0) {
            for (var i in res.data) {
              var val = {
                name: res.data[i].name,
                wid: res.data[i].wid,
              };
              this.widlist.push(val);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取部门列表
    getdidlist() {
      this.didlist = [];
      selectAllNoPagedepartment()
        .then((res) => {
          if (res.code == 0) {
            for (var i in res.data) {
              var val = {
                name: res.data[i].name,
                did: res.data[i].did,
              };
              this.didlist.push(val);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 批量删除用户
    handleDeleteAll() {
      if (this.idList.length == 0) {
        this.$message({
          message: "请选择要删除的选项！",
          type: "error",
        });
        return;
      }
      this.$confirm("此操作将永久删除该数据，确定执行么？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          var params = this.uniq(this.idList);
          for (var key in params) {
            if (params[key] == undefined || params[key] == "") {
              delete params[key];
            }
          }
          var val = {
            idList: params.toString(),
          };
          deleteUser(val)
            .then((res) => {
              if (res.code === 0) {
                this.$message({
                  message: "删除成功",
                  type: "success",
                });
                if (this.flag == 1 && this.Userform.current > 1) {
                  this.Userform.current--;
                }
              } else {
                this.$message({
                  message: res.msg,
                  type: "warning",
                });
              }
              this.idList = [];
              this.getUserList();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message.error({
            message: "已取消删除",
          });
        });
    },
    // 数组去重
    uniq(array) {
      var temp = []; //一个新的临时数组
      for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
          temp.push(array[i]);
        }
      }
      return temp;
    },
    // table表格选项改变时触发
    handleSelectionChange(val) {
      this.idList = [];
      for (let i = 0; i < val.length; i++) {
        this.idList.push(val[i].id);
      }
    },
    // 改变表格当前显示页数
    handleCurrentChange(val) {
      this.Userform.current = val;
      this.getUserList();
    },
    // 编辑用户
    handleEdit(id, row) {
      this.title = "编辑";
      getOneUser(id)
        .then((res) => {
          this.dialogVisible = true;
          this.addform = res.data;
          this.addform.wid = this.addform.wid
            ? this.addform.wid.split(",")
            : [];
          this.addform.did = this.addform.did
            ? this.addform.did.split(",")
            : [];
          for (var i in this.addform.wid) {
            this.addform.wid[i] = this.addform.wid[i] * 1;
          }
          for (var j in this.addform.did) {
            this.addform.did[j] = this.addform.did[j] * 1;
          }
          this.yname = res.data.username;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleInit(id, row) {
      var params = {
        id: id,
        password: 123456,
      };
      editsysUser(params)
        .then((res) => {
          if (res.code === 0) {
            this.$message({
              message: "密码重置成功",
              type: "success",
            });
          }
          this.getUserList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //监听添加编辑对话框关闭事件
    close() {
      if (this.$refs.addformRef !== undefined) {
        this.$refs.addformRef.resetFields();
      }
      this.yname = "";
      this.title = "添加";
      this.onAddReset();
    },
    // 添加用户
    adduser() {
      this.$refs.addformRef.validate((valid) => {
        if (!valid) return;
        var namep = {
          username: this.addform.username,
        };
        checkUserName(namep)
          .then((res) => {
            if (res.code != 0) {
              // this.$message({
              //   message:res.msg,
              //   type:"warning"
              // })
            } else {
              var params = Object.assign({}, this.addform);
              // params.wid=JSON.parse(JSON.stringify(params.wid))
              // params.did=JSON.parse(JSON.stringify(params.did))
              params.wid = params.wid.length > 0 ? params.wid.join(",") : "";
              params.did = params.did.length > 0 ? params.did.join(",") : "";
              addsysUser(params)
                .then((res) => {
                  if (res.code === 0) {
                    this.$message({
                      message: "添加成功",
                      type: "success",
                    });
                  }
                  this.onAddReset();
                  this.dialogVisible = false;
                  this.onReset();
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          })
          .catch((err) => {
            this.$message.error({
              message: "请求失败",
            });
          });
      });
    },
    // 重置用户表单对象
    onReset() {
      this.Userform.id = undefined;
      this.Userform.username = undefined;
      this.Userform.password = undefined;
      this.Userform.status = undefined;
      this.Userform.mobile = undefined;
      this.Userform.size = 10;
      this.Userform.pages = 1;
      this.Userform.current = 1;
      this.getUserList();
    },
    //重置添加编辑表单对象
    onAddReset() {
      this.addform.id = undefined;
      this.addform.username = undefined;
      this.addform.password = undefined;
      this.addform.status = 1;
      this.addform.realName = undefined;
      this.addform.rid = undefined;
      (this.addform.sex = "男"),
        (this.addform.wid = []),
        (this.addform.did = []),
        (this.addform.job = undefined);
    },
    // 编辑用户
    edituser() {
      this.$refs.addformRef.validate((valid) => {
        if (!valid) return;
        var namep = {
          username:
            this.addform.username == this.yname ? "" : this.addform.username,
        };
        checkUserName(namep)
          .then((res) => {
            if (res.code != 0) {
              this.$message({
                message: res.msg,
                type: "warning",
              });
            } else {
              this.$confirm("确定更新此用户吗？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
              })
                .then(() => {
                  var params = Object.assign({}, this.addform);
                  params.wid =
                    params.wid.length > 0 ? params.wid.join(",") : "";
                  params.did =
                    params.did.length > 0 ? params.did.join(",") : "";
                  console.log(params);
                  delete params.password;
                  editsysUser(params)
                    .then((res) => {
                      if (res.code === 0) {
                        this.$message({
                          message: "编辑成功",
                          type: "success",
                        });
                      }
                      this.dialogVisible = false;
                      this.getUserList();
                      this.onAddReset();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch(() => {
                  this.$message.error({
                    message: "已取消编辑",
                  });
                });
            }
          })
          .catch((err) => {
            this.$message.error({
              message: "请求失败",
            });
          });
      });
    },
    // 启用
    enable(user) {
      const commitUser = { id: user.id, status: 1 };
      this.$confirm("确定启用此用户吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log(commitUser, 'DSDDD')
          editsysUser(commitUser)
            .then((res) => {
              if (res.code === 0) {
                this.$message({
                  message: "启用成功",
                  type: "success",
                });
              }
              this.getUserList();
            })
            .catch((err) => {});
        })
        .catch(() => {
          this.$message.error({
            message: "已取消启用",
          });
        });
    },
    // 禁用
    disable(user) {
      let commitUser = {
        id: user.id,
        status: 0,
      };
      this.$confirm("确定禁用此用户吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log(commitUser, 'DSDDD')
          editsysUser(commitUser)
            .then((res) => {
              if (res.code === 0) {
                this.$message({
                  message: "禁用成功",
                  type: "success",
                });
              }
              this.getUserList();
            })
            .catch((err) => {});
        })
        .catch(() => {
          this.$message.error({
            message: "已取消禁用",
          });
        });
    },
  },
};
</script>
    <style lang="scss" scoped>
[v-cloak] {
  display: none;
}

::v-deep .el-dialog {
  margin-top: 10vh !important;
}
::v-deep .el-dialog__body {
  max-height: 630px;
  overflow-y: auto;
}

::v-deep .el-dialog__body::-webkit-scrollbar {
  display: none;
}
::v-deep .el-table th > .cell {
  text-align: center;
}

::v-deep .el-table .cell {
  text-align: center;
}
.app-container {
  width: 100%;
  height: 100%;
}

.app-container .roles-table {
  margin-top: 30px;
}

::v-deep .el-tooltip__popper {
  width: 80%; /*修改宽度*/
  background: #000 !important; /*背景色  !important优先级*/
  opacity: 0.5 !important; /*背景色透明度*/
  color: #ffffff !important; /*字体颜色*/
}
.app-container .permission-tree {
  margin-bottom: 30px;
}

::v-deep .demo-form-inline .el-form-item {
  margin-bottom: 0 !important;
}
.demo-form-inline {
  background: #ffffff !important;
  // min-height: 80px !important;
  // line-height: 50px !important;
  margin: 0px !important;
  margin-bottom: 0.16rem !important;
  border-radius: 8px !important;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 10%) !important;
  padding: 14px 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  // -webkit-justify-content: space-between;
  // justify-content: space-between;
}
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.left {
  float: left;
  font-size: 18px;
  font-weight: 800;
}

.right {
  margin-right: 20px;
  float: right;
}
::v-deep .el-table th {
  background-color: #f1f1f1;
  color: #333;
}

/* .app-container .el-form-item__label {
            margin-left: 80px i !important;
            width: 80px;
            text-align: right i !important;
        } */
</style>
<style>
</style>
