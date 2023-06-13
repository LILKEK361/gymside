<script lang="ts">
    import {addnew} from "$lib/Firebase/firebase";

    let name
    let level
    let way
    let muscel
    function check(){
        console.log(name.value)
        if(name.value === "" || level.value === "" || way.value === "" || muscel.value === ""){

            alert("Pls fill every input")
        }else{
            addnew(name.value, level.value, way.value, muscel.value)
            level.value = ""
            name.value = ""
            way.value = ""
            muscel.value = ""
        }
    }
</script>



<div class="h-[100%] w-[100%] flex justify-center items-center">
    <div class="w-[50%] h-[10%] bg-black   text-black">

               <input bind:this={name} type="text" class="mr-10" placeholder="Name" >
               <input bind:this={level} type="text" class="mr-10"  placeholder="Level">
               <input bind:this={way} type="text" class="mr-10" placeholder="execution">
               <input bind:this={muscel} type="text" class="mr-10 text-black" placeholder="muscelgroup" >

           <li><button on:click={check} class="btn">Add new</button></li>



    </div>

</div>
