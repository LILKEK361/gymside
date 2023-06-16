<script lang="ts">
    import {onMount} from "svelte";
    import {Toast} from "@skeletonlabs/skeleton";
    import {createWorkout} from "$lib/Firebase/firebase";
    let workoutname;
    let dataUe = [];
    let newWorkout =  [];

    onMount( async () => {
        await fetch("src/lib/Workoutdata/Alldata.json")
            .then(response => response.json())
            .then(data => {
                dataUe = [...data.legs.map((x) => { return x.name}),
                    ...data.back.map((x) => { return x.name}),
                    ...data.arms.map((x) => { return x.name}),
                    ...data.chest.map((x) => { return x.name})]

            })
        console.log(dataUe)
    })
    function addUebung(name : string){
        if(!newWorkout.includes(name)){
            newWorkout = [...newWorkout, name]
        }else{
           alert("Exercersie already added")
        }
    }
    function createnewWorkout(){
        if(workoutname) {
            createWorkout(workoutname, newWorkout)
            alert("Your Workout was added <3")
            newWorkout = []
            workoutname = ""
        }else{
            alert("pls choose a workout name")
        }

    }

</script>



<div class="w-[100%] h-[100%] flex justify-center items-center">

   <div class="w-[50%] h-full flex justify-center ">
       <ul>
           <li class="text-center text-2xl p-4"><h1>Add your own new Workout:</h1></li>
           <li><input type="text" class="p-4" bind:value={workoutname} placeholder="Workoutname"></li>
           <li class="p-4">Choose Exercises:</li>
           <li>
               <div class="h-[50%] w-[100%] overflow-scroll">
                   {#each dataUe as name}
                       <p><button class="btn mr-4" on:click={addUebung(name)}>Add / Remove</button>{name}</p>
                   {/each}
               </div>
           </li>
           <li><button on:click={createnewWorkout}>Add Workout</button></li>
       </ul>
   </div>
    <div class="w-[50%] h-full text-center justify-center bg-[#282828]">
        <h1 class="text-3xl m-4">Live preview:</h1 >
        <ul>
            <li>
                {#if workoutname}
                    <p>{"Workout:" + workoutname}</p>
                    {:else}
                    <p>Workout: New Workout</p>
                {/if}
            </li>
            <li>
                {#each newWorkout as ue}
                <p>{ue}</p>
                {/each}
                </li>
        </ul>
    </div>
</div>