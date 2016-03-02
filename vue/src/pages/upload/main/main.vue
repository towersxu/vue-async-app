<template>
  <div>
    <div class="base-bg upload-panel">
      <div class="container hidden">
        <div class="upload-des">
          <h1>上传作品</h1>
          <span class="space">本周可用空间560.5MB</span><span class="split">|</span><span>总可用空间28.4GB</span>
          <upload></upload>
          <div class="content">
            <p class="des">Gaiamount禁止上传任何违反相关法律的内容,同时您需确认拥有所上传作品的相关版权;</p>

            <p class="des">出于对高清画质的要求,任何720P以下的作品将无法上传;</p>

            <p class="des">由于技术性约束,您在线播放的作品可能存在被截取的风险;<a href="">了解详情></a></p>
          </div>
        </div>
        <div class="upload-detail">
          <div class="video-list">
            <p class="tips-none" v-show="upFiles.length===0">- 未添加作品! -</p>

            <div class="list-wrap" v-show="upFiles.length>0">
              <div class="video-items">
                <div class="video-item" v-for="file in upFiles">
                  <img v-bind:src="file.coverUrl" width="160" height="90">

                  <div class="des">
                    <p class="name">{{file.name}}</p>

                    <p class="size">{{file.size}}</p>

                    <div class="cover-up-btn" v-on:click="openCoverFile($index)">
                      <div style="position: relative;z-index: 1">上传封面</div>
                      <div class="moxie-shim moxie-shim-html5"
                           style="position: absolute; top: 0; left: 0; width: 60px; height: 20px; overflow: hidden; z-index: 0;">
                        <input type="file" v-on:change="selectCoverFile($event,$index)" id="{{'op_file_'+$index}}"
                               style="font-size: 999px; opacity: 0; position: absolute; top: 0; left: 0; width: 60px; height: 20px;">
                      </div>
                    </div>
                  </div>
                  <i class="sp inline-block i102 delete" v-on:click="deleteUpFile($index)"></i>
                </div>
              </div>
              <p class="tips-video">5个作品,共2.7GB,请在下方设置视频信息:</p>
            </div>
          </div>
          <div class="public-tabs">
            <div class="tab selected">
              <i class="inline-block sp i70"></i>
              <span>公开作品</span>
            </div>
            <div class="tab">
              <i class="inline-block sp i69"></i>
              <span>加密作品</span>
            </div>
          </div>
          <div class="film-details">
            <div class="film-base-info">
              <div class="input-item">
                <span>作品</span>
                <input type="text">
              </div>
              <div class="input-item">
                <span>摄影</span>
                <input type="text">
              </div>
              <div class="input-item">
                <span>剪辑</span>
                <input type="text">
              </div>
              <div class="input-item">
                <span>调色</span>
                <input type="text">
              </div>
              <div class="input-item">
                <span>导演</span>
                <input type="text">
              </div>
              <div class="input-item">
                <span>机型</span>
                <input type="text">
              </div>
              <div class="input-item">
                <span>镜头</span>
                <input type="text">
              </div>
              <div class="input-item">
                <span>地点</span>
                <input type="text">
              </div>
            </div>
            <div class="film-labels">
              <span class="labels-title red-star-import">设置标签</span>
              <span class="labels-title-des">为更准确的搜索到您的作品,请输入2~20个标签,用空格或逗号分隔;</span>
              <input type="text" class="label-input" v-bind:style="{textIndent:indentLength+'px'}" v-model="labelName"
                     v-on:keyup.enter="setLabel()">

              <div class="labels-add" id="labels-wrap-id" v-upload-get-width="labels">
              <span class="label" v-for="label in labels"><span class="arrow"></span><span>{{label}}</span><i
                class="sp inline-block i22" v-on:click="closeLabel($index)"></i></span>
              </div>
              <div class="labels-options">
                <span>常用标签:</span>
                <div class="labels-options-wrap">
                  <span class="label" v-on:click="addLabel('深圳湾')"><span class="arrow"></span><span>深圳湾</span></span>
                  <span class="label" v-on:click="addLabel('风景')"><span class="arrow"></span><span>风景</span></span>
                  <span class="label" v-on:click="addLabel('航拍')"><span class="arrow"></span><span>航拍</span></span>
                <span class="label" v-on:click="addLabel('城市延时摄影')"><span
                  class="arrow"></span><span>城市延时摄影</span></span>
                  <span class="label" v-on:click="addLabel('4K')"><span class="arrow"></span><span>4K</span></span>
                  <span class="label" v-on:click="addLabel('素材')"><span class="arrow"></span><span>素材</span></span>
                </div>
              </div>
            </div>
            <div class="film-d-area film-types">
              <div class="film-d-title" v-on:click="isChooseTypes=true"><span class="red-star-import">选择分类</span></div>
              <div class="film-types-items" v-show="isChooseTypes" transition="expand-type">
                <div class="film-item btn">测试&样片</div>
                <div class="film-item btn">剪辑&调色</div>
                <div class="film-item btn">风景&旅行</div>
                <div class="film-item btn">短片</div>
                <div class="film-item btn">记录</div>
                <div class="film-item btn">商业&广告</div>
                <div class="film-item btn">MV</div>
                <div class="film-item btn">航拍</div>
                <div class="film-item btn">教程</div>
                <div class="film-item btn selected">艺术&实验</div>
                <div class="film-item btn">家庭&婚礼</div>
                <div class="film-item btn">其他</div>
                <span class="film-tips">*最多可选择3项</span>
              </div>
            </div>
            <div class="film-d-area film-download">
              <div class="film-d-title" v-on:click="isSetDownload=true"><span class="red-star-import">下载设置</span></div>
              <div class="film-download-items" v-show="isSetDownload" transition="expand-download">
                <div class="film-dl-wrap">
                  <div class="film-dl-item" v-bind:class="{'selected': downloadType===1 }" v-on:click="downloadType=1"><i
                    class="inline-block sp i125"></i><span>允许他人下载</span></div>
                  <div class="film-dl-item" v-bind:class="{'selected': downloadType===2 }" v-on:click="downloadType=2"><i
                    class="inline-block sp i125"></i><span>允许他人下载</span></div>
                  <div class="film-dl-item" v-bind:class="{'selected': downloadType===3 }" v-on:click="downloadType=3"><i
                    class="inline-block sp i125"></i><span>不允许他人下载</span></div>
                </div>
                <div v-show="downloadType===1">
                  <p class="film-dl-version-tips">
                    您将慷慨地为他人免费提供该视频的下载与使用(<a href="javascript:0">了解详情</a>),您可以在下方自主设置他人可下载的视频版本:
                  </p>

                  <div class="film-dl-version">
                    <span class="film-version">源视频版本</span>
                    <span class="film-version">4K转码版本</span>
                    <span class="film-version">2K转码版本</span>
                    <span class="film-version">1080P转码版本</span>
                    <span class="film-version">720P转码版本</span>
                  </div>

                </div>
                <div v-show="downloadType===2">
                  <p class="film-dl-version-tips">
                    您将售卖该视频并获取其中90%的高收益(<a href="javascript:0">了解详情</a>),请根据您的实际分辨率设置下方可下载版本及价格:
                  </p>

                  <div class="film-dl-version">
                    <div class="film-price">
                      <span class="film-version">源视频版本</span>

                      <div class="input-wrap"><input type="text"><span class="measure">元</span></div>
                    </div>
                    <div class="film-price">
                      <span class="film-version">4K转码版本</span>

                      <div class="input-wrap"><input type="text"><span class="measure">元</span></div>
                    </div>
                    <div class="film-price">
                      <span class="film-version">2K转码版本</span>

                      <div class="input-wrap"><input type="text"><span class="measure">元</span></div>
                    </div>
                    <div class="film-price">
                      <span class="film-version">1080P转码版本</span>

                      <div class="input-wrap"><input type="text"><span class="measure">元</span></div>
                    </div>
                    <div class="film-price">
                      <span class="film-version">720P转码版本</span>

                      <div class="input-wrap"><input type="text"><span class="measure">元</span></div>
                    </div>

                  </div>

                </div>
                <div v-show="downloadType===3">
                  <p class="film-dl-version-tips">
                    * 您的作品只用于展示;无法下载的好作品确实是一种可惜,不是吗?
                  </p>
                </div>
              </div>
            </div>
            <div class="film-d-area film-edit">
              <div class="film-d-title" v-on:click="isEdit=true"><span>编写幕后故事</span></div>
              <div class="editor-panel" v-show="isEdit" transition="expand-edit">
                <editor></editor>
              </div>
            </div>
            <div class="film-add-items">
              <div class="add-item">
                <span class="item-title">添加到专辑</span>
                <select-add></select-add>
              </div>
              <div class="add-item">
                <span class="item-title">添加到小组</span>

                <div class="select select-box">
                  <div class="select-options">
                    <div class="option">- 不添加 -</div>
                    <div class="option">我创建的小组</div>
                    <div class="option selected">同好新曲小组</div>
                    <div class="option selected">同撒是否爱上小组</div>
                    <div class="option selected">哪里临汾是小组</div>
                  </div>
                  <div class="select-icon">
                    <i class="sp i2 block"></i>
                    <i class="sp i3 block"></i>
                  </div>
                </div>
              </div>
              <div class="add-item">
                <span class="item-title">添加水印</span>

                <div class="select select-box">
                  <div class="select-options">
                    <div class="option">- 不添加 -</div>
                    <div class="option">添加文字水印</div>
                    <div class="option selected">添加图片水印</div>
                  </div>
                  <div class="select-icon">
                    <i class="sp i2 block"></i>
                    <i class="sp i3 block"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="upload-area">
            <p>上传即表示您已同意网站<a href="javascript:0">上传协议</a></p>
            <div class="upload-btn btn btn-red" v-on:click="uploadFile()">确认上传</div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="uploading-head">
          <h1 class="title">正在上传</h1>
          <div class="uploading-process">
            <span class="">合计<span class="data">5</span>个作品</span>
            <span class="process-des">完成<span class="data">5</span>个</span>
            <span class="process-des">剩余<span class="data">3221.0MB</span></span>
            <span class="process-des">总进度<span class="data">10%</span></span>
            <span class="process-des">平均速度<span class="data">534KB/s</span></span>
            <span class="process-des">预计耗时<span class="data">45分钟23秒</span></span>
          </div>
          <div class="uploading-option">
            <span class="pause">全部暂停</span>
            <span class="cancel">全部取消</span>
          </div>
        </div>
        <div class="uploading-content">
          <div class="uploading-items">
            <div class="item">
              <img src="vbg.jpg">
              <div class="process">
                <div class="process-detail">
                  <span class="name">名称是声明奥迪</span>
                  <span>2.4G</span>
                  <span>MOV</span>
                  <span>公开</span>
                  <span>不允许下载</span>
                </div>
                <div class="process-bar">
                  <div class="process-rate" style="width: 30%"></div>
                </div>
                <div class="process-des"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cropper></cropper>
  </div>

</template>
<script>
  var Vue = require('vue');
  var editor = require('../../../components/ckeditor/ckeditor.vue');
  var select = require('../select/select.vue');
  var upload = require('../../../components/qn_upload/qnupload.vue');
  var cropper = require('../../../components/cropper/cropper.vue');
  var util = require('../../../util/util.js');
  /**
   * module upload-get-width
   * des 在动态添加标签时,将标签显示在输入框上,同时修改输入框的indent
   */
  Vue.directive('upload-get-width', {
    update: function () {
      this.vm.indentLength = this.el.offsetWidth + 20;
    }
  });
  module.exports = {
    data: function () {
      return {
        upFiles: [],         //上传文件显示列表
        isChooseTypes: false,//控制选择分类的关闭和展开
        isSetDownload: false,//控制下载设置的关闭和展开
        downloadType: 1,     //下载设置的tab选项
        isEdit: false,       //控制是否进行编辑
        indentLength: 20,    //设置标签输入框的indent
        labelName: '',       //设置标签输入框的model
        labels: []           //存储设置的标签
      }
    },
    methods: {
      /**
       * 将用户输入的标签转换存入labels中
       */
      setLabel: function () {
        var a = this.labels;
        this.labelName.split(' ').forEach(function (x) {
          a = a.concat(x.split(','));
        });
        this.labels = a;
        this.indentLength = (this.labelName.length) * 14 + 57 * this.labels.length;
        this.labelName = '';
      },
      /**
       * 删除已填写的标签
       * @param idx 序号
       */
      closeLabel: function (idx) {
        this.labels.splice(idx, 1);
      },
      /**
       * 增加标签
       * @param label 标签名
       */
      addLabel: function (label) {
        this.labels.push(label);
      },
      /**
       * 删除上传文件,修改上传文件序列.
       * @param idx 序号
       */
      deleteUpFile: function (idx) {
        this.$broadcast('delete-file', this.upFiles[idx].id);
        this.upFiles.splice(idx, 1);
      },
      /**
       * 判断新增的文件是否在上传序列中存在
       * @param file 文件对象
       * @returns {number} 返回所在文件中的位置.-1表示不存在.
       */
      getFileIdx: function (file) {
        for(var i= 0,max = this.upFiles.length;i<max;i++){
          if(this.upFiles[i].name === file.name){
            return i;
          }
        }
        return -1;
      },
      /**
       * 触发上传
       */
      uploadFile: function () {
        this.$broadcast('upload-file');
      },
      /**
       * 选择视频封面
       */
      selectCoverFile: function (e, idx) {
        if (e && e.target && e.target.value) {
          this.$broadcast('add-file', {dom: e.target, id: this.upFiles[idx].id});
        }
      },
      /**
       * 显示封面选择modal
       * @param idx 视频序号0-4
       */
      openCoverFile: function (idx) {
        this.$broadcast('show_cropper',{idx:idx});
      }
    },
    components: {
      editor: editor,
      selectAdd: select,
      upload: upload,
      cropper:cropper
    },
    events: {
      /**
       * 监听事件'file-add',修改上传文件序列
       * @param files 文件数组
       */
      'file-add': function (files) {
        for (var i = 0, max = files.length; i < max; i++) {
          if (this.getFileIdx(files[i]) === -1 && this.upFiles.length < 6) { //判断该文件是否已经在上传队列中,不能重复上传相同的文件.
            this.upFiles.push({
              name: files[i].name,
              id: files[i].id,
              size: files[i].size,
              coverUrl:'/static/img/vbg.jpg'
            });
          } else {
            this.$broadcast('delete-file', files[i].id)
          }
        }
      },
      /**
       * 监听事件,增加封面
       * @param file 文件
       */
      'cover-add': function (file) {
      },
      'cropper_result':function (msg) {
        this.upFiles[msg.idx].coverUrl = msg.dataurl;
        msg.id=this.upFiles[msg.idx].id;
        msg.blob=util.dataURLtoBlob(msg.dataurl);
        this.$broadcast('add-file', msg);
      }
    }
  }
</script>
<style scoped lang="less">
  @import "main.less";
</style>
