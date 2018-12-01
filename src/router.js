import Country from './components/pages/Country/Layout';
import Tianjin from './components/pages/Tianjin/Layout';

export default {
	routes: [
		{
			path: '/country',
			component: Country
		},
		{
			path: '/tianjin',
			component: Tianjin
		},
		{
			path: '/',
			redirect: '/country'
		}
	]
};