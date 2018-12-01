<template>

<ls-panel
	title="APP数量的变化趋势图">
	<chart-linear
		:title="{
			text: '2018年近6个月App发布存量趋势',
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
		let prev = 0;

		return {
			delta: [0, 0, 0, 0, 0].map(() => prev += randRage(50, 2000)).reverse().concat(0)
		};
	},
	computed: {
		monthTotal() {
			return this.delta.map(value => window.data.appTotal - value);
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
