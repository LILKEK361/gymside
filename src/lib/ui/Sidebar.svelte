<script lang="ts">
    export let userid: string
    export let changepage
</script>

<div class="w-[100%] h-[100%] ">
    <ul>
        <li class="text-center flex justify-center">
            <img src="src/lib/logo/PP.png" alt="pp" class="w-[50%] rounded-3xl my-10 "/>
        </li>
        <li class="text-center">
            {userid}
        </li>
        <li class="hover:bg-[#212B36] text-center my-5 text-xl hover:rounded-l-xl">
            <p class="py-2" on:click={changepage(0)}>Manage Workoutplans</p>
        </li>
        <li class="hover:bg-[#212B36] text-center my-5  text-xl hover:rounded-l-xl">
            <p class="py-2" on:click={changepage(1)}>Create new </p>
        </li>
        <li class="hover:bg-[#212B36] text-center my-5  text-xl hover:rounded-l-xl">
            <p class="py-2" on:click={changepage(2)}>Placeholder</p>
        </li>
        <li class="hover:bg-[#212B36] text-center my-5  text-xl hover:rounded-l-xl">
            <p class="py-2" on:click={changepage(2)}>Placeholder</p>
        </li>
        <li class="hover:bg-[#212B36] text-center my-5  text-xl hover:rounded-l-xl">
            <p class="py-2" on:click={changepage(2)}>Placeholder</p>
        </li>

    </ul>
</div>