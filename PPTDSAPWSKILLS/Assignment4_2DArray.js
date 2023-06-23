{/* <aside>
💡 **Question 1**
Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1:**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

**Explanation:** Only 1 and 5 appeared in the three arrays.

</aside> */}
// Ans
function findCommonElements(arr1, arr2, arr3) {
    let ptr1 = 0;
    let ptr2 = 0;
    let ptr3 = 0;
    const result = [];
  
    while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
      if (arr1[ptr1] === arr2[ptr2] && arr2[ptr2] === arr3[ptr3]) {
        result.push(arr1[ptr1]);
        ptr1++;
        ptr2++;
        ptr3++;
      } else if (arr1[ptr1] < Math.min(arr2[ptr2], arr3[ptr3])) {
        ptr1++;
      } else if (arr2[ptr2] < Math.min(arr1[ptr1], arr3[ptr3])) {
        ptr2++;
      } else if (arr3[ptr3] < Math.min(arr1[ptr1], arr2[ptr2])) {
        ptr3++;
      }
    }
  
    return result;
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  
  const result = findCommonElements(arr1, arr2, arr3);
  console.log(result); //[1, 5]
  



//   <aside>
// 💡 **Question 2**

// Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

// - answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
// - answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

// **Note** that the integers in the lists may be returned in **any** order.

// **Example 1:**

// **Input:** nums1 = [1,2,3], nums2 = [2,4,6]

// **Output:** [[1,3],[4,6]]

// **Explanation:**

// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

// </aside>
// Ans
  function findDistinctIntegers(nums1, nums2) {
    const set1 = new Set();
    const set2 = new Set();
  
    for (const num of nums1) {
      set1.add(num);
    }
  
    for (const num of nums2) {
      set2.add(num);
    }
  
    const result1 = [];
    const result2 = [];
  
    for (const num of nums1) {
      if (!set2.has(num)) {
        result1.push(num);
      }
    }
  
    for (const num of nums2) {
      if (!set1.has(num)) {
        result2.push(num);
      }
    }
  
    return [result1, result2];
  }

  const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const results = findDistinctIntegers(nums1, nums2);
console.log(results); //[[1, 3], [4, 6]]


{/* <aside>
💡 **Question 3**
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

</aside> */}
function transposeMatrix(matrix) {
    const transpose = [];
  
    for (let col = 0; col < matrix[0].length; col++) {
      const row = [];
  
      for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        row.push(matrix[rowIdx][col]);
      }
  
      transpose.push(row);
    }
  
    return transpose;
  }


  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const resultss = transposeMatrix(matrix);
  console.log(resultss);
// //   [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]

{/* <aside>
💡 **Question 4**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

**Example 1:**

Input: nums = [1,4,3,2]

Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3

2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3

3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

So the maximum possible sum is 4.

</aside> */}

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let maxSum = 0;
  
    for (let i = 0; i < nums.length; i += 2) {
      maxSum += nums[i];
    }
  
    return maxSum;
  }

  const nums = [1, 4, 3, 2];
const resulto = arrayPairSum(nums);
console.log(resulto);//4

  
{/* <aside>
💡 **Question 5**
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

**Example 1:**

[]()

![v2.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bd91cfa-d2b1-47b3-8197-a72e8dcfff4b/v2.jpg)

**Input:** n = 5

**Output:** 2

**Explanation:** Because the 3rd row is incomplete, we return 2.

</aside> */}

function arrangeCoins(n) {
    let completeRows = 0;
    let totalCoins = 0;
  
    for (let i = 1; ; i++) {
      totalCoins += i;
  
      if (totalCoins > n) {
        break;
      }
  
      completeRows++;
    }
  
    return completeRows;
  }
  
  const n = 5;
  const resulti = arrangeCoins(n);
  console.log(resulti);//2
  


//   <aside>
// 💡 **Question 6**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

// </aside>
function sortedSquares(nums) {
    const result = [];
  
    for (const num of nums) {
      const square = num * num;
      result.push(square);
    }
  
    result.sort((a, b) => a - b);
  
    return result;
  }
  const numsy = [-4, -1, 0, 3, 10];
const resulty = sortedSquares(numsy);
console.log(resulty);//[0, 1, 9, 16, 100]



{/* <aside>
💡 **Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Example 1:**

![q4.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d0890d0-7bc7-4f59-be8e-352d9f3c1c52/q4.jpg)

**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

</aside> */}

// Ans
function maxCount(m, ny, ops) {
    let minAi = m;
    let minBi = ny;
  
    for (const [ai, bi] of ops) {
      minAi = Math.min(minAi, ai);
      minBi = Math.min(minBi, bi);
    }
  
    return minAi * minBi;
  }

  const m = 3;
const ny = 3;
const ops = [[2, 2], [3, 3]];

const resulta = maxCount(m, ny, ops);
console.log(resulta);//4


{/* <aside>
💡 **Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

**Example 1:**

**Input:** nums = [2,5,1,3,4,7], n = 3

**Output:** [2,3,5,4,1,7]

**Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

</aside> */}

function shuffle(numsb, nw) {
    const result = [];
  
    for (let i = 0; i < nw; i++) {
      result.push(numsb[i]);
      result.push(numsb[i + nw]);
    }
  
    return result;
  }
  
  const numsb = [2, 5, 1, 3, 4, 7];
const nw = 3;
const resultb = shuffle(numsb, nw);
console.log(resultb);//[2, 3, 5, 4, 1, 7]


  

  