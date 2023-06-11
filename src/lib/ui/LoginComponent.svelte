<script lang="ts">
import {login, signup} from "$lib/Firebase/firebase";
import Userpagecomponent from "$lib/ui/userpage/userpagecomponent.svelte";
import {userid} from "$lib/Firebase/firebase";
import {get} from "svelte/store";


    let email : any
    let password : any
    let usersignin : any
function loginuser(){


    usersignin = login(email.value, password.value)
    console.log(usersignin)


        //password.value = ""
        //email.value = ""

}
function signupuser(){

    usersignin = signup(email.value, password.value)
    console.log(usersignin)
        //password.value = ""
        //email.value = ""

}

</script>

<div class="w-[40vw] h-[60vh] text-center">


        <ul class="p-8">
            <button class="btn m-2">
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
            <li><button class="btn m-4">
                Google
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button></li>
            <li><input bind:this={email}  type="text" placeholder="E-Mail" class=" m-4 rounded-full"></li>
            <li><input bind:this={password} type="text" placeholder="password" class="m-2 rounded-full"></li>
            <li>
                <button on:click={loginuser} class="pr-3">Login</button>
                <button on:click={signupuser} class="pr-3">Sign Up</button>
            </li>
        </ul>





</div>