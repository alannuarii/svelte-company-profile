<script>
	import foto1 from '$lib/img/gallery/1.jpeg';
	import foto2 from '$lib/img/gallery/2.jpeg';
	import foto3 from '$lib/img/gallery/3.jpeg';
	import foto4 from '$lib/img/gallery/4.jpeg';
	import foto5 from '$lib/img/gallery/5.jpeg';
	import foto6 from '$lib/img/gallery/6.jpeg';
	import foto7 from '$lib/img/gallery/7.jpeg';
	import foto8 from '$lib/img/gallery/8.jpeg';

	const photos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];
</script>

<section id="portfolio" class="portfoio py-5">
	<div class="text-center mb-4 title">
		<h1>GALLERY</h1>
	</div>
	<div class="container" data-aos="fade-up">
		<div class="row portfolio-container">
			{#each photos as foto}
				<div class="col-lg-3 col-md-6 portfolio-item filter-app">
					<img src={foto} class="img-fluid" alt="" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.title h1 {
		color: #aac548;
		font-weight: 900;
	}

	section {
		background: #fff;
	}

	.portfoio img {
		border-radius: 30px;
	}

	.portfoio .portfolio-item {
		margin-bottom: 30px;
		overflow: hidden;
	}

	.portfoio .portfolio-item:hover img {
		transform: scale(1.1);
	}

	.portfoio .portfolio-item img {
		position: relative;
		top: 0;
		transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
</style>
