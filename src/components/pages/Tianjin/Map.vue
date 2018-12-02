<template>

<ls-panel
	title="天津市 - 全市App发布数量分布总览">
	<chart-map :series="series" />
</ls-panel>

</template>

<script>
import tianjinMapGeoJson from '../../../assets/geoJson/tianjin.json';
import { randRage } from '../../utils/random';

const provinceList = tianjinMapGeoJson.features.map(feature => feature.properties.name);

export default {
	data() {
		const sample = provinceList.map(provinceName => {
			return {
				name: provinceName,
				value: randRage(1000, 10000)
			};
		});

		sample.forEach(data => window.data.appTotal += data.value);

		return {
			series: [
				{
					name: "App发布数量",
					mapData: tianjinMapGeoJson,
					data: sample,
					joinBy: "name",
					states: {
						hover: {
							color: "yellow"
						}
					}
				}
			]
		};
	},
	computed: {
		mapGeoJson() {
			return chinaMapGeoJson;
		}
	}
}
</script>

