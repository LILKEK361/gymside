<script lang="ts">
    import {addnew, checklimit} from "$lib/Firebase/firebase";
    import {notifications} from '../Toast/notification'
    import Toast from '../Toast/Toast.svelte'

    let name
    let level
    let way
    let muscel

    function check() {

        if (name.value === "" || level.value === "" || way.value === "" || muscel.value === "" ) {

            notifications.danger("Pls fill every input", 800)
        } else {

            if (checklimit(40, "/user/" + localStorage.getItem("userid") + "/ownEx/")) {
                addnew(name.value, level.value, way.value, muscel.value)
                notifications.success("Added to DB", 800)
                level.value = ""
                name.value = ""
                way.value = ""
                muscel.value = ""
            } else {
                notifications.danger("You can only have 40 exercise ", 2000)
            }
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
//Limit Uebungen to 40
//Make secrutity
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
               <input bind:this={name} class="my-10 text-black" placeholder="Name" type="text">
            </li>

            <li>
                <input bind:this={level} class="my-10 text-black" placeholder="Level" type="text">
            </li>
            <li>
                <input bind:this={way} class="my-10 text-black" placeholder="execution" type="text">
            </li>
            <li>
                <input bind:this={muscel} class="my-10 text-black" placeholder="muscelgroup" type="text">
            </li>
            <li class="flex justify-center mb-5">
                <button class="btn" on:click={check}>Add new</button>
            </li>
        </ul>
    </div>
    <Toast />




</div>
