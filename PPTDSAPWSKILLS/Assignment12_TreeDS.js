// Find K Closest Elements
// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
 
// Example 1:
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104


function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;
  
    // Find the position of x in the array using binary search
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === x) {
        left = mid;
        break;
      } else if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    // Initialize pointers for expanding outwards to find the k closest elements
    let i = left;
    let j = left - 1;
  
    // Expand outwards to find the k closest elements
    while (k > 0) {
      if (i >= arr.length || (j >= 0 && x - arr[j] <= arr[i] - x)) {
        j--;
      } else {
        i++;
      }
      k--;
    }
  
    // Return the subarray containing the k closest elements
    return arr.slice(j + 1, i);
  }
  
  // Test examples
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // Output: [1, 2, 3, 4]
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // Output: [1, 2, 3, 4]
  

// Kth Smallest Element in a Sorted Matrix

// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
// Note that it is the kth smallest element in the sorted order, not the kth distinct element.
// You must find a solution with a memory complexity better than O(n2).

// Example 1:
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:
// Input: matrix = [[-5]], k = 1
// Output: -5
// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 300
// -109 <= matrix[i][j] <= 109
// All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
// 1 <= k <= n2

function kthSmallest(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const count = countSmallerOrEqual(matrix, mid);
  
      if (count < k) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }
  
  function countSmallerOrEqual(matrix, target) {
    const n = matrix.length;
    let count = 0;
    let row = n - 1;
    let col = 0;
  
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= target) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
  
    return count;
  }
  
  // Test examples
  console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8)); // Output: 13
  console.log(kthSmallest([[-5]], 1)); // Output: -5
  

// Top K Frequent Words
// Given an array of strings words and an integer k, return the k most frequent strings.
// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
// Example 1:
// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
// Constraints:
// 1 <= words.length <= 500
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]
 
function kMostFrequentWords(words, k) {
    const wordFreqMap = new Map();
    for (const word of words) {
      wordFreqMap.set(word, (wordFreqMap.get(word) || 0) + 1);
    }
  
    const sortedWords = [...wordFreqMap.keys()].sort((a, b) => {
      const freqDiff = wordFreqMap.get(b) - wordFreqMap.get(a);
      if (freqDiff === 0) {
        return a.localeCompare(b);
      }
      return freqDiff;
    });
  
    return sortedWords.slice(0, k);
  }
  
  // Test examples
  console.log(kMostFrequentWords(["i","love","leetcode","i","love","coding"], 2)); // Output: ["i","love"]
  console.log(kMostFrequentWords(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)); // Output: ["the","is","sunny","day"]
  



// Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.
// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function diameterOfBinaryTree(root) {
    let maxDiameter = 0;
  
    function dfs(node) {
      if (!node) return 0;
  
      const leftHeight = dfs(node.left);
      const rightHeight = dfs(node.right);
  
      // Calculate the diameter at the current node
      maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
  
      // Return the height of the current node
      return 1 + Math.max(leftHeight, rightHeight);
    }
  
    dfs(root);
    return maxDiameter;
  }
  
  // Test examples
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  root1.left.left = new TreeNode(4);
  root1.left.right = new TreeNode(5);
  
  console.log(diameterOfBinaryTree(root1)); // Output: 3
  
  const root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  
  console.log(diameterOfBinaryTree(root2)); // Output: 1
  


// Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
 
// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function isSymmetric(root) {
    if (!root) return true;
    
    const queue = [root, root];
    
    while (queue.length) {
      const node1 = queue.shift();
      const node2 = queue.shift();
      
      if (!node1 && !node2) continue;
      if (!node1 || !node2) return false;
      if (node1.val !== node2.val) return false;
      
      queue.push(node1.left, node2.right);
      queue.push(node1.right, node2.left);
    }
    
    return true;
  }
  
  // Test examples
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(2);
  root1.left.left = new TreeNode(3);
  root1.left.right = new TreeNode(4);
  root1.right.left = new TreeNode(4);
  root1.right.right = new TreeNode(3);
  
  console.log(isSymmetric(root1)); // Output: true
  
  const root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(2);
  root2.left.right = new TreeNode(3);
  root2.right.right = new TreeNode(3);
  
  console.log(isSymmetric(root2)); // Output: false
  





// Kth Largest Integer in the Array
// You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.
// Return the string that represents the kth largest integer in nums.
// Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer, "2" is the second-largest integer, and "1" is the third-largest integer.

// Example 1:

// Input: nums = ["3","6","7","10"], k = 4
// Output: "3"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
// The 4th largest integer in nums is "3".
// Example 2:

// Input: nums = ["2","21","12","1"], k = 3
// Output: "2"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["1","2","12","21"].
// The 3rd largest integer in nums is "2".
// Example 3:

// Input: nums = ["0","0"], k = 2
// Output: "0"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["0","0"].
// The 2nd largest integer in nums is "0".
 

// Constraints:

// 1 <= k <= nums.length <= 104
// 1 <= nums[i].length <= 100
// nums[i] consists of only digits.
// nums[i] will not have any leading zeros.

function kthLargestNumber(nums, k) {
    nums.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length; // Sort by length if lengths are different
      } else {
        return a.localeCompare(b); // Sort lexicographically if lengths are same
      }
    });
    
    return nums[nums.length - k];
  }
  
  // Test examples
  console.log(kthLargestNumber(["3", "6", "7", "10"], 4)); // Output: "3"
  console.log(kthLargestNumber(["2", "21", "12", "1"], 3)); // Output: "2"
  console.log(kthLargestNumber(["0", "0"], 2)); // Output: "0"
  


// Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.
// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function invertTree(root) {
    if (!root) {
      return null;
    }
    
    const queue = [root];
    
    while (queue.length > 0) {
      const node = queue.shift();
      
      // Swap the left and right children of the current node
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      
      // Add the left and right children to the queue for further processing
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    
    return root;
  }
  
  // Test examples
  const root1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
  console.log(invertTree(root1)); // Output: [4,7,2,9,6,3,1]
  
  const root2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  console.log(invertTree(root2)); // Output: [2,3,1]
  
  const root3 = null;
  console.log(invertTree(root3)); // Output: []
  



// Print Binary Tree
// Given the root of a binary tree, construct a 0-indexed m x n string matrix res that represents a formatted layout of the tree. The formatted layout matrix should be constructed using the following rules:

// The height of the tree is height and the number of rows m should be equal to height + 1.
// The number of columns n should be equal to 2height+1 - 1.
// Place the root node in the middle of the top row (more formally, at location res[0][(n-1)/2]).
// For each node that has been placed in the matrix at position res[r][c], place its left child at res[r+1][c-2height-r-1] and its right child at res[r+1][c+2height-r-1].
// Continue this process until all the nodes in the tree have been placed.
// Any empty cells should contain the empty string "".
// Return the constructed matrix res.

 

// Example 1:


// Input: root = [1,2]
// Output: 
// [["","1",""],
//  ["2","",""]]
// Example 2:


// Input: root = [1,2,3,null,4]
// Output: 
// [["","","","1","","",""],
//  ["","2","","","","3",""],
//  ["","","4","","","",""]]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 210].
// -99 <= Node.val <= 99
// The depth of the tree will be in the range [1, 10].

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function printTree(root) {
    // Get the height of the tree
    const height = getHeight(root);
  
    // Initialize the matrix with empty strings
    const rows = height + 1;
    const cols = Math.pow(2, height) - 1;
    const res = new Array(rows).fill(null).map(() => new Array(cols).fill(""));
  
    // Populate the matrix using DFS
    dfs(root, res, 0, 0, cols - 1);
  
    return res;
  }
  
  function getHeight(root) {
    if (!root) {
      return 0;
    }
  
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    
    return 1 + Math.max(leftHeight, rightHeight);
  }
  
  function dfs(root, res, row, left, right) {
    if (!root) {
      return;
    }
  
    // Place the current node value in the middle of the row
    const mid = Math.floor((left + right) / 2);
    res[row][mid] = root.val.toString();
  
    // Recursively place left and right children
    dfs(root.left, res, row + 1, left, mid - 1);
    dfs(root.right, res, row + 1, mid + 1, right);
  }
  
  // Test examples
  const root1 = new TreeNode(1, new TreeNode(2));
  console.log(printTree(root1));
  // Output:
  // [["","1",""],
  //  ["2","",""]]
  
  const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3, null, new TreeNode(4)));
  console.log(printTree(root2));
  // Output:
  // [["","","","1","","",""],
  //  ["","2","","","","3",""],
  //  ["","","4","","","",""]]
  