<template>
	
<b-container fluid class="h-100 p-0">
	
	<div class="ls-grid"
		v-for="(panel, index) in chartPanelList"
		:key="index"
		:style="{
			clear: index % 2 ? 'none' : 'right',
			height: `${100/chartPanelList.length *2}%`
		}"
		style="float:right;width:20%">

		<component :is="panel" />
	</div>

	<div class="ls-grid h-75"
		style="width:60%">
		<tianjin-map />
	</div>
	
	<div class="ls-grid h-25"
		style="width:60%">
		<area-top10 />
	</div>
	
</b-container>

</template>

<script>
import TianjinMap from './Map';

import MonthChart from './MonthChart';
import SafeIndex from './SafeIndex';
import AreaPie from './AreaPie';
import RiskMonth from './RiskMonth';
import TradePie from './TradePie';
import TradeRiskPie from './TradeRiskPie';

import AreaTop10 from './AreaTop10';

export default {
	components: {
		TianjinMap, AreaTop10
	},
	data() {
		return {
			chartPanelList: [
				MonthChart, SafeIndex,
				AreaPie, TradePie,
				RiskMonth, TradeRiskPie
			]
		};
	}
}
</script>