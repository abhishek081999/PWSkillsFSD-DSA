{/* <aside>
💡 **Question 1**

**Given an m x n matrix, return *all elements of the* matrix *in spiral order*.**

**Example 1:**


**Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]**

**Output: [1,2,3,6,9,8,7,4,5]**


**Solution:**

**TC: O(n)**

**SC: O(1)**

</aside> */}
function spiralOrder(matrix) {
    const result = [];
    const rows = matrix.length;
    const columns = matrix[0].length;
    let up = 0;
    let left = 0;
    let right = columns - 1;
    let down = rows - 1;
 
    while (result.length < rows * columns) {
        // Traverse from left to right.
        for (let col = left; col <= right; col++) {
            result.push(matrix[up][col]);
        }
        // Traverse downwards.
        for (let row = up + 1; row <= down; row++) {
            result.push(matrix[row][right]);
        }
        // Make sure we are now on a different row.
        if (up !== down) {
            // Traverse from right to left.
            for (let col = right - 1; col >= left; col--) {
                result.push(matrix[down][col]);
            }
        }
        // Make sure we are now on a different column.
        if (left !== right) {
            // Traverse upwards.
            for (let row = down - 1; row > up; row--) {
                result.push(matrix[row][left]);
            }
        }
        left++;
        right--;
        up++;
        down--;
    }
 
    return result;
}




{/* <aside>
💡 **Question 2**

**Given a square matrix mat, return the sum of the matrix diagonals.**

**Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.**

**Example 1:**

</aside>
**Input: mat = [[1,2,3],**

**[4,5,6],**

**[7,8,9]]**

**Output: 25**

**Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25**

**Notice that element mat[1][1] = 5 is counted only once.**

**Solution:**

**TC: O(m+n)**

**SC: O(1)** */}

function diagonalSum(mat) {
    const n = mat.length;
    let ans = 0;
 
    for (let i = 0; i < n; i++) {
        // Add elements from primary diagonal.
        ans += mat[i][i];
        // Add elements from secondary diagonal.
        ans += mat[n - 1 - i][i];
    }
 
    // If n is odd, subtract the middle element as it's added twice.
    if (n % 2 !== 0) {
        ans -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    return ans;
}




// <aside>
// 💡 **Question 3**

// **Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return *the number of negative numbers in* grid.**

// **Example 1:**

// **Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]**

// **Output: 8**

// **Explanation: There are 8 negatives number in the matrix.**

// **TC: O(m*n)**

// **SC : O(1)**

// </aside>


class Solution {
    countNegatives(grid) {
        let count = 0;
        const n = grid[0].length;
        let currRowNegativeIndex = n - 1;
 
   for (let row of grid) {
        while (currRowNegativeIndex >= 0 && row[currRowNegativeIndex] < 0) {
                currRowNegativeIndex--;
            }
            count += (n - (currRowNegativeIndex + 1));
        }
 
        return count;
    }
}




{/* <aside>
💡 Question 4

**You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return *the wealth that the richest customer has.***

**A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.**

**Example 1:**

**Input: accounts = [[1,2,3],[3,2,1]]**

**Output: 6**

**Explanation:**

**1st customer has wealth = 1 + 2 + 3 = 6**

**2nd customer has wealth = 3 + 2 + 1 = 6**

**Both customers are considered the richest with a wealth of 6 each, so return 6.**

**Solution:**

**TC: O(m*n)**

**SC : O(1)**

</aside> */}

class Solution {
    maximumWealth(accounts) {
        let maxWealthSoFar = 0;
 
        for (let account of accounts) {
            let currCustomerWealth = account.reduce((acc, curr) => acc + curr, 0);
            maxWealthSoFar = Math.max(maxWealthSoFar, currCustomerWealth);
        }
 
        return maxWealthSoFar;
    }
}