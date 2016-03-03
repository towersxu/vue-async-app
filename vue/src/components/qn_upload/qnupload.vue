<template>
  <div id="qnupload-container" class="btn btn-red upload-add-btn" >
    <div  id="qnupload-btn" class="">
      <i class="block sp i141"></i>
      <span>点击添加作品</span>
    </div>
  </div>

</template>

<script>
  var moxie = require('./moxie.js');
  var plup = require('./plupload.dev.js');
  var qinniu = require('./qiniu.js');
//  var uploader='';
  module.exports = {
    data:function(){
      return {
        files:[],
        uploader:{}
      }
    },
    events:{
      /**
       * 将文件移出上传序列
       * @param fileId 文件Id
       */
      'delete-file':function(fileId){
        var file = this.uploader.getFile(fileId);
        if(file){
          if(file.coverImageId){
            this.uploader.removeFile(this.uploader.getFile(file.coverImageId));
          }
          this.uploader.removeFile(this.uploader.getFile(fileId));
        }
      },
      'upload-file': function () {
        this.uploader.start();
      },
      'add-file': function(data) {
        this.uploader.addFile(data.blob,data.id);
      },
      stop_upload: function () {
        this.uploader.stop();
      },
      cancel_upload: function (files){
        if(files instanceof Array){
          if(files.length===0){
            files = this.uploader.files;
          }
          for(var i= 0,max=files.length;i<max;i++){
            this.uploader.removeFile(files[i]);
          }
        }
      }
    },
    ready:function(){
      var self = this;
      self.uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'qnupload-btn',
        container: 'qnupload-container',
        drop_element: 'container',
        max_file_size: '1000gb',
        flash_swf_url: './Moxie.swf',
        dragdrop: true,
        chunk_size: '4mb',
        uptoken_url: '/v/uptoken',
        domain: 'http://7xqjp2.com1.z0.glb.clouddn.com',
        get_new_uptoken: false,
        // downtoken_url: '/downtoken',
        unique_names: true,
        // save_key: true,
        // x_vars: {
        //     'id': '1234',
        //     'time': function(up, file) {
        //         var time = (new Date()).getTime();
        //         // do something with 'time'
        //         return time;
        //     },
        // },
        auto_start: false,
        log_level: 5,
        init: {
          /**
           * @des files只有两种情况,1是在添加视频的时候,产生多个视频.这个时候
           * @param up
           * @param files
           */
          'FilesAdded': function(up, files) {
            var coverAddFlag = false;
            for(var i=0;i<files.length;i++){
              if(/image\/\w+/.test(files[i].type)){ //如果是图片
                var file = up.getFile(files[i].name);
                if(file) { // ,判断该图片是否是文件的封面
                  if(file.coverImageId){   //如果已经存在封面
                    up.removeFile(up.getFile(file.coverImageId));
                  }
                  file.coverImageId = files[i].id;
//                  self.$dispatch('cover-add',file);
                  coverAddFlag = true;
                }
              } else {  //不是图片,则表示不是封面,将不是视频的文件移除上传队列.

              }
            }
            if(!coverAddFlag){
              self.files.concat(files);
              self.$dispatch('file-add',files);  //添加视频后,通知父组件
            }
          },
          'QueueChanged':function(upload){
//            self.$dispatch('file_queue_change',upload.files);  //添加视频后,通知父组件
          },
          'BeforeUpload': function(up, file) {
          },
          'UploadProgress': function(up, file) {

          },
          'UploadComplete': function() {
            self.$dispatch('upload-complete');  //上传完成后,通知父组件
          },
          'FileUploaded': function(up, file, info) {
          },
          'Error': function(up, err, errTip) {
          }
          // ,
          // 'Key': function(up, file) {
          //     var key = "";
          //     // do something with key
          //     return key
          // }
        }
      });
    }
  };
</script>
<style scoped lang="less">
  @import "../../static/less/color.less";
  @import "./qnupload.less";
</style>
