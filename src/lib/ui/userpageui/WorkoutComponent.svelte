<script lang="ts">

    import {onMount} from "svelte";
    import {getWorkouts} from "$lib/Firebase/firebase";

    let names = [];
    onMount(async () => {
        console.log(await getWorkouts());
    })


</script>

<div class="w-[100%] h-[100%]">

    <ul>
        {#each names as name}
            <li>{name}</li>
        {/each}
    </ul>

</div>