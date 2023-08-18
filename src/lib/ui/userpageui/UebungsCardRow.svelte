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

        console.log("F" + entrieskey)

        if (entrieskey){
            for(let i = 0; i < (entrieskey.length + 1); i += 4){
                console.log( entrieskey )
                temp.push(entrieskey.slice(i,i+4))

            }
        }else{
            console.log(entrieskey)
        }

        console.log(temp)

    })

</script>


    <div class="w-[100%] h-[30%]  ">

            <div >{"adadasddasadsasdda"}</div>
            {#if temp}
                {#each temp as row}
                    {#each row as single}
                        <p>{single}</p>
                        {/each}
                {/each}
                {:else }
                <p>sgfjfjkmposjkmfsjkf</p>
                {/if}

    </div>
