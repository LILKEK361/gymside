<script lang="ts">

    import {onMount} from "svelte";
    import {getWorkouts} from "$lib/Firebase/firebase";
    import WorkoutCardComponent from "$lib/ui/userpageui/WorkoutCardComponent.svelte";

    let names = [];
    let data
    onMount(async () => {
        await getData

    })
    export function getData() {
        data =  getWorkouts();
        names = data.names;
    }

</script>

<div class="w-[100%] h-[100%] flex justify-center  overflow-y-scroll">

    <ul>
        {#each names as name}
           <li> <WorkoutCardComponent name={name} time={data.workouts[name].time}   uebunegen={data.workouts[name].uebungen}/></li>
        {/each}
    </ul>

</div>