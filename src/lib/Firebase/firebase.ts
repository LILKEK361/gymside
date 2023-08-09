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
            return true;
            // ...
        })
        .catch((error) => {
            const errorcode = error.code
            notifications.warning("Error: " + errorcode);
        })
    return true;

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
    localStorage.setItem("namesEx", "")
    localStorage.setItem("ownEx", "")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let names = [];
    let ex = {}

    await onValue(startref, (snapshot) => {

        ex = snapshot.val()

        snapshot.forEach((child) => {

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            names = [...names, child.key]

        })
        if (ex && names) {
            localStorage.setItem("namesEx", names)
            localStorage.setItem("ownEx", JSON.stringify(ex))
        } else {
            localStorage.setItem("namesEx", "")
            localStorage.setItem("ownEx", JSON.stringify(""))
        }
    })

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



export function deleteWorkout(name : string){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownWorkouts/" + name)
    set(startref, null).catch((error) => {
        const errorcode = error.code
        notifications.warning("Error: " + errorcode);
    })
}

export  function customExFB(){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownEx/")
    let customEX = {}
    onValue(startref,  async (snapshot) => {
       customEX = snapshot.val()
    })
    return customEX

}


export function getDesFromName(name : string ){
    const checkData = readAllForName(name)

    if (checkData) {
        return checkData
    } else {
        const checkUserEx = customSearch(name)
        if (checkUserEx) {
            return checkUserEx
        }
    }

    return "Error: Exercise isn't in DB"
}

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

function readAllForName(name: string) {
    const startref = ref(db, "/Alldata")
    let des;
    onValue(startref, (snapshot) => {
        snapshot.val().arms.map((element: object) => {
            if (element.name === name) {

                des = element.description
            }
        })
        snapshot.val().back.map((element: object) => {
            if (element.name === name) {

                des = element.description
            }
        })
        snapshot.val().chest.map((element: object) => {
            if (element.name === name) {

                des = element.description
            }
        })
        snapshot.val().legs.map((element: object) => {
            if (element.name === name) {

                des = element.description
            }
        })
    })

    return des
}


export async function write(path: string, data: any) {
    const startref = ref(db, path)

    await set(startref, data).catch((error) => {
        const errorcode = error.code
        notifications.warning("Error" + errorcode)
    })


}