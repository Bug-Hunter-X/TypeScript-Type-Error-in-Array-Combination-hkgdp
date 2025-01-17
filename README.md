# TypeScript Type Error in Array Combination

This repository demonstrates a common TypeScript type error encountered when combining arrays of potentially different types. The `combineArrays` function is designed to combine two number arrays, but the provided example uses an array containing a string element, leading to a type error.

The solution involves using type guards or generics to handle the heterogeneous nature of the data more effectively.  The provided example uses type guards.