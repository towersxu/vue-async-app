<template>
  <div class="area">
    <h3>作品推荐</h3>

    <div class="more"><span>更多作品</span><i class="sp i57"></i></div>
    <div class="items-list">
      <div class="item" v-for="recom in recoms">
        <div class="img-wrap">
          <img src="./A3.jpg">
          <div class="labels"><i class="sp i133"></i><i class="sp i134"></i></div>
          <div class="video-container" v-on:mouseenter="play($event,$index)" v-on:mouseleave="destroy($event,$index)" >
          </div>
        </div>
        <div class="item-content">
          <a href="play.html" class="title">作品名称显示</a>
          <span class="time">10:34</span>
          <div class="labels">商业广告|汽车|TVC|模特|源文件|高清|LogC|测试样片</div>
          <div class="icons">
            <div class="icon"><i class="inline-block sp i27"></i><span>785</span></div>
            <div class="icon"><i class="inline-block sp i28"></i><span>75</span></div>
            <div class="icon"><i class="inline-block sp i29"></i><span>5</span></div>
            <div class="icon"><i class="inline-block sp i30"></i><span>115</span></div>
          </div>
        </div>
        <div class="item-user">
          <div class="avatar"><img src="./A3.jpg" width="24" height="24"></div>
          <div class="username">UserName</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var videoJs = require('../../../components/video-js/video.vue');
  module.exports = {
    replace:true,
    data:function(){
      return {
        recoms:[],
        videoComponent:'',
        videoInstances:[],
        initVideo:false,
        isLoaded:false
      }
    },
    components:{
    },
    created:function(){
      var self = this;
      setTimeout(function(){
        self.$set('recoms', [{},{},{},{},{},{},{}]);
      },1000);
    },
    ready:function(){
      this.videoComponent = Vue.component('videoJs', videoJs);
      var resource = this.$resource('/v/{id}');
//      resource.get({id: 1}).then(function (response) {
//        setTimeout(function(){
//          console.log(1)
//          this.$set('recoms', [{},{},{},{},{},{},{}])
//        },1000);
//      });
    },
    detached:function(){
      console.log('detached...');
    },
    destroyed:function(){
      console.log('destroyed..........');
    },
    methods:{
      'play':function(e,idx){
        if(!this.recoms[idx].video){
          e.target.innerHTML = videoJs.template;
          var videoInstance = new this.videoComponent();
          videoInstance.initVideo({
            id:'vid1',
            autoplay:true,
            controlBar: {
              volumeMenuButton: {
                inline: false,
                vertical: true
              },
              PlayResolutions:{
                idx:1,   //0-n
                videos:[
                  {
                    name:'2K',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/V2gXjbEhXSwOCrTMZXKwYd_5-X4%3D%2FluGJHug3Kr_Exxv3Fxe16pqNMeNV',
                    type: 'application/vnd.apple.mpegurl'
                  },
                  {
                    name:'MP4',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/James%20Blunt%20-%20If%20Time%20Is%20All%20I%20Have.mp4',
                    type: 'video/mp4'
                  },
                  {
                    name:'720p',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/V2gXjbEhXSwOCrTMZXKwYd_5-X4%3D%2Flv3a3j1mfcgOb4TYIF9-3K3vFL3d',
                    type: 'application/vnd.apple.mpegurl'
                  }
                ]
              },
              PlayerRatio:{
                idx:1,
                ratios:[
                  {
                    name:'16:9',
                    width:'860',
                    height:'483'
                  },
                  {
                    name:'4:3',
                    width:'860',
                    height:'645'
                  }
                ]
              },
              LogoText:{
                click:function(){
                  console.log('this is logo');
                }
              }
            }
          });
          this.recoms[idx].video = videoInstance;
        }
      },
      'destroy':function(e,idx){
        if(this.recoms[idx].video){
//          console.log(this.videoInstance);

//          console.log(this.videoInstance);
//          console.log(e.target);
//          var e = document.getElementById('vid1');
//          e.parentNode.removeChild(e);
//          console.log(this.videoInstance);
          this.recoms[idx].video.player.dispose();
          this.recoms[idx].video = null;
//          this.recoms[idx].video.pause();
        }
      }
    }
  }
</script>
