webpackJsonp([5],{262:function(i,s,e){var o,r;e(263),o=e(264),r=e(270),i.exports=o||{},i.exports.__esModule&&(i.exports=i.exports["default"]),r&&(("function"==typeof i.exports?i.exports.options:i.exports).template=r)},263:function(i,s){},264:function(i,s,e){"use strict";var o=e(20),r=e(23),t=e(64),a=e(67),l=e(265);i.exports={name:"profile",replace:!1,data:function(){return{isLoading:!0}},components:{gaiaHeader:o,mask:r,navigation:t,gaiaFooter:a,profileMain:l},ready:function(){},methods:{triggerClose:function(){this.$broadcast("close_modal")}},events:{"app-mask-show":function(i){this.$broadcast("mask_show",i)},"app-crop-show":function(i){this.$broadcast("cropper_show",i)}}}},265:function(i,s,e){var o,r;e(266),o=e(267),r=e(268),i.exports=o||{},i.exports.__esModule&&(i.exports=i.exports["default"]),r&&(("function"==typeof i.exports?i.exports.options:i.exports).template=r)},266:function(i,s){},267:function(i,s,e){"use strict";var o=e(72),r=e(132);i.exports={data:function(){return{}},ready:function(){console.log(this)},components:{worksList:o,pagination:r}}},268:function(i,s,e){i.exports="<div class=profile> <div class=top-bg--img> <div class=user-profile> <div class=user-profile__avatar> <img src="+e(269)+'> </div> <p class=user-profile__name>用户名</p> <span class=user-profile__profession>职业</span> <p class=user-profile__signature>个性签名</p> <p class=user-profile__description>欢迎您来到我的个人中心,欢迎您来到我的个人中心,欢迎您来到我的个人中心,欢迎您来到我的个人中心,欢迎您来到我的个人中心,欢迎您来到我的个人中心! <a href=javascript:0 class=user-profile__description-link>详细介绍></a> </p> <div class="user-profile-nav bfc-hidden"> <ul> <li class=user-profile-nav__item>主页</li> <li class="user-profile-nav__item user-profile-nav__item--selected">创作</li> <li class=user-profile-nav__item>专辑</li> <li class=user-profile-nav__item>圈子</li> <li class=user-profile-nav__item>收藏</li> </ul> </div> </div> </div> <div class=profile-works-list> <div class=container> <ul class=profile-works-list__nav> <li class="profile-works-list__item profile-works-list__item--selected">作品</li> <li class=profile-works-list__item>素材</li> <li class=profile-works-list__item>剧情</li> <li class=profile-works-list__item>学院</li> </ul> <div class=profile-works-list__wrap> <works-list></works-list> </div> <pagination></pagination> </div> </div> </div>'},269:function(i,s,e){i.exports=e.p+"5d03dfba209472095cb99d72f2460706.jpg"},270:function(i,s){i.exports="<div v-on:click=triggerClose()> <gaia-header></gaia-header> <mask></mask> <navigation></navigation> <profile-main></profile-main> <gaia-footer></gaia-footer> </div>"}});