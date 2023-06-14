<script lang="ts">

    import UebungCard from "$lib/ui/UebungCard.svelte";

    export const names = []
    export const ex = {}
</script>

<div class="w-[100%] h-[30%] flex justify-center items-center">
    {#each names as name}
    <UebungCard
            exercisename={name}
            doing={ex.name.way}
            level={ex.name.level}
            Muskelgroup={ex.names.muscelgroup} />
    {/each}
</div>