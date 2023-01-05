<script>
	import pnp from '$lib/img/pnp.png';
</script>

<footer id="footer">
	<div class="footer-top">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 footer-contact">
					<h4>Contact Us</h4>
					<p>
						Jl. Arif Rahman Hakim <br />
						Kel. Biga, Kec. Kotamobagu Utara, Kota Kotamobagu<br />
						Sulawesi Utara <br /><br />
						<strong>Phone:</strong> +62 821 8757 0774<br />
						<strong>Email:</strong> info@pltdktm.org<br />
					</p>
				</div>

				<div class="col-lg-6 col-md-6 footer-info">
					<h3>FIND US ON</h3>
					<div class="social-links mt-3">
						<a href="/" class="twitter"><i class="bi-twitter" /></a>
						<a href="/" class="facebook"><i class="bi-facebook" /></a>
						<a href="/" class="instagram"><i class="bi-instagram" /></a>
						<a href="/" class="youtube"><i class="bi-youtube" /></a>
					</div>
					<div>
						<img src={pnp} class="p-4" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	#footer {
		background: rgba(67, 166, 163, 0.678);
		padding: 0 0 30px 0;
		color: #fff;
		font-size: 14px;
	}

	#footer .footer-top {
		background: #43a6a3;
		padding: 60px 0 30px 0;
	}

	#footer .footer-top .footer-info {
		margin-bottom: 30px;
	}

	#footer .footer-top .footer-info h3 {
		font-size: 18px;
		margin: 0 0 20px 0;
		padding: 2px 0 2px 0;
		line-height: 1;
		font-weight: 700;
	}

	#footer .footer-top .footer-info p {
		font-size: 14px;
		line-height: 24px;
		margin-bottom: 0;
		font-family: 'Raleway', sans-serif;
		color: #fff;
	}

    #footer .footer-top .footer-info img{
        margin-top: 30px;
        width: 300px;
        background: rgba(255, 255, 255, 0.1);
    }

	#footer .footer-top .social-links a {
		font-size: 16px;
		display: inline-block;
		background: rgba(255, 255, 255, 0.1);
		color: #fff;
		line-height: 1;
		padding: 10px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 36px;
		height: 36px;
		transition: 0.3s;
	}

	#footer .footer-top .social-links a:hover {
		background: #ffffff;
		color: #43a6a3;
		text-decoration: none;
	}

	#footer .footer-top h4 {
		font-size: 16px;
		font-weight: bold;
		color: #fff;
		text-transform: uppercase;
		position: relative;
		padding-bottom: 12px;
	}

	#footer .footer-top .footer-links ul a {
		color: rgba(255, 255, 255, 0.75);
		transition: 0.3s;
		display: inline-block;
		line-height: 1;
	}

	#footer .footer-top .footer-links ul a:hover {
		color: #fff;
	}

	#footer .footer-top .footer-contact {
		margin-bottom: 30px;
	}

	#footer .footer-top .footer-contact p {
		line-height: 26px;
	}

	#footer .credits a {
		color: #f6b024;
	}
</style>
