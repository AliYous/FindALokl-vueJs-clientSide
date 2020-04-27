<template>
		<div id="nav">
			<nav>
				<div class="logo">
					<h4>TheNav</h4>
				</div>
				<ul class="nav-links">
					<li><a class="btn btn-link" href="#">About this project</a></li>
					<div class="btn-connect">
						<li><a class="btn btn-outline-secondary" href="#">CONNECT</a></li>
						<li><a class="btn btn-primary btn-sign-up" href="#">Sign Up as Local</a></li>
					</div>
				</ul>
			</nav>
		</div>
</template>

<script>
export default {
    name: "TheHeaderNavbar"
}
</script>

<style scoped>
	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-height: 8vh;
		background-color: #FFFFFF;
	}
	.logo {
		color: rgb(235, 233, 233);
		text-transform: uppercase;
		letter-spacing: 3px;
		font-size: 20px;
		color: #F38633;
	}

	ul {
		list-style-type: none;
	}
	.nav-links {
		display: flex;
		justify-content: space-around;
		min-width: 35%;
	}
	.nav-links a {
		color: rgb(235, 233, 233);
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 14px;
	}

	.btn-primary {
		background-color: #F38633 !important;
		color: white !important;
	}
	.btn-outline-secondary {
		color: #8E8888 !important;
	}
	.btn-link {
		color: #8E8888 !important;
		margin-left: 4.5rem;
	}

	.btn-connect {
		display: flex;
		width: 20rem;
		justify-content: space-around;

	}

</style>