<script lang="ts">

    import {onMount} from "svelte";
    import {getWorkouts, } from "$lib/Firebase/firebase";
    import WorkoutCardComponent from "$lib/ui/userpageui/WorkoutCardComponent.svelte";
    import {setAllData} from "$lib/ui/userpageui/loadData";
    import ExerciseCard from "$lib/ui/userpageui/ExerciseCard.svelte";
    let names = [];
    let data : any
    let alldata : object
    let allnames : object
    let description

    onMount(async () => {
        data = await getWorkouts();
        names = data.names;
        setAllData()



    })


    export async function getData() {
        data = await getWorkouts();
        names = data.names;

    }

</script>

{#if data && names}
    <div class="w-[100%] h-[100%] flex justify-center  overflow-hidden">
        <div class="h-[100%] w-[50%] flex justify-center overflow-y-scroll">
        <ul >
            {#each names as name}
                <li class="m-5">
                    <WorkoutCardComponent name={name} time={data.workouts[name].time}
                                          getdata = {getData}
                                          uebunegen={data.workouts[name].uebungen}
                                          />
                </li>
            {/each}
        </ul>
        </div>
        <div class="h-[100%] w-[50%]">
            <ExerciseCard />
            //Live preview of an exercise
        </div>
    </div>
    {:else }
    <p>Loading</p>
{/if}