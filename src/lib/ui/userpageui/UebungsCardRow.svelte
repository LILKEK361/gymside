<script lang="ts">

    import UebungCard from "$lib/ui/UebungCard.svelte";
    import {onMount} from "svelte";
    import {getOwnEx} from "$lib/Firebase/firebase";



    let entries = {}
    let entrieskey : Array<string>
    let temp = []
    onMount( async () =>{
        entries =  await getOwnEx()
        entrieskey = Object.keys(entries)

        console.log(entrieskey)

        if (entrieskey){
            for(let i = 0; i < entrieskey.length; i+=4){
                temp = [...temp, [entrieskey.splice(i,i+4)]]
            }
        }else{
            console.log(entrieskey)
        }

        console.log(temp)

    })
</script>


    <div class="w-[100%] h-[30%] flex-warp">
        <div class="card-container">
            <!---{#each entrieskey as entry, i (i % 4 === 0)}
                <div class="card-row">
                    {#each entry.slice(i, i + 4) as card}
                        <UebungCard
                                exercisename={name}
                        />
                    {/each}
                </div>
            {/each} --->
        </div>
    </div>
