<template>
  <div class="mask" v-show="isShow">
    <div class="c-modal-custom modal animated" v-show="isShow" transition="fade">
      <div class="head">
        <i class="block sp i183 r-logo"></i>
        <h3>续传提示</h3>
        <i class="block close sp i103" v-on:click.stop="closeModal()"></i>
      </div>
      <div class="content">
        <h2>您上次有<span>{{reChooseOps.length}}</span>个<span>作品</span>尚未完成上传</h2>
        <p>在上传页面重新添加未完成的文件,可从中断处开始续传!</p>
        <div class="re-list">
          <div class="re-li" v-for="op in reChooseOps">
            <span class="name">{{op.name}}</span>
            <span class="process">已传{{op.percent}}%</span>
            <span class="split"></span>
            <span class="del" v-on:click="delOps($index)">删除</span>
          </div>
        </div>
        <div class="btn btn-red btn-red1" v-on:click="reAdd()">重新添加文件</div>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    props:['fileId'],
    data:function(){
      return {
        isShow:true,
        reChooseOps:[]
      }
    },
    events:{
      're-choose':function(msg){
        this.isShow = true;
        this.reChooseOps = msg.reChooseOps;
      }
    },
    methods:{
      delOps:function(idx){
        this.reChooseOps.splice(idx,1);
      },
      reAdd:function(){
        this.isShow = false;
        var e = document.getElementById('qnupload-btn');
        e.click();
      },
      closeModal:function(){
        this.isShow = false;
      }
    }
  }
</script>
<style lang="less">
  @import "./re.less";
</style>
