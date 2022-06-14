"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveUserRound = exports.getArrayOfRounds = exports.getIncorrectGameRoundsForUser = exports.getCorrectGameRoundsForUser = exports.getGameRoundsForUser = exports.getUserById = void 0;

var _firebase = require("../firebase");

var _firestore = require("firebase/firestore");

/**
 * Gets a user object using the userId.
 * @param {*} userId 
 * @returns 
 */
var getUserById = function getUserById(userId) {
  var docRef, docSnap;
  return regeneratorRuntime.async(function getUserById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          docRef = (0, _firestore.doc)(_firebase.db, "users", userId);
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDoc)(docRef));

        case 3:
          docSnap = _context.sent;
          return _context.abrupt("return", docSnap);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};
/** 
 * Get all the rounds of a specific game for a given user, ordered by most recent first 
 @param {*} userId
*@returns a querySnap (document snapshot), returns a Promise.
*/


exports.getUserById = getUserById;

var getGameRoundsForUser = function getGameRoundsForUser(id, game) {
  var q, querySnap;
  return regeneratorRuntime.async(function getGameRoundsForUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase.db, "users", id, "rounds_played"), (0, _firestore.where)("gameId", "==", game), (0, _firestore.orderBy)("roundTime", "desc"));
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          querySnap = _context2.sent;
          return _context2.abrupt("return", querySnap);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/** 
   * Get all the correct round of a specific game for a given user, ordered by most recent first 
  @param {String} userId
  @param {String} gameId
  *@returns a promise with the query snapshot.
  */


exports.getGameRoundsForUser = getGameRoundsForUser;

var getCorrectGameRoundsForUser = function getCorrectGameRoundsForUser(id, game) {
  var q, querySnap;
  return regeneratorRuntime.async(function getCorrectGameRoundsForUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase.db, "users", id, "rounds_played"), (0, _firestore.where)("gameId", "==", game), (0, _firestore.where)("correct", "==", true), (0, _firestore.orderBy)("roundTime", "desc"));
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          querySnap = _context3.sent;
          return _context3.abrupt("return", querySnap);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};
/** Get all the incorrect round of a specific game for a given user, ordered by most recent first 
  @param {String} userId
  @param {String} gameId
  *@returns  a promise with the query snapshot.
  */


exports.getCorrectGameRoundsForUser = getCorrectGameRoundsForUser;

var getIncorrectGameRoundsForUser = function getIncorrectGameRoundsForUser(id, game) {
  var q, querySnap;
  return regeneratorRuntime.async(function getIncorrectGameRoundsForUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase.db, "users", id, "rounds_played"), (0, _firestore.where)("gameId", "==", game), (0, _firestore.where)("correct", "==", false), (0, _firestore.orderBy)("roundTime", "desc"));
          _context4.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          querySnap = _context4.sent;
          return _context4.abrupt("return", querySnap);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};
/** Function that returns an array of rounds 
  @param {String} userId
  @param {String} gameId
  @param {Function} getGameRounds
  *@returns returns a promise.
  */


exports.getIncorrectGameRoundsForUser = getIncorrectGameRoundsForUser;

var getArrayOfRounds = function getArrayOfRounds(id, game, getGameRounds) {
  var querySnap, phonicsArr;
  return regeneratorRuntime.async(function getArrayOfRounds$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getGameRounds(id, game));

        case 2:
          querySnap = _context5.sent;
          phonicsArr = querySnap.docs.map(function (doc) {
            return doc.data().phonic;
          });
          return _context5.abrupt("return", phonicsArr);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};
/** Function that returns an array of rounds 
  @param {String} id
  @param {String} game
  @param {Object} roundInfo
  @param {String} answer
  *@returns returs a promise.
  */


exports.getArrayOfRounds = getArrayOfRounds;

var saveUserRound = function saveUserRound(id, game, level, gameStats, answer) {
  var isCorrect, score;
  return regeneratorRuntime.async(function saveUserRound$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          isCorrect = gameStats.isCorrect, score = gameStats.score;
          _context6.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.addDoc)((0, _firestore.collection)(_firebase.db, "users", id, "rounds_played"), {
            correct: isCorrect,
            gameId: game,
            phonic: answer,
            level: level,
            roundTime: _firestore.Timestamp.fromDate(new Date()).toDate(),
            score: score
          }));

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.saveUserRound = saveUserRound;