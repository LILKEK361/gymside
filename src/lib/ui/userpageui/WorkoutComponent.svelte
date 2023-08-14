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
        if(localStorage.getItem("WorkoutData")){
            data = await JSON.parse(localStorage.getItem("WorkoutData"))
            names = data["names"]
            console.log(data)
            console.log(names)
        }else {
            data = await getWorkouts()
            names = data.names
            const workout = JSON.stringify(data)
            await localStorage.setItem("WorkoutData", workout);
        }

        setCurrentWorkout(localStorage.getItem("currentWorkout"))





    })

    export const setContent = (title : string, des : string, level : string) => {

        exTitle = title
        exDes = des
        exLevel = level

    }

    function setCurrentWorkout(name : string){
        currentWorkout = name
        localStorage.setItem("currentWorkout", name)

    }



</script>

{#if data && names}


    <div class="h-[100%] w-[100%] flex bg-black overflow-hidden ">

        <div class="h-[100%] w-[10%] bg-black  bg-[#15171F]  ">

            <ul class="text-start list-none mt-14 ">
                <li class="text-2xl ml-2">Workouts:</li>
                {#each names as name}
                    <li ><div class="text-xl mt-6 p-[2%] bg-[#838383] rounded-r pl-4 " on:click={setCurrentWorkout(name)}>{name}</div></li>
                    {/each}
            </ul>

        </div>
        <div class="h-[100%] w-[90%] bg-blue-50 ">

            <table class="w-[100%]">
                <tr>
                    <td class="w-[80%]border-r-4  text-2xl">Exercise:</td>
                    <td class="border-l-4  text-2xl text-center">Level:</td>

                </tr>
                {#if currentWorkout}
                    {#each data.workouts[currentWorkout].uebungen as uebung}
                        <tr>
                            <td class="w-[80%] border-r-4  text-2xl">{uebung}</td>
                            <td class="border-l-4  text-2xl text-center">{"Level"}</td>
                        </tr>
                    {/each}



                {/if}
            </table>
        </div>

    </div>
    {:else }
    <p>Loading</p>
{/if}