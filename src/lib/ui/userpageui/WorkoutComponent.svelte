<script lang="ts">

    import {onMount} from "svelte";
    import {deleteWorkout, getWorkouts,} from "$lib/Firebase/firebase";

    import {readAllForLevel} from "$lib/Firebase/firebase"
    import {notifications} from "$lib/ui/Toast/notification"
    import Toast from "$lib/ui/Toast/Toast.svelte";



    let names : Array<string>;
    let data: { names: Array<string>; workouts: {} } = {name : [], workouts : []}


    let currentWorkout = "Placeholder"

    onMount( async () => {

       await  LoadData()


    })

    const LoadData = async () => {
        data = await getWorkouts()
        names = data.names
        const workout = JSON.stringify(data)
        localStorage.setItem("WorkoutData", workout);
    }


    function setCurrentWorkout(name : string){
        currentWorkout = name
        localStorage.setItem("currentWorkout", name)

    }

    function setAndgetLevel(name : string){
       async function setLevel(name : string) {
                await readAllForLevel(name, currentWorkout)
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

    function destory(workoutname : string){
        deleteWorkout(workoutname)
        LoadData()
        setCurrentWorkout("Placeholder")
    }

</script>

{#if data && names}

    {#key localStorage.getItem("WorkoutData")}
    <div class="h-[100%] w-[100%] flex overflow-hidden ">

        <div class="h-[100%] w-[10%]   bg-[#15171F]  ">

            <ul class="text-start list-none mt-2 ">
                <li class="text-2xl ml-2">Workouts:</li>
                {#each names as name}
                    <li><div class={currentWorkout === name ? "text-xl mt-6 p-[2%] bg-[#838383] rounded-r pl-2  w-full bg-[#4444]   " : "text-xl mt-6 p-[2%] bg-[#838383] rounded-r pl-2  w-full hover:bg-[#4444] "} on:click={setCurrentWorkout(name)}>{name}</div></li>
                    {/each}
            </ul>

        </div>
        <div class="h-[100%] w-[90%] bg-blue-50 flex justify-center items-center  ">

            <table class="w-[80%] max-h-[70%] min-h-[50%] overflow-scroll bg-gray-800  rounded-2xl  ">
                <tr>
                <td class="w-[80%]border-r-4 pl-2  text-[30px]">Workout: {currentWorkout}</td>
                <td class="border-l-4  text-[30px] text-center">Time: {getTime(currentWorkout)}</td>

                </tr>
                <tr>
                    <td class="w-[80%]border-r-4 pl-2  text-[30px]">Exercises:</td>
                    <td class="border-l-4  text-[30px] text-center">Level:</td>

                </tr>
                {#if currentWorkout !== "Placeholder"}
                    {#each data.workouts[currentWorkout].uebungen as uebung}
                        <tr class="m-2">
                            <td class="w-[80%] pl-2 border-r-4  text-[30px]">
                                {uebung}
                            </td>
                            <td class="border-l-4 pl-2  text-[30px] text-center">
                                {setAndgetLevel(uebung) }
                            </td>
                        </tr>
                    {/each}

                    {:else}
                    <tr></tr>


                {/if}
                
            </table>
            <button type="button" on:click={() => {if(currentWorkout !== "Placeholder"){destory(currentWorkout)}else{notifications.danger("You haven’t selected a workout", 3000)}}}>Delete current Workout</button>
        </div>

    </div>
    {/key}
{/if}

<Toast />

<style>

</style>