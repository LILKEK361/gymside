<script lang="ts">

    export let exercisename;
    export let Muskelgroup;
    export let doing;

    export let level


</script>




<div class="card  w-[20vw] bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
        <img src="src/lib/logo/OnlyLogo.png" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body ">
        <h2 class="card-title">Exercise: {exercisename}</h2>
        <p>Level: {level}</p>
        <p>Muscle group: {Muskelgroup}</p>
        <p>Execution: {doing}</p>

    </div>
</div>