<template>

<ls-panel
	title="中国 - 全国App发布数量分布总览">
	<chart-map :series="series"
		@click="enterTianjin" />
</ls-panel>

</template>

<script>
import chinaMapGeoJson from '../../../assets/geoJson/china.json';
import { randRage } from '../../utils/random';

const provinceList = chinaMapGeoJson.features.map(feature => feature.properties.name);

export default {
	data() {
		const sample = provinceList.map(provinceName => {
			return {
				name: provinceName,
				value: randRage(1000, 10000)
			};
		});

		sample.forEach(data => window.data.appTotal += data.value);
		window.data.tianjin.appTotal = sample.find(data => data.name === '天津').value;

		return {
			series: [
				{
					name: "App发布数量",
					mapData: chinaMapGeoJson,
					data: sample,
					joinBy: "name",
					states: {
						hover: {
							color: "yellow"
						}
					},
					dataLabels: {
						enabled: true,
						color: 'white',
						formatter() {
							if (this.key === '天津') {
								return this.key;
							}
						}
					},
				}
			]
		};
	},
	beforeCreate() {
		window.data.appTotal = 0;
	},
	computed: {
		mapGeoJson() {
			return chinaMapGeoJson;
		}
	},
	methods: {
		enterTianjin(event) {
			if (event.point.name === '天津') {
				this.$router.push('/tianjin');
			}
		}
	}
}
</script>

