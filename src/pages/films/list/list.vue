<template>
  <div class="films">
    <div class="container2">
      <h2>作品池></h2>
      <div class="filter">
        <div class="sel filter1" ng-click="showNav1=true">
          <span>所有作品</span>
          <div class="selects hidden animated" ng-class="{'show flipInX':showNav1}">
            <div class="option" ng-click="showNav1=false;stopPropagation($event)">所有作品</div>
            <div class="option" ng-click="showNav1=false;stopPropagation($event)">测试&样片</div>
            <div class="option" ng-click="showNav1=false;stopPropagation($event)">剪辑&调色</div>
            <div class="option" ng-click="showNav1=false;stopPropagation($event)">风景&旅行</div>
            <div class="option" ng-click="showNav1=false;stopPropagation($event)">短片</div>
            <div class="option" ng-click="showNav1=false;stopPropagation($event)">记录</div>
            <div class="option" ng-click="showNav1=false;stopPropagation($event)">商业&广告</div>
            <div class="option" ng-click="showNav1=false;stopPropagation($event)">MV</div>
          </div>
        </div>
        <div class="sel filter2" ng-click="showNav2=true">
          <span>全部</span>
          <div class="selects selects2 hidden animated" ng-class="{'show flipInX':showNav2}">
            <div class="option" ng-click="showNav2=false;stopPropagation($event)">全部</div>
            <div class="option" ng-click="showNav2=false;stopPropagation($event)">盖亚推荐</div>
            <div class="option" ng-click="showNav2=false;stopPropagation($event)">4K</div>
            <div class="option" ng-click="showNav2=false;stopPropagation($event)">可下载</div>
            <div class="option" ng-click="showNav2=false;stopPropagation($event)">免费下载</div>
            <div class="option" ng-click="showNav2=false;stopPropagation($event)">付费下载</div>
          </div>
        </div>
        <div class="sel filter3" ng-click="showNav3=true">
          <span>默认</span>
          <div class="selects selects2 hidden animated" ng-class="{'show flipInX':showNav3}">
            <div class="option" ng-click="showNav3=false;stopPropagation($event)">最新发布</div>
            <div class="option" ng-click="showNav3=false;stopPropagation($event)">最多播放</div>
            <div class="option" ng-click="showNav3=false;stopPropagation($event)">最多收藏</div>
            <div class="option" ng-click="showNav3=false;stopPropagation($event)">最多评论</div>
            <div class="option" ng-click="showNav3=false;stopPropagation($event)">最多下载</div>
          </div>
        </div>
        <div class="sel search">
          <input type="text" class="search-box" placeholder="搜索“深圳”">
          <i class="inline-block sp i96"></i>
        </div>
        <div class="reset">
          <i class="inline-block sp i68"></i>
        </div>
      </div>
      <div class="img-wraps">
        <div class="works-list-wrap">
          <works-list></works-list>
        </div>
        <pagination></pagination>
        <div class="adv">
          <img src="./A7.jpg" class="radius-img">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var worksList = require('../../../components/works_list/worksList.vue');
  var pagination = require('../../../components/pagination/pagination.vue');
  module.exports = {
    components:{
      worksList:worksList,
      pagination:pagination
    }
  }
</script>
