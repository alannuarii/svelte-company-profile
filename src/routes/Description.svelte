<script>
	import map from '$lib/video/map.mp4';
</script>

<section id="description" class="position-relative">
	<div class="row pt-5">
		<div class=" offset-lg-1 col-lg-7">
			<p class="text-center px-5">
				<span>PT PLN Nusantara Power</span> Unit Layanan Pusat Listrik Tenaga Diesel (ULPLTD) Kotamobagu
				merupakan unit pembangkit yang terletak di Kota Kotamobagu Sulawesi Utara yang telah beroperasi
				sejak tahun 1979. Saat ini ULPLTD Kotamobagu memiliki 6 mesin dengan total daya terpasang 8.000
				kW. ULPLTD Kotamobagu saat ini berperan sebagai pembangkit stand by yang siap dioperasikan jika
				Sistem Sulutgo membutuhkan
			</p>
		</div>
		<div class="col d-none d-lg-block">
			<video autoplay loop muted width="70%" src={map} style="border-radius: 20%" class="shadow" />
		</div>
	</div>
</section>

<style>
	section {
		height: 70vh;
	}
	p {
		font-size: 30px;
		font-weight: 300;
		line-height: 50px;
	}
	span {
		color: #43a6a3;
		font-weight: 700;
	}
	@media (max-width: 992px) {
		#description {
			margin-bottom: 200px;
		}
		p{
			font-size: 22px;
			line-height: 45px;
		}
	}
</style>
