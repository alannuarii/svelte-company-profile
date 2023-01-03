<script>
	import foto1 from '$lib/img/gallery/1.jpeg';
	import foto2 from '$lib/img/gallery/2.jpeg';
	import foto3 from '$lib/img/gallery/3.jpeg';
	import foto4 from '$lib/img/gallery/4.jpeg';
	import foto5 from '$lib/img/gallery/5.jpeg';
	import foto6 from '$lib/img/gallery/6.jpeg';
</script>

<section id="portfolio" class="portfoio py-5">
	<div class="container" data-aos="fade-up">
		<div class="row portfolio-container">
			<div class="col-lg-4 col-md-6 portfolio-item filter-app">
				<img src={foto1} class="img-fluid" alt="" />
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-web">
				<img src={foto2} class="img-fluid" alt="" />
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-app">
				<img src={foto3} class="img-fluid" alt="" />
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-card">
				<img src={foto4} class="img-fluid" alt="" />
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-web">
				<img src={foto5} class="img-fluid" alt="" />
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-app">
				<img src={foto6} class="img-fluid" alt="" />
			</div>
		</div>
	</div>
</section>

<style>
	.portfoio img {
		border-radius: 30px;
	}

	.portfoio .portfolio-item {
		margin-bottom: 30px;
		overflow: hidden;
	}

	.portfoio .portfolio-item img {
		position: relative;
		top: 0;
		transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	.portfoio .portfolio-item .portfolio-info {
		opacity: 0;
		position: absolute;
		left: 15px;
		right: 15px;
		bottom: -50px;
		z-index: 3;
		transition: all ease-in-out 0.3s;
		background: #0880e8;
		padding: 15px 20px;
	}

	.portfoio .portfolio-item .portfolio-info h4 {
		font-size: 18px;
		color: #fff;
		font-weight: 600;
	}

	.portfoio .portfolio-item .portfolio-info p {
		color: #fff;
		font-size: 14px;
		margin-bottom: 0;
	}

	.portfoio .portfolio-item .portfolio-info .preview-link,
	.portfoio .portfolio-item .portfolio-info .details-link {
		position: absolute;
		right: 50px;
		font-size: 24px;
		top: calc(50% - 18px);
		color: white;
		transition: ease-in-out 0.3s;
	}

	.portfoio .portfolio-item .portfolio-info .preview-link:hover,
	.portfoio .portfolio-item .portfolio-info .details-link:hover {
		color: #8ec8fb;
	}

	.portfoio .portfolio-item .portfolio-info .details-link {
		right: 15px;
	}

	.portfoio .portfolio-item:hover .portfolio-info {
		opacity: 1;
		bottom: 0;
	}
</style>
