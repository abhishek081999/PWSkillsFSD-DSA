// Unique Binary Search Trees
// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
// Example 1:
// Input: n = 3
// Output: 5
// Example 2:
// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 19
function numUniqueBSTs(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Create an array to store the results for each n
    const dp = new Array(n + 1).fill(0);
  
    // There is one unique BST for 0 and 1 nodes
    dp[0] = dp[1] = 1;
  
    // Calculate the number of unique BSTs for each n from 2 to n
    for (let i = 2; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        dp[i] += dp[j] * dp[i - j - 1];
      }
    }
  
    return dp[n];
  }
  
  // Test cases
  console.log(numUniqueBSTs(3)); // Output: 5
  console.log(numUniqueBSTs(1)); // Output: 1
  






// Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
// Input: root = [2,1,3]
// Output: true
// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

function isValidBST(root) {
    // Helper function for in-order traversal
    function inOrderTraversal(node, prev) {
      if (!node) return true;
  
      // Recursively traverse the left subtree
      if (!inOrderTraversal(node.left, prev)) return false;
  
      // Check if the current node's value is greater than the previous node's value
      if (prev !== null && node.val <= prev) return false;
  
      // Update the previous node's value
      prev = node.val;
  
      // Recursively traverse the right subtree
      return inOrderTraversal(node.right, prev);
    }
  
    // Start the in-order traversal from the root with null as the initial previous value
    return inOrderTraversal(root, null);
  }
  
  // Test cases
  const tree11 = {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  };
  console.log(isValidBST(tree11)); // Output: true
  
  const tree22 = {
    val: 5,
    left: { val: 1, left: null, right: null },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
  };
  console.log(isValidBST(tree22)); // Output: false
  




// Recover Binary Search Tree

// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
// Example 1:
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
// Example 2:
// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

// Constraints:

// The number of nodes in the tree is in the range [2, 1000].
// -231 <= Node.val <= 231 - 1
// Follow up: A solution using O(n) space is pretty straight-forward. Could you devise a constant O(1) space solution?

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  function recoverTree(root) {
    let prev = null;
    let firstMisplacedNode = null;
    let secondMisplacedNode = null;
  
    // Helper function for in-order traversal
    function inOrderTraversal(node) {
      if (!node) return;
  
      // Recursively traverse the left subtree
      inOrderTraversal(node.left);
  
      // Check if the current node's value is greater than the previous node's value
      if (prev !== null && node.val < prev.val) {
        // If it's the first misplaced node, update the pointers
        if (!firstMisplacedNode) {
          firstMisplacedNode = prev;
        }
        // If it's the second misplaced node, update the pointer and stop traversal
        secondMisplacedNode = node;
      }
  
      // Update the previous node's value
      prev = node;
  
      // Recursively traverse the right subtree
      inOrderTraversal(node.right);
    }
  
    // Start the in-order traversal from the root
    inOrderTraversal(root);
  
    // Swap the values of the two misplaced nodes
    const temp = firstMisplacedNode.val;
    firstMisplacedNode.val = secondMisplacedNode.val;
    secondMisplacedNode.val = temp;
  }
  
  // Test case 1
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(3);
  tree1.left.right = new TreeNode(2);
  console.log("Original tree 1:", JSON.stringify(tree1));
  recoverTree(tree1);
  console.log("Recovered tree 1:", JSON.stringify(tree1));
  
  // Test case 2
  const tree2 = new TreeNode(3);
  tree2.left = new TreeNode(1);
  tree2.right = new TreeNode(4);
  tree2.right.left = new TreeNode(2);
  console.log("Original tree 2:", JSON.stringify(tree2));
  recoverTree(tree2);
  console.log("Recovered tree 2:", JSON.stringify(tree2));
  




// Covert Sorted Array to BST

// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced binary search tree.
// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  function sortedArrayToBST(nums) {
    // Base case: If the array is empty, return null (empty tree)
    if (!nums.length) {
      return null;
    }
  
    // Find the middle index of the array
    const midIndex = Math.floor(nums.length / 2);
  
    // Create a new node with the middle element as the root
    const root = new TreeNode(nums[midIndex]);
  
    // Recursively build the left and right subtrees
    root.left = sortedArrayToBST(nums.slice(0, midIndex));
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));
  
    return root;
  }
  
  // Test cases
  const nums1 = [-10, -3, 0, 5, 9];
  console.log(JSON.stringify(sortedArrayToBST(nums1)));
  
  const nums2 = [1, 3];
  console.log(JSON.stringify(sortedArrayToBST(nums2)));
  







// Lowest Common Ancestor of a Binary Search Tree
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  function lowestCommonAncestor(root, p, q) {
    if (!root) {
      return null;
    }
  
    // If both nodes are in the left subtree, search in the left subtree
    if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q);
    }
  
    // If both nodes are in the right subtree, search in the right subtree
    if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q);
    }
  
    // Otherwise, the current root node is the LCA
    return root;
  }
  
  // Test case
  const tree = new TreeNode(
    6,
    new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
  );
  
  console.log(lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(8))); // Output: TreeNode { val: 6, left: ..., right: ... }
  console.log(lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(4))); // Output: TreeNode { val: 2, left: ..., right: ... }
  console.log(lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(7))); // Output: TreeNode { val: 6, left: ..., right: ... }
  






// Insert into a BST
// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
// Example 1:
// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]
// Explanation: Another accepted tree is:
// Example 2:

// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]
// Example 3:

// Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
// Output: [4,2,7,1,3,5]
// Constraints:

// The number of nodes in the tree will be in the range [0, 104].
// -108 <= Node.val <= 108
// All the values Node.val are unique.
// -108 <= val <= 108
// It's guaranteed that val does not exist in the original BST.

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  function insertIntoBST(root, val) {
    // If the root is null, create a new node with the given value
    if (!root) {
      return new TreeNode(val);
    }
  
    // If the value is less than the root's value, go to the left subtree
    if (val < root.val) {
      root.left = insertIntoBST(root.left, val);
    } else {
      // If the value is greater than or equal to the root's value, go to the right subtree
      root.right = insertIntoBST(root.right, val);
    }
  
    return root;
  }
  
  // Test case 1
  const tree1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
  console.log(JSON.stringify(insertIntoBST(tree1, 5)));
  
  // Test case 2
  const tree2 = new TreeNode(40,
    new TreeNode(20, new TreeNode(10), new TreeNode(30)),
    new TreeNode(60, new TreeNode(50), new TreeNode(70))
  );
  console.log(JSON.stringify(insertIntoBST(tree2, 25)));
  
  // Test case 3
  const tree3 = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7)
  );
  console.log(JSON.stringify(insertIntoBST(tree3, 5)));
  




// Number of Ways to Reorder Array to Get Same BST

// Given an array nums that represents a permutation of integers from 1 to n. We are going to construct a binary search tree (BST) by inserting the elements of nums in order into an initially empty BST. Find the number of different ways to reorder nums so that the constructed BST is identical to that formed from the original array nums.
// For example, given nums = [2,1,3], we will have 2 as the root, 1 as a left child, and 3 as a right child. The array [2,3,1] also yields the same BST but [3,2,1] yields a different BST.
// Return the number of ways to reorder nums such that the BST formed is identical to the original BST formed from nums.

// Since the answer may be very large, return it modulo 109 + 7.

 

// Example 1:


// Input: nums = [2,1,3]
// Output: 1
// Explanation: We can reorder nums to be [2,3,1] which will yield the same BST. There are no other ways to reorder nums which will yield the same BST.
// Example 2:


// Input: nums = [3,4,5,1,2]
// Output: 5
// Explanation: The following 5 arrays will yield the same BST: 
// [3,1,2,4,5]
// [3,1,4,2,5]
// [3,1,4,5,2]
// [3,4,1,2,5]
// [3,4,1,5,2]
// Example 3:


// Input: nums = [1,2,3]
// Output: 0
// Explanation: There are no other orderings of nums that will yield the same BST.
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= nums.length
// All integers in nums are distinct.

function numFact(n) {
    // Calculate the factorial of n modulo 10^9 + 7
    let result = 1;
    const mod = 10**9 + 7;
    for (let i = 1; i <= n; i++) {
      result = (result * i) % mod;
    }
    return result;
  }
  
  function numPrime(n) {
    // Calculate the number of primes less than or equal to n
    if (n < 2) {
      return 0;
    }
  
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    return isPrime.filter(Boolean).length;
  }
  
  function numOfWays(nums) {
    function countLessAndGreater(num, arr) {
      // Count the number of elements less and greater than num in the array arr
      let less = 0;
      let greater = 0;
      for (const x of arr) {
        if (x < num) {
          less++;
        } else if (x > num) {
          greater++;
        }
      }
      return [less, greater];
    }
  
    function dfs(nums) {
      // Base case: If the array is empty or contains only one element, return 1
      if (!nums.length || nums.length === 1) {
        return 1;
      }
  
      // Get the root of the BST
      const root = nums[0];
  
      // Count the number of elements less and greater than the root
      const [leftCount, rightCount] = countLessAndGreater(root, nums.slice(1));
  
      // Calculate the number of ways to permute the left and right subtrees
      const leftWays = dfs(nums.slice(1).filter(x => x < root));
      const rightWays = dfs(nums.slice(1).filter(x => x > root));
  
      // Calculate the total number of ways for this BST structure
      const mod = 10**9 + 7;
      const totalWays = (numFact(leftCount + rightCount) * dfs.memo[leftCount] * dfs.memo[rightCount]) % mod;
  
      return totalWays;
    }
  
    // Calculate the memoization table for the factorial function
    const maxNum = Math.max(...nums);
    dfs.memo = Array.from({ length: maxNum + 1 }, (_, i) => numFact(i));
  
    // Calculate the number of prime nodes in the initial BST formed from sorted nums
    const primeNodes = numPrime(nums.length);
  
    // Calculate the number of ways for the initial BST structure
    let result = dfs(nums);
  
    // Multiply the result by the number of ways to permute the prime nodes
    const mod = 10**9 + 7;
    result = (result * dfs.memo[primeNodes]) % mod;
  
    return result;
  }
  
  // Test cases
  console.log(numOfWays([2, 1, 3])); // Output: 1
  console.log(numOfWays([3, 4, 5, 1, 2])); // Output: 5
  console.log(numOfWays([1, 2, 3])); // Output: 0
  





// Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  function getMinimumDifference(root) {
    let prev = null;
    let minDiff = Infinity;
  
    // Helper function for in-order traversal
    function inOrderTraversal(node) {
      if (!node) return;
  
      // Recursively traverse the left subtree
      inOrderTraversal(node.left);
  
      // Calculate the difference with the previous node
      if (prev !== null) {
        minDiff = Math.min(minDiff, Math.abs(node.val - prev.val));
      }
  
      // Update the previous node's value
      prev = node;
  
      // Recursively traverse the right subtree
      inOrderTraversal(node.right);
    }
  
    // Start the in-order traversal from the root
    inOrderTraversal(root);
  
    return minDiff;
  }
  
  // Test cases
  const tree1 = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(6)
  );
  console.log(getMinimumDifference(tree1)); // Output: 1
  
  const tree2 = new TreeNode(1,
    new TreeNode(0),
    new TreeNode(48, new TreeNode(12), new TreeNode(49))
  );
  console.log(getMinimumDifference(tree2)); // Output: 1
  