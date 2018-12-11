<template>

<ls-panel
	title="风险变化图 - 线性">
	<chart-linear
		:title="{
			text: '近6个月风险App数量趋势',
			style: fontStyle
		}"
		:series="series"
		:y-axis="{
			title: { text: '数量', style: fontStyle },
			labels: { style: fontStyle }
		}"
		:x-axis="{
			labels: { style: fontStyle }
		}" />
</ls-panel>

</template>

<script>
import { randRage } from '../../utils/random';

export default {
	data() {
		let prev = 1500;

		return {
			delta: [0, 0, 0, 0, 0, 0].map(() => prev += randRage(20, 100)).reverse()
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
