<template>
  <div v-on:click="triggerClose()">
    <gaia-header></gaia-header>
    <mask></mask>
    <navigation></navigation>
    <div v-bind:class="{'film-load':isLoading}" id="player">
      <div class="loader" v-show="isLoading"></div>
      <play-main></play-main>
    </div>
    <gaia-footer></gaia-footer>
  </div>
</template>

<script>
  var gaiaHeader = require('../../components/header/gaia-header.vue');
  var mask = require('../../components/mask/mask.vue');
  var navigation = require('../../components/navigation/navigation.vue');
  var gaiaFooter = require('../../components/footer/footer.vue');
  module.exports = {
    name:'player',
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
      gaiaFooter:gaiaFooter
    },
    ready:function(){
      if (!this.asyncPlayerModule) {
        var that = this;
        var Vue = require('vue');
        Vue.component('playMain', function (resolve, reject) {
          require.ensure(["./main/main.vue"], function (require) {
            that.isLoading = false;
            resolve(require("./main/main.vue"));
          });
        });
        that.asyncPlayerModule = new Vue({
          el: '#player',
          data: function(){
            return {};
          },
          events: {
          }
        });
      } else {
        console.log('this is play!');
      }
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


<style>
  .film-load{
    width: 100%;
    height: 500px;
    background: grey;
    position: relative;
  }
</style>
