<template>

<ls-panel
	:bordered="true"
	title="近6个月App漏洞数量趋势">
	<chart-linear
		:series="series"
		:y-axis="{
			gridLineWidth: 0,
			title: { text: null },
			labels: { enabled: false }
		}"
		:x-axis="{
			labels: { enabled: false }
		}" />
</ls-panel>

</template>

<script>
import { randRage } from '../../utils/random';
import rawData from '../../../assets/data.json';

const codeList = Object.keys(rawData.district);
const districtRiskTotalList = codeList.map(code => {
	const risk = rawData.district[code].risk;
	let total = 0;

	risk.forEach(number => total += number);

	return total;
});

let riskTotal = 0;

districtRiskTotalList.forEach(number => riskTotal += number);

export default {
	data() {
		let prev = riskTotal;

		return {
			delta: [0, 0, 0, 0, 0, 0].map(() => prev -= randRage(-2000, 2000)).reverse()
		};
	},
	computed: {
		monthTotal() {
			return this.delta;
		},
		series() {
			return [{
				name: 'App总量',
				data: this.monthTotal
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
