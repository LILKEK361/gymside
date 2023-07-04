import {customExFB, getOwnEx, getWorkouts} from "$lib/Firebase/firebase";
import {json} from "@sveltejs/kit";
import {element} from "svelte/internal";


export async function setAllData(){
    const allDes : Map<string, string> = new Map<string, string>()
    const allLevels : Map<string, string> = new Map<string, string>()
    const customEx : object = customExFB()


    fetch("src/lib/Workoutdata/Alldata.json")
            .then(response => response.json()

            )
            .then( async (data) => {


               await data.legs.map((element : any) => {
                    allDes.set(element.name, element.description)
                })
                await data.back.map((element : any) => {
                    allDes.set(element.name, element.description)
                })
                await data.arms.map((element : any) => {
                    allDes.set(element.name, element.description)
                })
                await data.chest.map((element : any) => {
                    allDes.set(element.name, element.description)
                })

                await data.legs.map((element : any) => {
                    allLevels.set(element.name, element.level)
                })
                await data.back.map((element : any) => {
                    allLevels.set(element.name, element.level)
                })
                await data.arms.map((element : any) => {
                    allLevels.set(element.name, element.level)
                })
                await data.chest.map((element : any) => {
                    allLevels.set(element.name, element.level)
                })

                Object.keys(customEx).map((element : any) => {
                    allDes.set(customEx[element].name, customEx[element].description)
                    allLevels.set(customEx[element].name, customEx[element].level)

                })

             
                })

    const cloneDes  = Object.fromEntries(allDes)
    localStorage.setItem("AllDataPre", JSON.stringify(cloneDes));
    const cloneLevels  = Object.fromEntries(allLevels)
    localStorage.setItem("AllDataLevel", JSON.stringify(cloneLevels));

}

function lableData(data : any){
    let uebungsdata : []
    JSON.stringify(data)

}



