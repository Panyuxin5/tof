<template>
  <div>
    <seach-form-compent
      :select-array="selectArray"
      :input-array="inputArray"
      :calendarFlag_oneN="true"
      @search="search" />
    <!-- <seachFormCompent
    /> -->

    <div class="qrcode-table">
      <div class="header">
        <div class="left">二维码管理</div>
        <div class="right">
          <el-button
            class="button button-add"
            type="success"
            icon="el-icon-download"
            @click="downLoadImage">导出</el-button>
        </div>
      </div>
      <!-- <el-divider class="divider"></el-divider> -->
      <div id="qrcode-content" ref="imageWrapper">
        <div v-for="(item, index) in qrCodeData" :key="index" class="qrcode">
          <vue-qr
            :id_name="'qcode_' + index"
            :size="180"
            :text="item.name"
            :qid="item.name"
          ></vue-qr>
          <span>{{ item.name }}</span>
        </div>
      </div>

      <div class="tips" v-if="qrCodeData.length == 0">暂无数据</div>
    </div>
  </div>
</template>

<script>
import SeachFormCompent from "@/components/seachFormCompent/seachFormCompent.vue";
import vueQr from "vue-qr";
import JSZip from "jszip";
import FileSaver from "file-saver";
import html2canvas from "html2canvas";

export default {
  name: "qrCode",
  components: {
    SeachFormCompent,
    vueQr,
    JSZip,
    FileSaver,
  },
  data() {
    return {
      qrCodeData: [],
      qrFile: [],
      selectArray: [{
        placeholder: '角色类型',
        prop: 'userType',
        data: []
      }],
      inputArray: [
        {
          placeholder: '名称',
          prop: 'name'
        },
        {
          placeholder: '编号',
          prop: 'number'
        },
      ]
    };
  },
  methods: {
    search(e){
      console.log('search',e)
    },
    // 批量导出二维码
    downLoadPicture() {
      if (this.qrFile) {
        this.getUrl();
      } else {
        this.$message.error("当前没有可下载的二维码");
      }
    },
    getUrl() {
      const zip = new JSZip();
      this.qrFile.forEach((item) => {
        const fileName = item.name + ".png";
        zip.file(fileName, item.url.substring(22), { base64: true }); //向zip中添加文件
      });
      zip.generateAsync({ type: "blob" }).then((content) => {
        // 生成二进制流
        FileSaver.saveAs(content, "批量导出" + "--二维码.zip"); // 利用file-saver保存文件
      });

      this.qrFile = [];
    },
     //点击下载当前截图
    downLoadImage() {
      // const loading = this.YHloadingFun()//开启加载弹框
      html2canvas(this.$refs.imageWrapper).then((canvas) => {
        // loading.close();//关闭加载
        let dataURL = canvas.toDataURL("image/png");
        if (dataURL !== "") {
          var aLink = document.createElement("a");
          aLink.download = "二维码";
          aLink.href = dataURL;
          aLink.click();
        }
      });
    },
  },
  mounted() {
    for(var i = 1; i < 15; i++){
      this.qrCodeData.push({
        name: 'tof'+i
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.qrcode-table {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 10%) !important;
}
.qrcode {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  width: 216px;
  border: 1px solid #ddd;
  align-items: center;
  background-color: #ddd;
  span {
    font-size: 14px;
    margin-bottom: 10px;
  }
  img {
    margin: 15px 0px;
  }
}
#qrcode-content{
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
.divider{
  margin: 24px 22px;
}
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-left: 20px;
  padding: 16px 0;
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
.tips{
  height: 20px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #ddd;
  margin-bottom: 20px;
}
</style>
