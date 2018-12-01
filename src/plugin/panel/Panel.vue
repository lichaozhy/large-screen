<template>

<b-card
	class="ls-panel rounded-0"
	:header="title">

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

.ls-panel {
	height: 100%;

	.card-header {
		font-size: 12px;
		padding: @titlePadding;
		color: #fff;
		background-color: #369;
		text-align: center;
		border-radius: 0;
	}

	.card-body {
		background: rgba(255,255,255,.1);
	}

	&.card {
		// border-width: 2px;
		border-color: #369;
		background-color: transparent;
	}
}
</style>
