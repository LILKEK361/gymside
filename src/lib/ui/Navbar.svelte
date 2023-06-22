<script>


import {goto} from "$app/navigation";
</script>
<div class="w-[100%] h-[100%] bg-gray-950 flex overflow-hidden">
    <img src="src/lib/logo/OnlyLogo.png"  alt="Logo" class="rounded-full" />
    <div class=" flex items-center text-3xl text-red-700 ">Gym Manager</div>
    <button class="w-full  flex justify-end items-center " on:click={()=>{goto("/loginpage")}}>
        {"Login"}


    </button>



</div>