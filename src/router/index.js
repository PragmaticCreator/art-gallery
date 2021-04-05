import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Articles from '@/views/Articles';
import Gallery from '@/views/Gallery';
import Services from '@/views/Services';
import Faq from '@/views/Faq';
import Post from '@/views/Post';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/post/:postId',
    name: 'Post',
    component: Post,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
