const { performance, PerformanceObserver } = require("perf_hooks");
const { Command, Option } = require('commander');
const { problems, Problems } = require('./setup')

const program = new Command();

program
  .version('0.0.1', '-v, --vers', 'output the current version')
  .description('Run Problems Testing Performance of simple methods using either brute-force, memoized, or tabulated executions.')
  .addOption(new Option('-d, --debug', 'output extra debugging'))
  .addOption(new Option('-p, --problem <problem>', 'Problem to Test').choices([...Object.keys(Problems)]))
  .addOption(new Option('-e, --execution <execution>', 'Brute-force, Memoized, or Tabulated?').choices(['brute', 'memo', 'table']).default('brute'))

program.parse(process.argv);

function main() {

  const options = program.opts();
  const { debug, problem, execution } = options;
  if (debug) console.debug(options);

  const problemToSolve = problems(problem);

  if (!problemToSolve) {
    console.error('Unable to find requested problem:', problem);
    return;
  }

  const timeout = setTimeout(() => {
    console.error(`${problem} is taking greater than 1 minute to complete`);
    process.exit(124);
  }, 60000);

  const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().sort((a, b) => a.startTime < b.startTime).forEach((entry) => {
      console.info(JSON.stringify({ name: entry.name, arguments: entry.detail, duration: entry.duration }));
    });
    clearTimeout(timeout);
    perfObserver.disconnect();
  });

  perfObserver.observe({ entryTypes: ["function"] });

  const performanceWrapperProblem = performance.timerify(problemToSolve[execution]);

  for (let testCaseArguments of problemToSolve.testCaseArguments) {
    performanceWrapperProblem(...testCaseArguments);
  } 
}

main();
