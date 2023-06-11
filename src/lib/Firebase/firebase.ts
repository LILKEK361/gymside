// Import the functions you need from the SDKs you need

import { initializeApp,  } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

import {getDatabase, ref, set} from "firebase/database"

import { getAnalytics } from "firebase/analytics";
import {writable} from "svelte/store";

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
const db = getDatabase(app)

export const userid = writable("")

export async function signup(email : string, password : string){
    await createUserWithEmailAndPassword(authFb, email, password)
    .then((userCredential) => {

        const user = userCredential.user;

        createuser(user.uid, "No Name")
        userid.set(user.uid)
        return userid;

    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    return userid;
}
export async function login(email : string, password : string){
    await signInWithEmailAndPassword(authFb, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid)
            userid.set(user.uid)
            return userid;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return userid;

}

export function createuser(useruid : string, name : string){

    const startref = ref(db, "/user/")

    set(startref, {[useruid] : {
            name : name,
            workouts : null,

        }})


}








