# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying a state variable within the dependency array.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the correct implementation.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the rapidly incrementing counter in the browser console.  This is the infinite loop.

## Solution

The issue is resolved in `bugSolution.js` by correctly using the `useEffect` hook. The dependency array is empty, indicating that the effect should only run once after the component mounts. However, the state update is done in a way that doesn't trigger an infinite loop.