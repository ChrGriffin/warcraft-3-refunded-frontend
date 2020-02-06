import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueYouTubeEmbed from 'vue-youtube-embed';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);
Vue.use(VueAnalytics, {id: 'UA-73783760-4'});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
