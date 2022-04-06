
<template>
  <div>
    <el-upload ref="upload" :multiple="false" :auto-upload="true" :show-file-list="false" action="" :limit="1"
      :http-request="uploadFile" accept=".xls,.xlsx" :before-upload="beforeUpload" :on-exceed="handleExceed">
      <el-button type="primary" class="button button-add" icon="el-icon-download">导入</el-button>
    </el-upload>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "uploadBtn",
    props: {
      uploadUrl: '',
      postParam: ''
    },
    data() {
      return {};
    },
    components: {},
    methods: {
      // 上传文件之前的钩子
      beforeUpload(file) {
        // 判断文件格式
        let hz = file.name.split(".").pop();
        // console.log("hz",hz)
        if (hz != "xlsx" && hz != "xls") {
          this.$message.error(` 只能选择 excel 文件 `);
          return false;
        }
        // 判断文件大小
        let fileSize = file.size / 1024 / 1024 < 5;
        if (!fileSize) {
          this.$message.error("上传文件大小不能超过 5MB");
          return false;
        }
      },
      // 上传文件个数超过定义的数量
      handleExceed(files, fileList) {
        this.$message.warning(` 当前限制选择 1 个文件`);
      },
      // 上传文件
      uploadFile(item) {
        let fileObj = item.file;
        const form = new FormData(); // FormData 对象
        if (this.postParam == '') {
          form.append("file", fileObj);// 文件对象  'upload'是后台接收的参数名
        }else{
          form.append(this.postParam, fileObj);// 文件对象  'upload'是后台接收的参数名
        }
        axios({
            url: this.uploadUrl,
            data: form,
            method: "POST",
            contentType: "multipart/form-data",
            processData: false, // 告诉 jQuery 不要对 form 进行处理
            // contentType: false, // 指定为 false 才能形成正确的 Content-Type
          })
          .then((res) => {
            if (res.data.code == 0 || res.data.code == 200 || res.data.flag == "true") {
              this.$message.success("上传成功");
              this.$emit("uploadmsg");
            } else {
              // this.$message.error("上传失败" + res.data.message);
            }
            this.$refs.upload.clearFiles();
          })
          .catch((res) => {
            // this.$message.error("上传失败");
            this.$refs.upload.clearFiles();
          });
      },
    },
  };
</script>
<style scoped>
  ::v-deep .el-button {
    margin-right: 0px !important;
  }
</style>
