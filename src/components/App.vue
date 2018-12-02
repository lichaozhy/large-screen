<template>
	
<div id="container">
	<div id="bg">
		<div id="bg-mask" />
	</div>
	<transition
		:leave-active-class="`animated ${$route.path === '/country' ? 'zoomOut' : 'zoomIn'}`">
		<router-view></router-view>
	</transition>
</div>

</template>

<script>
export default {
	mounted() {
	}
}
</script>


<style lang="less">
@PaddingY: 20px;

#bg-mask {
	height: 100%;
	width: 100%;
	position: absolute;

	top: 0;
	left: 0;

	background-color: rgba(0,0,0,.3);
}

#container {
	height: 100%;
	width: 100%;
	position: relative;
	box-shadow: 0 0 0px 1px inset #000;

	#bg {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('../style/bg.jpg');
		background-size: cover;
		background-position: center;
		filter: blur(.7px);
		background-color: #000;
		height: 100%;
		width: 100%;
	}
}
</style>
