<script>
	import pnp from '$lib/img/pnp.png';
</script>

<section id="hero" class="d-flex justify-cntent-center align-items-center">
	<div class="carousel-container position-absolute">
		<h2>Company <span>Profile</span></h2>
		<p>PT PLN NUSANTARA POWER ULPLTD KOTAMOBAGU</p>
	</div>
</section>
<section id="icon-boxes" class="icon-boxes">
	<div class="container">
		<div class="row d-flex justify-content-center text-center">
			<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
				<div class="icon-box">
					<h4 class="title">Kapasitas Terpasang</h4>
					<p class="description">8000 kW</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
				<div class="icon-box">
					<h4 class="title">Daya Mampu</h4>
					<p class="description">6000 kW</p>
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
	}

	#hero:before {
		content: '';
		background: rgba(67, 166, 163, 0.5);
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
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

	#hero .carousel-control-prev,
	#hero .carousel-control-next {
		width: 10%;
	}

	#hero .carousel-control-next-icon,
	#hero .carousel-control-prev-icon {
		background: none;
		font-size: 48px;
		line-height: 1;
		width: auto;
		height: auto;
	}

	#hero .btn-get-started {
		font-family: 'Raleway', sans-serif;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 1px;
		display: inline-block;
		padding: 12px 32px;
		border-radius: 50px;
		transition: 0.5s;
		line-height: 1;
		margin: 10px;
		color: #fff;
		-webkit-animation-delay: 0.8s;
		animation-delay: 0.8s;
		border: 2px solid #f6b024;
	}

	#hero .btn-get-started:hover {
		background: #f6b024;
		color: #fff;
		text-decoration: none;
	}

	@media (min-width: 1024px) {
		#hero p {
			width: 60%;
		}

		#hero .carousel-control-prev,
		#hero .carousel-control-next {
			width: 5%;
		}
	}

	@media (max-width: 768px), (max-height: 700px) {
		#hero {
			height: 120vh;
			padding: 100px 0;
		}

		#hero h2 {
			font-size: 28px;
		}
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
		border-radius: 10px;
	}

	.icon-boxes .icon {
		margin: 0 auto 20px auto;
		display: inline-block;
		text-align: center;
	}

	.icon-boxes .icon i {
		font-size: 36px;
		line-height: 1;
		color: #f6b024;
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
</style>
