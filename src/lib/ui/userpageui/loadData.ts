import {customExFB, getOwnEx, getWorkouts, write} from "$lib/Firebase/firebase";
import {json} from "@sveltejs/kit";
import {element} from "svelte/internal";


export async function setAllData(){
    //Needs rework myabe in fb
    const allDes : Map<string, string> = new Map<string, string>()
    const allLevels : Map<string, string> = new Map<string, string>()
    const customEx : object = customExFB()


    fetch("src/lib/Workoutdata/Alldata.json")

        .then(response => response.json()

            )
            .then( async (data) => {
                write("/Alldata", data)
            })

}

function lableData(data : any){
    let uebungsdata : []
    JSON.stringify(data)

}



