<script lang="ts">


    import {login, loginWithGit, loginWithGoogle, signup} from "$lib/Firebase/firebase";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";


    let email: any
    let password: any
    let usersignin: any
    onMount(() => {
        localStorage.setItem("userid", "")
    })

    async function loginuser() {


        let t = await login(email.value, password.value)


        //password.value = ""
        //email.value = ""

    }

    async function signupuser() {

        let t = await signup(email.value, password.value)

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


        <div class="w-[100%] h-[100%] bg-gray-700 flex justify-center items-center " id="Lopgin">
            <div class="w-[40vw] h-[60vh] text-center bg-gray-900 rounded-2xl">

                <ul class="p-8">

                    <!--
                    <li>
                        <button class=" m-2" on:click={signupGit}>
                            GitHub
                        </button>
                    </li> -->
                    <li>


                        <button class="overflow-hidden m-4" on:click={signupGoogle}>
                            Google
                        </button>
                    </li>
                    <div class="divider">OR</div>
                    <li>
                        <input bind:this={email} class=" m-4 rounded-full text-black  " placeholder="E-Mail"
                               type="text">
                    </li>
                    <li>
                        <input bind:this={password} class="m-4 rounded-full text-black" placeholder="password"
                               type="text">
                    </li>
                    <li class="pt-5">
                        <button class=" h-[5vh] w-[10vw]  bg-purple-800 text-black px-3 text-center rounded "
                                on:click={signupuser}>Sign Up
                        </button>
                        <button class=" h-[5vh] w-[10vw] bg-purple-800 text-black px-3 rounded" on:click={loginuser}>
                            Login
                        </button>

                    </li>

                </ul>

            </div>
        </div>
    </div>
</div>