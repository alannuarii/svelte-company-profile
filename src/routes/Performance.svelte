<script>
	import pnp from '$lib/img/pnp.png';
</script>

<section id="performance" class="performance py-lg-5 py-4">
	<div class="container">
		<div class="row d-flex justify-content-center text-center">
			<div class="text-center mb-4 title">
				<h1>PERFORMANCE INDICATORS</h1>
			</div>
			<div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4 mb-lg-4">
				<div class="icon-box">
					<h4 class="title">BPP</h4>
					<p class="length">(Biaya Pokok Produksi)</p>
					<p class="description">2.709</p>
					<p class="unit">Rp/kWh</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4 mb-lg-4">
				<div class="icon-box">
					<h4 class="title">EAF</h4>
					<p class="length">(Equivalent Availability Factor)</p>
					<p class="description">98,54</p>
					<p class="unit">%</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4 mb-lg-4">
				<div class="icon-box">
					<h4 class="title">EFOR</h4>
					<p class="length">(Equivalent Force Outage Rate)</p>
					<p class="description">1,81</p>
					<p class="unit">%</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4 mb-lg-4">
				<div class="icon-box">
					<h4 class="title">SOF</h4>
					<p class="length">(Scheduled Outage Factor)</p>
					<p class="description">1,27</p>
					<p class="unit">%</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4 mb-lg-4">
				<div class="icon-box">
					<h4 class="title">PS</h4>
					<p class="length">(Pemakaian Sendiri)</p>
					<p class="description">3,41</p>
					<p class="unit">%</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4 mb-lg-4">
				<div class="icon-box">
					<h4 class="title">SFC</h4>
					<p class="length">(Specific Fuel Consumption)</p>
					<p class="description">0,266</p>
					<p class="unit">Liter/kWh</p>
				</div>
			</div>
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

	.performance {
		padding-top: 0;
		position: relative;
		z-index: 100;
	}

	.performance .icon-box {
		width: 500px;
		padding: 40px 30px;
		position: relative;
		overflow: hidden;
		background: #fff;
		box-shadow: 5px 10px 29px 0 rgba(68, 88, 144, 0.2);
		transition: all 0.3s ease-in-out;
		border-radius: 10px;
	}

	.performance .title {
		font-weight: 700;
		margin-bottom: 15px;
		font-size: 35px;
	}

	.performance .length {
		font-size: 15px;
		font-weight: 500;
		font-style: italic;
		margin-top: -17px;
		margin-bottom: 30;
		color: #777777;
	}

	.performance .description {
		font-size: 40px;
		font-weight: 900;
		line-height: 28px;
		margin-bottom: 0;
		color: #43a6a3;
	}

	.performance .unit {
		font-size: 20px;
		font-weight: 400;
		line-height: 40px;
		margin-bottom: -10px;
		color: #777777;
	}
</style>
