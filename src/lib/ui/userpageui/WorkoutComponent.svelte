<script lang="ts">

    import {onMount} from "svelte";
    import {getWorkouts} from "$lib/Firebase/firebase";
    import WorkoutCardComponent from "$lib/ui/userpageui/WorkoutCardComponent.svelte";

    let names = [];
    let data
    onMount(async () => {
        data = await getWorkouts();
        names = data.names;

    })

    export async function getData() {
        data = await getWorkouts();
        names = data.names;

    }

</script>

<div class="w-[100%] h-[100%] flex justify-center  overflow-y-scroll">

    <ul >
        {#each names as name}
            <li class="m-5">
                <WorkoutCardComponent name={name} time={data.workouts[name].time}
                                      getdata = {getData}
                                      uebunegen={data.workouts[name].uebungen}/>
            </li>
        {/each}
    </ul>

</div>