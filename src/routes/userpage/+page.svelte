<script lang="ts">
import {writable, get} from "svelte/store";
import {createuser, db, getOwnEx} from "$lib/Firebase/firebase";
import {onMount} from "svelte";
import Sidebar from "$lib/ui/Sidebar.svelte";
import {ref, onValue} from "firebase/database";
import Settings from "$lib/ui/userpageui/Settings.svelte";
import AddUbung from "$lib/ui/userpageui/AddUbung.svelte";
import OwnEx from "$lib/ui/userpageui/OwnEx.svelte";
import WorkoutComponent from "$lib/ui/userpageui/WorkoutComponent.svelte";
import AddWorkout from "$lib/ui/userpageui/AddWorkout.svelte";

let username : string
let page
let id : any;

async function getusername(id : string){

    let startref = ref(db, "/user/"+id)
    await onValue(startref, (snapshot) => {
        username = snapshot.val().name
    })

}



onMount(async () => {
    id = await localStorage.getItem("userid");

    page = parseInt(localStorage.getItem("userpage"))
    console.log(id);
    await getusername(id)
    await getOwnEx()
    })

function changeslot(i : number){
    localStorage.setItem("userpage", i.toString())
    page = parseInt(localStorage.getItem("userpage"))
    console.log(localStorage.getItem("userpage"))


}


</script>
<div class="w-[100vw] h-[100vh] flex text-[#FF3131]">

    <div class="w-[10vw] h-[100vh]">
        <Sidebar  userid={username} changepage={changeslot }></Sidebar>
    </div>

    <div class="w-[90vw] h-[100vh] bg-[#212B36]">
        {#if page === 0}
            <WorkoutComponent></WorkoutComponent>
            {:else if page === 1}
            <AddWorkout></AddWorkout>
            {:else if page === 2}
            <AddUbung></AddUbung>
            {:else if page === 3}
            <OwnEx></OwnEx>
            {:else if page === 4}
            <Settings></Settings>
        {/if}
    </div>

</div>