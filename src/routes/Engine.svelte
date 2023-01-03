<script>
	import unit1 from '$lib/img/engine/1.jpg';
	import unit2 from '$lib/img/engine/2.jpg';
	import unit3 from '$lib/img/engine/3.jpg';
	import unit4 from '$lib/img/engine/4.jpg';
	import unit5 from '$lib/img/engine/5.jpg';
	import unit6 from '$lib/img/engine/6.jpg';
</script>

<section id="engine" class="position-relative py-5">
	<div class="d-flex flex-wrap justify-content-center">
		<img src={unit1} class="img-fluid p-3" alt="" />
		<img src={unit2} class="img-fluid p-3" alt="" />
		<img src={unit3} class="img-fluid p-3" alt="" />
		<img src={unit4} class="img-fluid p-3" alt="" />
		<img src={unit5} class="img-fluid p-3" alt="" />
		<img src={unit6} class="img-fluid p-3" alt="" />
	</div>
</section>

<style>
	section {
		overflow-y: hidden;
	}
	img {
		width: 30%;
		border-radius: 30px;
	}
</style>
