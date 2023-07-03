import {getWorkouts} from "$lib/Firebase/firebase";
import {json} from "@sveltejs/kit";


export async function setAllData(){

        let all : any
        fetch("src/lib/Workoutdata/Alldata.json")
            .then(response => response.json()

            )
            .then( async (data) => {
                all = [
                    ...data.legs.map((element : any) => {return {[element.name]: element.description}}),
                    ...data.back.map((element : any) => {return {[element.name]: element.description}}),
                    ...data.chest.map((element : any) => {return {[element.name]: element.description}}),
                    ...data.arms.map((element : any) => {return {[element.name]: element.description}})
                ]
                localStorage.setItem("AllDataPre", JSON.stringify(all));

            })



}

function lableData(data : any){
    let uebungsdata : []
    JSON.stringify(data)

}