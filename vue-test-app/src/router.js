import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import ChatList from './views/ChatList.vue';
import ChatDetail from './views/ChatDetail.vue';
import NotFound from './views/NotFound.vue';
import firebase from 'firebase/app';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: '/chats',
      name: 'chats',
      component: ChatList,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: ':id',
          name: 'chat-detail',
          component: ChatDetail,
        },
      ],
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !user) next('sign-in');
    else if (!requiresAuth && user) next('chats');
    else next();
    next();
  });
});
