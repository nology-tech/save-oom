// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqhYYEw7VG5s1mnwvwzQpNX94KC4GJQ0",
  authDomain: "save-oom.firebaseapp.com",
  projectId: "save-oom",
  storageBucket: "save-oom.appspot.com",
  messagingSenderId: "874113879773",
  appId: "1:874113879773:web:863830a75d85fe5b2ed534",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Reference the firestore DB
export const db = getFirestore(app);


export const getUsers = async (db) => {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const userList = usersSnapshot.docs.map((doc) => doc.data());
  return userList;
};

// gets a User document given a userId.
/**
 *
 * @param {*} userId
 * @returns a docSnap (document snapshot), to access use docSnap.data(), returns a Promise.
 */
export const getUserFromId = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  return docSnap;
};


export const createUser = async (userId, key, value) => {
  const docRef = doc(db, 'users', userId);
   await setDoc(docRef, {
   key: value
  })
};