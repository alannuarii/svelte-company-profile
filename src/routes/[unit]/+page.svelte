<script>
	export let data;
	const u = data.data[0];

	import unit1 from '$lib/img/engine/1.jpg';
	import unit2 from '$lib/img/engine/2.jpg';
	import unit3 from '$lib/img/engine/3.jpg';
	import unit4 from '$lib/img/engine/4.jpg';
	import unit5 from '$lib/img/engine/5.jpg';
	import unit6 from '$lib/img/engine/6.jpg';

	const units = [unit1, unit2, unit3, unit4, unit5, unit6];
</script>

<main id="main">
	<!-- ======= Breadcrumbs ======= -->
	<section id="breadcrumbs" class="breadcrumbs shadow-sm">
		<div class="container d-flex align-items-center justify-content-between text-end">
			<a href="/#engine" class="btn"
				><i class="bi-arrow-left-square" /> <span class="d-none d-lg-inline">Back</span></a
			>
			<h2>ULPLTD Kotamobagu Unit {u.id_unit}</h2>
		</div>
	</section>
	<!-- End Breadcrumbs -->

	<!-- ======= Portfolio Details Section ======= -->
	<section id="portfolio-details" class="portfolio-details">
		<div class="container mt-4">
			<div class="row gy-4">
				<div class="col-lg-6">
					<div class="portfolio-details-slider">
						<img src={units[u.id_unit - 1]} class="img-fluid shadow" alt="" />
					</div>
				</div>

				<div class="col-lg-6">
					<div class="portfolio-info">
						<div class="accordion accordion-flush" id="accordionFlushExample">
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingOne">
									<button
										class="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseOne"
										aria-expanded="false"
										aria-controls="flush-collapseOne"
									>
										Informasi Umum
									</button>
								</h2>
								<div
									id="flush-collapseOne"
									class="accordion-collapse collapse"
									aria-labelledby="flush-headingOne"
									data-bs-parent="#accordionFlushExample"
								>
									<div class="accordion-body">
										<h6>Unit: <span>{u.id_unit}</span></h6>
										<h6>Bahan Bakar: <span>{u.bahan_bakar}</span></h6>
										<h6>Tahun Operasi: <span>{u.tahun_operasi}</span></h6>
										<h6>Daya Terpasang: <span>{u.dtp}</span></h6>
										<h6>Daya Mampu: <span>{u.dmn}</span></h6>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingTwo">
									<button
										class="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseTwo"
										aria-expanded="false"
										aria-controls="flush-collapseTwo"
									>
										Mesin
									</button>
								</h2>
								<div
									id="flush-collapseTwo"
									class="accordion-collapse collapse"
									aria-labelledby="flush-headingTwo"
									data-bs-parent="#accordionFlushExample"
								>
									<div class="accordion-body">
										<h6>Pabrik: <span>{u.ePabrik}</span></h6>
										<h6>Tipe: <span>{u.eTipe}</span></h6>
										<h6>Tahun Pembuatan: <span>{u.eTahunPembuatan}</span></h6>
										<h6>Daya Nominal: <span>{u.eDayaNominal} kW</span></h6>
										<h6>Putaran: <span>{u.ePutaran} rpm</span></h6>
										<h6>Nomor Seri: <span>{u.eNomorSeri}</span></h6>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingThree">
									<button
										class="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseThree"
										aria-expanded="false"
										aria-controls="flush-collapseThree"
									>
										Generator
									</button>
								</h2>
								<div
									id="flush-collapseThree"
									class="accordion-collapse collapse"
									aria-labelledby="flush-headingThree"
									data-bs-parent="#accordionFlushExample"
								>
									<div class="accordion-body">
										<h6>Pabrik: <span>{u.gPabrik}</span></h6>
										<h6>Tipe: <span>{u.gTipe}</span></h6>
										<h6>Tahun Pembuatan: <span>{u.gTahunPembuatan}</span></h6>
										<h6>Nomor Seri: <span>{u.gNomorSeri}</span></h6>
										<h6>Daya Nominal: <span>{u.gDayaNominal}</span></h6>
										<h6>Tegangan: <span>{u.gTegangan}</span></h6>
										<h6>Arus: <span>{u.gArus}</span></h6>
										<h6>Putaran: <span>{u.gPutaran}</span></h6>
										<h6>Frekuensi: <span>{u.gFrekuensi}</span></h6>
										<h6>Tegangan Eksitasi: <span>{u.gTeganganEksitasi}</span></h6>
										<h6>Arus Eksitasi: <span>{u.gArusEksitasi}</span></h6>
										<h6>Jumlah Fasa: <span>{u.gJumlahFasa}</span></h6>
										<h6>Faktor Daya: <span>{u.gFaktorDaya}</span></h6>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingFour">
									<button
										class="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseFour"
										aria-expanded="false"
										aria-controls="flush-collapseFour"
									>
										Transformator
									</button>
								</h2>
								<div
									id="flush-collapseFour"
									class="accordion-collapse collapse"
									aria-labelledby="flush-headingFour"
									data-bs-parent="#accordionFlushExample"
								>
									<div class="accordion-body">
										<h6>Pabrik: <span>{u.tPabrik}</span></h6>
										<h6>Tipe: <span>{u.tTipe}</span></h6>
										<h6>Tahun Pembuatan: <span>{u.tTahunPembuatan}</span></h6>
										<h6>Nomor Seri: <span>{u.tNomorSeri}</span></h6>
										<h6>Sistem Pendingin: <span>{u.tSistemPendingin}</span></h6>
										<h6>Jumlah Fasa: <span>{u.tJumlahFasa}</span></h6>
										<h6>Kapasitas Terpasang: <span>{u.tKapasitasTerpasang}</span></h6>
										<h6>Tegangan Sisi HV: <span>{u.tTeganganHV}</span></h6>
										<h6>Tegangan Sisi LV: <span>{u.tTeganganLV}</span></h6>
										<h6>Arus Sisi HV: <span>{u.tArusHV}</span></h6>
										<h6>Arus Sisi LV: <span>{u.tArusLV}</span></h6>
										<h6>Jumlah Tap: <span>{u.tJumlahTap}</span></h6>
										<h6>Frekuensi: <span>{u.tFrekuensi}</span></h6>
										<h6>Kelompok Vektor: <span>{u.tKelompokVektor}</span></h6>
										<h6>Impedansi: <span>{u.tImpedansi}</span></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End Portfolio Details Section -->
</main>

<style>
	.breadcrumbs {
		padding: 15px 0;
		background: rgba(67, 166, 163, 0.1);
	}

	.breadcrumbs h2 {
		font-size: 26px;
		font-weight: 700;
		color: #43a6a3;
		margin-right: 50px;
	}

	.breadcrumbs a {
		font-size: 20px;
		font-weight: 700;
		color: #43a6a3;
		cursor: pointer;
		text-decoration: none;
	}

	.portfolio-details {
		padding-top: 10px;
	}

	.portfolio-details .accordion h6 {
		font-weight: 300;
		font-size: smaller;
	}

	.portfolio-details .accordion span {
		font-weight: 700;
		color: #43a6a3;
	}

	.portfolio-details .portfolio-details-slider img {
		width: 100%;
		border-radius: 30px 30px 170px 170px;
		border-bottom: 20px solid #aac548;
	}

	.portfolio-details .portfolio-info {
		padding: 0 30px;
		/* box-shadow: 0px 0 30px rgba(246, 176, 36, 0.08); */
	}

	@media (max-width: 768px), (max-height: 700px) {
		.breadcrumbs h2 {
			font-size: 20px;
			margin-right: 20px;
		}
	}
</style>
