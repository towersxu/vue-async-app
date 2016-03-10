<template>
  <div v-on:click="triggerClose()">
    <gaia-header></gaia-header>
    <mask></mask>
    <navigation></navigation>
    <div v-bind:class="{'film-load':isLoading}" id="upload">
      <div class="loader" v-show="isLoading"></div>
      <upload-main></upload-main>
    </div>
    <gaia-footer></gaia-footer>
  </div>
</template>

<script>
  var gaiaHeader = require('../../components/header/gaia-header.vue');
  var mask = require('../../components/mask/mask.vue');
  var navigation = require('../../components/navigation/navigation.vue');
  //  var list = require('./list/list.vue');
  var gaiaFooter = require('../../components/footer/footer.vue');
  module.exports = {
    name:'upload',
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
      if (!this.asyncUploadModule) {
        var that = this;
        Vue.component('uploadMain', function (resolve, reject) {
          require.ensure(["./main/main.vue"], function (require) {
            that.isLoading = false;
            resolve(require("./main/main.vue"));
          });
        });
        that.asyncUploadModule = new Vue({
          replace:true,
          el: '#upload',
          data: function(){
            return {};
          },
          events: {
          }
        });
      } else {
        console.log('this is upload!');
        //如果模块已经存在,对模块进行初始化操作
        console.log('data........');
        console.log(this.asyncUploadModule.$data);
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
