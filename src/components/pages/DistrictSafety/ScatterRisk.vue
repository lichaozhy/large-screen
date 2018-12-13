<template>

<ls-panel
	:bordered="true"
	title="App下载量与漏洞数量分布">
	<chart-scatter
		:series="series"
		:y-axis="{
			title: { text: null },
			labels: { enabled: false },
			min: 0,
			max: 2000000,
			minPadding: 0,
			maxPadding: 0,
			title: {
				text: null
			},
			gridLineWidth: 0
		}"
		:x-axis="{
			labels: { enabled: false }
		}" />
</ls-panel>

</template>

<script>
import { randRage } from '../../utils/random';
import rawData from '../../../assets/data.json';

const sceneList = [
	{
		rate: .1,
		download: [0, 2000000],
		leak: [0, 250]
	},
	{
		rate: .1,
		download: [200000, 1800000],
		leak: [0, 250]
	},
	{
		rate: .18,
		download: [100000, 1500000],
		leak: [20, 60]
	},
	{
		rate: .15,
		download: [50000, 2000000],
		leak: [10, 180]
	},
	{
		rate: .2,
		download: [2000, 1800000],
		leak: [20, 230]
	},
	{
		rate: .3,
		download: [2000, 800000],
		leak: [30, 200]
	},
	{
		rate: .1,
		download: [2000, 500000],
		leak: [50, 250]
	}
];

export default {
	data() {
		const code = this.$route.params.name;
		const data = [];

		sceneList.forEach(scene => {
			for (let i = 0; i < rawData.district[code].summary.app * scene.rate; i++) {
				data.push([randRage(scene.leak[0], scene.leak[1]), randRage(scene.download[0], scene.download[1])]);
			}
		});

		return {
			data, code
		};
	},
	computed: {
		monthTotal() {
			return this.delta;
		},
		series() {
			return [{
				name: 'App总量',
				data: this.data,
				marker: {
					radius: 2
				},
				color: 'rgba(255,255,255,.5)',
				tooltip: {
					enabled: false
				}
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
