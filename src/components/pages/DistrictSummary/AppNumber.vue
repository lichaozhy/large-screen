<template>

<ls-panel
	class="ls-number-panel"
	bordered="true"
	title="天津市App发布总数">
	<h1>{{total}}</h1>
</ls-panel>

</template>

<script>
import format from 'format-number';
import rawData from '../../../assets/data.json';

export default {
	computed: {
		total() {
			const code = this.$route.params.name;
			return format({ suffix: ' 个' })(rawData.district[code].summary.app);
		}
	},
	props: ['code']
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
