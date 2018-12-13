<template>

<ls-panel
	@mouseover.native="stop=true"
	@mouseout.native="stop=false"
	class="city-map"
	:bordered="false"
	title="天津市 - 全市App发布数量分布总览">
	<chart-map ref="map" :series="series" />
	<b-button variant="link"
		style="color:#fff;position:relative;z-index: 10" size="lg" href="#/tianjin/safety">返回全市</b-button>
</ls-panel>

</template>

<script>
import tianjinMapGeoJson from '../../../assets/geoJson/tianjin.json';
import rawData from '../../../assets/data.json';
import { districtList } from './utils';

const districtCode = Object.keys(rawData.district);
const districtNameList = districtCode.map(code => {
	const district = tianjinMapGeoJson.features.find(district => {
		return district.properties.filename === code;
	});

	return district.properties.fullname;
});

function sum(array) {
	let sum = 0;

	array.forEach(value => sum += value);

	return sum;
}

export default {
	data() {
		const sample = districtNameList.map((name, index) => {
			return {
				id: name,
				name: name,
				value: sum(rawData.district[districtCode[index]].risk)
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
	// mounted() {
	// 	let index = 0;

	// 	this.timer = setInterval(() => {
	// 		if (this.stop) {
	// 			return;
	// 		}

	// 		this.index = index++ % districtList.length;
	// 		const name = districtList[this.index];

	// 		this.$refs.map.map.get(name).select();
	// 	}, 2000);
	// },
	// destroyed() {
	// 	clearInterval(this.timer);
	// }
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


