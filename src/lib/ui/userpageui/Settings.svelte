<script lang="ts">
    import {changeusername} from "$lib/Firebase/firebase";
    import {goto} from "$app/navigation";
    let input;
    function check(){
        if(input.value === ""){
            alert("sus")
        }else{
            changeusername(input.value)
            input.value = ""
        }
    }
    function signout(){
        localStorage.setItem("userid", "")
        localStorage.setItem("userpage", (1).toString())
        goto("/");
        console.log(localStorage.getItem("userid"))
    }
</script>

<div class="h-[100%] w-[100%] flex justify-center items-center">
    <div class="w-[50%] h-[50%]">
        <div class=" p-10 bg-black flex justify-center items-center">
            <input bind:this={input} type="text" class="mr-10" >
            <button on:click={check} class="btn">Changeusername</button>
        </div>
        <div class="p-10 bg-black flex justify-center items-center">
            <button on:click={signout} class="btn">Sign Out</button>
        </div>
    </div>


</div>

<!--
Alert for later
<div class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Pls enter a new username</span>
            </div>
-->