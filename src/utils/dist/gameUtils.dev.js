"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrayForSwing = void 0;

var _phonicsData = _interopRequireDefault(require("../data/phonicsData"));

var _firebaseGameUtils = require("./firebaseGameUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const staticPhonicsArray = Object.keys(phonicsData.levelOne);

/**
 * Get a list of phonics from the static array, based on the level.
 * @param {*} level 
 * @returns 
 */
var getStaticPhonicsArray = function getStaticPhonicsArray(level) {
  var levelData = null;

  switch (level) {
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

  return Object.keys(_phonicsData["default"][levelData]);
};
/**
 * Shuffle that array. Nice and simple algorithm.
 * Code courtesy of Geeks for Geeks.
 * @param {*} array 
 * @returns 
 */


var shuffleArray = function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};
/**
 * Get the array of sounds for the swing game.
 * Attempts to return a mix of incorrect, correct and new sounds for the given child, based on their
 * past results. Basic algo at the moment!
 * @param {*} id 
 * @param {*} level 
 * @returns 
 */


var getArrayForSwing = function getArrayForSwing(id, level) {
  var MAX_PER_GAME, MAX_INCORRECT_PER_GAME, MAX_CORRECT_PER_GAME, game, staticArray, incorrect, correct, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, phonic, maxCorrect, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _phonic, i, shuffled;

  return regeneratorRuntime.async(function getArrayForSwing$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 50 wrong = 8
          // 30 new = 4
          // fill up from rest = 3
          MAX_PER_GAME = 15;
          MAX_INCORRECT_PER_GAME = 8;
          MAX_CORRECT_PER_GAME = 4;
          game = "swing";
          staticArray = getStaticPhonicsArray(level);
          console.log("static array for level ".concat(level), staticArray);
          _context.next = 8;
          return regeneratorRuntime.awrap((0, _firebaseGameUtils.getArrayOfRounds)(id, game, _firebaseGameUtils.getIncorrectGameRoundsForUser));

        case 8:
          incorrect = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap((0, _firebaseGameUtils.getArrayOfRounds)(id, game, _firebaseGameUtils.getCorrectGameRoundsForUser));

        case 11:
          correct = _context.sent;
          console.log("correct", correct);
          console.log("incorrect", incorrect); // all results

          result = new Set(); // add in at most MAX_INCORRECT_PER_GAME of incorrect answers

          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 18;
          _iterator = incorrect[Symbol.iterator]();

        case 20:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 29;
            break;
          }

          phonic = _step.value;
          result.add(phonic);

          if (!(result.length >= MAX_INCORRECT_PER_GAME)) {
            _context.next = 26;
            break;
          }

          console.log("Break!! Reach max incorrect");
          return _context.abrupt("break", 29);

        case 26:
          _iteratorNormalCompletion = true;
          _context.next = 20;
          break;

        case 29:
          _context.next = 35;
          break;

        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](18);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 35:
          _context.prev = 35;
          _context.prev = 36;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 38:
          _context.prev = 38;

          if (!_didIteratorError) {
            _context.next = 41;
            break;
          }

          throw _iteratorError;

        case 41:
          return _context.finish(38);

        case 42:
          return _context.finish(35);

        case 43:
          console.log("After adding incorrect", result);
          maxCorrect = result.length + MAX_CORRECT_PER_GAME; // add in at most MAX_CORRECT_PER_GAME of correct answers

          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 48;
          _iterator2 = correct[Symbol.iterator]();

        case 50:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context.next = 58;
            break;
          }

          _phonic = _step2.value;
          result.add(_phonic);

          if (!(result.length >= maxCorrect)) {
            _context.next = 55;
            break;
          }

          return _context.abrupt("break", 58);

        case 55:
          _iteratorNormalCompletion2 = true;
          _context.next = 50;
          break;

        case 58:
          _context.next = 64;
          break;

        case 60:
          _context.prev = 60;
          _context.t1 = _context["catch"](48);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t1;

        case 64:
          _context.prev = 64;
          _context.prev = 65;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 67:
          _context.prev = 67;

          if (!_didIteratorError2) {
            _context.next = 70;
            break;
          }

          throw _iteratorError2;

        case 70:
          return _context.finish(67);

        case 71:
          return _context.finish(64);

        case 72:
          console.log("After adding correct", result); // fill up remaining

          i = 0;

        case 74:
          if (!(i < staticArray.length)) {
            _context.next = 81;
            break;
          }

          result.add(staticArray[i]);

          if (!(result.size >= MAX_PER_GAME)) {
            _context.next = 78;
            break;
          }

          return _context.abrupt("break", 81);

        case 78:
          i++;
          _context.next = 74;
          break;

        case 81:
          console.log("At end", result);
          shuffled = shuffleArray(Array.from(result));
          return _context.abrupt("return", shuffled);

        case 84:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[18, 31, 35, 43], [36,, 38, 42], [48, 60, 64, 72], [65,, 67, 71]]);
};

exports.getArrayForSwing = getArrayForSwing;