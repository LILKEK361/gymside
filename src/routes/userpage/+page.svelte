<script lang="ts">
import {writable, get} from "svelte/store";
import {createuser, db, getOwnEx} from "$lib/Firebase/firebase";
import {onMount} from "svelte";
import Sidebar from "$lib/ui/Sidebar.svelte";
import {ref, onValue} from "firebase/database";
import Settings from "$lib/ui/userpageui/Settings.svelte";
import AddUbung from "$lib/ui/userpageui/AddUbung.svelte";
import OwnEx from "$lib/ui/userpageui/OwnEx.svelte";

let username : string

async function getusername(id : string){

    let startref = ref(db, "/user/"+id)
    await onValue(startref, (snapshot) => {
        username = snapshot.val().name
    })

}

let id : any;

onMount(async () => {
    id = await localStorage.getItem("userid");

    console.log(id);
    await getusername(id)
    await getOwnEx()
    })
let page = 0;
function changeslot(i : number){
    page = i;
}


</script>
<div class="w-[100vw] h-[100vh] flex text-[#FF3131]">

    <div class="w-[10vw] h-[100vh]">
        <Sidebar  userid={username} changepage={changeslot}></Sidebar>
    </div>

    <div class="w-[90vw] h-[100vh] bg-[#212B36]">
        {#if page === 0}
            <p>Manage Workouts</p>
            {:else if page === 1}
            <AddUbung></AddUbung>
            {:else if page === 2}
            <OwnEx></OwnEx>
            {:else if page === 3}
            <Settings></Settings>
        {/if}
    </div>

</div>