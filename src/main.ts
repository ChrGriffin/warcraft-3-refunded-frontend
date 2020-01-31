import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
