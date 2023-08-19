<script lang="ts">

    import ExCard from "$lib/ui/userpageui/ExCard.svelte";
    import {onMount} from "svelte";
    import {getOwnEx} from "$lib/Firebase/firebase";



    let entries = {}
    let entrieskey : Array<string>
    let temp : Array<Array<string>>
    onMount(  async () =>{
        await setup
    })

    async function setup(){
        entries =  await getOwnEx()
        entrieskey = Object.keys(entries)



        if (entrieskey){
            for(let i = 0; i < (entrieskey.length + 1); i += 4){

                temp.push(entrieskey.slice(i,i+4))

            }
        }else{
            console.log(entrieskey)
        }


        return temp
    }

</script>


    <div class="w-[100%] h-[30%]  ">

            <div >{"adadasddasadsasdda"}</div>

            {#if temp}
                <div>{temp.length}</div>
                <p>sgfjfjkmposjkmfsjkf</p>
            {/if}


    </div>
