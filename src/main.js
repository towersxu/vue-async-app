var app = require('./app.vue');
var film= require('./pages/films/films.vue');
var home = require('./pages/home/home.vue');
var upload = require('./pages/upload/upload.vue');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');
require('./static/less/style.less');
require('./static/less/animate.less');
require('./static/less/home.less');
require('./static/less/films.less');
require('./static/less/play.less');
require('./static/less/profile.less');

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.transition('fade',{
  enterClass:'fadeInDown',
  leaveClass:'fadeOutDown'
});
Vue.transition('flipInX',{
  enterClass:'flipInX',
  leaveClass:'flipOutX'
});
Vue.config.debug = process.env.NODE_ENV !== 'production'

var router = new VueRouter();
router.map({
  '/':{
    name:'home',
    component:home
  },
  '/film':{
    name:'film',
    component:film
  },
  '/video/:videoId':{
    name:'player',
    component:function(resolve){
      require.ensure(['./pages/player/player.vue'], function(){
        resolve(require("./pages/player/player.vue"));
      });
    }
  },
  '/upload':{
    name:'upload',
    component:upload
  },
  '/profile':{
    name:'profile',
    component:function(resolve){
      require.ensure(['./pages/profile/profile.vue'], function(){
        resolve(require("./pages/profile/profile.vue"));
      });
    }
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/'
});
router.start(app, 'body')
