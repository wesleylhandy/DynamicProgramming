const BruteForceWordsFromWordBank = require('./problems/word-construction')
const MemoizedWordsFromWordBank = require('./solutions/memoized/word-construction')
const TabulatedWordsFromWordBank = require('./solutions/tabulated/word-construction')

const BruteForceBestAddends = require('./problems/best-sum');
const MemoizedBestAddends = require('./solutions/memoized/best-sum');
const TabulatedBestAddends = require('./solutions/tabulated/best-sum');

const BruteForceCanConstruct = require("./problems/can-construct-word");
const MemoizedCanConstruct = require("./solutions/memoized/can-construct-word");
const TabulatedCanConstruct = require("./solutions/tabulated/can-construct-word");

const BruteForceCanSum = require('./problems/can-sum');
const MemoizedCanSum = require('./solutions/memoized/can-sum');
const TabulatedCanSum = require('./solutions/tabulated/can-sum');

const BruteForceWordsCount = require('./problems/count-construct');
const MemoizedWordsCount = require('./solutions/memoized/count-construct');
const TabulatedWordsCount = require('./solutions/tabulated/count-construct');

const BruteForceGridTraveler  = require('./problems/grid-traveler');
const MemoizedGridTraveler = require('./solutions/memoized/grid-traveler');
const TabulatedGridTraveler = require('./solutions/tabulated/grid-traveler');

const BruteForceMakeSum = require('./problems/how-sum');
const MemoizedMakeSum = require('./solutions/memoized/how-sum');
const TabulatedMakeSum = require('./solutions/tabulated/how-sum');

const BruteForceNthFibonacci = require('./problems/nth-fibonacci');
const MemoizedNthFibonacci = require('./solutions/memoized/nth-fibonacci');
const TabulatedNthFibonacci = require('./solutions/tabulated/nth-fibonacci');

/**
 * @type {Object.<string, string>}
 * @const
 */
const Problems = {
    BestAddendsForSum: 'BestAddendsForSum',
    CanConstructWord: 'CanConstructWord',
    CanSumTarget: 'CanSumTarget',
    GridTraveler: 'GridTraveler',
    NthFibonacci: 'NthFibonacci',
    NumbersThatMakeSum: 'NumbersThatMakeSum',
    WordsFromWordBank: 'WordsFromWordBank',
    WordsFromWordBankCount: 'WordsFromWordBankCount'
}

/**
 * A problem set with brute-force, memoized, and tabulated solutions with test cases.
 * @typedef {Object} ProblemSet
 * @property {Function} brute - Brute Force Solution
 * @property {Function} memo - Memoized Solution
 * @property {Function} table - Tabulated Solution
 * @property {(number | number[])[][] | (string | string[])[][]} testCaseArguments
 */

/**
 * Gets Problem Set for a given problem key
 * @param {string} problem - key for the Problem Set
 * @returns {ProblemSet | undefined} - references for executions and tests for a Problem Set
 */
function problems(problem) {
    const problems = new Map([
        [Problems.BestAddendsForSum, {
            brute: BruteForceBestAddends.bestAddendsForSum,
            memo: MemoizedBestAddends.bestAddendsForSum,
            table: TabulatedBestAddends.bestAddendsForSum,
            testCaseArguments: [
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
        [Problems.CanConstructWord, {
            brute: BruteForceCanConstruct.canConstructWord,
            memo: MemoizedCanConstruct.canConstructWord,
            table: TabulatedCanConstruct.canConstructWord,
            testCaseArguments: [
                ["abcdef", ["ab","abc","cd","def","abcd"]],
                ["skateboard", ["bo","rd","ate","t","ska","sk","boar"]],
                ["enterapotentpot", ["a","p","ent","enter","ot","o","t"]],
                ["eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]],
            ]
        }],
        [Problems.CanSumTarget, {
            brute: BruteForceCanSum.canSumTarget,
            memo: MemoizedCanSum.canSumTarget,
            table: TabulatedCanSum.canSumTarget,
            testCaseArguments: [
                [7, [2, 3]],
                [7, [5, 3, 4, 7]],
                [7, [2, 4]],
                [8, [2, 3, 5]],
                [300, [7, 14]],
            ]
        }],
        [Problems.GridTraveler, {
            brute: BruteForceGridTraveler.gridTraveler,
            memo: MemoizedGridTraveler.gridTraveler,
            table: TabulatedGridTraveler.gridTraveler,
            testCaseArguments: [
                [1, 1],
                [2, 3],
                [3, 2],
                [3, 3],
                [18, 18],
            ]
        }],
        [Problems.NthFibonacci, {
            brute: BruteForceNthFibonacci.nthFibonacci,
            memo: MemoizedNthFibonacci.nthFibonacci,
            table: TabulatedNthFibonacci.nthFibonacci,
            testCaseArguments: [
                [6],
                [7],
                [8],
                [50],
            ]
        }],
        [Problems.NumbersThatMakeSum, {
            brute: BruteForceMakeSum.numbersThatMakeSum,
            memo: MemoizedMakeSum.numbersThatMakeSum,
            table: TabulatedMakeSum.numbersThatMakeSum,
            testCaseArguments: [
                [7, [2,3]],
                [7, [2,4]],
                [14, [2, 3, 5, 6, 7]],
                [300, [7,14]],
                [8, [3, 5]],
            ]
        }],
        [Problems.WordsFromWordBank, {
            brute: BruteForceWordsFromWordBank.wordsFromWordBank,
            memo: MemoizedWordsFromWordBank.wordsFromWordBank,
            table: TabulatedWordsFromWordBank.wordsFromWordBank,
            testCaseArguments: [
                ['abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']],
                ['purple', ['purp', 'p', 'le', 'ur', 'purpl']],
                ['skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']],
                ['enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']],
                ['eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeee', 'eeeeee']]
            ]
        }],
        [Problems.WordsFromWordBankCount, {
            brute: BruteForceWordsCount.wordsFromWordBankCount,
            memo: MemoizedWordsCount.wordsFromWordBankCount,
            table: TabulatedWordsCount.wordsFromWordBankCount,
            testCaseArguments: [
                ['abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']],
                ['purple', ['purp', 'p', 'le', 'ur', 'purpl']],
                ['skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']],
                ['enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']],
                ['eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeee', 'eeeeee']]
            ]
        }]
    ]);

    return problems.get(problem)
}

module.exports.problems = problems;
module.exports.Problems = Problems;