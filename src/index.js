import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import LsPanel from './plugin/panel';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(LsPanel);

import './style/index.less';
import App from './components/App';
import routerOptions from './router';

App.router = new VueRouter(routerOptions);

const casLoginApp = new Vue(App);
const appElement = document.createElement('div');
appElement.id = 'app';
document.body.appendChild(appElement);

casLoginApp.$mount(appElement);
