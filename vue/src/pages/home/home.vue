<template>
  <div v-on:click="triggerClose()">
    <gaia-header></gaia-header>
    <mask></mask>
    <navigation></navigation>
    <banner></banner>
    <div class="main">
      <div class="container">
        <ad></ad>
        <recomment></recomment>
        <material></material>
        <academy></academy>
        <bottom-ad></bottom-ad>
      </div>
    </div>
    <gaia-footer></gaia-footer>
  </div>
</template>

<script>
  var gaiaHeader = require('../../components/header/gaia-header.vue');
  var mask = require('../../components/mask/mask.vue');
  var navigation = require('../../components/navigation/navigation.vue');
  var banner = require('./banner/banner.vue');
  var ad = require('./ad/ad.vue');
  var recomment = require('./recomment/recom.vue');
  var material = require('./material/material.vue');
  var academy = require('./academy/academy.vue');
  var bottomAd = require('./ad_bottom/ad.vue');
  var gaiaFooter = require('../../components/footer/footer.vue');
  module.exports = {
    name:'home',
    replace:false,
    data:function(){
      return {}
    },
    components:{
      gaiaHeader:gaiaHeader,
      mask:mask,
      navigation:navigation,
      banner:banner,
      ad:ad,
      recomment:recomment,
      material:material,
      academy:academy,
      bottomAd:bottomAd,
      gaiaFooter:gaiaFooter
    },
    methods:{
      triggerClose:function(){
        this.$broadcast('close_modal');
      }
    },
    events:{
      'app-mask-show':function(msg) {
        this.$broadcast('mask_show',msg);
      }
    }
  };
</script>

