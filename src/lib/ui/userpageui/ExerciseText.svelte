<script lang="ts">

    import {onMount} from "svelte";



    export let setContent : any

    export let name : string;

    export let dataForEx : string





</script>

<li  >
        <div
        class="text-xl flex"
        on:mouseenter={setContent(name, dataForEx)}
        on:mouseleave={() => {""}}

        >{name}

        </div>

</li>