<script lang="ts">

    import {onMount} from "svelte";
    import {getWorkouts} from "$lib/Firebase/firebase";
    import WorkoutCardComponent from "$lib/ui/userpageui/WorkoutCardComponent.svelte";

    let names = [];
    onMount(async () => {
        let data = await getWorkouts();

        names = data.names;

    })


</script>

<div class="w-[100%] h-[100%] flex justify-center ">

    <ul>
        {#each names as name}
           <li> <WorkoutCardComponent name={name} time="s" /></li>
        {/each}
    </ul>

</div>