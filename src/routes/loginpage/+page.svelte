<script lang="ts">


import WelcomeText from "$lib/ui/WelcomeText.svelte";
import {login, signup, authFb} from "$lib/Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {goto} from "$app/navigation";





let email : any
let password : any
let usersignin : any
async function loginuser(){


    let t = await login(email.value, password.value)

    //password.value = ""
    //email.value = ""

}
async function signupuser() {

    let t = await signup(email.value, password.value)

//password.value = ""
//email.value = ""
}
</script>


<div class="w-full h-full flex justify-center items-center">

    <div class="w-[100vw] h-[100vh] overflow-y-scroll">


        <div id="Lopgin" class="w-[100%] h-[100%] bg-gray-700 flex justify-center items-center">
            <div class="w-[40vw] h-[60vh] text-center bg-gray-900 rounded-2xl">

                <ul class="p-8">
                    <li><button class="btn m-2">
                        GitHub
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>

                    </li>
                    <li>
                        <button class="btn m-4">
                        Google
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    </li>
                    <li>
                        <input bind:this={email}  type="text" placeholder="E-Mail" class=" m-4 rounded-full text-black  ">
                    </li>
                    <li>
                        <input bind:this={password} type="text" placeholder="password" class="m-4 rounded-full text-black">
                    </li>
                    <li class="pt-5">
                        <button on:click={signupuser} class="pr-3 bg-purple-800 text-black px-3 text-center rounded">Sign Up</button>

                        <button on:click={loginuser} class="pr-3 bg-purple-800 text-black px-3 rounded">Login</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>