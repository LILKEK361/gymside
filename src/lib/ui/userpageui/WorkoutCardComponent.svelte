<script lang="ts">
    import {deleteWorkout} from "$lib/Firebase/firebase";



    export let name : string
    export let uebunegen : any
    //export let img : any
    export let time : any



</script>

<div class="w-[25vw] h-[30vh]  bg-blue-950 m-4">
    <ul>

        <li>{time}</li>
        <li>{name}</li>
        {#each uebunegen as uebuneg}
            <li>{uebuneg}</li>
        {/each}
        <li><button on:click={deleteWorkout(name)}>Delete Workout</button></li>
    </ul>
</div>