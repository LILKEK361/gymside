<script lang="ts">
import {writable, get} from "svelte/store";
import {userid} from "$lib/Firebase/firebase";
import {onMount} from "svelte";
import Sidebar from "$lib/ui/Sidebar.svelte";
//export const useruidFB = writable()

let id;

onMount(async () => {id = await get(userid); console.log(id)})
</script>
<div class="w-[100vw] h-[100vh] flex">

    <div class="w-[10vw] h-[100vh]">
        <Sidebar  userid={id}></Sidebar>
    </div>

    <div class="w-[90vw] h-[100vh] bg-pink-900">t</div>

</div>