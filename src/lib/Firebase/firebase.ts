// Import the functions you need from the SDKs you need

import { initializeApp,  } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

import {getDatabase, ref, set} from "firebase/database"

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

export const userid = writable()

export async function signup(email : string, password : string){
    await createUserWithEmailAndPassword(authFb, email, password)
    .then((userCredential) => {

        const user = userCredential.user;

        createuser(user.uid, "No Name")
        userid.set(user.uid)
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

            userid.set(user.uid)
            console.log(get(userid))
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

    const startref = ref(db, "/user/" + useruid)

    set(startref, {
            name : name,
            workouts : null,

        })


}








