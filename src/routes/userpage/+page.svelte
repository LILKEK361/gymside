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
    console.log(id + "t");
    await getusername(id) })

</script>
<div class="w-[100vw] h-[100vh] flex">
-
    <div class="w-[10vw] h-[100vh]">
        <Sidebar  userid={username}></Sidebar>
    </div>

    <div class="w-[90vw] h-[100vh] bg-pink-900"><button on:click={getusername(id)} >T</button></div>

</div>