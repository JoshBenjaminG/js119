// ============================================================
// JS119 Practice Problems
// ============================================================
// Try to solve each problem before reading the solution.
// Test cases are provided as function calls with expected output.
// ============================================================


// ============================================================
// PROBLEM 1 - Basic
// Write a function that reverses a string.
// ============================================================

// reverseString('hello');        // 'olleh'
// reverseString('abc');          // 'cba'
// reverseString('a');            // 'a'

// SOLUTION:
function reverseString(str) {
  return str.split('').reverse().join('');
}


// ============================================================
// PROBLEM 2 - Basic
// Write a function that counts the number of vowels in a string.
// Vowels are: a, e, i, o, u (case insensitive)
// ============================================================

// countVowels('hello');          // 2
// countVowels('rhythm');         // 0
// countVowels('aeiou');          // 5
// countVowels('HELLO');          // 2

// SOLUTION:
function countVowels(str) {
  return str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
}


// ============================================================
// PROBLEM 3 - Basic
// Write a function that removes duplicate values from an array
// and returns the result.
// ============================================================

// removeDuplicates([1, 2, 3, 2, 1]);       // [1, 2, 3]
// removeDuplicates(['a', 'b', 'a', 'c']);   // ['a', 'b', 'c']
// removeDuplicates([1, 1, 1]);              // [1]

// SOLUTION:
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// ============================================================
// PROBLEM 4 - Basic
// Write a function that returns the longest word in a string.
// Assume words are separated by spaces.
// If there is a tie, return the first longest word found.
// ============================================================

// longestWord('I love JavaScript');         // 'JavaScript'
// longestWord('the quick brown fox');        // 'quick'
// longestWord('hello world');               // 'hello'

// SOLUTION:
function longestWord(str) {
  return str.split(' ').reduce((longest, word) =>
    word.length > longest.length ? word : longest, '');
}


// ============================================================
// PROBLEM 5 - Basic/Intermediate
// Write a function that returns an object representing
// the frequency of each character in a string.
// ============================================================

// charFrequency('hello');   // { h: 1, e: 1, l: 2, o: 1 }
// charFrequency('aab');     // { a: 2, b: 1 }
// charFrequency('a');       // { a: 1 }

// SOLUTION:
function charFrequency(str) {
  return str.split('').reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
}


// ============================================================
// PROBLEM 6 - Intermediate
// Write a function that checks whether two strings are anagrams.
// Anagrams use the same characters in a different order.
// ============================================================

// isAnagram('listen', 'silent');    // true
// isAnagram('hello', 'world');      // false
// isAnagram('abc', 'ab');           // false
// isAnagram('Abc', 'abc');          // false

// SOLUTION:
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}


// ============================================================
// PROBLEM 7 - Intermediate
// Write a function that capitalizes the first letter of
// every word in a string.
// ============================================================

// capitalizeWords('hello world');           // 'Hello World'
// capitalizeWords('the quick brown fox');    // 'The Quick Brown Fox'
// capitalizeWords('javaScript');            // 'JavaScript'

// SOLUTION:
function capitalizeWords(str) {
  return str.split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' ');
}


// ============================================================
// PROBLEM 8 - Intermediate
// Given an array of integers and a target, find two numbers
// that add up to the target. Return them as an array.
// Assume exactly one solution exists.
// ============================================================

// twoSum([2, 7, 11, 15], 9);    // [2, 7]
// twoSum([3, 2, 4], 6);         // [2, 4]
// twoSum([1, 5, 3, 7], 8);      // [1, 7]

// SOLUTION:
function twoSum(arr, target) {
  let seen = {};
  for (let num of arr) {
    let complement = target - num;
    if (seen[complement] !== undefined) return [complement, num];
    seen[num] = true;
  }
  return [];
}


// ============================================================
// PROBLEM 9 - Intermediate
// Write a function that checks whether a string is a palindrome.
// Use a two-pointer approach.
// ============================================================

// isPalindrome('racecar');    // true
// isPalindrome('hello');      // false
// isPalindrome('a');          // true
// isPalindrome('aba');        // true

// SOLUTION:
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}


// ============================================================
// PROBLEM 10 - Intermediate
// Write a function that finds the maximum sum of k consecutive
// elements in an array. Use a sliding window approach.
// ============================================================

// maxSumSubarray([1, 4, 2, 9, 7, 3, 8], 3);    // 19
// maxSumSubarray([1, 2, 3, 4, 5], 2);           // 9
// maxSumSubarray([5, 1, 1, 1, 5], 3);           // 7

// SOLUTION:
function maxSumSubarray(arr, k) {
  let sum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = sum;

  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}


// ============================================================
// PROBLEM 11 - Intermediate
// Write a function that flattens a nested array
// to a single level.
// ============================================================

// flatten([1, [2, 3], [4, [5, 6]]]);    // [1, 2, 3, 4, 5, 6]
// flatten([[1, 2], [3, 4]]);            // [1, 2, 3, 4]
// flatten([1, [2, [3, [4]]]]);          // [1, 2, 3, 4]

// SOLUTION:
function flatten(arr) {
  return arr.reduce((flat, item) =>
    flat.concat(Array.isArray(item) ? flatten(item) : item), []);
}


// ============================================================
// PROBLEM 12 - Intermediate
// Write a function that finds the missing number in an array
// of integers from 1 to n, where one number is missing.
// ============================================================

// findMissing([1, 2, 4, 5], 5);    // 3
// findMissing([2, 3, 4, 5], 5);    // 1
// findMissing([1, 2, 3, 4], 5);    // 5

// SOLUTION:
function findMissing(arr, n) {
  let expected = (n * (n + 1)) / 2;
  let actual = arr.reduce((sum, num) => sum + num, 0);
  return expected - actual;
}


// ============================================================
// PROBLEM 13 - Intermediate
// Write a function that groups array elements by a given
// callback function. Return an object where keys are the
// group names and values are arrays of items in each group.
// ============================================================

// groupBy([1, 2, 3, 4, 5, 6], n => n % 2 === 0 ? 'even' : 'odd');
// { odd: [1, 3, 5], even: [2, 4, 6] }

// groupBy(['one', 'two', 'three'], word => word.length);
// { 3: ['one', 'two'], 5: ['three'] }

// SOLUTION:
function groupBy(arr, fn) {
  return arr.reduce((groups, item) => {
    let key = fn(item);
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
}


// ============================================================
// PROBLEM 14 - Intermediate
// Write a function that finds all pairs of numbers in an array
// that add up to a given target. Return pairs as arrays,
// with the smaller number first.
// ============================================================

// findPairs([1, 2, 3, 4, 5], 6);    // [[2, 4], [1, 5]]
// findPairs([1, 2, 3], 10);          // []
// findPairs([1, 2, 3, 4], 5);        // [[1, 4], [2, 3]]

// SOLUTION:
function findPairs(arr, target) {
  let seen = new Set();
  let pairs = [];

  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}


// ============================================================
// PROBLEM 15 - Intermediate/Advanced
// Write a function that finds the length of the longest
// substring without repeating characters.
// Use a sliding window approach.
// ============================================================

// longestUniqueSubstring('abcabcbb');    // 3 ('abc')
// longestUniqueSubstring('bbbbb');       // 1 ('b')
// longestUniqueSubstring('pwwkew');      // 3 ('wke')
// longestUniqueSubstring('abcd');        // 4

// SOLUTION:
function longestUniqueSubstring(str) {
  let start = 0;
  let maxLen = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }
    seen[char] = end;
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}


// ============================================================
// PROBLEM 16 - Intermediate/Advanced
// Write a function that rotates an array to the right by k steps.
// Elements that fall off the end wrap around to the beginning.
// ============================================================

// rotateArray([1, 2, 3, 4, 5], 2);    // [4, 5, 1, 2, 3]
// rotateArray([1, 2, 3], 1);           // [3, 1, 2]
// rotateArray([1, 2, 3, 4], 4);        // [1, 2, 3, 4]

// SOLUTION:
function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}


// ============================================================
// PROBLEM 17 - Intermediate/Advanced
// Write a function that returns the longest common prefix
// shared by all strings in an array.
// Return an empty string if there is no common prefix.
// ============================================================

// longestCommonPrefix(['flower', 'flow', 'flight']);    // 'fl'
// longestCommonPrefix(['dog', 'racecar', 'car']);        // ''
// longestCommonPrefix(['abc', 'abcd', 'abcde']);         // 'abc'

// SOLUTION:
function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }

  return prefix;
}


// ============================================================
// PROBLEM 18 - Advanced
// Write a function that merges two sorted arrays into
// one sorted array without using sort().
// ============================================================

// mergeSorted([1, 3, 5], [2, 4, 6]);    // [1, 2, 3, 4, 5, 6]
// mergeSorted([1, 2, 3], [4, 5, 6]);    // [1, 2, 3, 4, 5, 6]
// mergeSorted([1, 5, 9], [2, 3, 7]);    // [1, 2, 3, 5, 7, 9]

// SOLUTION:
function mergeSorted(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return [...result, ...arr1.slice(i), ...arr2.slice(j)];
}


// ============================================================
// PROBLEM 19 - Advanced
// Write a function that returns the sum of both diagonals
// of a square matrix. Do not count the center element twice
// for odd-sized matrices.
// ============================================================

// diagonalSum([[1, 2, 3],
//              [4, 5, 6],
//              [7, 8, 9]]);   // 25  (1+5+9 + 3+7 = 25)

// diagonalSum([[1, 2],
//              [3, 4]]);       // 10  (1+4 + 2+3 = 10)

// SOLUTION:
function diagonalSum(matrix) {
  let sum = 0;
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    sum += matrix[i][i];
    if (i !== n - 1 - i) sum += matrix[i][n - 1 - i];
  }

  return sum;
}


// ============================================================
// PROBLEM 20 - Advanced
// Write a function that takes a string and returns the
// most frequently occurring character. If there is a tie,
// return the character that appears first in the string.
// ============================================================

// mostFrequentChar('hello');             // 'l'
// mostFrequentChar('aabbbcc');           // 'b'
// mostFrequentChar('abcabc');            // 'a'
// mostFrequentChar('a');                 // 'a'

// SOLUTION:
function mostFrequentChar(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let maxCount = 0;
  let result = '';

  for (let char of str) {
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      result = char;
    }
  }

  return result;
}