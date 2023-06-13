<script lang="ts">


    import {onMount} from "svelte";

    import UebungCard from "$lib/ui/UebungCard.svelte";
    import {getOwnEx} from "$lib/Firebase/firebase";
    let names;
    let ex;

    onMount( async () =>{
        await getOwnEx()
        names   = localStorage.getItem("namesEx")?.split(",")
        ex      = JSON.parse(localStorage.getItem("ownEx"))

    })



</script>

{#if names && ex}
    <div class="w-[100%] h-[100%] bg-green-700 overflow-hidden flex justify-center items-center">
        {#each names as name }
            <UebungCard
                    exercisename={name}
                    doing={ex[name].way}
                    Muskelgroup={ex[name].muscelgroup}
                    level={ex[name].level}
            />
        {/each}
    </div>
    {:else}
    <p>Loading</p>
{/if}