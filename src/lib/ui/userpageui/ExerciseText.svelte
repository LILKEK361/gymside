<script lang="ts">

    import {onMount} from "svelte";



    export let setContent : any

    export let name : string;

    export let dataForEx : string

    export let level : string





</script>

<li  >
        <div
        class="text-xl flex"
        on:mouseenter={setContent(name, dataForEx, level)}
        on:mouseleave={() => {" "}}

        >{name}

        </div>

</li>