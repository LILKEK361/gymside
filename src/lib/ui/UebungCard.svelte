<script lang="ts">

    import {deleteEx} from "$lib/Firebase/firebase";

    export let exercisename : string;





</script>




<div class="card  w-[20vw] bg-base-100 shadow-xl overflow-hidden" >
    <figure class="px-10 pt-10">
        <img src="src/lib/logo/OnlyLogo.png" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body ">
        <h2 class="card-title">Exercise: {exercisename}</h2>

        <button class="btn" on:click={deleteEx(exercisename)}>Delete</button>
    </div>
</div>