<script lang="ts">

    import ExCard from "$lib/ui/userpageui/ExCard.svelte";

    export let chunck : Array<Array<string>> = [[""]]

</script>


    <div class="w-[100%] h-[30%] flex justify-center items-center  ">


        {#each chunck as s}
            <ExCard name={s}></ExCard>
        {/each}

    </div>
