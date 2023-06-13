<script lang="ts">


    import {onMount} from "svelte";
    import {get, writable} from "svelte/store";
    import {namesEx, ownEx} from "$lib/Firebase/firebase";
    import UebungCard from "$lib/ui/UebungCard.svelte";
    let names;
    let ex;

    onMount(  () =>{
        names   = get(namesEx)
        ex      = get(ownEx)
        console.log(names)




    })



</script>

{#if names && ex}
    <div class="w-[100%] h-[100%] bg-green-700">
        {#each names as n }
            <UebungCard exercisename={n} doing={ex.n.way} Muskelgroup={"Beine"} />
        {/each}
    </div>
    {:else}
    <p>Loading</p>
{/if}