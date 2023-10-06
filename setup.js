const { bruteForceWordConstructionsFromWordBank } = require('./problems/word-construction')
const { memoizedWordConstructionsFromWordBank } = require('./solutions/memoized/word-construction')
const { tabulatedWordConstructionsFromWordBank } = require('./solutions/table/word-construction')

const { bruteForceBestAddendsForSum } = require('./problems/best-sum');
const { memoizedBestAddendsForSum } = require('./solutions/memoized/best-sum');
const { tabulatedBestAddendsForSum } = require('./solutions/table/best-sum');

const { bruteForceCanConstructWord } = require("./problems/can-construct-word");
const { memoizedCanConstructWord } = require("./solutions/memoized/can-construct-word");
const { tabulatedCanConstructWord } = require("./solutions/table/can-construct-word");

const { bruteForceCanSumNumbersToTarget } = require('./problems/can-sum');
const { memoizedCanSumNumbersToTarget } = require('./solutions/memoized/can-sum');
const { tabulatedCanSumNumbersToTarget } = require('./solutions/table/can-sum');

/**
 * @type {Object.<string, string>}
 * @const
 */
const Problems = {
    BestAddendsForSum: 'BestAddendsForSum',
    CanConstructWordFromWordBank: 'CanConstructWordFromWordBank',
    WordConstructionsFromWordBank: 'WordConstructionsFromWordBank',
    CanSumNumbersToTarget: 'CanSumNumbersToTarget'
}

/**
 * A problem set with brute-force, memoized, and tabulated solutions with test cases.
 * @typedef {Object} ProblemSet
 * @property {Function} brute - Brute Force Solution
 * @property {Function} memo - Memoized Solution
 * @property {Function} table - Tabulated Solution
 * @property {(number | number[])[][] | (string | string[])[][]} testCases
 */

/**
 * Gets Problem Set for a given problem key
 * @param {string} problem - key for the Problem Set
 * @returns {ProblemSet | undefined} - references for executions and tests for a Problem Set
 */
function problems(problem) {
    const problems = new Map([
        [Problems.BestAddendsForSum, {
            brute: bruteForceBestAddendsForSum,
            memo: memoizedBestAddendsForSum,
            table: tabulatedBestAddendsForSum,
            testCases: [
                [7, [5, 2, 3, 4, 7]],
                [7, [2, 3]],
                [7, [2, 4]],
                [14, [2, 3, 5, 6, 7]],
                [300, [7, 14]],
                [8, [2, 3, 5]],
                [8, [3, 5]],
                [100, [1, 2, 3, 5, 20, 25, 33, 50, 70]],
            ]
        }],
        [Problems.CanConstructWordFromWordBank, {
            brute: bruteForceCanConstructWord,
            memo: memoizedCanConstructWord,
            table: tabulatedCanConstructWord,
            testCases: [
                ["abcdef", ["ab","abc","cd","def","abcd"]],
                ["skateboard", ["bo","rd","ate","t","ska","sk","boar"]],
                ["enterapotentpot", ["a","p","ent","enter","ot","o","t"]],
                ["eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]],
            ]
        }],
        [Problems.CanSumNumbersToTarget, {
            brute: bruteForceCanSumNumbersToTarget,
            memo: memoizedCanSumNumbersToTarget,
            table: tabulatedCanSumNumbersToTarget,
            testCases: [
                [7, [2, 3]]
                [7, [5, 3, 4, 7]]
                [7, [2, 4]]
                [8, [2, 3, 5]]
                [300, [7, 14]]
            ]
        }]
        [Problems.WordConstructionsFromWordBank, {
            brute: bruteForceWordConstructionsFromWordBank,
            memo: memoizedWordConstructionsFromWordBank,
            table: tabulatedWordConstructionsFromWordBank,
            testCases: [
                ['abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']],
                ['purple', ['purp', 'p', 'le', 'ur', 'purpl']],
                ['skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']],
                ['enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']],
                ['eeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeee', 'eeeeee']]
            ]
        }]
    ]);

    return problems.get(problem)
}

module.exports.problems = problems;
module.exports.Problems = Problems;