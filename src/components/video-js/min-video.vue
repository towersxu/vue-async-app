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
    ready:function(){
      var vid1, progressed,volumeMenuButton;

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
      vid1 = videojs('vid1',{
        controlBar: {
          volumeMenuButton: {
            inline: false,
            vertical: true
          },
          PlayResolutions:{
            idx:2,   //0-n
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
    }
  }
</script>
