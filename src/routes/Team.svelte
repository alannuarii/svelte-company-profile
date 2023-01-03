<script>
	import team1 from '$lib/img/team/team-1.jpg';
	import team2 from '$lib/img/team/team-2.jpg';
	import team3 from '$lib/img/team/team-3.jpg';
	import team4 from '$lib/img/team/team-4.jpg';
</script>

<section id="team" class="team section-bg py-5">
	<div class="container" data-aos="fade-up">
		<div class="row">
			<div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team1} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Febriandy Mandagi</h4>
						<span>Team Leader Pemeliharaan</span>
						<p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
						<div class="social">
							<a href=""><i class="bi-twitter" /></a>
							<a href=""><i class="bi-facebook" /></a>
							<a href=""><i class="bi-instagram" /></a>
							<a href=""> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-lg-6 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team1} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Febriandy Mandagi</h4>
						<span>Team Leader Pemeliharaan</span>
						<p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
						<div class="social">
							<a href=""><i class="bi-twitter" /></a>
							<a href=""><i class="bi-facebook" /></a>
							<a href=""><i class="bi-instagram" /></a>
							<a href=""> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team1} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Febriandy Mandagi</h4>
						<span>Team Leader Pemeliharaan</span>
						<p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
						<div class="social">
							<a href=""><i class="bi-twitter" /></a>
							<a href=""><i class="bi-facebook" /></a>
							<a href=""><i class="bi-instagram" /></a>
							<a href=""> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="300">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team3} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Alan Nuari</h4>
						<span>Team Leader K3L dan Keamanan</span>
						<p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
						<div class="social">
							<a href=""><i class="bi bi-twitter" /></a>
							<a href=""><i class="bi-facebook" /></a>
							<a href=""><i class="bi-instagram" /></a>
							<a href=""> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="400">
				<div class="member d-flex align-items-start">
					<div class="pic"><img src={team3} class="img-fluid" alt="" /></div>
					<div class="member-info">
						<h4>Asep Kusmiadi</h4>
						<span>AE Pemeliharaan</span>
						<p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
						<div class="social">
							<a href=""><i class="bi-twitter" /></a>
							<a href=""><i class="bi-facebook" /></a>
							<a href=""><i class="bi-instagram" /></a>
							<a href=""> <i class="bi-whatsapp" /> </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
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
		font-size: 20px;
		color: #43A6A3;
	}

	.team .member span {
		display: block;
		font-size: 15px;
		padding-bottom: 10px;
		position: relative;
		font-weight: 500;
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

	.team .member p {
		margin: 10px 0 0 0;
		font-size: 14px;
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
		width: 32px;
		height: 32px;
		background: #ecf6fe;
		color: #43A6A3;
	}

	.team .member .social a i {
		font-size: 16px;
		margin: 0 2px;
	}

	.team .member .social a:hover {
		background: #43A6A3;
		color: #fff;
	}

	.team .member .social a + a {
		margin-left: 8px;
	}
</style>
