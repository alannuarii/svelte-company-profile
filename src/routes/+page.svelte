<script>
	import Sidebar from './Sidebar.svelte';
	import Hero from './Hero.svelte';
	import Description from './Description.svelte';
	import Engine from './Engine.svelte';
	import Team from './Team.svelte';
	import Gallery from './Gallery.svelte';
	import Performance from './Performance.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>Company Profile</title>
	<meta name="description" content="Company Profile" />
</svelte:head>

<main>
	<div>
		<Sidebar />
		<Hero />
		<Description />
		<Engine />
		<Performance />
		<Team />
		<Gallery />
		<Footer />
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
		background: rgba(67, 166, 163, 0.1);
	}
</style>
