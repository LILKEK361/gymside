<script>
	import Navbar from "$lib/ui/Navbar.svelte";
	import UebungCard from "$lib/ui/UebungCard.svelte";
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<div class="w-[100vw] h-[10vh]">
	<Navbar ></Navbar>
</div>
<div class="w-[100vw] h-[90vh] overflow-scroll">
	<div class="w-[100%] h-[100%] bg-amber-200">
		<UebungCard exercisename="Curls" Muskelgroup="Arms" doing="Get Hantels and start moving"></UebungCard>
	</div>
	<div class="w-[100%] h-[100%] bg-amber-100"></div>
</div>