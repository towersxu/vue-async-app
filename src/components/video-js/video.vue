<template>
  <video id="vid1" class="video-js gaia show-control vjs-default-skin " controls preload="auto" width="860" height="482" poster="static/img/B3.jpg">
    <p>Video Playback Not Supported</p>
  </video>
</template>

<script>
  require('./video-js.css');
  require('./modernizr.js');
//  require('./video.js');
  require('./videojs.hls.js');
  module.exports = {
    data:function(){
      player:{}
    },
    methods:{
      'initVideo':function(msg){
        msg = msg || {};
        var  progressed,volumeMenuButton;

        // create a really simple plugin
        // this one just logs the buffered percentage to the console whenever
        // more data is downloaded
        progressed = function(options) {
//      this.on('progress', function(e) {
//        console.log(this.bufferedPercent());
//      });
        };

        // register the plugin
        videojs.plugin('progressed', progressed);

        // initialize it
        this.player = videojs('#vid1',msg);
      },
      'pausedVideo':function(msg){

      }
    },
    events:{
      'play_video':function(msg){
        this.initVideo(msg)
      }
    }
  }
</script>
