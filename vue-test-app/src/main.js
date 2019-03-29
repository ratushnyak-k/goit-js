import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import firebase from 'firebase/app';
import 'firebase/auth';
window.firebase = firebase;
var config = {
  apiKey: 'AIzaSyBdWq_rn2bL_vlf3PZbSgKFrd09PTt0uEg',
  authDomain: 'chat-box-a024e.firebaseapp.com',
  databaseURL: 'https://chat-box-a024e.firebaseio.com',
  projectId: 'chat-box-a024e',
  storageBucket: 'chat-box-a024e.appspot.com',
  messagingSenderId: '638520554487',
};
firebase.initializeApp(config);

Vue.use(VueMaterial);
Vue.config.productionTip = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
