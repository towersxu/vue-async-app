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
        msg:{}
      }
    },
    ready:function(){
      this.defaultImage = new Image();
      this.defaultImage.src = '/static/img/vbg.jpg';
    },
    methods:{
      closeModal:function(){
        this.isShow = false;
      },
      replace:function(){
        var e = document.getElementById('cropper-cover-upload');
        e && e.click();
      },
      selectCoverFile:function(){
        var self = this;
        var e = document.getElementById('cropper-cover-upload');
        var f = e && e.files[0];
        util.blobOrFileToDataUrl(f,function(result){
          self.cropper.replace(result);
        });
      },
      rotate:function(degree){
        this.cropper.rotate(degree);
      },
      reset:function(){
        this.cropper.reset();
      },
      saveCover:function() {
        if(this.cropper.getCroppedCanvas){
          this.msg.dataurl = this.cropper.getCroppedCanvas().toDataURL('image/jpeg');
          this.$dispatch('cropper_result',this.msg);
          this.cropper.destroy();
          this.isShow = false;
        }
      }
    },
    events:{
      'show_cropper': function (msg) {
        var canvas = document.getElementById('canvas');
        var width = this.defaultImage.width || 400;
        var height = this.defaultImage.height || 400;
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
            console.log(data.x);
            console.log(data.y);
            console.log(data.width);
            console.log(data.height);
            console.log(data.rotate);
            console.log(data.scaleX);
            console.log(data.scaleY);
          }
        });
        this.isShow = true;
        this.msg = msg;
      }
    }
  }
</script>
<style scoped lang="less">
  @import "custom.less";
</style>
