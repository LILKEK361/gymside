<script lang="ts">

   export let title : string = ""
   export let des : string = ""
   export let level : string = ""


</script>





<div class="w-[100%] h-[100%] flex justify-center items-center ">
    <div class="w-[60%] h-[75%]" style="padding: 5vw;
                border-radius: 30px;
                background: #212121;
                box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
                display: flex;
                justify-content: center;
                align-items: center;
                ">

        <ul>
            <li class="text-2xl">{title}</li>
            <li >{des}</li>
            <li>{level}</li>
        </ul>


    </div>
</div>