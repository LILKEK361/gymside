<script lang="ts">

    import {onMount} from "svelte";
    import * as trace_events from "trace_events";

    export let dataForEx : any

    export let name : any;

    let hidden = true


    function show() {
      hidden = !hidden

    }
    function check(status : boolean){
        if(status){
            return "hidden"
        }

        return "text-2xl"
    }




</script>
<li  ><p
        class="text-xl"
        on:mouseenter={() =>{hidden = false}}
        on:mouseleave={() => {hidden = true}}
        on:click={() => {show()}}
        >{name}</p>
    <p class={check(hidden)}>{dataForEx}</p>
</li>