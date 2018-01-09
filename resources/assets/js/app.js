import './bootstrap';
import VueRouter from 'vue-router';
import routes from './routes';
import './components';

const router = new VueRouter({
  routes,
  linkActiveClass: "active"
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.bodyClass) {
    document.body.className = to.meta.bodyClass;
  } else {
    document.body.className = "";
  }
  next();
})

const app = new Vue({
  el: '#app',
  router
});
