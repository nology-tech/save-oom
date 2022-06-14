import phonicsData from "../data/phonicsData";
import { 
    // getGameRoundsForUser, 
    getCorrectGameRoundsForUser, 
    getIncorrectGameRoundsForUser,
    getArrayOfRounds
     } from "./firebaseGameUtils";

// const staticPhonicsArray = Object.keys(phonicsData.levelOne);

/**
 * Get a list of phonics from the static array, based on the level.
 * @param {*} level 
 * @returns 
 */
const getStaticPhonicsArray = (level) => {
    let levelData = null;
    switch(level) {
        case 1:
            levelData = "levelOne";
            break;
        case 2:
            levelData = "levelTwo";
            break;
        case 3:
            levelData = "levelThree";
            break;
        case 4:
            levelData = "levelFour";
            break;
        case 5:
            levelData = "levelFive";
            break;
    }
    return Object.keys( phonicsData[levelData] );
}

/**
 * Shuffle that array. Nice and simple algorithm.
 * Code courtesy of Geeks for Geeks.
 * @param {*} array 
 * @returns 
 */
const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
}
    

/**
 * Get the array of sounds for the swing game.
 * Attempts to return a mix of incorrect, correct and new sounds for the given child, based on their
 * past results. Basic algo at the moment!
 * @param {*} id 
 * @param {*} level 
 * @returns 
 */
export const getArrayForSwing = async (id, level) => {

    // 50 wrong = 8
    // 30 new = 4
    // fill up from rest = 3

    const MAX_PER_GAME = 15;
    const MAX_INCORRECT_PER_GAME = 8;
    const MAX_CORRECT_PER_GAME = 4;

    const game = "swing";

    const staticArray = getStaticPhonicsArray( level );
    console.log(`static array for level ${level}`, staticArray);

    const incorrect = await getArrayOfRounds( id, game, getIncorrectGameRoundsForUser);
    const correct = await getArrayOfRounds( id, game, getCorrectGameRoundsForUser);

    console.log( "correct", correct);
    console.log( "incorrect", incorrect);

    // all results
    const result = new Set();

    // add in at most MAX_INCORRECT_PER_GAME of incorrect answers
    for (let phonic of incorrect) {
        result.add(phonic);
        if( result.length >= MAX_INCORRECT_PER_GAME ) {
            console.log("Break!! Reach max incorrect");
            break;
        }
    }
    console.log("After adding incorrect", result);

    let maxCorrect = result.length + MAX_CORRECT_PER_GAME;
    // add in at most MAX_CORRECT_PER_GAME of correct answers
    for (let phonic of correct) {
        result.add(phonic);
        if( result.length >= maxCorrect ) {
            break;
        }
    }
    console.log("After adding correct", result);

    // fill up remaining
    for (let i = 0; i < staticArray.length; i++) {
        result.add( staticArray[i] );
        if( result.size >= MAX_PER_GAME ) {
            break;
        }
    }

    console.log("At end", result);

    const shuffled = shuffleArray( Array.from(result) );

    return shuffled;
}