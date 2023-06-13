// Import the functions you need from the SDKs you need

import { initializeApp,  } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

import {getDatabase, onValue, ref, set} from "firebase/database"

import useruidFB  from "../../routes/userpage/+page.svelte"

import {get, writable} from "svelte/store";
import {goto} from "$app/navigation";

// TODO: Add SDKs for Firebase products that you want to use

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




export async function signup(email : string, password : string){
    await createUserWithEmailAndPassword(authFb, email, password)
    .then((userCredential) => {

        const user = userCredential.user;

        createuser(user.uid, email)
        localStorage.setItem("userid", user.uid)


        goto("userpage")
        return true;

    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    return true;
}
export async function login(email : string, password : string){
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
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return true;

}


export function createuser(useruid : string, name : string){

    const startref = ref(db, "/user/" + localStorage.getItem("userid"))

    set(startref, {
            name : name,
            workouts : null,

        })


}

export function changeusername(newname : string ){
    const startref = ref(db, "/user/" + localStorage.getItem("userid"))
    set(startref, {name : newname})
}

export function addnew(name : string,level : string, ausführung : string, ){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownEx/" + name )
    set(startref, {
        name : name,
        level : level,
        way : ausführung,
    } )
}



export async function getOwnEx(){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownEx/")

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let names  = [];
    let ex = {}

    await onValue(startref, (snapshot) => {

        ex = snapshot.val()
        snapshot.forEach((child) => {

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            names = [...names, child.key]

        })
    })



    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await namesEx.set(names)
    await ownEx.set(ex)
    console.log(get(namesEx))

}


