import Country from './components/pages/Country/Layout';
import TianjinSummary from './components/pages/TianjinSummary/Layout';
import TianjinSafety from './components/pages/TianjinSafety/Layout';

export default {
	routes: [
		{
			path: '/country',
			component: Country
		},
		{
			path: '/tianjin/summary',
			component: TianjinSummary
		},
		{
			path: '/tianjin/safety',
			component: TianjinSafety
		},
		{
			path: '/',
			redirect: '/country'
		}
	]
};