<script lang="ts">

    import {deleteWorkout} from "$lib/Firebase/firebase";
    import ExerciseText from "$lib/ui/userpageui/ExerciseText.svelte";
    import {onMount} from "svelte";

    export let name: string
    export let uebunegen: any
    //export let img : any
    export let time: any

    export let getdata : any

    let alldata : any
    let allnames : any

    onMount( async () => {

        await fetch("src/lib/Workoutdata/Alldata.json")
            .then(response => response.json()

            )
            .then((data) =>

        {

             allnames = { legs : data.legs.map((item) =>{ return item.name}),
                back : data.back.map((item) =>{ return item.name}),
                arm : data.back.map((item) =>{ return item.name}) ,
                chest : data.chest.map((item) =>{ return item.name})}

            alldata = data
            console.log(alldata)
        })

    })

    function checkName(name : string){
        if(allnames.legs.includes(name)){
            return alldata.legs.map((item) => {if (item.name === name){
                console.log(item.description)
                return item.description
            }})
        }else if(alldata.back.includes(name)){
            return alldata.back.map((item) => {if (item.name === name){
                console.log(item.description)
                return item.description
            }})
        }else if(alldata.chest.includes(name)){
            return alldata.chest.map((item) => {if (item.name === name){
                console.log(item.description)
                return item.description
            }})
        }else if(alldata.arms.includes(name)){
            return alldata.arms.map((item) => {if (item.name === name){

                console.log(item.description)
                return item.description
            }})
        }
        return "Sus"

    }



</script>

{#if alldata}
    <div class="card">
        <div class="front text-3xl text-center">{"Workout: " + name}</div>
        <div class="card__content">
            <div class="flex">
                <div class="card__title">{name}</div>
                <button on:click={() => {deleteWorkout(name);getdata()}} class="btn btn-danger">Delete</button>
            </div>
            <ul class="card__description">
                {#each uebunegen as uebuneg}
                    <ExerciseText dataForEx={checkName(uebuneg)} name={uebuneg}></ExerciseText>

                {/each}
            </ul>
        </div>
    </div>
    {:else }
    <p>Loading</p>
{/if}

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
    }

</style>