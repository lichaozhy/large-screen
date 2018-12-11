<template>
	
<div id="container">
	<div id="bg">
		<div id="bg-mask" />
	</div>

	<!-- <transition
		:leave-active-class="`animated ${$route.path === '/country' ? 'zoomOut' : 'zoomIn'}`">
		<router-view></router-view>
	</transition> -->

	<div id="viewport">
		<div id="viewport-bg"></div>
		<div id="viewport-inner">
			<router-view></router-view>
		</div>
	</div>
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

	background-color: rgba(0,0,0,.2);
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
		filter: blur(.8px);
		background-color: #000;
		height: 100%;
		width: 100%;
	}
}

@viewportPadding: 120px;

#viewport {
	position: fixed;
	top: @viewportPadding *1.5;
	left: @viewportPadding * 1.2;
	right: @viewportPadding * 1.2;
	bottom: @viewportPadding * 0.8;
}

#viewport-bg {
	position: relative;
	height: 100%;
	overflow: hidden;
	border: 1px solid #fff;
	border-radius: 30px;
	box-shadow: 0 0 12px 3px inset #fff;
	background-color: rgba(255,255,255,0.1);
	background-image:linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,0) 25px);
	&::before {
		content: "";
		display: block;
		position: absolute;
		top: 15%;
		left: -20px;
		bottom: 15%;
		width: 20px;
		border-radius: 100%;
		box-shadow: 0 0 30px 10px #fff;
	}

	&::after {
		content: "";
		display: block;
		position: absolute;
		left: 20%;
		bottom: -20px;
		right: 20%;
		height: 20px;
		border-radius: 100%;
		box-shadow: 0 0 30px 10px #fff;
	}
}

#viewport-inner {
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;

	> div.container-fluid > h1 {
		color: #fff;
		position: absolute;
		top: -120px;
		font-size: 64px;
		text-align: center;
		width: 100%;
		text-shadow: 2px 2px 2px #ccc;
	}
}

</style>
