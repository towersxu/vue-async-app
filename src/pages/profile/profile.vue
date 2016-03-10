<template>
  <div v-on:click="triggerClose()">
    <gaia-header></gaia-header>
    <mask></mask>
    <navigation></navigation>
    <profile-main></profile-main>
    <gaia-footer></gaia-footer>
  </div>
</template>

<script>
  var gaiaHeader = require('../../components/header/gaia-header.vue');
  var mask = require('../../components/mask/mask.vue');
  var navigation = require('../../components/navigation/navigation.vue');
  var gaiaFooter = require('../../components/footer/footer.vue');
  var profileMain = require('./main/main.vue');
  module.exports = {
    name:'profile',
    replace:false,
    data:function(){
      return {
        isLoading:true
      }
    },
    components:{
      gaiaHeader:gaiaHeader,
      mask:mask,
      navigation:navigation,
      gaiaFooter:gaiaFooter,
      profileMain:profileMain
    },
    ready:function(){
    },
    methods:{
      triggerClose:function(){
        this.$broadcast('close_modal');
      }
    },
    events:{
      'app-mask-show':function(msg) {
        this.$broadcast('mask_show',msg);
      },
      'app-crop-show':function(msg) {
        this.$broadcast('cropper_show',msg);
      }
    }
  };
</script>


<style>
  .film-load{
    width: 100%;
    height: 500px;
    background: grey;
    position: relative;
  }
</style>
