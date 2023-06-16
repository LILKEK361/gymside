<script lang="ts">

    import {onMount} from "svelte";

    let names = ["sus"];
    let workouts;


</script>

<div class="w-[100%] h-[100%]">

    <ul>
        {#each names as name}
            <li>{name}</li>
        {/each}
    </ul>

</div>