<script>
	import team1 from '$lib/img/team/team-1.jpg';
	import team2 from '$lib/img/team/team-2.jpg';
	import team3 from '$lib/img/team/team-3.jpg';
	import team4 from '$lib/img/team/team-4.jpg';

	const names = [
		'Bahar Sudrajat',
		'Vecky Pandeirot',
		'Febriandy F. Mandagi',
		'Alan Nuari',
		'Asep Kusmiadi'
	];
	const positions = [
		'Manager ULPLTD Kotamobagu',
		'Team Leader Operasi',
		'Team Leader Pemeliharaan',
		'Team Leader K3L dan Keamanan',
		'AE Pemeliharaan'
	];
</script>

<section id="team" class="team section-bg py-5">
	<div class="container">
		<div class="row">
			<div class="text-center mb-4 title">
				<h1>TEAM</h1>
			</div>
			{#each names as name, i}
				<div class="mb-4 d-lg-none">
					<div class="member d-flex align-items-start">
						<div class="pic"><img src={team1} class="img-fluid" alt="" /></div>
						<div class="member-info">
							<h4>{name}</h4>
							<span>{positions[i]}</span>
							<div class="social">
								<a href="/"><i class="bi-twitter" /></a>
								<a href="/"><i class="bi-facebook" /></a>
								<a href="/"><i class="bi-instagram" /></a>
								<a href="/"> <i class="bi-whatsapp" /> </a>
							</div>
						</div>
					</div>
				</div>
			{/each}

			<div class="offset-1 col-lg-10 mt-4 mt-lg-0 d-none d-lg-block">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team1} class="img-fluid" alt="" /></div>
					<div class="manager">
						<h4>Bahar Sudrajat</h4>
						<span>Manager ULPLTD Kotamobagu</span>
						<div class="social">
							<a href="/"><i class="bi-twitter" /></a>
							<a href="/"><i class="bi-facebook" /></a>
							<a href="/"><i class="bi-instagram" /></a>
							<a href="/"> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
					<div class="w-50 offset-2 d-none d-lg-block">
						<div class="d-flex align-items-start">
							<div class="picture"><img src={team1} class="img-fluid" alt="" /></div>
							<div class="member-info">
								<h3>Vecky Pandeirot</h3>
								<span>Team Leader Operasi</span>
							</div>
							<div class="social-member">
								<a href="/"><i class="bi-twitter" /></a>
								<a href="/"><i class="bi-facebook" /></a>
								<a href="/"><i class="bi-instagram" /></a>
								<a href="/"> <i class="bi-whatsapp" /> </a>
							</div>
						</div>
						<div class="d-flex align-items-start">
							<div class="picture"><img src={team1} class="img-fluid" alt="" /></div>
							<div class="member-info">
								<h3>Febriandy F. Mandagi</h3>
								<span>Team Leader Pemeliharaan</span>
							</div>
							<div class="social-member">
								<a href="/"><i class="bi-twitter" /></a>
								<a href="/"><i class="bi-facebook" /></a>
								<a href="/"><i class="bi-instagram" /></a>
								<a href="/"> <i class="bi-whatsapp" /> </a>
							</div>
						</div>
						<div class="d-flex align-items-start">
							<div class="picture"><img src={team1} class="img-fluid" alt="" /></div>
							<div class="member-info">
								<h3>Alan Nuari</h3>
								<span>Team Leader K3L dan Keamanan</span>
							</div>
							<div class="social-member">
								<a href="/"><i class="bi-twitter" /></a>
								<a href="/"><i class="bi-facebook" /></a>
								<a href="/"><i class="bi-instagram" /></a>
								<a href="/"> <i class="bi-whatsapp" /> </a>
							</div>
						</div>
						<div class="d-flex align-items-start">
							<div class="picture"><img src={team1} class="img-fluid" alt="" /></div>
							<div class="member-info">
								<h3>Asep Kusmiadi</h3>
								<span>AE Pemeliharaan</span>
							</div>
							<div class="social-member">
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

		<!-- <div class="row mt-4">
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
		</div> -->
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

	.team .member .pic {
		overflow: hidden;
		width: 180px;
		border-radius: 50%;
	}

	.team .member .picture {
		overflow: hidden;
		width: 50px;
		border-radius: 50%;
	}

	.team .member .manager {
		padding-left: 30px;
	}

	.team .member .member-info {
		padding-left: 15px;
		margin-bottom: 10px;
	}

	.team .member h4 {
		font-weight: 700;
		margin-bottom: 5px;
		font-size: 30px;
		color: #43a6a3;
	}

	.team .member h3 {
		font-weight: 700;
		margin-bottom: 5px;
		font-size: 20px;
		color: #43a6a3;
	}

	.team .member span {
		display: block;
		font-size: 20px;
		padding-bottom: 10px;
		position: relative;
		font-weight: 400;
	}

	.team .member .member-info span {
		display: block;
		font-size: 15px;
		padding-bottom: 10px;
		position: relative;
		font-weight: 400;
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

	.team .member .social-member {
		margin-top: 12px;
		margin-left: 15px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.team .member .social-member a {
		transition: ease-in-out 0.3s;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50px;
		width: 30px;
		height: 30px;
		background: #ecf6fe;
		color: #43a6a3;
	}

	.team .member .social-member a i {
		font-size: 15px;
		margin: 0 2px;
	}

	.team .member .social-member a:hover {
		background: #43a6a3;
		color: #fff;
	}

	.team .member .social-member a + a {
		margin-left: 8px;
	}

	@media (max-width: 992px) {
		.team .member {
			position: relative;
			box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
			padding: 30px;
			border-radius: 10px;
			background: #fff;
		}

		.team .member h4 {
			font-size: 18px;
		}
	}
</style>
