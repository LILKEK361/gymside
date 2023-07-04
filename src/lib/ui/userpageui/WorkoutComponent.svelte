<script lang="ts">

    import {onMount} from "svelte";
    import {getWorkouts, } from "$lib/Firebase/firebase";
    import WorkoutCardComponent from "$lib/ui/userpageui/WorkoutCardComponent.svelte";
    import {setAllData} from "$lib/ui/userpageui/loadData";
    import ExerciseCard from "$lib/ui/userpageui/ExerciseCard.svelte";

    let names = [];
    let data : any



    let exTitle : string
    let exDes : string
    let exLevel : string

    onMount(async () => {
        data = await getWorkouts();
        names = data.names;
        setAllData()



    })

    export const setContent = (title : string, des : string, level : string) => {

        exTitle = title
        exDes = des
        exLevel = level

    }

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
                                          level={data.workouts[name].level}
                                          setContent={setContent}
                                          />
                </li>
            {/each}
        </ul>
        </div>
        <div class="h-[100%] w-[50%]">
            <ExerciseCard title={exTitle} level={exLevel} des={exDes} />

        </div>
    </div>
    {:else }
    <p>Loading</p>
{/if}