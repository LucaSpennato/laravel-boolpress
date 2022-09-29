window.Vue = require('vue');

import Vue from 'vue';
import App from './views/App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// ! importiamo router!
import router from './router.js';

const app = new Vue({
    el: '#root',
    render: h => h(App),
    router, // ! <--Specificare che lo stiamo usando!
});