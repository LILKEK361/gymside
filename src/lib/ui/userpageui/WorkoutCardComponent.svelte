<script lang="ts">
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
    </ul>
</div>