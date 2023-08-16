<script lang="ts">

    import {onMount} from "svelte";
    import {deleteWorkout, getWorkouts,} from "$lib/Firebase/firebase";
    import WorkoutCardComponent from "$lib/ui/userpageui/WorkoutCardComponent.svelte";
    import {getDesFromName} from "$lib/Firebase/firebase";
    import {readAllForLevel} from "$lib/Firebase/firebase"

    import ExerciseCard from "$lib/ui/userpageui/ExerciseCard.svelte";

    let names = [];
    let data : any

    let currentWorkout = "Placeholder"

    onMount( async () => {

       await  LoadData()

    })

    const LoadData = async () => {
        data = await getWorkouts()
        names = data.names
        const workout = JSON.stringify(data)
        await localStorage.setItem("WorkoutData", workout);
    }


    function setCurrentWorkout(name : string){
        currentWorkout = name
        localStorage.setItem("currentWorkout", name)

    }

    function setAndgetLevel(name : string){
       async function setLevel(name : string) {
                readAllForLevel(name, currentWorkout)
        }
        setLevel(name)
       return  localStorage.getItem(name + "Level")
    }

    function getTime(name : string){
      if(currentWorkout !== "Placeholder"){
          return   data.workouts[currentWorkout].time
      }

      return "N/A"
    }

    function destory(){
        deleteWorkout(currentWorkout)
        LoadData()
    }

</script>

{#if data && names}


    <div class="h-[100%] w-[100%] flex bg-black overflow-hidden ">

        <div class="h-[100%] w-[10%]   bg-[#15171F]  ">

            <ul class="text-start list-none mt-2 ">
                <li class="text-2xl ml-2">Workouts:</li>
                {#each names as name}
                    <li ><div class={currentWorkout === name ? "text-xl mt-6 p-[2%] bg-[#838383] rounded-r pl-2  w-full bg-[#4444]   " : "text-xl mt-6 p-[2%] bg-[#838383] rounded-r pl-2  w-full hover:bg-[#4444] "} on:click={setCurrentWorkout(name)}>{name}</div></li>
                    {/each}
            </ul>

        </div>
        <div class="h-[100%] w-[90%] bg-blue-50 flex justify-center items-center ">

            <table class="w-[80%]">
                <tr>
                <td class="w-[80%]border-r-4  text-2xl">{currentWorkout}</td>
                <td class="border-l-4  text-2xl text-center">Time: {getTime(currentWorkout)}</td>

                </tr>
                <tr>
                    <td class="w-[80%]border-r-4  text-2xl">Exercise:</td>
                    <td class="border-l-4  text-2xl text-center">Level:</td>

                </tr>
                {#if currentWorkout !== "Placeholder"}
                    {#each data.workouts[currentWorkout].uebungen as uebung}
                        <tr>
                            <td class="w-[80%] border-r-4  text-2xl">
                                {uebung}
                            </td>
                            <td class="border-l-4  text-2xl text-center">
                                {setAndgetLevel(uebung) }
                            </td>
                        </tr>
                    {/each}

                    {:else}
                    <tr></tr>


                {/if}
            </table>
        </div>

    </div>
{/if}