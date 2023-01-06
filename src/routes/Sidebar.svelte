<section class="sidebar d-flex align-items-center justify-content-center shadow d-lg-block d-none">
	<ul class="text-center ">
		<li><a href="/"><i class="bi-house-fill" /></a></li>
		<li><a href="/#engine"><i class="bi-gear-fill" /></a></li>
		<li><a href="/#performance"><i class="bi-graph-up-arrow" /></a></li>
		<li><a href="/#team"><i class="bi-person-fill" /></a></li>
		<li><a href="/#portfolio"><i class="bi-grid-3x3-gap-fill" /></a></li>
	</ul>
</section>

<style>
	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		width: 60px; /* lebar sidebar */
		margin-top: 180px;
		height: 45%; /* tinggi sidebar sama dengan tinggi halaman */
		overflow-y: auto;
		z-index: 9999999;
		border-radius: 30px 0 0 30px;
		background: #43a6a3;
	}

	.sidebar ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.sidebar li {
		margin: 0;
		padding: 10px;
	}

	.sidebar a {
		color: #fff;
		text-decoration: none;
	}
	.sidebar i {
		font-size: 25px;
	}

	.sidebar a:hover {
		color: #313030;
	}
</style>
