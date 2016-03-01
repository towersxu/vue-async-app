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
        console.log(this.uploader);
        this.uploader.start();
      },
      'add-file': function(data) {
        this.uploader.addFile(data.dom,data.id);
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
          'FilesAdded': function(up, files) {
            var coverAddFlag = false;
            for(var i=0;i<files.length;i++){
              if(/image\/\w+/.test(files[i].type)){ //如果是图片
                var file = up.getFile(files[i].name)
                if(file) { // ,判断该图片是否是文件的封面
                  file.coverImageId = files[i].id;
                  self.$dispatch('cover-add',file);
                  coverAddFlag = true;
                }
              }
            }
            if(!coverAddFlag){
              self.files.concat(files);
              self.$dispatch('file-add',files);
            }
          },
          'QueueChanged':function(upload){
            console.log('QueueChanged...');
            console.log(upload.files)
          },
          'BeforeUpload': function(up, file) {
            console.log('BeforeUpload ...')
            console.log(arguments);
          },
          'UploadProgress': function(up, file) {
            console.log('UploadProgress ...')
            console.log(arguments);
          },
          'UploadComplete': function() {
            console.log('UploadComplete ...')
            console.log(arguments);
          },
          'FileUploaded': function(up, file, info) {
            console.log('FileUploaded ...')
            console.log(arguments);
          },
          'Error': function(up, err, errTip) {
            console.log('Error ...')
            console.log(arguments);
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
