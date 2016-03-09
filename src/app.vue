<template>
  <!-- main view -->
  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>
</template>
<script>
  module.exports = {
    replace:false
  }
</script>
