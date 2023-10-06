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