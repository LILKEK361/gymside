<script lang="ts">



    import UebungsCardRow from "$lib/ui/userpageui/UebungsCardRow.svelte";

    import {onMount} from "svelte";
    import {getOwnEx} from "$lib/Firebase/firebase";
    import Toast from "$lib/ui/Toast/Toast.svelte";
    import {Writable, writable} from "svelte/store";




    let entries = {}
    let entrieskey : Array<string>
    let temp : Array<Array<string>>
    export let chunks : Writable<Array<Array<string>>> = writable()
    onMount(  async () =>{
        let tem = await setup()
        chunks.set(tem )
    })

    export async function setup(){
        entries =  await getOwnEx()
        entrieskey = Object.keys(entries)
        let tempData : Array<Array<string>> = [[""]]
        tempData.splice(0,1)



        if (entrieskey){
            for(let i = 0; i < (entrieskey.length + 1); i += 4){

                tempData.push(entrieskey.slice(i,i+4))

            }
        }else{
            console.log(entrieskey)
        }
        console.log(tempData)

        return tempData
    }





</script>


    <div class="w-full h-full flex justify-center items-center bg-gray-800">
        <div class="w-[90%] h-[90%]  ">
            {#each chunks as row}
            <UebungsCardRow chunck={row} setup={setup} />
        {/each}
    </div>

</div>

<Toast />

