<template>
	
<b-container fluid class="h-100 p-0" id="tianjin-view">

	<div class="ls-grid"
		style="width:40%;left:30%;top:10%;bottom:10%">
		<tianjin-map />
	</div>

	<div class="ls-grid"
		style="width:30%;height:40%;right: 0%;top:0">
		<month-chart />
	</div>

	<!-- <div class="ls-grid"
		style="width:20%;height:40%;left: 0">
		<area-top10 ref="top10" />
	</div>

	<div class="ls-grid"
		style="width:20%;height:30%;left: 0;top:40%">
		<trade-pie />
	</div>
	
	<div class="ls-grid"
		style="width:20%;height:30%;left: 0;top:70%">
		<safe-index />
	</div>
	
	<div class="ls-grid"
		style="width:20%;height:40%;left: 80%;top:0">
		<risk-month />
	</div>

	<div class="ls-grid"
		style="width:40%;height:60%;left: 60%;top:40%">
		<area-pie />
	</div> -->
</b-container>

</template>

<script>
import TianjinMap from './Map';

import MonthChart from './MonthChart';
import SafeIndex from './SafeIndex';
import AreaPie from './AreaPie';
import RiskMonth from './RiskMonth';
import TradePie from './TradePie';
// import TradeRiskPie from './TradeRiskPie';

import AreaTop10 from './AreaTop10';

export default {
	components: {
		TianjinMap, AreaTop10,
		MonthChart, SafeIndex,
		AreaPie, TradePie,
		RiskMonth
	},
	methods: {
		syncTop10(name) {
			this.$refs.top10.select(name);
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
