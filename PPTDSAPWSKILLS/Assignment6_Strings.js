{/* <aside>
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

</aside> */}

function reconstructPermutation(s) {
    const n = s.length;
    const perm = [];
    let low = 0;
    let high = n;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm.push(low);
        low++;
      } else {
        perm.push(high);
        high--;
      }
    }
  
    perm.push(low);
  
    return perm;
  }
  
  // Example usage:
  const s = 'IDID';
  console.log(reconstructPermutation(s)); //[0, 4, 1, 3, 2]



//   <aside>
// 💡 **Question 2**

// You are given an m x n integer matrix matrix with the following two properties:

// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

// You must write a solution in O(log(m * n)) time complexity.

// **Example 1:**



// **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

// **Output:** true

// </aside>
  

  function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const row = Math.floor(mid / n);
      const col = mid % n;
      const num = matrix[row][col];
  
      if (num === target) {
        return true;
      } else if (num > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return false;
  }
  
  // Example usage:
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ];
  const target = 3;
  console.log(searchMatrix(matrix, target));
  



//   <aside>
// 💡 **Question 3**

// Given an array of integers arr, return *true if and only if it is a valid mountain array*.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]



// **Example 1:**

// **Input:** arr = [2,1]

// **Output:**

// false

// </aside>

function validMountainArray(arr) {
    const n = arr.length;
    
    if (n < 3) {
      return false;
    }
    
    let i = 1;
    
    while (i < n && arr[i] > arr[i - 1]) {
      i++;
    }
    
    if (i === 1 || i === n) {
      return false;
    }
    
    while (i < n && arr[i] < arr[i - 1]) {
      i++;
    }
    
    return i === n;
  }
  
  // Example usage:
  const arr = [2, 1];
  console.log(validMountainArray(arr));
  


//   <aside>
// 💡 **Question 4**

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// </aside>

function findMaxLength(nums) {
    const n = nums.length;
    let maxLen = 0;
    let sum = 0;
    const sumMap = {};
  
    for (let i = 0; i < n; i++) {
      sum += nums[i] === 1 ? 1 : -1;
  
      if (sum === 0) {
        maxLen = i + 1;
      } else if (sum in sumMap) {
        maxLen = Math.max(maxLen, i - sumMap[sum]);
      } else {
        sumMap[sum] = i;
      }
    }
  
    return maxLen;
  }
  
  // Example usage:
  const nums = [0, 1];
  console.log(findMaxLength(nums));
  


//   <aside>
// 💡 **Question 5**

// The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

// - For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

// Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

// **Example 1:**

// **Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

// **Output:** 40

// **Explanation:**

// We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

// </aside>


function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const n = nums1.length;
    let minProductSum = 0;
  
    for (let i = 0; i < n; i++) {
      minProductSum += nums1[i] * nums2[n - 1 - i];
    }
  
    return minProductSum;
  }
  
  // Example usage:
  const nums1 = [5, 3, 4, 2];
  const nums2 = [4, 2, 2, 5];
  console.log(minProductSum(nums1, nums2));
  


//   <aside>
// 💡 **Question 6**

// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]

// **Output:** [1,3,4]

// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

// </aside>


function findOriginalArray(changed) {
    const n = changed.length;
    const original = [];
    changed.sort((a, b) => a - b);
  
    for (let i = 0; i < n; i++) {
      const num = changed[i];
  
      if (num % 2 !== 0) {
        return [];
      }
  
      const half = num / 2;
      const halfIndex = binarySearch(changed, half);
  
      if (halfIndex === -1) {
        return [];
      }
  
      changed.splice(halfIndex, 1);
      original.push(half);
    }
  
    return original;
  }
  
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  console.log(findOriginalArray(changed));
  

//   <aside>
// 💡 **Question 7**

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Example 1:**



// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

// </aside>


function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    let num = 1;
  
    while (rowStart <= rowEnd && colStart <= colEnd) {
      for (let i = colStart; i <= colEnd; i++) {
        matrix[rowStart][i] = num++;
      }
      rowStart++;
  
      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][colEnd] = num++;
      }
      colEnd--;
  
      if (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colEnd; i >= colStart; i--) {
          matrix[rowEnd][i] = num++;
        }
        rowEnd--;
  
        for (let i = rowEnd; i >= rowStart; i--) {
          matrix[i][colStart] = num++;
        }
        colStart++;
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  const n = 3;
  console.log(generateMatrix(n));
  


  <aside>
💡 **Question 8**

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

**Example 1:**



**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]]

</aside>

function multiply(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let p = 0; p < k; p++) {
          if (mat1[i][p] !== 0 && mat2[p][j] !== 0) {
            result[i][j] += mat1[i][p] * mat2[p][j];
          }
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  console.log(multiply(mat1, mat2));
  