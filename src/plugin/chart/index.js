import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Variablepie from 'highcharts/modules/variable-pie';

HighchartsMore(Highcharts);
Variablepie(Highcharts);

import Map from './Map';
import Linear from './Linear';
import Wrap from './ChartWrap';
import Pie from './Pie';
import Guage from './Guage';
import Bar from './Bar';

export default function install(Vue) {
	Vue.component('chartMap', Map);
	Vue.component('chartLinear', Linear);
	Vue.component('chartWrap', Wrap);
	Vue.component('chart-pie', Pie);
	Vue.component('chart-guage', Guage);
	Vue.component('chart-bar', Bar);
}