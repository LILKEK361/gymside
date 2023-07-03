<script lang="ts">

    import {deleteWorkout} from "$lib/Firebase/firebase";
    import ExerciseText from "$lib/ui/userpageui/ExerciseText.svelte";
    import {onMount} from "svelte";



    export let name: string
    export let uebunegen: any
    //export let img : any
    export let time: any

    export let getdata : any


    export  function getDes(nameUe : string){
        let data : any =  localStorage.getItem("AllDataPre")
        data =  JSON.parse(data)


        if(Object.keys(data).includes(nameUe)){
            return data[nameUe]
        }

        return "des"
    }


    //dataForEx={data[uebuneg]}
</script>


    <div class="card">
        <div class="front text-3xl text-center">{"Workout: " + name}</div>
        <div class="card__content">
            <div class="flex">
                <div class="card__title">{name}</div>
                <button on:click={() => {deleteWorkout(name);getdata()}} class="btn btn-danger">Delete</button>
            </div>
            <p>{time}</p>
            <ul class="card__description overflow-y-scroll">
                {#each uebunegen as uebuneg}
                    <ExerciseText dataForEx={getDes(uebuneg)}  name={uebuneg}></ExerciseText>

                {/each}
            </ul>
        </div>
    </div>


<style>
    .card {
        position: relative;
        width: 30vw;
        height: 40vh;
        background-color: #1c1721;

        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        box-shadow: 0 0 0 5px #ffffff80;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .front {

        fill: #350;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }

    .card__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        background-color: #1c1730;
        transform: rotateX(-90deg);
        transform-origin: bottom;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover .card__content {
        transform: rotateX(0deg);
    }

    .card__title {
        margin: 0;
        font-size: 24px;
        color: #333;
        font-weight: 700;
    }



    .card__description {
        margin: 10px 0 0;
        font-size: 14px;
        color: #777;
        line-height: 1.4;
        overflow-y: scroll ;
    }

</style>