{/* <aside>
💡 **Question 1**

Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

</aside>
**Example 1:**

**Input:** matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
**Output:** true
**Explanation:**
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

**Solution:**

**Time Complexity:** *O*(*M*∗*N*), as defined in the problem statement.

**Space Complexity:** *O*(1). */}
function isToeplitzMatrix(matrix) {
    for (let r = 0; r < matrix.length; ++r) {
        for (let c = 0; c < matrix[0].length; ++c) {
            if (r > 0 && c > 0 && matrix[r-1][c-1] !== matrix[r][c]) {
                return false;
            }
        }
    }
    return true;
}



{/* <aside>
💡 ******************Question 2******************

Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

</aside> */}
// **Example 1:**

// **Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]

// **Output:**

// [[1,4,7],[2,5,8],[3,6,9]]

// ******************Solution:******************

// **Intuition**

// Observe how the cells move in groups when we rotate the image.

// 


function transpose(A) {
    const R = A.length;
    const C = A[0].length;
    const ans = new Array(C).fill(0).map(() => new Array(R));
    for (let r = 0; r < R; ++r) {
        for (let c = 0; c < C; ++c) {
            ans[c][r] = A[r][c];
        }
    }
    return ans;
}





// <aside>
// 💡 ********************Question 3********************

// You are given an n x n 2D matrix representing an image, rotate the image by **90** degrees (clockwise).

// You have to rotate the image **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

// ********Example 1:********

// {/* ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/349c356c-061b-4f09-819b-32ac3dcb8cdf/Untitled.png) */}

// **Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]

// **Output:** [[7,4,1],[8,5,2],[9,6,3]]

// ******************Solution:******************

// **Intuition and Algorithm**

// The transpose of a matrix A with dimensions R x C is a matrix *ans* with dimensions C x R for which ans[c][r] = A[r][c].

// We initialize a new matrix *ans* representing the answer. Then, we'll copy each entry of the matrix as appropriate.

// **Complexity Analysis**

// **Time Complexity:** *O*(*R*∗*C*), where *R* and *C* are the number of rows and columns in the given matrix A.

// **Space Complexity:** *O*(*R*∗*C*), the space used by the answer.

// </aside>

function rotate(matrix) {
    const n = matrix.length;
    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            const temp = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
            matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
}




// <aside>
// 💡 ******************Question 4******************

// Given a non-empty array of non-negative integers nums, the **degree** of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// **Example 1:**

// **Input:** nums = [1,2,2,3,1]

// **Output:** 2

// **Explanation:**

// The input array has a degree of 2 because both elements 1 and 2 appear twice.

// Of the subarrays that have the same degree:

// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]

// The shortest length is 2. So return 2.

// **************************************Complexity Analysis**************************************

// - Time Complexity: O(m*n)
// - Space Complexity: O(1)

// ******************Solution:******************

// </aside>


function maximumWealth(accounts) {
    // Initialize the maximum wealth seen so far to 0 (the minimum wealth possible)
    let maxWealthSoFar = 0;
    
    // Iterate over accounts
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        // For each account, initialize the sum to 0
        let currCustomerWealth = 0;
        // Add the money in each bank
        for (let j = 0; j < account.length; j++) {
            const money = account[j];
            currCustomerWealth += money;
        }
        // Update the maximum wealth seen so far if the current wealth is greater
        maxWealthSoFar = Math.max(maxWealthSoFar, currCustomerWealth);
    }
    
    // Return the maximum wealth
    return maxWealthSoFar;
}


{/* <aside>
💡 ********************Question 5********************

Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.

You must do it [in place](https://en.wikipedia.org/wiki/In-place_algorithm).

**Example 1:**

</aside>

**Input:** matrix = [[1,1,1],[1,0,1],[1,1,1]]

**Output:** [[1,0,1],[0,0,0],[1,0,1]]

********Solution:********

**Complexity Analysis**

- **Time Complexity:** *O*(*M*×*N*)
- **Space Complexity:** *O*(1) */}


function setZeroes(matrix) {
    let isCol = false;
    const R = matrix.length;
    const C = matrix[0].length;

    for (let i = 0; i < R; i++) {
        if (matrix[i][0] === 0) {
            isCol = true;
        }

        for (let j = 1; j < C; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for (let i = 1; i < R; i++) {
        for (let j = 1; j < C; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let j = 0; j < C; j++) {
            matrix[0][j] = 0;
        }
    }

    if (isCol) {
        for (let i = 0; i < R; i++) {
            matrix[i][0] = 0;
        }
    }
}



// <aside>
// 💡 ********************Question 6********************

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// **Example 1:**


// **Input:** mat = [[1,2],[3,4]], r = 1, c = 4

// **Output:**

// [[1,2,3,4]]

// ******************Solution:******************

// The simplest method is to extract all the elements of the given matrix by reading the elements in a row-wise fashion. In this implementation, we use a queue to put the extracted elements. Then, we can take out the elements of the queue formed in a serial order and arrange the elements in the resultant required matrix in a row-by-row order again.

// The formation of the resultant matrix won't be possible if the number of elements in the original matrix isn't equal to the number of elements in the resultant matrix.

// **Complexity Analysis**

// - **Time complexity:** *O*(*m*⋅*n*). We traverse over *m*⋅*n* elements twice. Here, *m* and *n* refer to the number of rows and columns of the given matrix respectively.
// - **Space complexity:** *O*(*m*⋅*n*). The queue formed will be of size *m*⋅*n*.
// </aside>


function matrixReshape(nums, r, c) {
    const res = new Array(r).fill(0).map(() => new Array(c).fill(0));
    if (nums.length === 0 || r * c !== nums.length * nums[0].length)
        return nums;
    const queue = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            queue.push(nums[i][j]);
        }
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            res[i][j] = queue.shift();
        }
    }
    return res;
}



{/* <aside>
💡 ********************Question 7********************

Given an n x n binary matrix image, flip the image **horizontally**, then invert it, and return *the resulting image*.

To flip an image horizontally means that each row of the image is reversed.

- For example, flipping [1,1,0] horizontally results in [0,1,1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

- For example, inverting [0,1,1] results in [1,0,0].

**Example 1:**

**Input:** image = [[1,1,0],[1,0,1],[0,0,0]]

**Output:** [[1,0,0],[0,1,0],[1,1,1]]

**Explanation:** First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].

Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

******************Solution:******************

**Intuition and Algorithm**

We can do this in place. In each row, the ith value from the left is equal to the inverse of the ith value from the right.

We use (C+1) / 2 (with floor division) to iterate over all indexes i in the first half of the row, including the center.

**Complexity Analysis**

**Time Complexity:** *O*(*N*), where N is the total number of elements in A.

**Space Complexity:** *O*(1) in *additional* space complexity.

</aside> */}


function flipAndInvertImage(A) {
    const C = A[0].length;
    for (let row of A) {
        for (let i = 0; i < Math.floor((C + 1) / 2); ++i) {
            const tmp = row[i] ^ 1;
            row[i] = row[C - 1 - i] ^ 1;
            row[C - 1 - i] = tmp;
        }
    }
    return A;
}