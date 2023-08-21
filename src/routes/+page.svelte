<script lang="ts">
	import Navbar from "$lib/ui/Navbar.svelte";

	import WelcomeText from "$lib/ui/WelcomeText.svelte";

	import {onMount} from "svelte";

onMount(() => {

	localStorage.setItem("userpage", (1).toString())
})
</script>


<svelte:head>
	<title>Gym Manager</title>

</svelte:head>

<div class="w-[100vw] h-[100vh]" data-theme="dracula">
	<div class="w-[100vw] h-[8vh]">
		<Navbar/>
	</div>

	<div class="w-[100vw] h-[92vh] overflow-hidden">
		<WelcomeText/>
	</div>
</div>