<template>
  <div class="items-list">
    <div class="item" v-for="recom in recoms">
      <div class="img-wrap">
        <img src="./A3.jpg">
        <div class="labels"><i class="sp i133"></i><i class="sp i134"></i></div>
        <div class="video-container" v-on:mouseenter="play($event,$index)" v-on:mouseleave="destroy($event,$index)" v-on:click="goPlayer($index)">
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
</template>
<script>
  module.exports = {
    replace:true,
    data:function(){
      return {
        recoms:[],
        videoComponent:'',
        videoJs:'',
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
      var self = this;
        require.ensure(["../video-js/video.vue"], function (require) {
          self.videoJs = require("../video-js/video.vue");
          self.videoComponent = Vue.component('videoJs', self.videoJs);
        });
    },
    methods:{
      /**
       * 创建video实例;将video模块插入需要播放位置;调用播放视频
       */
      play:function(e,idx){
        if(!this.recoms[idx].video){
          e.target.innerHTML = this.videoJs.template;
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
                    name:'720p',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/V2gXjbEhXSwOCrTMZXKwYd_5-X4%3D%2FlqDkuRYFVokC045xBdCN2UyAqY3_',
                    type: 'application/vnd.apple.mpegurl'
                  },
                  {
                    name:'MP4',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/Michael%20Jackson%20-%20Hollywood%20Tonight.mp4',
                    type: 'video/mp4'
                  },
                  {
                    name:'1080p',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/V2gXjbEhXSwOCrTMZXKwYd_5-X4%3D%2FlqDkuRYFVokC045xBdCN2UyAqY3_',
                    type: 'application/vnd.apple.mpegurl'
                  },
                  {
                    name:'2K',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/V2gXjbEhXSwOCrTMZXKwYd_5-X4%3D%2FlqDkuRYFVokC045xBdCN2UyAqY3_',
                    type:'application/vnd.apple.mpegurl'
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
      /**
       * 删除video实例
       */
      destroy:function(e,idx){
        if(this.recoms[idx].video){
          this.recoms[idx].video.player.dispose();
          this.recoms[idx].video = null;
        }
      },
      /**
       * 跳转播放页;
       */
      goPlayer:function(index){
        this.recoms[index].video.player.dispose();                //删除当前video实例;
        this.recoms[index].video = null;
        this.$router.go({name:'player',params:{videoId:index}})
      }
    }
  }
</script>
