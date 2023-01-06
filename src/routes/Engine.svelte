<script>
	import unit1 from '$lib/img/engine/1.jpg';
	import unit2 from '$lib/img/engine/2.jpg';
	import unit3 from '$lib/img/engine/3.jpg';
	import unit4 from '$lib/img/engine/4.jpg';
	import unit5 from '$lib/img/engine/5.jpg';
	import unit6 from '$lib/img/engine/6.jpg';

	const units = [unit1, unit2, unit3, unit4, unit5, unit6];
	// on:click={()=> window.location.href = `/${i + 1}`}
</script>

<section id="engine" class="position-relative py-5">
	<div class="text-center mb-4 title">
		<h1>ENGINES</h1>
	</div>
	<div class="d-flex flex-wrap justify-content-center">
		{#each units as unit, i}
			<div class="image position-relative">
				<img src={unit} class="img-fluid p-3" alt="" />
				<a
					href="/{i + 1}"
					class="btn position-absolute bottom-0 start-50 translate-middle-x mb-4 rounded-pill px-4"
					>Detail <i class="bi-arrow-right-circle" /></a
				>
			</div>
		{/each}
	</div>
</section>

<style>
	.title h1 {
		color: #aac548;
		font-weight: 900;
	}
	section {
		overflow-y: hidden;
		background: #fff;
	}
	.image {
		width: 30%;
	}
	img {
		border-radius: 30px;
	}
	a {
		border: 2px solid #43a6a3;
		color: #fff;
		font-weight: 300;
	}
	a:hover {
		background-color: #43a6a3;
	}

	@media (max-width: 992px) {
		.image {
			width: 100%;
		}
	}
</style>
