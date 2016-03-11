<template>
  <div class="area">
    <h3>作品推荐</h3>
    <div class="more"><span>更多作品</span><i class="sp i57"></i></div>
    <works-list :video-list="reVideos"></works-list>
  </div>
</template>
<script>
  var worksList = require('../../../components/works_list/worksList.vue');
  module.exports = {
    data:function(){
      return {
        reVideos:[{},{},{},{},{},{},{},{}],
      }
    },
    created:function(){
      this.getRecommend();
    },
    components:{
      worksList:worksList
    },
    methods:{
      getRecommend:function(){
        this.$http({
          url:'/web/works/recommend',
          data:{
            num:8
          },
          method:'POST'
        }).then(function(res){
          if(res.data && res.data.b===1){
            this.reVideos =res.data.a;
          }
        });
      }
    }
  }
</script>
