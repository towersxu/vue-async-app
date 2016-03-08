<template>
  <div class="mask" v-show="isShow">
    <div class="cropper-modal-custom animated" v-show="isShow" transition="fade">
      <p class="title">添加图片水印</p>
      <i class="block close sp i105" v-on:click.stop="closeModal()"></i>
      <div class="content">
        <div class="img-wrap">
          <div class="img-container" v-bind:class="imgPosition">
            <img v-bind:src="watermarkImage">
          </div>
        </div>
        <div class="img-info">
          <div class="float-wrapper">
            <div class="upload-btn" v-on:click="replace()">
              <i class="sp i85 inline-block"></i>
              <span>选择图片...</span>
              <div class="moxie-shim moxie-shim-html5"
                   style="position: absolute; top: 0; left: 0; width: 120px; height: 28px; overflow: hidden; z-index: 0;">
                <input type="file" v-on:change="selectCoverFile($event)" id="watermark-upload"
                       style="font-size: 999px; opacity: 0; position: absolute; top: 0; left: 0; width: 120px; height: 28px;">
              </div>
            </div>
            <div class="history-btn">
              <div class="btn btn-grey" v-on:click="isSelHistory=true">
                <span>历史记录...</span>
                <i class="sp inline-block i3"></i>
              </div>
              <div class="history-items animated" v-show="isSelHistory" transition="flipInX">
                <div class="arrow up small"></div>
                <div class="item" v-on:click="isSelHistory=false"><span>Gaiamount官方预设</span></div>
                <div class="item" v-on:click="isSelHistory=false"><span class="custom-item">自定义水印名称...</span></div>
                <div class="item" v-on:click="isSelHistory=false"><span class="custom-item">自定义水印名称...</span></div>
                <div class="item" v-on:click="isSelHistory=false"><span class="custom-item">自定义水印名称...</span></div>
              </div>
            </div>
          </div>
          <p class="tip">支持不大于1M的PNG/JPG图片</p>
          <div class="watermark-setting bfc-inline-block">
            <div class="select-input">
              <span class="input-head">位置</span>
              <div class="input-box select-box" v-on:click="isSelLocation=true">
                <span>居中</span>
                <i class="sp i2 block"></i>
                <i class="sp i3 block"></i>
                <div class="select-options animated" v-show="isSelLocation" transition="flipInX">
                  <div class="option" v-on:click.stop="setWatermarkPosition('NorthWest')">左上</div>
                  <div class="option" v-on:click.stop="setWatermarkPosition('NorthEast')">右上</div>
                  <div class="option" v-on:click.stop="setWatermarkPosition('Center')">居中</div>
                  <div class="option" v-on:click.stop="setWatermarkPosition('SouthWest')">左下</div>
                  <div class="option" v-on:click.stop="setWatermarkPosition('SouthEast')">右下</div>
                </div>
              </div>
            </div>
            <div class="select-input ml30">
              <span class="input-head">透明度</span>
              <div class="input-box select-box" v-on:click="isSelOpacity=true">
                <span>20%</span>
                <i class="sp i2 block"></i>
                <i class="sp i3 block"></i>
                <div class="select-options animated" v-show="isSelOpacity" transition="flipInX">
                  <div class="option" v-on:click.stop="isSelOpacity=false">20%</div>
                  <div class="option" v-on:click.stop="isSelOpacity=false">40%</div>
                  <div class="option" v-on:click.stop="isSelOpacity=false">60%</div>
                  <div class="option" v-on:click.stop="isSelOpacity=false">80%</div>
                  <div class="option" v-on:click.stop="isSelOpacity=false">100%</div>
                </div>
              </div>
            </div>
            <div class="select-input">
              <span class="input-head">尺寸</span>
              <div class="input-box select-box" v-on:click="isSelSize=true">
                <span>适中</span>
                <i class="sp i2 block"></i>
                <i class="sp i3 block"></i>
                <div class="select-options animated t25" v-show="isSelSize" transition="flipInX">
                  <div class="option" v-on:click.stop="isSelSize=false">适中</div>
                  <div class="option" v-on:click.stop="isSelSize=false">小尺寸</div>
                  <div class="option" v-on:click.stop="isSelSize=false">大尺寸</div>
                </div>
              </div>
            </div>
          </div>
          <div class="watermark-name">
            <span>名称</span>
            <input type="text" v-model="watermarkName" class="name-input" v-on:click="showTips=false" v-on:blur="checkWatermarkName()">
            <p class="watermark-tips" v-show="showTips">若添加名称,水印将会保存到<span>历史记录</span></p>
          </div>
        </div>
        <div class="btn-wrap">
          <span class="btn btn-red btn-red2" v-on:click="saveWatermark()">确定添加</span>
          <span class="btn-cancel">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var util = require('../../../util/util.js');
  module.exports = {
    data:function(){
      return {
        isShow:false,
        isSelHistory:false,      //选择历史记录
        isSelLocation:false,     //选择位置
        isSelOpacity:false,      //选择透明度
        isSelSize:false,         //选择尺寸
        showTips:true,           //显示名称提示
        imgPosition:{            //控制水印位置样式
          'NorthWest':false,
          'North':false,
          'NorthEast':false,
          'West':false,
          'Center':true,
          'East':false,
          'SouthWest':false,
          'South':false,
          'SouthEast':false
        },
        imgPositionSel:'Center',  //当前水印位置样式
        watermarkImage:'',        //水印src
        defaultImage:'',
        resultImage:'',
        msg:{},
        fileEle:''
      }
    },
    ready:function(){
      this.defaultImage = new Image();
      this.defaultImage.src = '/static/img/vbg.jpg';
      this.fileEle = document.getElementById('watermark-upload');
    },
    methods:{
      closeModal:function(){
        this.isShow = false;
      },
      replace:function(){
        this.fileEle.click();
      },
      /**
       * 由于placeholder无法设置多个颜色,用p模拟;
       * 此方法是由blur事件触发,检查输入框是否有内容.若无内容显示模拟placeholder
       */
      checkWatermarkName:function(){
        if(!this.watermarkName){
          this.showTips = true;
        }
      },
      /**
       * 设置水印位置
       */
      setWatermarkPosition:function(position){
        this.imgPosition[this.imgPositionSel] = false;
        this.imgPosition[position] = true;
        this.imgPositionSel = position;
        this.isSelLocation=false;
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
              self.watermarkImage=result;
            }
          });
        }
      },
      /**
       * 保存水印图片
       */
      saveWatermark:function() {
        this.$dispatch('watermark-result',this.watermarkImage);
        this.isShow = false;
      }
    },
    events:{
      'show_watermark': function (msg) {
//        this.createCropper();
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
