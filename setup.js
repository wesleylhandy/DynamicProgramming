const BruteForceWordsFromWordBank = require('./problems/words-from-word-bank')
const MemoizedWordsFromWordBank = require('./solutions/memoized/words-from-word-bank')
const TabulatedWordsFromWordBank = require('./solutions/tabulated/words-from-word-bank')

const BruteForceBestAddends = require('./problems/best-addends-for-sum');
const MemoizedBestAddends = require('./solutions/memoized/best-addends-for-sum');
const TabulatedBestAddends = require('./solutions/tabulated/best-addends-for-sum');

const BruteForceCanConstruct = require("./problems/can-construct-word");
const MemoizedCanConstruct = require("./solutions/memoized/can-construct-word");
const TabulatedCanConstruct = require("./solutions/tabulated/can-construct-word");

const BruteForceCanSum = require('./problems/can-sum-target');
const MemoizedCanSum = require('./solutions/memoized/can-sum-target');
const TabulatedCanSum = require('./solutions/tabulated/can-sum-target');

const BruteForceWordsCount = require('./problems/words-from-word-bank-count');
const MemoizedWordsCount = require('./solutions/memoized/words-from-word-bank-count');
const TabulatedWordsCount = require('./solutions/tabulated/words-from-word-bank-count');

const BruteForceGridTraveler  = require('./problems/grid-traveler');
const MemoizedGridTraveler = require('./solutions/memoized/grid-traveler');
const TabulatedGridTraveler = require('./solutions/tabulated/grid-traveler');

const BruteForceMakeSum = require('./problems/numbers-that-make-sum');
const MemoizedMakeSum = require('./solutions/memoized/numbers-that-make-sum');
const TabulatedMakeSum = require('./solutions/tabulated/numbers-that-make-sum');

const BruteForceNthFibonacci = require('./problems/nth-fibonacci');
const MemoizedNthFibonacci = require('./solutions/memoized/nth-fibonacci');
const TabulatedNthFibonacci = require('./solutions/tabulated/nth-fibonacci');

/**
 * Enum for Problems
 * @readonly
 * @enum {string}
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
 * Enum for Executions
 * @readonly
 * @enum {string}
 */
const Executions = {
    Brute: 'brute',
    Memo: 'memo',
    table: 'table',
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
            [Executions.Brute]: BruteForceBestAddends.bestAddendsForSum,
            [Executions.Memo]: MemoizedBestAddends.bestAddendsForSum,
            [Executions.Table]: TabulatedBestAddends.bestAddendsForSum,
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
            [Executions.Brute]: BruteForceCanConstruct.canConstructWord,
            [Executions.Memo]: MemoizedCanConstruct.canConstructWord,
            [Executions.Table]: TabulatedCanConstruct.canConstructWord,
            testCaseArguments: [
                ["abcdef", ["ab","abc","cd","def","abcd"]],
                ["skateboard", ["bo","rd","ate","t","ska","sk","boar"]],
                ["enterapotentpot", ["a","p","ent","enter","ot","o","t"]],
                ["eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]],
            ]
        }],
        [Problems.CanSumTarget, {
            [Executions.Brute]: BruteForceCanSum.canSumTarget,
            [Executions.Memo]: MemoizedCanSum.canSumTarget,
            [Executions.Table]: TabulatedCanSum.canSumTarget,
            testCaseArguments: [
                [7, [2, 3]],
                [7, [5, 3, 4, 7]],
                [7, [2, 4]],
                [8, [2, 3, 5]],
                [300, [7, 14]],
            ]
        }],
        [Problems.GridTraveler, {
            [Executions.Brute]: BruteForceGridTraveler.gridTraveler,
            [Executions.Memo]: MemoizedGridTraveler.gridTraveler,
            [Executions.Table]: TabulatedGridTraveler.gridTraveler,
            testCaseArguments: [
                [1, 1],
                [2, 3],
                [3, 2],
                [3, 3],
                [18, 18],
            ]
        }],
        [Problems.NthFibonacci, {
            [Executions.Brute]: BruteForceNthFibonacci.nthFibonacci,
            [Executions.Memo]: MemoizedNthFibonacci.nthFibonacci,
            [Executions.Table]: TabulatedNthFibonacci.nthFibonacci,
            testCaseArguments: [
                [6],
                [7],
                [8],
                [50],
            ]
        }],
        [Problems.NumbersThatMakeSum, {
            [Executions.Brute]: BruteForceMakeSum.numbersThatMakeSum,
            [Executions.Memo]: MemoizedMakeSum.numbersThatMakeSum,
            [Executions.Table]: TabulatedMakeSum.numbersThatMakeSum,
            testCaseArguments: [
                [7, [2,3]],
                [7, [2,4]],
                [14, [2, 3, 5, 6, 7]],
                [300, [7,14]],
                [8, [3, 5]],
            ]
        }],
        [Problems.WordsFromWordBank, {
            [Executions.Brute]: BruteForceWordsFromWordBank.wordsFromWordBank,
            [Executions.Memo]: MemoizedWordsFromWordBank.wordsFromWordBank,
            [Executions.Table]: TabulatedWordsFromWordBank.wordsFromWordBank,
            testCaseArguments: [
                ['abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']],
                ['purple', ['purp', 'p', 'le', 'ur', 'purpl']],
                ['skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']],
                ['enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']],
                ['eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeee', 'eeeeee']]
            ]
        }],
        [Problems.WordsFromWordBankCount, {
            [Executions.Brute]: BruteForceWordsCount.wordsFromWordBankCount,
            [Executions.Memo]: MemoizedWordsCount.wordsFromWordBankCount,
            [Executions.Table]: TabulatedWordsCount.wordsFromWordBankCount,
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

module.exports.Executions = Executions;
module.exports.problems = problems;
module.exports.Problems = Problems;