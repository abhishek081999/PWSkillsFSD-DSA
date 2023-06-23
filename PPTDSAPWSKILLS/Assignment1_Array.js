// Q1. Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target. 
//  You may assume that each input would have exactly one solution, and you may not use the same element twice. 
//  You can return the answer in any order. Example: Input: nums = [2,7,11,15], target = 9 Output0 [0,1]
//   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1][
// Solution
function twoSum(nums, target) {
    const complementMap = new Map(); // Map to store complements
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complementMap.has(complement)) {
            return [complementMap.get(complement), i];
        }
        
        complementMap.set(nums[i], i);
    }
    
    return []; // No solution found
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);



// Q2. Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place.
//  The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. 
//  Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things: Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
// The remaining elements of nums are not important as well as the size of nums. Return k. Example : Input: nums = [3,2,2,3], val = 3 Output: 2, nums = [2,2,_,_] Explanation: Your function should return k = 2, with the first two elements of nums being 2. 
// It does not matter what you leave beyond the returned k (hence they are underscores)[
    function removeElement(numss, val) {
    let k = 0; // Number of elements not equal to val
    
    for (let i = 0; i < numss.length; i++) {
        if (numss[i] !== val) {
            numss[k] = numss[i];
            k++;
        }
    }
    
    return k;
}

// Example usage
const numss = [3, 2, 2, 3];
const val = 3;
const results = removeElement(numss, val);
console.log(result); // Output: 2
console.log(numss.slice(0, result)); // Output: [2, 2]




// 💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5

// ans
function searchInsert(nums2, targets) {
    let low = 0;
    let high = nums2.length - 1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if (nums2[mid] === targets) {
            return mid;
        } else if (nums2[mid] < targets) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return low;
}

// Example usage
const nums2 = [1, 3, 5, 6];
const targets = 5;
const result2 = searchInsert(nums2, targets);
console.log(result2); // Output: 2


//  **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// **Example 1:**
// Input: digits = [1,2,3]
// Output: [1,2,4]

// **Explanation:** The array represents the integer 123.

// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// solution
function plusOne(digits) {
    const n = digits.length;
    
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    
    // If all digits were 9, add an additional digit
    digits.unshift(1);
    return digits;
}

// Example usage
const digits = [1, 2, 3];
const result3 = plusOne(digits);
console.log(result3); // Output: [1, 2, 4]



// 💡 **Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// **Example 1:**
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// **Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Solution

function merge(nums1, m, nums22, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for merged nums1
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums22[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums22[j];
            j--;
        }
        k--;
    }
    
    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums22[j];
        j--;
        k--;
    }
}

// Example usage
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums22 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums22, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]



// 💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]

// Output: true

// Ans
function containsDuplicate(nums3) {
    const uniqueSet = new Set();
    
    for (let num of nums3) {
        if (uniqueSet.has(num)) {
            return true;
        }
        uniqueSet.add(num);
    }
    
    return false;
}

// Example usage
const nums3 = [1, 2, 3, 1];
const result4 = containsDuplicate(nums3);
console.log(result4); // Output: true


{/* <aside>
💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

</aside> */}
// Ans
function moveZeroes(nums5) {
    let i = 0; // Pointer for non-zero elements
    
    // Move non-zero elements to the front
    for (let j = 0; j < nums5.length; j++) {
        if (nums5[j] !== 0) {
            nums5[i] = nums5[j];
            i++;
        }
    }
    
    // Fill the remaining elements with zeros
    for (let k = i; k < nums5.length; k++) {
        nums5[k] = 0;
    }
}

// Example usage
const nums5 = [0, 1, 0, 3, 12];
moveZeroes(nums5);
console.log(nums5); // Output: [1, 3, 12, 0, 0]



{/* <aside>
💡 **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]

</aside> */}
// Ans
function findErrorNums(nums6) {
    const numSet = new Set();
    let duplicateNum;
    let expectedSum = (nums6.length * (nums6.length + 1)) / 2;
    let actualSum = 0;

    for (let num of nums6) {
        if (numSet.has(num)) {
            duplicateNum = num;
        } else {
            numSet.add(num);
            actualSum += num;
        }
    }

    let missingNum = expectedSum - actualSum;

    return [duplicateNum, missingNum];
}

// Example usage
const nums6 = [1, 2, 2, 4];
const result6 = findErrorNums(nums6);
console.log(result6); // Output: [2, 3]



// Complete Thanks