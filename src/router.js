import Country from './components/pages/Country/Layout';
import TianjinSummary from './components/pages/TianjinSummary/Layout';
import TianjinSafety from './components/pages/TianjinSafety/Layout';
import DistrictSummary from './components/pages/DistrictSummary/Layout';
import DistrictSafety from './components/pages/DistrictSafety/Layout';

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
			path: '/tianjin/district/:name/summary',
			component: DistrictSummary
		},
		{
			path: '/tianjin/district/:name/safety',
			component: DistrictSafety
		},
		{
			path: '/',
			redirect: '/country'
		}
	]
};