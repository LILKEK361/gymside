import {getWorkouts} from "$lib/Firebase/firebase";
import {json} from "@sveltejs/kit";
import {element} from "svelte/internal";


export async function setAllData(){
         const all : Map<string, string> = new Map<string, string>()

        fetch("src/lib/Workoutdata/Alldata.json")
            .then(response => response.json()

            )
            .then( async (data) => {


               await data.legs.map((element : any) => {
                    all.set(element.name, element.description)
                })
                await data.back.map((element : any) => {
                    all.set(element.name, element.description)
                })
                await data.arms.map((element : any) => {
                    all.set(element.name, element.description)
                })
                await data.chest.map((element : any) => {
                    all.set(element.name, element.description)
                })

             
                console.log(all)
                const clone  = Object.fromEntries(all)
                localStorage.setItem("AllDataPre", JSON.stringify(clone));

            })



}

function lableData(data : any){
    let uebungsdata : []
    JSON.stringify(data)

}



