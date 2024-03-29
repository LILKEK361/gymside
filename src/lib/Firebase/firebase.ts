// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";

import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth"

import {getDatabase, onValue, ref, set} from "firebase/database"

import {writable} from "svelte/store";
import {goto} from "$app/navigation";
import 'firebase/firestore'

import {notifications} from "$lib/ui/Toast/notification";




const googleAuthProvider: GoogleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider: GithubAuthProvider = new GithubAuthProvider()




// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyA0ehcOq0l0BygmIO6OQO5pEZ6SPXZKulY",

    authDomain: "gymside-d76cd.firebaseapp.com",

    projectId: "gymside-d76cd",

    storageBucket: "gymside-d76cd.appspot.com",

    messagingSenderId: "323470218458",

    appId: "1:323470218458:web:d188880ebcb8b46ead01e3",

    measurementId: "G-JEGBSJGK1Q"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const authFb = getAuth(app);
export const db = getDatabase(app)

export const namesEx = writable([])
export const ownEx = writable({})


export async function signup(email: string, password: string) {
    await createUserWithEmailAndPassword(authFb, email, password)
        .then((userCredential) => {

            const user = userCredential.user;


            localStorage.setItem("userid", user.uid)
            createuser("new member")

            goto("userpage")
            return true;

        })
        .catch((error) => {
            const errorcode = error.code
            notifications.warning("Error: " + errorcode);
        })
    return true;
}

export async function login(email: string, password: string) {
    await signInWithEmailAndPassword(authFb, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;


            localStorage.setItem("userid", user.uid)

            goto("userpage")


        })
        .catch((error) => {
            const errorcode = error.code
            notifications.warning("Error: " + errorcode);
        })
    return false;

}


export async function createuser(name: string) {

    await changeusername(name)

}

export  function changeusername(newname: string) {
    const startref = ref(db, "user/" +  localStorage.getItem("userid") + "/name/")
     set(startref, newname).catch((error) => {
         const errorcode = error.code
         notifications.warning("Error: " + errorcode);
     })
}

export  function addnew(name: string, level: string, ausfuehrung: string, muscelgroup: string, ) {
    const startref = ref(db, "/user/" +  localStorage.getItem("userid") + "/ownEx/" + name)
    set(startref, {
        name: name, level: level, way: ausfuehrung, muscelgroup: muscelgroup
    }).catch((error) => {
        const errorcode = error.code
        notifications.warning("Error: " + errorcode);
    })
}


export async function getOwnEx() {
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownEx/")
    let data = {};

    onValue(startref, (snapshot) => {

       data = snapshot.val();

    })
    return data;
}

export function deleteEx(name: string) {
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownEx/" + name)
    set(startref, null).catch((error) => {
        const errorcode = error.code
        notifications.warning("Error: " + errorcode);
    })
}

 function  userexist(userid : string){
    const startRef = ref(db, "/user/")

      onValue(startRef, (snapshot : any) => {
         snapshot.forEach((child : any) => {if (child.key == userid) {
             return true;
         }})

    })



    return false
}

export async function loginWithGoogle() {

   await signInWithPopup(authFb, googleAuthProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem("userid", user.uid)
            const userexistvar =  userexist(user.uid)
            console.log(userexistvar)
            if(!userexistvar){
                createuser("new Member")
            }

            goto("userpage")
            return true;

        }).catch((error) => {
           const errorcode = error.code
           notifications.warning("Error: " + errorcode);
       });

}

export  async function loginWithGit(){
    await signInWithPopup(authFb, githubAuthProvider)
        .then((result) => {

            // The signed-in user info.
            const user = result.user

            
            localStorage.setItem("userid", user.uid)
            console.log(localStorage.getItem("userid"))
            createuser("new member")
            goto("userpage")
            return true;

        }).catch((error) => {
            const errorcode = error.code
            notifications.warning("Error: " + errorcode);
        });
}

export function createWorkout(name : string, uebungen : any, time : string){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownWorkouts/" + name)
    set(startref,{
        uebungen : uebungen,
        time : time}
    ).catch((error) => {
        const errorcode = error.code
        notifications.warning("Error: " + errorcode);
    })
}

export async function getWorkouts(){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownWorkouts/")
    let workoutsdata = {}
    let names : Array<string> = []

     onValue(startref, (snapshot) => {
        workoutsdata = snapshot.val()
        snapshot.forEach((child) => {

            names = [...names, child.key]

        })
    })
   return  {names : names, workouts : workoutsdata};
}



export function deleteWorkout(name : string, ){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownWorkouts/" + name)
    set(startref, null).catch((error) => {
        const errorcode = error.code
        notifications.warning("Error: " + errorcode);
    })}


function customSearch(name: string) {
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownEx")
    let des;
    onValue(startref, (snapshot) => {
        if(Object.keys(snapshot.val()).includes(name)){
            des = snapshot.val()[name].way
        }
    })
    return des
}

function readAllForDes(name: string) {
    const startref = ref(db, "/Alldata")
    let des;
    onValue(startref, (snapshot) => {
       des =  filterDataWithKey(snapshot, "description", name)
    })

    return des
}
export async  function readAllForLevel(name: string, workout : string) {
    const startref = ref(db, "/Alldata")

    let level
     onValue(startref, async (snapshot) => {
         level = await filterDataWithKey(snapshot, "level", name)

         if (level ) {
             localStorage.setItem(name + "Level", level)
         } else {


             const userRef = ref(db, "/user/" + localStorage.getItem("userid") + "/ownEx/")
             onValue(userRef, async (snapshot) => {

                 level = await filterUserDataWithKey(snapshot.val(), "level", name, workout)
                 if(level != "N/A"){
                     localStorage.setItem(name + "Level", level)
                 }else{
                     localStorage.setItem(name + "Level", "N/A")
                 }
             })


         }


     })


}

async function filterUserDataWithKey(snapshot : any, key : string, name : string, workout : string){
    let thing : string

    if(Object.keys(snapshot).includes(name)){
        thing = snapshot[name][key]
    }else{
        thing = "N/A"
    }

    return thing

}
async function filterDataWithKey(snapshot: any, key : string, name : string){

    let thing : any

    snapshot.val().arms.map((element: object) => {
        if (element.name === name) {

            thing = element[key]
        }
    })
    snapshot.val().back.map((element: object) => {
        if (element.name === name) {

            thing = element[key]

        }
    })
    snapshot.val().chest.map((element: object) => {
        if (element.name === name) {

            thing = element[key]
        }
    })
    snapshot.val().legs.map((element: object) => {
        if (element.name === name) {

            thing = element[key]

        }
    })

    return thing
}

export async function write(startref:  any , data: any) {


    await set(startref, data).catch((error) => {
        const errorcode = error.code
        notifications.warning("Error" + errorcode)
    })


}

export function checklimit(max : number, path : string){

    const startref = ref(db, path);
    let count = 0
    onValue(startref, (snapshot) => {
        snapshot.forEach((child) => {
            count = Object.entries(snapshot.val()).length
        })
    })

    if(count < max){
        return true
    }return false
}

export async function  getOwnData(name : string,){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownEx/" + name)
    let ownData : object

    onValue(startref, (snapshot) =>  {

        if(snapshot) {
            console.log(snapshot.val())
            ownData = snapshot.val()
        }else{
            ownData = {name : name, des : "N/A", level : "N/A", musclegroup : "N/A"}
        }
    })
    return ownData;
}