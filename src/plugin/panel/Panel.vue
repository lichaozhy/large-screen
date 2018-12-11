<template>

<b-card
	class="ls-panel rounded-0"
	:class="{
		'no-border': !bordered
	}"
	:header="title">

	<div class="panel-inner"><slot /></div>
</b-card>

</template>

<script>
export default {
	props: {
		title: {
			default: '未命名'
		},
		bordered: {
		}
	}
}
</script>

<style lang="less">
@titlePadding: .5em;
@innerPadding: 5px;

.ls-panel {
	height: 100%;

	.card-header {
		font-size: 16px;
		padding: @titlePadding;
		color: #fff;
		background-color: #369;
		text-align: center;
		border-radius: 0;
	}

	.card-body {
		background-image: linear-gradient(330deg, rgba(51, 102, 153, .6) 0%, rgba(51, 102, 153, .2) 50%);
		position: relative;
		padding: 0;
	}

	&.card {
		border-width: 2px;
		border-color: #369;
		background-color: transparent;
	}

	.panel-inner {
		position: absolute;
		top: @innerPadding;
		bottom: @innerPadding;
		left: @innerPadding;
		right: @innerPadding;
	}

	&.no-border {
		.card-body {
			background: transparent;
		}
		
		.card-header {
			display: none;
		}

		&.card {
			border-width: 0;
		}
	}
}
</style>
