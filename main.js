const { performance, PerformanceObserver } = require("perf_hooks");
const { Command, Option, InvalidArgumentError } = require('commander');
const { problems, Problems, Executions } = require('./setup');

process.title = 'DynamicProgrammingPerformance';

const program = new Command();

function integerArgsParser(value, dummyPrevious) {
  // parseInt takes a string and a radix
  const parsedValue = Number.parseInt(value, 10);
  if (Number.isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }
  return parsedValue;
}

program
  .version('0.0.1', '-v, --vers', 'output the current version')
  .description('Run Problems Testing Performance of simple methods using either brute-force, memoized, or tabulated executions.')
  .addOption(new Option('-d, --debug', 'output extra debugging'))
  .addOption(new Option('-e, --execution <execution>', 'Brute-force, Memoized, or Tabulated?').choices([...Object.values(Executions)]).default(Executions.Brute))
  .addOption(new Option('-i, --ignore-timeout', 'do not exit early from analysis via timeout'))
  .addOption(new Option('-p, --problem <problem>', 'Problem to Test').choices([...Object.keys(Problems)]))
  .addOption(new Option('-t, --timeout-override <timeInMs>', 'override default timeout').argParser(integerArgsParser))

program.parse(process.argv);

(function main() {

  const options = program.opts();
  const { debug, problem, execution, ignoreTimeout, timeoutOverride } = options;
  if (debug) console.debug(options);

  const problemToSolve = problems(problem);

  if (!problemToSolve) {
    console.error('Unable to find requested problem:', problem);
    return;
  }

  const timeBeforeExit = timeoutOverride ?? 60000;

  // NOTE: For intensive operations, this may not do what is expected.
  const timeout = setTimeout(handleTimeout, timeBeforeExit);

  if (ignoreTimeout) {
    console.log('timeout cleared');
    clearTimeout(timeout);
  }

  const perfObserver = new PerformanceObserver((items) => {
    console.info(`\n******************\nProblem: ${problem}\nExecution: ${execution}`);
    items.getEntries().sort((a, b) => a.startTime < b.startTime).forEach((entry) => {
      console.info(`----------------`)
      console.info(`Duration: ${entry.duration}\nArguments:${JSON.stringify(entry.detail)}`);
    });
    console.info(`******************`);
    clearTimeout(timeout);
    perfObserver.disconnect();
  });

  function handleTimeout() {
    perfObserver.disconnect();
    console.error(`${problem} is taking greater than ${timeBeforeExit}ms to complete`);
    process.exit(124);
  }

  perfObserver.observe({ entryTypes: ["function"] });

  const performanceWrapperProblem = performance.timerify(problemToSolve[execution]);

  for (let testCaseArguments of problemToSolve.testCaseArguments) {
    performanceWrapperProblem(...testCaseArguments);
  } 
})();
