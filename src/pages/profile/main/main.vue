<template>
  <div class="profile">
    <div class="top-bg--img">
      <div class="user-profile">
        <div class="user-profile__avatar">
          <img src="./B8.jpg">
        </div>
        <p class="user-profile__name">用户名</p>
        <span class="user-profile__profession">职业</span>
        <p class="user-profile__signature">个性签名</p>
        <p class="user-profile__description">欢迎您来到我的个人中心,欢迎您来到我的个人中心,欢迎您来到我的个人中心,欢迎您来到我的个人中心,欢迎您来到我的个人中心,欢迎您来到我的个人中心!
          <a href="javascript:0" class="user-profile__description-link">详细介绍></a>
        </p>
        <div class="user-profile-nav bfc-hidden">
          <ul>
            <li class="user-profile-nav__item">主页</li>
            <li class="user-profile-nav__item user-profile-nav__item--selected">创作</li>
            <li class="user-profile-nav__item">专辑</li>
            <li class="user-profile-nav__item">圈子</li>
            <li class="user-profile-nav__item">收藏</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="profile-works-list">
      <div class="container">
        <ul class="profile-works-list__nav">
          <li class="profile-works-list__item profile-works-list__item--selected">作品</li>
          <li class="profile-works-list__item">素材</li>
          <li class="profile-works-list__item">剧情</li>
          <li class="profile-works-list__item">学院</li>
        </ul>
        <div class="profile-works-list__wrap">
          <works-list></works-list>
        </div>
        <pagination></pagination>
      </div>
    </div>
  </div>
</template>
<script>
  var worksList = require('../../../components/works_list/worksList.vue');
  var pagination = require('../../../components/pagination/pagination.vue');
  module.exports = {
    data:function(){
      return {}
    },
    ready:function(){
      console.log(this);
    },
    components:{
      worksList:worksList,
      pagination:pagination
    }
  }
</script>
<style>

</style>
