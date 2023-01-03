<script>
	import team1 from '$lib/img/team/team-1.jpg';
	import team2 from '$lib/img/team/team-2.jpg';
	import team3 from '$lib/img/team/team-3.jpg';
	import team4 from '$lib/img/team/team-4.jpg';
</script>

<section id="team" class="team section-bg py-5">
	<div class="container">
		<div class="row">
			<div class="text-center mb-4 title">
				<h1>TEAM</h1>
			</div>
			<div class="offset-3 col-lg-6 mt-4 mt-lg-0">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team1} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Bahar Sudrajat</h4>
						<span>Manager ULPLTD Kotamobagu</span>
						<div class="social">
							<a href="/"><i class="bi-twitter" /></a>
							<a href="/"><i class="bi-facebook" /></a>
							<a href="/"><i class="bi-instagram" /></a>
							<a href="/"> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-lg-6 mt-lg-0" data-aos-delay="200">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team1} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Vecky Pandeirot</h4>
						<span>Team Leader Operasi</span>
						<div class="social">
							<a href="/"><i class="bi-twitter" /></a>
							<a href="/"><i class="bi-facebook" /></a>
							<a href="/"><i class="bi-instagram" /></a>
							<a href="/"> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-6 mt-4 mt-lg-0" data-aos-delay="200">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team1} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Febriandy Mandagi</h4>
						<span>Team Leader Pemeliharaan</span>
						<div class="social">
							<a href="/"><i class="bi-twitter" /></a>
							<a href="/"><i class="bi-facebook" /></a>
							<a href="/"><i class="bi-instagram" /></a>
							<a href="/"> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-6 mt-4" data-aos-delay="300">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team3} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Alan Nuari</h4>
						<span>Team Leader K3L dan Keamanan</span>
						<div class="social">
							<a href="/"><i class="bi bi-twitter" /></a>
							<a href="/"><i class="bi-facebook" /></a>
							<a href="/"><i class="bi-instagram" /></a>
							<a href="/"> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-6 mt-4" data-aos-delay="400">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team3} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Asep Kusmiadi</h4>
						<span>AE Pemeliharaan</span>
						<div class="social">
							<a href="/"><i class="bi-twitter" /></a>
							<a href="/"><i class="bi-facebook" /></a>
							<a href="/"><i class="bi-instagram" /></a>
							<a href="/"> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
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

	.team .member {
		position: relative;
		box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
		padding: 30px;
		border-radius: 10px;
		background: #fff;
	}

	.team .member .pic {
		overflow: hidden;
		width: 180px;
		border-radius: 50%;
	}

	.team .member .pic img {
		transition: ease-in-out 0.3s;
	}

	.team .member:hover img {
		transform: scale(1.1);
	}

	.team .member .member-info {
		padding-left: 30px;
	}

	.team .member h4 {
		font-weight: 700;
		margin-bottom: 5px;
		font-size: 30px;
		color: #43a6a3;
	}

	.team .member span {
		display: block;
		font-size: 20px;
		padding-bottom: 10px;
		position: relative;
		font-weight: 400;
	}

	.team .member span::after {
		content: '';
		position: absolute;
		display: block;
		width: 50px;
		height: 1px;
		background: #bfe0fd;
		bottom: 0;
		left: 0;
	}

	.team .member .social {
		margin-top: 12px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.team .member .social a {
		transition: ease-in-out 0.3s;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50px;
		width: 40px;
		height: 40px;
		background: #ecf6fe;
		color: #43a6a3;
	}

	.team .member .social a i {
		font-size: 22px;
		margin: 0 2px;
	}

	.team .member .social a:hover {
		background: #43a6a3;
		color: #fff;
	}

	.team .member .social a + a {
		margin-left: 8px;
	}
</style>
