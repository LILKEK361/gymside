<script lang="ts">


    import {login, loginWithGit, loginWithGoogle, signup} from "$lib/Firebase/firebase";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";
    import Toast from "$lib/ui/Toast/Toast.svelte";


    let email: any
    let password: any
    let usersignin: any
    onMount(() => {
        localStorage.setItem("userid", "")
    })

    async function loginuser() {
       await login(email.value, password.value)


        //password.value = ""
        //email.value = ""

    }

    async function signupuser() {

       await signup(email.value, password.value)

//password.value = ""
//email.value = ""
    }

    async function signupGoogle() {
        await loginWithGoogle()
    }

    /*async function signupGit() {
        await loginWithGit()
    }*/
</script>
<svelte:head>
    <title>Gym Manager</title>

</svelte:head>



<div class="w-full h-full flex justify-center items-center">

    <div class="w-[100vw] h-[100vh] ">


        <div class="w-[100%] h-[100%] bg-gray-700 flex justify-center items-center " id="Lopgin" >
            <div class="w-[25%] h-[60%] text-center bg-gray-900 rounded-l-2xl flex justify-center items-center ">


                    <!--
                    <li>
                        <button class=" m-2" on:click={signupGit}>
                            GitHub
                        </button>
                    </li> -->
                    <div>
                    <div>
                        <button class="overflow-hidden m-4" on:click={signupGoogle}>
                            Google
                        </button>
                    </div>




                    <div class="divider ">OR</div>
                    <div class="w-full h-[50%] ">
                        <div>
                            <input bind:this={email} class=" m-4 rounded-full text-black  " placeholder="E-Mail"
                                   type="text">

                            <input bind:this={password} class="m-4 rounded-full text-black" placeholder="password"
                                   type="text">
                        </div>
                        <div class="flex justify-center items-center">
                            <button class=" h-[5vh] w-[10vw]  bg-purple-800 text-black px-3 text-center rounded mr-4 "
                                    on:click={signupuser}>Sign Up
                            </button>
                            <button class=" h-[5vh] w-[10vw] bg-purple-800 text-black px-3 rounded" on:click={loginuser}>
                                Login
                            </button>
                        </div>
                    </div>



            </div>
            </div>
            <div class="w-[25%] h-[60%] bg-gray-800 rounded-r-2xl" ></div>
        </div>
    </div>
    <Toast/>
</div>