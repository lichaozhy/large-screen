import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';

import LsPanel from './plugin/panel';
import LsChart from './plugin/chart';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(LsPanel);
Vue.use(LsChart);

import './style/index.less';
import App from './components/App';
import routerOptions from './router';

window.data = {
	appTotal: 0,
	tianjin: {
		appTotal: 5000
	}
};

App.router = new VueRouter(routerOptions);

const casLoginApp = new Vue(App);
const appElement = document.createElement('div');
appElement.id = 'app';
document.body.appendChild(appElement);

casLoginApp.$mount(appElement);
