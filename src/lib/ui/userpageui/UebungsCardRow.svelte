<script lang="ts">


    import {deleteEx} from "$lib/Firebase/firebase";
    import {notifications} from "$lib/ui/Toast/notification";

    export let chunck : Array<Array<string>> = [[""]]

    export let setup
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


    <div class="w-[100%] h-[30%] flex justify-center items-center  ">


        {#each chunck as s}
            <div class="card">
                <ul>
                    <li>{s}</li>
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
        background: #e0e0e0;
        box-shadow: 15px 15px 30px #bebebe,
        -15px -15px 30px #ffffff;
    }
</style>