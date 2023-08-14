<script lang="ts">

    import {onMount} from "svelte";
    import {getWorkouts, } from "$lib/Firebase/firebase";
    import WorkoutCardComponent from "$lib/ui/userpageui/WorkoutCardComponent.svelte";
    import {getDesFromName} from "$lib/Firebase/firebase";

    import ExerciseCard from "$lib/ui/userpageui/ExerciseCard.svelte";

    let names = [];
    let data : any

    let currentWorkout : string
    let Workoutdata : string = JSON.parse(localStorage.getItem("WorkoutData"))


    let exTitle : string
    let exDes : string
    let exLevel : string

    onMount(async () => {
        data = await getWorkouts()
        console.log(data)
        data = JSON.stringify(data)
        await localStorage.setItem(  "WorkoutData", data );

        console.log(JSON.parse(localStorage.getItem("WorkoutData")))





    })

    export const setContent = (title : string, des : string, level : string) => {

        exTitle = title
        exDes = des
        exLevel = level

    }

    function setCurrentWorkout(name : string){
        currentWorkout = name

    }
    function setCurrentWorkoutLocal(current : string){

        localStorage.setItem(JSON.stringify())

    }

</script>

{#if data && names}

    //Limit Workouts to five
    <div class="h-[100%] w-[100%] flex">

        <div class="h-[100%] w-[10%] bg-black overflow-scroll bg-[#15171F]">

            <ul class="text-start list-none">
                <li class="text-2xl">Workouts:</li>
                {#each names as name}
                    <li ><div class="text-xl mt-6 p-[2%] bg-[#838383] rounded-r " on:click={setCurrentWorkout(name)}>{name}</div></li>
                    {/each}
            </ul>

        </div>
        <div class="h-[100%] w-[90%] bg-blue-50 ">

            <table class="w-[100%]">
                <tr>
                    <td class="w-[80%]border-r-4  text-2xl">Exercise:</td>
                    <td class="border-l-4  text-2xl">Level:</td>

                </tr>
                {#if currentWorkout}
                    {async () => {
                        getData()
                    } }



                {/if}
            </table>
        </div>

    </div>
    {:else }
    <p>Loading</p>
{/if}