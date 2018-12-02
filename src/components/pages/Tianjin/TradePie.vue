<template>

<ls-panel
	title="APP行业分类比例 - 饼图">
	<chart-pie :data="data" />
</ls-panel>

</template>

<script>
import { randRage } from '../../utils/random';
import { tradeList } from './utils';

const data = tradeList.map(name => {
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
