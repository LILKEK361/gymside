<script lang="ts">

    import {onMount} from "svelte";
    import * as trace_events from "trace_events";

    export let setContent : any

    export let name : string;

    export let dataForEx : string





</script>
<li  ><div
        class="text-xl flex"
        on:mouseenter={setContent(name, dataForEx)}
        on:mouseleave={() => {""}}
        on:click={() => {""}}
        >{name}

</li>