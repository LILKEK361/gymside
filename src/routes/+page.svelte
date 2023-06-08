<script>
	import Navbar from "$lib/ui/Navbar.svelte";
	import UebungCard from "$lib/ui/UebungCard.svelte";
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<div class="w-[100vw] h-[100vh]" data-theme="dracula">
	<div class="w-[100vw] h-[10vh]">
		<Navbar ></Navbar>
	</div>
	<div class="w-[100vw] h-[90vh] overflow-scroll">
		<div class="w-[100%] h-[100%] bg-gray-600">
			<UebungCard exercisename="Curls" Muskelgroup="Arms" doing="Get Hantels and start moving"></UebungCard>
		</div>
		<div class="w-[100%] h-[100%] bg-gray-400"></div>
	</div>
</div>