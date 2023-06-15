<script lang="ts">
    import {addnew} from "$lib/Firebase/firebase";

    let name
    let level
    let way
    let muscel

    function check() {
        console.log(name.value)
        if (name.value === "" || level.value === "" || way.value === "" || muscel.value === "") {

            alert("Pls fill every input")
        } else {
            addnew(name.value, level.value, way.value, muscel.value)
            level.value = ""
            name.value = ""
            way.value = ""
            muscel.value = ""
        }
    }

    function handlekeydown(e : KeyboardEvent){
        console.log(e.key)
        if(e.key == "Enter"){
            check()
        }
    }

</script>
<svelte:head >
    <link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>

<div class="h-[100%] w-[100%] flex justify-center items-center" >
    <div style="padding: 5vw;
                border-radius: 30px;
                background: #212121;
                box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
                display: flex;
                justify-content: center;
                align-items: center;
                ">
        <ul on:keydown={handlekeydown}>
            <li><h1 class="text-center font-bold text-2xl">Add a new exercise</h1></li>
            <li>
               <input bind:this={name} class="my-10" placeholder="Name" type="text">
            </li>
            <li>
                <input bind:this={level} class="my-10" placeholder="Level" type="text">
            </li>
            <li>
                <input bind:this={way} class="my-10" placeholder="execution" type="text">
            </li>
            <li>
                <input bind:this={muscel} class="my-10 text-black" placeholder="muscelgroup" type="text">
            </li>
            <li class="flex justify-center mb-5">
                <button class="btn" on:click={check}>Add new</button>
            </li>
        </ul>





    </div>

</div>
