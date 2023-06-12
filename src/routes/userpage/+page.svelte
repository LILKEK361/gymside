<script lang="ts">
import {writable, get} from "svelte/store";
import {userid, db} from "$lib/Firebase/firebase";
import {onMount} from "svelte";
import Sidebar from "$lib/ui/Sidebar.svelte";
import {ref, onValue} from "firebase/database";

let username : string

async function getusername(id : string){

    let startref = ref(db, "/user/"+id)
    await onValue(startref, (snapshot) => {
        username = snapshot.val().name
    })

}

let id : any;

onMount(async () => {
    id = await get(userid);
    console.log(id)
    console.log(id + "t");
    await getusername(id)
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
            <p>Create new</p>
            {:else if page === 2}
            <p>Settings</p>
        {/if}
    </div>

</div>