<script>
import {t}from "/src/lib/Firebase/firebase.ts"
</script>
<div class="w-[100%] h-[100%] bg-gray-950 flex overflow-hidden">
    <img src="src/lib/logo/OnlyLogo.png"  alt="Logo" class="rounded-full" />
    <div class=" flex items-center text-3xl text-red-700 ">Gym Manager</div>
    <div class="w-full flex justify-end items-center "><button class="btn" onclick="LoginSignup.showModal()">
        {"Login"}
    </button>
        <dialog id="LoginSignup" class="modal">
            <form method="dialog" class="modal-box text-center">
                <h3 class="font-bold text-lg ">Login / Sign Up</h3>
                <p>Google</p>
                <p>GitHub</p>

                <p class="py-4">Press ESC key or click outside to close</p>
            </form>
            <form method="dialog" class="modal-backdrop">
                <button>cancel</button>
            </form>
        </dialog>
    </div>



</div>