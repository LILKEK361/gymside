<script lang="ts">
    export let userid : string
</script>

<div class="w-[100%] h-[100%] ">
    <ul>
        <li class="text-center flex justify-center">
            <img src="src/lib/logo/PP.png" alt="pp" class="w-[50%] py-10 rounded-3xl"/>
        </li>
        <li class="text-center">
            {userid}
        </li>
    </ul>
</div>