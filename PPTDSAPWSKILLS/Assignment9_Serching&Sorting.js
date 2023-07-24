// Q1  Given a 1-indexed array of integers numbers that are already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
// Return the indices of the two numbers, index1, and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].


function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
  
    while (left < right) {
      const total = numbers[left] + numbers[right];
  
      if (total === target) {
        return [left + 1, right + 1]; // Adding 1 to 0-indexed indices to get 1-indexed indices
      } else if (total < target) {
        left++;
      } else {
        right--;
      }
    }
  
    // It's guaranteed that there is exactly one solution, so no need to handle this case explicitly.
  }
  
  // Test example
  const numbers = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(numbers, target);
  console.log(result); // Output: [1, 2]
  





// Q2
// Given an array of integer nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If the target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]


function searchRange(nums, target) {
    let leftIndex = findIndex(nums, target, true);
    let rightIndex = findIndex(nums, target, false);
  
    return [leftIndex, rightIndex];
  }
  
  function findIndex(nums, target, findFirst) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        result = mid;
  
        if (findFirst) {
          right = mid - 1; // Continue searching on the left side to find the first occurrence
        } else {
          left = mid + 1; // Continue searching on the right side to find the last occurrence
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  // Test example
  const nums = [5, 7, 7, 8, 8, 10];
  const targets = 8;
  const results = searchRange(nums, targets);
  console.log(results); // Output: [3, 4]
  








// Q3
// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.


function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[mid + 1]) {
        // If the mid element is greater than the next element, a peak might be on the left side.
        right = mid;
      } else {
        // If the mid element is not greater than the next element, a peak might be on the right side.
        left = mid + 1;
      }
    }
  
    // At the end of the loop, left and right pointers will be at the same position, which is a peak element.
    // It can be any peak element if there are multiple peaks.
    return left;
  }
  
  // Test example
  const numss = [1, 2, 3, 1];
  const resultss = findPeakElement(numss);
  console.log(resultss); // Output: 2
  








// Q4
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 7
// Output: 4


function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found, return the index.
      } else if (nums[mid] < target) {
        left = mid + 1; // Target might be on the right side.
      } else {
        right = mid - 1; // Target might be on the left side.
      }
    }
  
    // If the loop exits, the target is not found, and the left pointer will point to the index where the target should be inserted.
    return left;
  }
  
  // Test examples
  const nums1 = [1, 3, 5, 6];
  const target1 = 5;
  const result1 = searchInsert(nums1, target1);
  console.log(result1); // Output: 2
  
  const nums2 = [1, 3, 5, 6];
  const target2 = 7;
  const result2 = searchInsert(nums2, target2);
  console.log(result2); // Output: 4
  






// Q5
// Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element). 
// Input: A[]={3, 3, 4, 2, 4, 4, 2, 4, 4}
// Output: 4
// Explanation: The frequency of 4 is 5 which is greater than half of the size of the array size. 


function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;
  
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
  
      count += num === candidate ? 1 : -1;
    }
  
    // At the end of the loop, the candidate is the potential majority element.
    // To ensure it appears more than n/2 times, verify its count.
    count = 0;
    for (let num of nums) {
      if (num === candidate) {
        count++;
      }
    }
  
    return count > nums.length / 2 ? candidate : null;
  }
  
  // Test example
  const numsq = [3, 3, 4, 2, 4, 4, 2, 4, 4];
  const resultq = findMajorityElement(numsq);
  console.log(resultq); // Output: 4
  





// Q6
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether the version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.


function isBadVersion(version) {
    // This is just a mock implementation of the API.
    // In a real scenario, this function would be provided externally.
    return version >= 4;
  }
  
  function firstBadVersion(n) {
    let left = 1;
    let right = n;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Test example
  const n = 5;
  const resulte = firstBadVersion(n);
  console.log(resulte); // Output: 4
  
  




// Q7
// Given an array of integers, find the inversion of an array. Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
// N=5, arr[] = {2, 4, 1, 3, 5}
// Output: 3
// Explanation: (2,1) (4,1) and (4,3) forms an inversion in an array



function countInversions(arr) {
    let count = 0;
  
    function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
  
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
  
      const sortedLeft = mergeSort(left);
      const sortedRight = mergeSort(right);
  
      return merge(sortedLeft, sortedRight);
    }
  
    function merge(left, right) {
      const merged = [];
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i]);
          i++;
        } else {
          merged.push(right[j]);
          j++;
          count += left.length - i; // Increment count for the inversions found
        }
      }
  
      return merged.concat(left.slice(i)).concat(right.slice(j));
    }
  
    mergeSort(arr);
  
    return count;
  }
  
  // Test example
  const arr = [2, 4, 1, 3, 5];
  const resultt = countInversions(arr);
  console.log(resultt); // Output: 3
  





// Q8
// Given three arrays sorted in non-decreasing order, print all common elements in these arrays.
// ar1[] = {1, 5, 10, 20, 40, 80} 
// ar2[] = {6, 7, 20, 80, 100} 
// ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
// Output: 20, 80


function findCommonElements(ar1, ar2, ar3) {
    const commonElements = [];
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < ar1.length && j < ar2.length && k < ar3.length) {
      if (ar1[i] === ar2[j] && ar2[j] === ar3[k]) {
        commonElements.push(ar1[i]);
        i++;
        j++;
        k++;
      } else if (ar1[i] < ar2[j]) {
        i++;
      } else if (ar2[j] < ar3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return commonElements;
  }
  
  // Test example
  const ar1 = [1, 5, 10, 20, 40, 80];
  const ar2 = [6, 7, 20, 80, 100];
  const ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
  const resulti = findCommonElements(ar1, ar2, ar3);
  console.log(resulti); // Output: [20, 80]
  