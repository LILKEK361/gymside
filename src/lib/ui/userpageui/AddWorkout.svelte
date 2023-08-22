
<script lang="ts">
    import {onMount} from "svelte";
    import Toast from "$lib/ui/Toast/Toast.svelte";
    import {checklimit, createWorkout, getOwnEx} from "$lib/Firebase/firebase";
    import {notifications} from "$lib/ui/Toast/notification";
    let time : any
    let workoutname;
    let dataUeLeg = [];
    let dataUeChest = [];
    let dataUeArms = [];
    let dataUeBack = [];
    let cusotmnames = [];
    let customData = {};
    let newWorkout =  [];



    onMount( async () => {
        await fetch("src/lib/Workoutdata/Alldata.json")
            .then(response => response.json())
            .then(data => {
                dataUeLeg = [...data.legs.map((x) => { return x.name})]
                dataUeChest = [...data.back.map((x) => { return x.name})]
                dataUeArms = [...data.arms.map((x) => { return x.name})]
                dataUeBack = [...data.chest.map((x) => { return x.name}) ]
            })

        customData = await getOwnEx()
        cusotmnames   = Object.keys(customData)
    })
    function addUebung(name : string){
        if(!newWorkout.includes(name)){
            newWorkout = [...newWorkout, name]



        }else{
            notifications.danger("Exercersie already added", 800)
        }
    }
    function createnewWorkout(){
        if(workoutname && time && newWorkout.length !== 0){
            if(checklimit(9, "/user/" + localStorage.getItem("userid") + "/ownWorkouts/")){
                createWorkout(workoutname, newWorkout, time)
                notifications.success("Added to DB <3", 800)
                newWorkout = []
                workoutname = ""
                time = ""
            }else{
                notifications.danger("You can only have 9 workouts", 2000)
            }
        }else if(!workoutname){
            notifications.danger("Choose a workoutname", 2000)
        }else if(!time){
            notifications.danger("Pls enter a valid time",2000)
        }else if(newWorkout.length === 0){
            notifications.danger("Pls choose exercises for the newWokrout", 2000)
        }else{
            notifications.danger("A unknown error occurred", 2000)
        }

    }
    function removeUe(name : string){

            newWorkout = newWorkout.filter(e => e !== name);
            console.log(newWorkout)

    }

</script>



<div class="w-[100%] h-[100%] flex justify-center items-center overflow-hidden">

   <div class="w-[50%] h-full flex justify-center ">
       <ul class="">
           <li class="text-center text-2xl p-4"><h1>Add your own new Workout:</h1></li>
           <li><input type="text" class="p-4" bind:value={workoutname} placeholder="Workoutname"></li>
           <li>
               <input bind:value={time} class="my-10" placeholder="Time" type="text">
           </li>
           <li class="p-4">Choose Exercises:</li>
           <li>
               <div class="h-[55vh] w-[100%] overflow-y-scroll">
                   <p>Legs:</p>

                   {#each dataUeLeg as name}
                       <div><button on:click={addUebung(name)} class="m-1 bg-purple-800 p-2 rounded-xl text-black">Add</button> {name}</div>
                   {/each}
                   <p>Chest:</p>
                   {#each dataUeChest as name}
                       <div><button on:click={addUebung(name)} class="m-1 bg-purple-800 p-2 rounded-xl text-black">Add</button> {name}</div>
                   {/each}
                   <p>Arms:</p>
                   {#each dataUeArms as name}
                       <div><button on:click={addUebung(name)} class="m-1 bg-purple-800 p-2 rounded-xl text-black">Add</button> {name}</div>
                   {/each}
                   <p>Back:</p>
                   {#each dataUeBack as name}
                       <div><button on:click={addUebung(name)} class="m-1 bg-purple-800 p-2 rounded-xl text-black">Add</button> {name}</div>
                   {/each}
                   <p>Custom:</p>
                   {#each cusotmnames as name}
                       <div><button on:click={addUebung(name)} class="m-1 bg-purple-800 p-2 rounded-xl text-black">Add</button> {name}</div>
                   {/each}
               </div>
           </li>
           <li><button class="btn m-16" on:click={createnewWorkout}>Add Workout</button></li>
       </ul>
   </div>
    <div class="w-[50%] h-full text-center justify-center bg-[#282828]">
        <Toast />
        <h1 class="text-3xl m-4">Live preview:</h1 >
        <ul>
            <li>
                {#if workoutname}
                    <p>{"Workout: " + workoutname}</p>
                    {:else}
                    <p>Workout: New Workout</p>
                {/if}
            </li>
            <li>
                {#if time}
                    <p>{"Time: " + time}</p>
                {:else}
                    <p>
                        Time: 00:00:00
                    </p>
                {/if}
            </li>
            <li>
                {#each newWorkout as ue}
                <p ><button on:click={removeUe(ue)}>X</button> {ue}</p>
                {/each}
                </li>
        </ul>
    </div>

</div>