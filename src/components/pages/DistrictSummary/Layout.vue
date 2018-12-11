<template>
	
<b-container fluid class="h-100 p-0" id="tianjin-view">
	<h1>天津市 - {{fullname}}App发布情况总览</h1>
	
	<div class="ls-grid"
		style="width:30%;height:30%;left:0;top:0">
		<app-number />
	</div>

	<!-- <div class="ls-grid"
		style="width:30%;height:70%;left:0;top:30%">
		<district-bar />
	</div> -->

	<div class="ls-grid"
		style="width:40%;left:30%;top:0%;bottom:0%">
		<tianjin-map />
	</div>

	<div class="ls-grid"
		style="width:30%;height:40%;right:0;top:0">
		<month-chart />
	</div>

	<div class="ls-grid"
		style="width:30%;height:60%;right:0;top:40%">
		<trade-bar />
	</div>

</b-container>

</template>

<script>
import tianjinMapGeoJson from '../../../assets/geoJson/tianjin.json';
import TianjinMap from './Map';
import MonthChart from './MonthChart';
import AppNumber from './AppNumber';
import TradeBar from './TradeBar';

export default {
	data() {
		const code = this.$route.params.name;
		const fullname = tianjinMapGeoJson.features.find(district => {
			return district.properties.filename === code;
		}).properties.fullname;
		
		return { fullname, code }
	},
	components: {
		TianjinMap, MonthChart, AppNumber, TradeBar
	},
	methods: {
	}
}
</script>

<style lang="less">
#tianjin-view {
	.ls-grid {
		position: absolute;
	}
}
</style>
