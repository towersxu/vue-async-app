<template>
    <textarea name="editor1" class="txtarea" id="editor1" >

    </textarea>
</template>
<script>
  var ck = require('./ckeditor.js');
  module.exports = {
    ready:function(){
      console.log('ready');
      console.log(ck);
      console.log(window.CKEDITOR);
      if(window.CKEDITOR.instances['editor1'] === undefined){
        window.CKEDITOR.basePath='/build/ckeditor/';
        window.CKEDITOR.replace('editor1',{
          customConfig:''
        });
      }
    }
  };
//  module.exports = {
//    data:function(){
//      return {}
//    },
//    methods:{
//      load:function(src){
//        src = src || '//cdn.ckeditor.com/4.5.6/full/ckeditor.js';
//        var newScript = document.createElement("script");
//        newScript.type = "text/javascript";
//        newScript.src =  src;
//        var first = document.getElementsByTagName("head")[0].firstChild;
//        document.getElementsByTagName("head")[0].insertBefore(newScript, first);
//      },
//      onLoad:function(){
//        var self = this;
//
//        if(CKEDITOR){
//          var editor =CKEDITOR.replace( 'editor1' );
//          editor.on( 'change', function( evt ) {
//            $scope.channel.details = evt.editor.getData();
//          });
//        }else{
//          console.log('no');
//        }
//
//        console.log('CKEDITOR loaded');
//      }
//    },
//    ready:function(){
//
////      var a = CKEDITOR.replace('#editor1', options);
//
//      console.log('ready');
//      this.load();
//      var self = this;
//      var isLoad = false;
//      var checkInit = function(){
//        var time=0;
//        var loading = setInterval(function(){
//          if(typeof CKEDITOR != 'undefined' && isLoad == false){
//            console.log('CKEDITOR start load');
//            console.log(CKEDITOR);
//            clearInterval(loading);
//            self.onLoad();
//            isLoad = true;
//            time++;
//            if(time>20){
//              clearInterval(loading);
//            }
//          }
//        },500);
//      };
//      checkInit();
//    }
//  }
</script>
