<script lang="ts">


    import {onMount} from "svelte";

    import UebungCard from "$lib/ui/UebungCard.svelte";
    import {getOwnEx} from "$lib/Firebase/firebase";
    import UebungsCardRow from "$lib/ui/userpageui/UebungsCardRow.svelte";
    let data : object;






</script>


    <div class="w-[100%] h-[100%] bg-green-700 overflow-x-hidden flex justify-center items-center">
        <UebungsCardRow  />
    </div>


