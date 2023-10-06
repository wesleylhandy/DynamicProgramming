# Dynamic Programming

Overlapping SubProblems - any instance where some larger problem can be decomposed into smaller instances of the same problem

Videos on Dynamic Programming:
- https://youtu.be/oBt53YbR9Kk?si=Cw-xljXMO1WTk8uT
- https://youtu.be/Hdr64lKQ3e4?si=I-yFmf0pXlJz4q0m

**Steps to implementing Dynamic Programming**

1. Notice any overlapping sub-problems.
2. Decide what is the trivially smallest input
3. How can you relate the base cases to the larger problems
4. Think recursively to use Memoization
5. Think iteratively to use Tabulation
6. Draw a Strategy First

## Memoization

Storing solutions for duplicate sub-problems

1. Make it Work
    - Visualize the problem as a tree
    - Implement the tree using recursion
    - Test It
2. Make it efficient
    - add a memo object
    - add a base case to return memo values
    - store return values into the memo

## Tabulation

1. Visualize the problem as a table 
2. Size the table based on the inputs
3. Initialize the table with default values - with compatible types
4. seed the trivial answer into the table - small instance of the input where you already know the answer
5. iterate through the table
6. fill further positions based on the current position

## Problem Set
within the `./problems` folder are 8 different brute force approaches to problems that can be improved by dynamic programming.
The `./solutions` folder provides example solutions using both memoization and tabulation. Feel free to write your own solutions for each, keeping the same function names and argument patterns.

Each of these problems can be run from the command-line, which will output a performance analysis of the problem via `PerformanceObserver`. You can specify whether to execute the solution via brute force (default), memoization, or tabulation.

```sh
Usage: main [options]

Run Problems Testing Performance of simple methods using either brute-force, memoized, or tabulated executions.

Options:
  -v, --vers                   output the current version
  -d, --debug                  output extra debugging
  -i, --ignore-timeout         do not exit early from analysis via timeout
  -p, --problem <problem>      Problem to Test (choices: "BestAddendsForSum", "CanConstructWord", "CanSumTarget", "GridTraveler", "NthFibonacci",
                               "NumbersThatMakeSum", "WordsFromWordBank", "WordsFromWordBankCount")
  -e, --execution <execution>  Brute-force, Memoized, or Tabulated? (choices: "brute", "memo", "table", default: "brute")
  -h, --help                   display help for command
```