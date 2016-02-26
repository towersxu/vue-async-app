import Vue from 'vue'
import app from './app.vue'
import film from './pages/films/films.vue'
import home from './pages/home/home.vue'
import upload from './pages/upload/upload.vue'
import player from './pages/player/player.vue'
import VueRouter from 'vue-router'

import './static/less/style.less'
import './static/less/animate.less'
import './static/less/home.less'
import './static/less/films.less'
import './static/less/play.less'

Vue.use(VueRouter);

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
  'player':{
    name:'player',
    component:player
  },
  'upload':{
    name:'upload',
    component:upload
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/'
});
router.start(app, 'body')
