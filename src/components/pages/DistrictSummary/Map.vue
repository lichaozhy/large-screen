<template>

<ls-panel
	@mouseover.native="stop=true"
	@mouseout.native="stop=false"
	class="city-map"
	:bordered="false"
	title="天津市 - 全市App发布数量分布总览">
	<chart-map ref="map" :series="series" />
	<b-button variant="link"
		style="color:#fff;position:relative;z-index: 10" size="lg" href="#/tianjin/summary">返回全市</b-button>
</ls-panel>

</template>

<script>
import tianjinMapGeoJson from '../../../assets/geoJson/tianjin.json';
import { randRage } from '../../utils/random';
import { districtList } from './utils';

tianjinMapGeoJson.features.forEach(feature => {
	feature.id = feature.properties.fullname;
});
const provinceList = tianjinMapGeoJson.features.map(feature => feature.properties.name);

export default {
	data() {
		const sample = provinceList.map(provinceName => {
			return {
				id: provinceName,
				name: provinceName,
				value: randRage(1000, 10000),
				deltaValue: randRage(-10, 50),
				riskAppNumber: randRage(0, 100),
				deltaRiskAppNumber: randRage(-10, 20)
			};
		});

		sample.forEach(data => window.data.appTotal += data.value);

		return {
			index: 0,
			sample,
			stop: false,
			series: [
				{
					allowPointSelect: true,
					name: "App发布数量",
					mapData: tianjinMapGeoJson,
					data: sample,
					joinBy: ["name", 'id'],
					states: {
						hover: {
							color: "yellow"
						},
						select: {
							color: 'yellow',
							borderColor: null,
							dashStyle: 'shortdot'
						}
					},
					point: {
						events: {
							select: event => {
								this.$emit('map-select', event.target.id);
								this.index = districtList.indexOf(event.target.id);
							}
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
	},
}
</script>

<style lang="less">
.city-map {
	position: relative;
	div.city-info {
		position: absolute;
		top: 1em;
		left: 1em;
		color: #fff;
	}
}
</style>


