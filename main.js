const { performance, PerformanceObserver } = require("perf_hooks");
const { Command, Option } = require('commander');

const { bruteForceWordConstructionsFromWordBank } = require('./problems/word-construction')
const { memoizedWordConstructionsFromWordBank } = require('./solutions/memoized/word-construction')
const { tabulatedWordConstructionsFromWordBank } = require('./solutions/table/word-construction')

const { bestSumBruteForce } = require('./problems/best-sum');
const { bestSumMemo } = require('./solutions/memoized/best-sum');
const { bestSumTable } = require('./solutions/table/best-sum');

const { bruteForceCanConstructWord } = require("./problems/can-construct-word");
const { memoizedCanConstructWord } = require("./solutions/memoized/can-construct-word");
const { tabulatedCanConstructWord } = require("./solutions/table/can-construct-word");

const problems = {
  bestAddendsForSum: {
    brute: bestSumBruteForce,
    memo: bestSumMemo,
    table: bestSumTable,
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
  },
  canConstructWordFromWordBank: {
    brute: bruteForceCanConstructWord,
    memo: memoizedCanConstructWord,
    table: tabulatedCanConstructWord,
    testCases: [
      ["abcdef", ["ab","abc","cd","def","abcd"]],
      ["skateboard", ["bo","rd","ate","t","ska","sk","boar"]],
      ["enterapotentpot", ["a","p","ent","enter","ot","o","t"]],
      ["eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]],
    ]
  },
  wordConstructionsFromWordBank: {
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
  }
}

const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().sort((a, b) => a.startTime < b.startTime).forEach((entry) => {
    console.info(entry.name, '\t', '\t', entry.duration);
  });
});

const program = new Command();

program
  .version('0.0.1', '-v, --vers', 'output the current version')
  .description('Run Problems Testing Performance of simple methods using either brute-force, memoized, or tabulated executions.')
  .addOption(new Option('-d, --debug', 'output extra debugging'))
  .addOption(new Option('-p, --problem <problem>', 'Problem to Test').choices([...Object.keys(problems)]))
  .addOption(new Option('-e, --execution <execution>', 'Brute-force, Memoized, or Tabulated?').choices(['brute', 'memo', 'table']).default('brute'))

program.parse(process.argv);

function main() {
  const options = program.opts()
  const { debug, problem, execution } = options;
  if (debug) console.debug(options);

  perfObserver.observe({ entryTypes: ["function"] })
  const perfWrapper = performance.timerify(problems[problem][execution]);
  for (let testCase of problems[problem].testCases) {
    perfWrapper(...testCase);
  }
}

main();
