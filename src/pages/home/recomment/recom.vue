<template>
  <div class="area">
    <h3>作品推荐</h3>
    <div class="more"><span>更多作品</span><i class="sp i57"></i></div>
    <works-list></works-list>
  </div>
</template>
<script>
  var worksList = require('../../../components/works_list/worksList.vue');
  module.exports = {
    data:function(){
      return {}
    },
    components:{
      worksList:worksList
    }
  }
</script>
