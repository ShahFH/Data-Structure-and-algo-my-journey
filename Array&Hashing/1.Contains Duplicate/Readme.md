# Contains Duplicate

## Problem Description

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and `false` if every element is distinct.

**Example:**

Input: `[1, 2, 3, 4, 5, 6, 1]`
Output: `true`

Input: `[1, 2, 3, 4, 5, 6]`
Output: `false`

## Approach

We can solve this problem efficiently by using a hash table (JavaScript object) to keep track of encountered elements. We iterate through the array, and for each element, we check if it already exists in the hash table. If it does, we return true as there is a duplicate. If not, we add it to the hash table and continue. If the loop completes without finding duplicates, we return false.

## Complexity Analysis

Time Complexity: O(n) - We iterate through the input array once.
Space Complexity: O(n) - In the worst case, when all elements are unique, the space used by the hash table is proportional to the number of unique elements.