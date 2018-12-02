<template>

<ls-panel
	@mouseover.native="stop=true"
	@mouseout.native="stop=false"
	class="city-map"
	title="天津市 - 全市App发布数量分布总览">
	<div class="city-info">
		<h2 class="mb-4">{{sample[index].name}}</h2>
		<p>本区当月在线APP数量：{{sample[index].value}}</p>
		<p>在线APP较上月新增：{{sample[index].deltaValue}}</p>
		<p>有风险的APP数量：{{sample[index].riskAppNumber}}</p>
		<p>风险APP较上月新增：{{sample[index].deltaRiskAppNumber}}</p>
	</div>
	<chart-map ref="map" :series="series" />
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
	mounted() {
		let index = 0;
		console.log(this.$refs.map)

		setInterval(() => {
			if (this.stop) {
				return;
			}

			this.index = index++ % districtList.length;

			this.$refs.map.map.get(districtList[this.index]).select();
		}, 2000);
	}
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


