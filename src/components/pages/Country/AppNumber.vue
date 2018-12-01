<template>

<ls-panel
	class="ls-number-panel"
	title="中国当前的APP数量">
	<h1>{{total}}</h1>
</ls-panel>

</template>

<script>
import format from 'format-number';

export default {
	computed: {
		total() {
			return format({ suffix: ' 个' })(window.data.appTotal);
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
