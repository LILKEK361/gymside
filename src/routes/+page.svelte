<script lang="ts">
	import Navbar from "$lib/ui/Navbar.svelte";
	import UebungCard from "$lib/ui/UebungCard.svelte";
	import WelcomeText from "$lib/ui/WelcomeText.svelte";
	import Impressum from "$lib/ui/Impressum.svelte";
	import {login, signup, authFb} from "$lib/Firebase/firebase";
	import { onAuthStateChanged } from "firebase/auth";





	let email : any
	let password : any
	let usersignin : any
	function loginuser(){


		usersignin = login(email.value, password.value)



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


<svelte:head>
	<title>Gym Manager</title>

</svelte:head>

<div class="w-[100vw] h-[100vh]" data-theme="dracula">
	<div class="w-[100vw] h-[10vh]">
		<Navbar/>
	</div>
	<div class="w-[100vw] h-[90vh] overflow-y-scroll">
		<div class="w-[100%] h-[100%] ">
			<WelcomeText/>
		</div>
		<div id="CreateWorkoutplan" class="w-[100%] h-[100%] bg-gray-500">Workoutplan</div>


		<div id="QRcode" class="w-[100%] h-[100%] bg-gray-800">QRcode</div>
		<div class="w-full h-[20vh] bg-black"><Impressum /></div>
	</div>
</div>