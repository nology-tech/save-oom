// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  orderBy,
  Timestamp
} from "firebase/firestore";

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

// Reference the firestore DB
export const db = getFirestore(app);

export const getUsers = async (db) => {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const userList = usersSnapshot.docs.map((doc) => doc.data());
  return userList;
}

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
}

/** 
 * Get all the rounds of a specific game for a given user, ordered by most recent first 

 @param {*} userId
*@returns a querySnap (document snapshot), returns a Promise.
*/

export const getGameRoundsForUser = async(id, game) => {
  const q = query(
    collection(db, "users", id, "rounds_played"),
    where("gameId", "==", game), 
    orderBy("roundTime", "desc")
  );
  const querySnap = await getDocs(q);
  return querySnap;
}

/** 
 * Get all the correct round of a specific game for a given user, ordered by most recent first 
@param {String} userId
@param {String} gameId
*@returns a promise with the query snapshot.
*/
export const getCorrectGameRoundsForUser = async(id, game) => {
  const q = query(
    collection(db, "users", id, "rounds_played"),
    where("gameId", "==", game), 
    where("correct", "==", true), 
    orderBy("roundTime", "desc")
  );
  const querySnap = await getDocs(q);
  return querySnap;
}

/** Get all the incorrect round of a specific game for a given user, ordered by most recent first 
@param {String} userId
@param {String} gameId
*@returns  a promise with the query snapshot.
*/
export const getIncorrectGameRoundsForUser = async(id, game) => {
  const q = query(
    collection(db, "users", id, "rounds_played"),
    where("gameId", "==", game), 
    where("correct", "==", false), 
    orderBy("roundTime", "desc")
  );
  const querySnap = await getDocs(q);
  return querySnap;
}

/** Function that returns an array of rounds 
@param {String} userId
@param {String} gameId
@param {Function} getGameRounds
*@returns returs a promise.
*/ 
export const getArrayOfRounds = async(id, game, getGameRounds) =>{
  const querySnap = await getGameRounds(id, game);
  const phonicsArr = querySnap.docs.map((doc) => {
    return doc.data().phonic;
  });
  return phonicsArr;
}

//   export async function startNewGame(userId, gameId, level) {
//     // get the user for the userId
//     // create a new game entry
//     // add start date, game id, level and so on
//     // save as new record.
//   }
/** Function that returns an array of rounds 
@param {String} id
@param {String} game
@param {Object} roundInfo
@param {String} answer
*@returns returs a promise.
*/ 

export const saveUserRound = async(id, game, gameStats, answer) => {
  const {isCorrect, score} = gameStats
  await addDoc(collection(db, "users", id, "rounds_played"),{
    correct: isCorrect, 
    gameId: game,
    phonic: answer, 
    roundTime: Timestamp.fromDate(new Date()).toDate(),
    score: score,
  })

}

export default getUsers;
