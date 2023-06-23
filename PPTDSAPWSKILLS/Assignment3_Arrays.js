// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const currSum = nums[i] + nums[left] + nums[right];
  
        if (Math.abs(currSum - target) < Math.abs(closestSum - target)) {
          closestSum = currSum;
        }
  
        if (currSum > target) {
          right--;
        } else if (currSum < target) {
          left++;
        } else {
          return target;
        }
      }
    }
  
    return closestSum;
  }

  const nums = [-1, 2, 1, -4];
const target = 1;

const result = threeSumClosest(nums, target);
console.log(result); // Output: 2


// Question 2
// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

function fourSum(numss, target) {
    nums.sort((a, b) => a - b);
    const results = [];
  
    for (let a = 0; a < numss.length - 3; a++) {
      if (a > 0 && numss[a] === numss[a - 1]) {
        continue;
      }
  
      for (let b = a + 1; b < numss.length - 2; b++) {
        if (b > a + 1 && numss[b] === numss[b - 1]) {
          continue;
        }
  
        let left = b + 1;
        let right = numss.length - 1;
  
        while (left < right) {
          const currSum = numss[a] + numss[b] + numss[left] + numss[right];
  
          if (currSum === target) {
            result.push([numss[a], numss[b], numss[left], numss[right]]);
            left++;
            right--;
  
            while (left < right && numss[left] === numss[left - 1]) {
              left++;
            }
            while (left < right && numss[right] === numss[right + 1]) {
              right--;
            }
          } else if (currSum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return results;
  }
  
  const numss = [1, 0, -1, 0, -2, 2];
const targetss = 0;

const results = fourSum(nums, targetss);
console.log(results);


{/* <aside>
💡 **Question 3**
A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

**Example 1:**
Input: nums = [1,2,3]
Output: [1,3,2]

</aside> */}
// Sol
function nextPermutation(numsss) {
    let i = numsss.length - 2;
  
    // Find the first decreasing element from right to left
    while (i >= 0 && numsss[i] >= numsss[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      // Find the smallest element greater than nums[i] in the suffix
      let j = numsss.length - 1;
      while (j >= 0 && numsss[j] <= numsss[i]) {
        j--;
      }
      swap(numsss, i, j);
    }
  
    // Reverse the suffix
    reverse(numsss, i + 1);
  }
  
  function swap(numsss, i, j) {
    const temp = numsss[i];
    numsss[i] = numsss[j];
    numsss[j] = temp;
  }
  
  function reverse(numsss, start) {
    let i = start;
    let j = numsss.length - 1;
    while (i < j) {
      swap(numsss, i, j);
      i++;
      j--;
    }
  }

  const numsss = [1, 2, 3];
nextPermutation(numsss);
console.log(numsss); // Output: [1, 3, 2]

  

// Question 4
// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
function searchInsert(nums0, target) {
    let left = 0;
    let right = nums0.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums0[mid] === target) {
        return mid;
      } else if (target < nums0[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  const nums0 = [1, 3, 5, 6];
const target0 = 5;

const index = searchInsert(nums, target0);
console.log(index); // Output: 2


{/* <aside>
💡 **Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

</aside> */}

function plusOne(digits) {
    let carry = 1;
  
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] += carry;
  
      if (digits[i] < 10) {
        carry = 0;
        break;
      }
  
      digits[i] = 0;
    }
  
    if (carry === 1) {
      digits.unshift(1);
    }
  
    return digits;
  }
  
  const digits = [1, 2, 3];
const resulto = plusOne(digits);
console.log(resulto); // Output: [1, 2, 4]


// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

function singleNumber(numsq) {
    let result = 0;
  
    for (let i = 0; i < numsq.length; i++) {
      result ^= numsq[i];
    }
  
    return result;
  }
  const numsq = [2, 2, 1];
const resultq= singleNumber(numsq);
console.log(resultq); // Output: 1



// Question 7
// You are given an inclusive range [lower, upper] and a sorted unique integer array
// nums, where all elements are within the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in
// nums.

// Return the shortest sorted list of ranges that exactly covers all the missing
// numbers. That is, no element of nums is included in any of the ranges, and each
// missing number is covered by one of the ranges.

// Example 1:
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

// Explanation: The ranges are:
// [2,2]
// [4,49]
// [51,74]
// [76,99]

function findMissingRanges(numsi, lower, upper) {
    const result = [];
    let start = lower;
  
    for (let i = 0; i < numsi.length; i++) {
      if (numsi[i] > start) {
        result.push(getRange(start, numsi[i] - 1));
      }
  
      start = numsi[i] + 1;
    }
  
    if (start <= upper) {
      result.push(getRange(start, upper));
    }
  
    return result;
  }
  
  function getRange(start, end) {
    if (start === end) {
      return [start.toString()];
    } else {
      return [start.toString(), end.toString()];
    }
  }
  

  const numsi = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;

const resulti = findMissingRanges(numsi, lower, upper);
console.log(resulti);


// Question 8
// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false;
      }
    }
  
    return true;
  }
  
  const intervals = [[0, 30], [5, 10], [15, 20]];
const resultb = canAttendMeetings(intervals);
console.log(resultb); // Output: false
