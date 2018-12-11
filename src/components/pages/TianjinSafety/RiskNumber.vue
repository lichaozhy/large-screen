<template>

<ls-panel
	class="ls-number-panel"
	bordered="true"
	title="天津市App漏洞总数">
	<h1>{{total}}</h1>
</ls-panel>

</template>

<script>
import format from 'format-number';
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
	computed: {
		total() {
			return format({ suffix: ' 个' })(riskTotal);
		}
	}
}
</script>

<style lang="less">
@fontSize: 64px;

.ls-number-panel {
	h1 {
		font-size: @fontSize;
		color: #fff;
		text-align: center;
		position: absolute;
		height: @fontSize;
		line-height: @fontSize;
		width: 100%;
		top: 50%;
		margin-top: -@fontSize/2;
	}
}
</style>
