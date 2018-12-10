<template>

<ls-panel
	title="APP行政区划饼图">
	<chart-pie :data="data" />
</ls-panel>

</template>

<script>
import { randRage } from '../../utils/random';
import { districtList } from './utils';

const data = districtList.map(name => {
	return {
		name,
		y: randRage(20, 1000)
	};
});

export default {
	computed: {
		data() {
			return data;
		}
	}
}
</script>
