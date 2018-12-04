<template>

<b-card
	class="ls-panel rounded-0"
	:header="title">

	<div class="panel-inner"><slot /></div>
</b-card>

</template>

<script>
export default {
	props: {
		title: {
			default: '未命名'
		}
	},
}
</script>

<style lang="less">
@titlePadding: .5em;
@innerPadding: 5px;

.ls-panel {
	height: 100%;

	.card-header {
		font-size: 20px;
		padding: @titlePadding;
		color: #fff;
		background-color: transparent;
		text-align: center;
		border-radius: 0;
	}

	.card-body {
		background: transparent;
		position: relative;
		padding: 0;
	}

	&.card {
		// border-width: 2px;
		border-color: rgba(255,255,255,0);
		background-color: transparent;
	}

	.panel-inner {
		position: absolute;
		top: @innerPadding;
		bottom: @innerPadding;
		left: @innerPadding;
		right: @innerPadding;
	}
}
</style>
