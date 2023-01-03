<script>
	import Hero from './Hero.svelte';
	import Description from './Description.svelte';
	import Engine from './Engine.svelte';
	import Team from './Team.svelte';
	import Gallery from './Gallery.svelte';
	import Performance from './Performance.svelte';
</script>

<svelte:head>
	<title>Company Profile</title>
	<meta name="description" content="Company Profile" />
</svelte:head>

<main>
	<div>
		<Hero />
		<Description />
		<Engine />
		<Performance />
		<Team />
		<Gallery />
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
	}
</style>
