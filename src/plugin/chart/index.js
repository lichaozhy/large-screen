import Map from './Map';
import Linear from './Linear';

export default function install(Vue) {
	Vue.component('chartMap', Map);
	Vue.component('chartLinear', Linear);
}