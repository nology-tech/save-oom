import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";


/**
 * Gets a user object using the userId.
 * @param {*} userId 
 * @returns 
 */
export const getUserById = async( userId ) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc( docRef );
  return docSnap;
}

/** 
 * Get all the rounds of a specific game for a given user, ordered by most recent first 
 @param {*} userId
*@returns a querySnap (document snapshot), returns a Promise.
*/

export const getGameRoundsForUser = async (id, game) => {
  const q = query(
    collection(db, "users", id, "rounds_played"),
    where("gameId", "==", game),
    orderBy("roundTime", "desc")
  );
  const querySnap = await getDocs(q);
  return querySnap;
};

/** 
   * Get all the correct round of a specific game for a given user, ordered by most recent first 
  @param {String} userId
  @param {String} gameId
  *@returns a promise with the query snapshot.
  */
export const getCorrectGameRoundsForUser = async (id, game) => {
  const q = query(
    collection(db, "users", id, "rounds_played"),
    where("gameId", "==", game),
    where("correct", "==", true),
    orderBy("roundTime", "desc")
  );
  const querySnap = await getDocs(q);
  return querySnap;
};

/** Get all the incorrect round of a specific game for a given user, ordered by most recent first 
  @param {String} userId
  @param {String} gameId
  *@returns  a promise with the query snapshot.
  */
export const getIncorrectGameRoundsForUser = async (id, game) => {
  const q = query(
    collection(db, "users", id, "rounds_played"),
    where("gameId", "==", game),
    where("correct", "==", false),
    orderBy("roundTime", "desc")
  );
  const querySnap = await getDocs(q);
  return querySnap;
};

/** Function that returns an array of rounds 
  @param {String} userId
  @param {String} gameId
  @param {Function} getGameRounds
  *@returns returns a promise.
  */
export const getArrayOfRounds = async (id, game, getGameRounds) => {
  const querySnap = await getGameRounds(id, game);
  const phonicsArr = querySnap.docs.map((doc) => {
    return doc.data().phonic;
  });
  return phonicsArr;
};

/** Function that returns an array of rounds 
  @param {String} id
  @param {String} game
  @param {Object} roundInfo
  @param {String} answer
  *@returns returs a promise.
  */
export const saveUserRound = async (id, game, level, gameStats, answer) => {
  const { isCorrect, score } = gameStats;
  await addDoc(collection(db, "users", id, "rounds_played"), {
    correct: isCorrect,
    gameId: game,
    phonic: answer,
    level: level,
    roundTime: Timestamp.fromDate(new Date()).toDate(),
    score: score,
  });
};
