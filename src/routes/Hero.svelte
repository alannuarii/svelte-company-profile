<script>
	import pnp from '$lib/img/pnp.png';
</script>

<section id="hero" class="d-flex justify-cntent-center align-items-center">
	<div class="carousel-container position-absolute">
		<h2>Company <span>Profile</span></h2>
		<p>PT PLN NUSANTARA POWER ULPLTD KOTAMOBAGU</p>
	</div>
	<img src={pnp} class="position-absolute top-0 start-50 translate-middle-x mt-lg-5 mt-4" alt="" />
</section>
<section id="icon-boxes" class="icon-boxes d-none d-lg-block">
	<div class="container">
		<div class="row d-flex justify-content-center text-center">
			<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
				<div class="icon-box">
					<h4 class="title">Kapasitas Terpasang</h4>
					<p class="description">8.000 kW</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
				<div class="icon-box">
					<h4 class="title">Daya Mampu</h4>
					<p class="description">6.000 kW</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- End Icon Boxes Section -->
<style>
	#hero {
		width: 100%;
		height: 85vh;
		overflow: hidden;
		position: relative;
		background: url('../lib/img/hero-bg.jpeg') top center;
		background-size: cover;
		position: relative;
		margin-bottom: -90px;
		z-index: 99;
		transition: 0.3s;
		border-radius: 0 0 150px 150px;
		border-bottom: 20px solid #aac548;
	}

	#hero:before {
		content: '';
		background: rgba(235, 235, 235, 0.3);
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
	}
	#hero img {
		width: 20%;
		z-index: 999;
	}
	#hero .carousel-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
	}

	#hero h2 {
		color: #fff;
		margin-bottom: 30px;
		font-size: 48px;
		font-weight: 400;
	}

	#hero p {
		font-size: 60px;
		font-weight: 700;
		color: #fff;
	}

	.icon-boxes {
		padding-top: 0;
		position: relative;
		z-index: 100;
	}

	.icon-boxes .icon-box {
		width: 500px;
		padding: 40px 30px;
		position: relative;
		overflow: hidden;
		background: #fff;
		box-shadow: 5px 10px 29px 0 rgba(68, 88, 144, 0.2);
		transition: all 0.3s ease-in-out;
		border-radius: 100px;
	}

	.icon-boxes .title {
		font-weight: 700;
		margin-bottom: 15px;
		font-size: 20px;
	}

	.icon-boxes .description {
		font-size: 35px;
		font-weight: 900;
		line-height: 28px;
		margin-bottom: 0;
		color: #43a6a3;
	}

	@media (max-width: 992px) {
		#hero {
			margin-bottom: 0px;
			border-radius: 0 0 50px 50px;
			height: 50vh;
		}
		#hero img {
			width: 50%;
			z-index: 999;
		}
		#hero h2 {
			color: #fff;
			margin-top: 220px;
			margin-bottom: 10px;
			font-size: 28px;
			font-weight: 400;
		}

		#hero p {
			font-size: 27px;
			font-weight: 700;
			color: #fff;
		}
	}
</style>
