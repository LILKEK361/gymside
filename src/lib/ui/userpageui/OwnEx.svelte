<script lang="ts">


    import {onMount} from "svelte";

    import UebungCard from "$lib/ui/UebungCard.svelte";
    import {getOwnEx} from "$lib/Firebase/firebase";
    import UebungsCardRow from "$lib/ui/userpageui/UebungsCardRow.svelte";
    let names;
    let ex;

    onMount( async () =>{
        await getOwnEx()
        names   = await localStorage.getItem("namesEx")?.split(",")
        ex      = await JSON.parse(localStorage.getItem("ownEx"))

    })



</script>

{#if names && ex}
    <div class="w-[100%] h-[100%] bg-green-700 overflow-hidden flex justify-center items-center">
        <UebungsCardRow names={[names[0], names[1], names[2], names[3]]} ex={ex}></UebungsCardRow>
    </div>
    {:else}
    <h1>You didnt create any Exercises</h1>
{/if}