<template>
	
<b-container fluid class="h-100 p-0" id="tianjin-view">
	<h1>天津市 - {{fullname}}App安全态势</h1>
	
	<div class="ls-grid"
		style="width:30%;height:30%;left:0;top:0">
		<risk-number />
	</div>

	<div class="ls-grid"
		style="width:30%;height:70%;left:0;top:30%">
		<risk-trade-bar />
	</div>

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
		<scatter-risk />
	</div>

</b-container>

</template>

<script>
import tianjinMapGeoJson from '../../../assets/geoJson/tianjin.json';

import RiskNumber from './RiskNumber';
import TianjinMap from './Map';
import MonthChart from './RiskMonth';
import RiskTradeBar from './RiskTradeBar';
import ScatterRisk from './ScatterRisk';

export default {
	data() {
		const code = this.$route.params.name;
		const fullname = tianjinMapGeoJson.features.find(district => {
			return district.properties.filename === code;
		}).properties.fullname;
		
		return { fullname, code }
	},
	components: {
		RiskNumber, TianjinMap, MonthChart, RiskTradeBar, ScatterRisk
	},
	methods: {
		goto(name) {
			const code = tianjinMapGeoJson.features.find(district => {
				return district.properties.fullname === name;
			}).properties.filename;
			
			this.$router.push(`/tianjin/district/${code}/summary`);
		}
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
