<template>

<ls-panel
	:bordered="true"
	title="近6个月App发布存量趋势">
	<chart-linear
		:series="series"
		:y-axis="{
			gridLineWidth: 0,
			title: { text: null },
			labels: { enabled: false }
		}"
		:x-axis="{
			labels: { enabled: false }
		}" />
</ls-panel>

</template>

<script>
import { randRage } from '../../utils/random';
import rawData from '../../../assets/data.json';

export default {
	data() {
		let prev = rawData.district[this.$route.params.name].summary.app;

		return {
			delta: [0, 0, 0, 0, 0, 0].map(() => prev -= randRage(0, 2)).reverse()
		};
	},
	computed: {
		monthTotal() {
			return this.delta;
		},
		series() {
			return [{
				name: 'App总量',
				data: this.monthTotal
			}]
		},
		fontStyle() {
			return {
				color: '#fff',
				fontSize: '16px'
			};
		}
	}
}
</script>
