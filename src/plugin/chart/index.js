import Map from './Map';
import Linear from './Linear';
import Wrap from './ChartWrap';
import Pie from './Pie';
import Guage from './Guage';

export default function install(Vue) {
	Vue.component('chartMap', Map);
	Vue.component('chartLinear', Linear);
	Vue.component('chartWrap', Wrap);
	Vue.component('chart-pie', Pie);
	Vue.component('chart-guage', Guage);
}