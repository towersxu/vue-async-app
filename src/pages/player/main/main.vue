<template>
  <div class="play">
    <div class="play-box">
      <div class="b-nav">
        <a href="#">Gaiamount</a>
        <span>></span>
        <a href="#">作品池</a>
        <span>></span>
        <a href="#">测试样片</a>
      </div>
      <div class="complain">
        <a href="#">举报/投诉</a>
      </div>
      <div id="js-player-video">
      </div>
      <div class="video-info">
        <h2 class="title">视频标题在这里显示的1080p</h2>
        <div class="author">
          <img src="./F2.jpg" width="26" height="26" class="avatar">
          <span class="name">作者名称</span>
          <span class="date">发布于2016-01-06</span>
        </div>
        <div class="score">
          <div class="wrap" ng-click="stopPropagation($event)">
            <span class="num">6.7</span>
            <i class="star inline-block sp i122"  ng-click="isDoScore=true"></i>
            <i class="star inline-block sp i122"  ng-click="isDoScore=true"></i>
            <i class="star inline-block sp i122"  ng-click="isDoScore=true"></i>
            <i class="star inline-block sp i122"  ng-click="isDoScore=true"></i>
            <i class="star inline-block sp i122"  ng-click="isDoScore=true"></i>
            <i class="light inline-block sp i142" ng-click="isDoScore=true"></i>
            <div class="score-p hidden animated" ng-class="{'show flipInX':isDoScore}">
              <p class="score-p-p"><span class="score-p-num">54</span>人打分</p>
              <div><input class="score-input" type="text" placeholder="1~10"><span class="score-input-des">您的打分</span></div>
              <div class="score-sub"><span class="btn btn-red inline-block btn-small" ng-click="isDoScore=false">提交</span><span class="cancel" ng-click="isDoScore=false">取消</span></div>
            </div>
          </div>
        </div>
        <div class="video-des">
          <p class="des"><span>导演：张二</span><span class="split"></span><span>摄影：张二</span><span class="split"></span><span>剪辑：张二</span><span class="split"></span><span>调色：张二</span><span class="split"></span><span>地点：张二</span></p>
          <p class="des"><span>分辨率：3840x2160</span><span class="split"></span><span>格式：mp4</span><span class="split"></span><span>编码：H.264</span><span class="split"></span><span>码率：24857kbs</span><span class="split"></span><span>帧率：25fps</span></p>
          <div class="btn detail-btn">
            <i class="inline-block sp i35"></i>
            <span class="detail-w">视频详细信息</span>
          </div>
        </div>
        <div class="group">
          <div>
            <div class="group-btn-wrap" ng-click="stopPropagation($event)">
              <span class="group-btn" ng-class="{'hidden':showAddBtn}" ng-mouseenter="showAddBtn=true">小组</span>
              <span class="inline-block sp i128 group-btn2 hidden" ng-mouseleave="showAddBtn=false"  ng-click="isJoin=!isJoin" ng-class="{'show-inlineblock':showAddBtn}"></span>
            </div>
            <span>播放:189 / 喜欢:12 / 评分:6.7 / 下载:23 / 分享:40 / 嵌入:3</span>
            <div class="join-group hidden animated"  ng-class="{'show flipInX':isJoin}" ng-click="stopPropagation($event)">
              <div class="join-part join-left" ng-click="isJoin=false">加入小组</div>
              <div class="join-part join-right" ng-click="isJoin=false">加入专辑</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="more-video">
    <p class="more hidden" ng-class="{'hidden':showMoreVideo}" ng-click="showMoreVideo=true"><i class="inline-block sp i113"></i>更多相似...</p>
    <div class="container2 more-wrap animated" ng-class="{'show':showMoreVideo}">
      <div class="labels">
        <span class="label-name">作品标签:</span>
        <span class="label">深圳湾</span>
        <span class="label">素材</span>
        <span class="label">城市航拍</span>
        <span class="label">4K</span>
        <span class="label">风景</span>
      </div>
      <div class="more-list">
        <div class="more-item"><a href="#"><img src="./F31.jpg"></a></div>
        <div class="more-item"><a href="#"><img src="./F31.jpg"></a></div>
        <div class="more-item"><a href="#"><img src="./F31.jpg"></a></div>
        <div class="more-item"><a href="#"><img src="./F31.jpg"></a></div>
        <div class="more-item"><a href="#"><img src="./F31.jpg"></a></div>
        <div class="more-item"><a href="#"></a></div>
        <div class="more-item"><a href="#"></a></div>
        <div class="more-item"><a href="#"></a></div>
        <div class="bar left">
          <i class="inline-block sp i53"></i>
        </div>
        <div class="bar right">
          <i class="inline-block sp i54"></i>
        </div>
      </div>
      <p class="more close-more" ng-click="showMoreVideo=false"><i class="inline-block sp i114"></i>收起</p>
    </div>
  </div>
  <div class="play play2">
    <div class="description">
      <h3>缘起</h3>
      <p class="content">Gaiamount 是一个致力于给用户提供上传空间和视频在线存储与分享服务的专业性平台，通过云存储及后台转码技术为用户提供基础的在线存储及其他相关的在线服务。 Gaiamount 对用户传输内容不做任何修改或编辑，内容的标题和备注由用户在上传时填写。 Gaiamount 高度重视知识产权保护并遵守中华人民共和国各项知识产权法律、法规和具有约束力的规范性文件...</p>
      <p class="read-more"><span class="open-read">展开阅读></span><span class="words">文字（506）</span><span class="images">图片（3）</span></p>
    </div>
    <div class="description">
      <h3>评论</h3>
      <div class="content">
        <div class="comments">
          <div class="comments-input">
            <img src="./F2.jpg" width="40" height="40" class="avatar">
            <div class="text-area">
              <textarea class="text"></textarea>
              <div class="text-bottom">
                <span class="tbs">理性社区，文明发言</span>
                <span class="inline-block btn btn-red btn-small com-btn">评论</span>
                <i class="inline-block sp i78"></i>
              </div>
            </div>
          </div>
          <div class="comment-list">
            <div class="comment-item">
              <img src="./F2.jpg" width="40" height="40" class="avatar">
              <div class="comment">
                <p class="head">
                  <span class="user">评论用户A</span>
                  <span class="date">2016-02-04 15:06:44</span>
                  <span class="response">回复</span>
                </p>
                <p class="comment-p">这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容
                  这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容
                  这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容</p>
              </div>
            </div>
            <div class="comment-item">
              <img src="./F2.jpg" width="40" height="40" class="avatar">
              <div class="comment">
                <p class="head">
                  <span class="user">评论用户A</span>
                  <span class="date">2016-02-04 15:06:44</span>
                  <span class="response">回复</span>
                </p>
                <p class="comment-p">这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容</p>
              </div>
            </div>
            <div class="comment-item res">
              <img src="./F2.jpg" width="30" height="30" class="avatar avatar2">
              <div class="comment">
                <p class="head">
                  <span class="user">评论用户A</span>
                  <span class="date">2016-02-04 15:06:44</span>
                  <span class="response"></span>
                </p>
                <p class="comment-p">这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容</p>
              </div>
            </div>
            <div class="comment-item">
              <img src="./F2.jpg" width="40" height="40" class="avatar">
              <div class="comment">
                <p class="head">
                  <span class="user">评论用户A</span>
                  <span class="date">2016-02-04 15:06:44</span>
                  <span class="response">回复</span>
                </p>
                <p class="comment-p">这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容
                  这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容
                  这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容这里是用户的回复内容</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="read-more"><span class="open-read">展开全部></span><span class="words">评论（56）</span>
    </div>
  </div>
</template>
<script>
  module.exports = {
    data:function(){
      return {
        videoInstance:'',
        videoJs:''
      }
    },
    components:{
    },
    /**
     * 在从其他页面进入此页面时,回触发此函数;
     * 如果此模块已经创建,那么不会触发后面的ready函数;
     * 表示videoJs模块已经加载成功.
     */
    attached:function(){
      if(this.videoJs){
        this.play();      //如果videoJs模块已经加载成功,则直接调用play方法.
      }
    },
    /**
     * 如果第一次加载此模块,则会触发ready函数,此时将video.vue模块关联.并调用play方法.
     */
    ready:function(){
      var self = this;
      require.ensure(["../../../components/video-js/video.vue"], function (require) {
        self.videoJs = require("../../../components/video-js/video.vue");
        self.videoComponent = Vue.component('videoJs', self.videoJs);
        self.play();
      });
    },
    /**
     * 离开video页面时会触发此函数,移除video实例.
     */
    detached:function(){
      if(this.videoInstance) {
        this.videoInstance.player.dispose();
        this.videoInstance = null;
      }
    },
    methods:{
      'play':function(){
        if(this.videoInstance){
          this.videoInstance.player.dispose();
          this.videoInstance=null;
        }
        document.getElementById('js-player-video').innerHTML = this.videoJs.template;
        this.videoInstance = new this.videoComponent();
        this.videoInstance.initVideo({
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
      }
    }
  }
</script>
