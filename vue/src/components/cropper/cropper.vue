<template>
  <div class="mask" v-show="isShow">
    <div class="cropper-modal-custom animated" v-show="isShow" transition="fade">
      <p class="title">上传图片封面</p>
      <i class="block close sp i105" v-on:click.stop="closeModal()"></i>
      <div class="content">
        <div class="img-wrap">
          <div class="img-container">
            <canvas id="canvas"></canvas>
          </div>
        </div>
        <div class="img-info">
          <div class="upload-btn" v-on:click="replace()">
            <i class="sp i87 inline-block"></i>
            <span>浏览...</span>
            <div class="moxie-shim moxie-shim-html5"
                 style="position: absolute; top: 0; left: 0; width: 120px; height: 28px; overflow: hidden; z-index: 0;">
              <input type="file" v-on:change="selectCoverFile($event)" id="cropper-cover-upload"
                     style="font-size: 999px; opacity: 0; position: absolute; top: 0; left: 0; width: 120px; height: 28px;">
            </div>
          </div>
          <p class="tip">支持不大于5M的PNG/JPG图片</p>
          <div class="ops">
            <div class="op left-rotate" v-on:click="rotate(30)"><span>左旋</span></div>
            <div class="op right-rotate" v-on:click="rotate(-30)"><span>右旋</span></div>
            <div class="op reset" v-on:click="reset()"><span>重置操作</span></div>
          </div>
          <div class="preview">
            <span class="preview-title">效果预览:</span>
            <div class="preview-wrap">
              <div class="img-preview preview-lg"></div>
            </div>
          </div>
          <div class="btn-wrap">
            <span class="btn btn-red btn-red2" v-on:click="saveCover()">保存封面</span>
            <span class="btn-cancel">取消</span>
          </div>
          <div >
            <img v-bind:src="resultImage" style="width: 200px;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  require('./cropper.css');
  var util = require('../../util/util.js');
  var Cropper = require('./cropper');
  module.exports = {
    data:function(){
      return {
        isShow:false,
        cropper:{},
        defaultImage:'',
        resultImage:'',
        msg:{},
        fileEle:''
      }
    },
    ready:function(){
      this.defaultImage = new Image();
      this.defaultImage.src = '/static/img/vbg.jpg';
      this.fileEle = document.getElementById('cropper-cover-upload');
    },
    methods:{
      closeModal:function(){
        this.isShow = false;
      },
      replace:function(){
        this.fileEle.click();
      },
      /**
       * 获取file元素中的文件,如果是图片,则显示在cropper中
       */
      selectCoverFile:function(){
        var f,
          self = this;
        f = this.fileEle && this.fileEle.files[0];
        if(f){
          util.blobOrFileToDataUrl(f,function(result){
            if(/data:image\/\w+;base64/.test(result)){
              self.cropper.replace(result);
            }
          });
        }
      },
      /**
       * 旋转图片
       * @param degree 旋转度数
       */
      rotate:function(degree){
        this.cropper.rotate(degree);
      },
      /**
       *  重置图片
       */
      reset:function(){
        this.cropper.reset();
      },
      /**
       * 保存cropper
       */
      saveCover:function() {
        if(this.cropper.getCroppedCanvas){
          this.msg.dataurl = this.cropper.getCroppedCanvas().toDataURL('image/jpeg');
          this.$dispatch('cropper-result',this.msg);
          this.cropper.destroy();
          this.isShow = false;
        }
      },
      /**
       * 创建cropper
       */
      createCropper:function(){
        var canvas = document.getElementById('canvas'),
            width  = this.defaultImage.width || 400,
            height = this.defaultImage.height || 400;

        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(
          this.defaultImage,
          0, 0, this.defaultImage.naturalWidth, this.defaultImage.naturalHeight,
          0, 0, width, height
        );
        this.cropper = new Cropper(canvas,{
          aspectRatio: 16 / 9,
          preview:'.img-preview',
          crop: function(data) {
          }
        });
      }
    },
    events:{
      'show_cropper': function (msg) {
        this.createCropper();
        this.selectCoverFile();
        this.isShow = true;
        this.msg = msg;
      }
    }
  }
</script>
<style scoped lang="less">
  @import "custom.less";
</style>
