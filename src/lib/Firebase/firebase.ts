// Import the functions you need from the SDKs you need

import {initializeApp,} from "firebase/app";

import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,GithubAuthProvider
} from "firebase/auth"

import {getDatabase, onValue, ref, set} from "firebase/database"

import {writable} from "svelte/store";
import {goto} from "$app/navigation";
import 'firebase/firestore'

import 'firebase/auth';






const googleAuthProvider: GoogleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider: GithubAuthProvider = new GithubAuthProvider()


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
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
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
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return true;

}


export async function createuser(name: string) {

    await changeusername(name)

}

export async function changeusername(newname: string) {
    const startref = ref(db, "user/" + await localStorage.getItem("userid") + "/name/")
    await set(startref, newname)
}

export async function addnew(name: string, level: string, ausfuehrung: string, muscelgroup: string) {
    const startref = ref(db, "/user/" + await localStorage.getItem("userid") + "/ownEx/" + name)
    set(startref, {
        name: name, level: level, way: ausfuehrung, muscelgroup: muscelgroup
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
    })
}

async function userexist(userid : string){
    const startRef = ref(db, "/user/")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore


    await onValue(startRef, (snapshot) => {
         console.log(snapshot.val())

    })



    return false
}

export async function loginWithGoogle() {

   await signInWithPopup(authFb, googleAuthProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem("userid", user.uid)
            if( await userexist(user.uid) === true)

            goto("userpage")
            return true;

        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

    });

}

export  async function loginWithGit(){
    await signInWithPopup(authFb, githubAuthProvider)
        .then((result) => {

            // The signed-in user info.
            const user = result.user;
            localStorage.setItem("userid", user.uid)
            console.log(localStorage.getItem("userid"))
            createuser("new member")
            goto("userpage")
            return true;

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

        });
}

export function createWorkout(name : string, uebungen : any){
    const startref = ref(db, "/user/" + localStorage.getItem("userid") + "/ownWorkouts/" + name)
    set(startref,
        uebungen
    )
}