<script lang="ts">
    import {addnew} from "$lib/Firebase/firebase";

    let name
    let level
    let way
    function check(){
        console.log(name.value)
        if(name.value === "" || level.value === "" || way.value === ""){
            console.log(name.value)
            alert("Pls fill every input")
        }else{
            addnew(name.value, level.value, way.value)
            level.value = ""
            name.value = ""
            way.value = ""
        }
    }
</script>



<div class="h-[100%] w-[100%] flex justify-center items-center">
    <div class="w-[50%] h-[10%] bg-black flex justify-center items-center">
        <input bind:this={name} type="text" class="mr-10" >
        <input bind:this={level} type="text" class="mr-10" >
        <input bind:this={way} type="text" class="mr-10" >
        <button on:click={check} class="btn">Add new</button>
    </div>

</div>
