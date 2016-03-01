<template>
  <div class="mask" v-bind:class="{'show':isShow}">
    <div class="cropper-modal-custom">
      <p class="title">上传图片封面</p>
      <i class="block close sp i105" v-on:click.stop="closeModal()"></i>
      <div class="content">
        <div class="img-wrap">
          <div class="img-container">
            <img src="./picture.jpg" alt="Picture" id="image">
          </div>
        </div>
        <div class="img-info">
          <div class="upload-btn">
            <i class="sp i87 inline-block"></i>
            <span>浏览...</span>
          </div>
          <p class="tip">支持不大于5M的PNG/JPG图片</p>
          <div class="ops">
            <span>
              <i></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="img-wrap">-->

    <!--</div>-->

    <!--<div class="docs-preview clearfix">-->
      <!--<div class="img-preview preview-lg"></div>-->
    <!--</div>-->
  </div>
</template>
<script>
  require('./cropper.css');
  var Cropper = require('./cropper');
  module.exports = {
    data:function(){
      return {
        isShow:false
      }
    },
    ready:function(){
      var image = document.getElementById('image');
      var cropper = new Cropper(image, {
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
    },
    events:{
      'show_cropper': function () {
        this.isShow = true;
      }
    }
  }
</script>
<style scoped lang="less">
  @import "custom.less";
  .inv{
    visibility: hidden;
  }
  .inv.show{
    visibility: visible;
  }
  .img-container, .img-preview {
    background-color: #f7f7f7;
    width: 100%;
    text-align: center;
  }
  .preview-lg{
    width: 263px;
    height: 148px;
  }
  .img-preview {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  /*.img-wrap{*/
    /*position: absolute;*/
    /*top:50%;*/
    /*left: 50%;*/
    /*margin-left: -320px;*/
    /*margin-top: -180px;*/
    /*width: 640px;*/
    /*height: 360px;*/
  /*}*/
  .img-container{
    min-height: 360px;
    max-height: 400px;
  }
  .docs-preview{
    position: absolute;
    left: 0;
    top: 0;
  }
  .preview-lg{
    width: 300px;
    height: 200px;
  }
</style>
