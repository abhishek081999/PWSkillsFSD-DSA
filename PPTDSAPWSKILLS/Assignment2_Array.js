
// <aside>
// 💡 **Question 1**
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// **Example 1:**
// Input: nums = [1,4,3,2]
// Output: 4

// **Explanation:** All possible pairings (ignoring the ordering of elements) are:

// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4
// </aside>


function arrayPairSum(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let maxSum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    maxSum += nums[i]; // Add the smaller element of each pair
  }

  return maxSum;
}

// Example usage:
const nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums));




// Question 2
// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Example 1:
// Input: candyType = [1,1,2,2,3,3]
// Output: 3

// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

function countCandies(candyType) {
  const uniqueCandies = new Set();

  for (let candy of candyType) {
    uniqueCandies.add(candy);
  }

  return Math.min(uniqueCandies.size, candyType.length / 2);
}

// Example usage:
const candyType = [1, 1, 2, 2, 3, 3];
console.log(countCandies(candyType));




// Question 3
// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].


function findLHS(nums2) {
  const numCount = new Map();
  let maxLen = 0;

  // Count the frequency of each number
  for (let num of nums2) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  // Find the length of the longest harmonious subsequence
  for (let [num, count] of numCount) {
    if (numCount.has(num + 1)) {
      maxLen = Math.max(maxLen, count + numCount.get(num + 1));
    }
  }

  return maxLen;
}

// Example usage:
const nums2 = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums2));


// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1; // Plant a flower
      count++; // Increment the count
      i += 2; // Move to the next plot (skip the adjacent plot)
    } else {
      i++; // Move to the next plot
    }
  }

  return count >= n;
}

// Example usage:
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));


// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Ans
function maximumProduct(nums3) {
  nums3.sort((a, b) => a - b);
  const maxProduct = nums3[nums3.length - 1] * nums3[nums3.length - 2] * nums[nums.length - 3];
  const altMaxProduct = nums3[0] * nums3[1] * nums3[nums3.length - 1];
  return Math.max(maxProduct, altMaxProduct);
}

// Example usage:
const nums3 = [1, 2, 3];
console.log(maximumProduct(nums3));



// Question 6
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise,
// return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4
// Ans
function search(nums4, target) {
  let left = 0;
  let right = nums4.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found
    } else if (nums4[mid] > target) {
      right = mid - 1; // Narrow the search space to the left half
    } else {
      left = mid + 1; // Narrow the search space to the right half
    }
  }

  return -1; // Target not found
}

// Example usage:
const nums4 = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums4, target));






// Question 7
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

// Ans
function isMonotonic(nums7) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums7.length; i++) {
    if (nums7[i] < nums7[i - 1]) {
      isIncreasing = false;
    }
    if (nums7[i] > nums7[i - 1]) {
      isDecreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}

// Example usage:
const nums7 = [1, 2, 2, 3];
console.log(isMonotonic(nums7));

// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
// Ans
function minDifference(nums8, k) {
  if (nums8.length <= 4) {
    return 0; // If the array has 4 or fewer elements, the minimum score will always be 0
  }

  nums8.sort((a, b) => a - b);

  const n = nums8.length;
  const potentialScores = [
    nums8[n - 1] - nums8[3],
    nums8[n - 2] - nums8[2],
    nums8[n - 3] - nums8[1],
    nums8[n - 4] - nums8[0]
  ];

  return Math.min(...potentialScores);
}

// Example usage:
const nums8 = [1];
const k = 0;
console.log(minDifference(nums8, k));
