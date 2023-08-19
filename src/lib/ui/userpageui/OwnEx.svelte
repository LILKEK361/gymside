<script lang="ts">



    import UebungsCardRow from "$lib/ui/userpageui/UebungsCardRow.svelte";

    import {onMount} from "svelte";
    import {getOwnEx} from "$lib/Firebase/firebase";
    import Toast from "$lib/ui/Toast/Toast.svelte";





    let entries = {}
    let entrieskey : Array<string>

    let chunks : Array<Array<string>> = [[""]]

    onMount(  async () =>{
       await setup()
    })

    const setup =  async () => {
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

        chunks = tempData
    }





</script>


    <div class="w-full h-full flex justify-center items-center bg-gray-800">
        <div class="w-[90%] h-[90%]  ">
            {#each chunks as row}
                <UebungsCardRow chunck={row} setup={(setup)} />
            {/each}
    </div>

</div>

<Toast />

