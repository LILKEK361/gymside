<script lang="ts">

    import {onMount} from "svelte";
    import {getWorkouts, } from "$lib/Firebase/firebase";
    import WorkoutCardComponent from "$lib/ui/userpageui/WorkoutCardComponent.svelte";
    import {getDesFromName} from "$lib/Firebase/firebase";

    import ExerciseCard from "$lib/ui/userpageui/ExerciseCard.svelte";

    let names = [];
    let data : any
    let currentWorkout : string



    let exTitle : string
    let exDes : string
    let exLevel : string

    onMount(async () => {
        data = await getWorkouts();
        names = data.names;
        console.log(data)




    })

    export const setContent = (title : string, des : string, level : string) => {

        exTitle = title
        exDes = des
        exLevel = level

    }

    function setCurrentWorkout(name : string){
        currentWorkout = name
        console.log(currentWorkout)
    }


</script>

{#if data && names}

    //Limit Workouts to five
    <div class="h-[100%] w-[100%] flex">

        <div class="h-[100%] w-[10%] bg-black">

            <ul>
                {#each names as name}
                    <li on:click={setCurrentWorkout(name)}>{name}</li>
                    {/each}
            </ul>

        </div>
        <div class="h-[100%] w-[90%] bg-blue-50 ">
            <div class="h-[5%] w-[100%] bg-accent">Header with time</div>
            <table class="w-[100%]">
                <tr>
                    <td>Name:</td>
                    <td>Level:</td>

                </tr>
                {#if currentWorkout}
                    {#each data.workouts[currentWorkout].uebungen as uebung}
                        <tr>
                            <td>{uebung}</td>
                            <td>{"Level"}</td>
                        </tr>
                    {/each}
                    {:else}
                    <t></t>
                {/if}
            </table>
        </div>

    </div>
    {:else }
    <p>Loading</p>
{/if}