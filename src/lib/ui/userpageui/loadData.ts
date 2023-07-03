import {getWorkouts} from "$lib/Firebase/firebase";
import {json} from "@sveltejs/kit";


export async function setAllData(){

        let all : object
        fetch("src/lib/Workoutdata/Alldata.json")
            .then(response => response.json()

            )
            .then( async (data) => {



                    data.legs.map((element: object) => {
                        return {name: element.name, description: element.description}
                        console.log()
                    })
                    data.back.map((element: any) => {
                        return {name: element.name, description: element.description}
                    })
                    data.chest.map((element: any) => {
                        return {name: element.name, description: element.description}
                    })
                    data.arms.map((element: any) => {
                        return {name: element.name, description: element.description}
                    })
             
                console.log(all)
                localStorage.setItem("AllDataPre", JSON.stringify(all));

            })



}

function lableData(data : any){
    let uebungsdata : []
    JSON.stringify(data)

}



