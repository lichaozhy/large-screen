<template>

<ls-panel
	:title="`各区 - TOP10 应用&amp;安全性 - ${districtList[index]}`">
	<b-carousel id="carousel1"
		style="text-shadow: 1px 1px 2px #333;height: 100%"
		controls
		indicators
		background="transparent"
		:interval="4000"
		v-model="index"
		img-height="100">

		<b-carousel-slide caption="First slide"
			v-for="district in districtList"
			:key="district"></b-carousel-slide>

    </b-carousel>
</ls-panel>

</template>

<script>
import { randRage } from '../../utils/random';
import { districtList } from './utils';

const data = districtList.map(name => name);

export default {
	data() {
		return {
			index: 0,
			districtList: districtList.slice(0)
		};
	}
}
</script>