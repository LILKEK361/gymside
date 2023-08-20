<script lang="ts">


    import {deleteEx, getDesFromName, getOwnData} from "$lib/Firebase/firebase";
    import {notifications} from "$lib/ui/Toast/notification";
    import {onMount} from "svelte";

    export let chunck : Array<Array<string>> = [[""]]
     let data : Array<object> = [{}]


    export let setup
    onMount(async () => {
        chunck.map( async (element : any) => {
            data[element] = await getOwnData(element)
        })
    })
    function destroy(name : string){
        console.log(name && setup)
        if(name && setup){
            deleteEx(name)
            setup()
            notifications.success("Db updated", 2000)
        }else{
            notifications.danger("Error on delete ", 2000)
        }
    }


</script>


    <div class="w-[100%] h-[30%] flex justify-center items-center mt-4 overflow-hidden  ">


        {#each chunck as s}
            <div class="card">
                <ul>
                    <li class="text-2xl w-full text-center">{"Name: " + s}</li>
                    <li class="text-xl w-full text-center">{"Level: " + s}</li>
                    <li class="text-xl w-full text-center">{"Muscelgroup: " + s }</li>
                    <li class="text-xl w-full text-center">{"Des: " + getDesFromName(s)}</li>
                    <li><button class="button-base-styles bg-gray-200" on:click={destroy(s)}>Delete</button></li>
                </ul>


            </div>
        {/each}

    </div>
<style>
    .card {
        margin: 1.5vw;
        width: 190px;
        height: 254px;
        border-radius: 30px;


    }
</style>