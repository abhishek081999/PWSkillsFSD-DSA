// Q1
// Delete Node in a Linked List 
// There is a singly-linked list head and we want to delete a node node in it.

// You are given the node to be deleted node. You will not be given access to the first node of head.

// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Custom testing:

// For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
// We will build the linked list and pass the node to your function.
// The output will be the entire list after calling your function.
 

// Example 1:


// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
// Example 2:


// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 

// Constraints:

// The number of the nodes in the given list is in the range [2, 1000].
// -1000 <= Node.val <= 1000
// The value of each node in the list is unique.
// The node to be deleted is in the list and is not a tail node.


class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function deleteNode(node) {
    if (!node || !node.next) {
      // The node is null or the last node, which cannot be deleted.
      return;
    }
  
    node.val = node.next.val;
    node.next = node.next.next;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = null;
    let tail = null;
  
    for (let val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test example
  const arr = [4, 5, 1, 9];
  let head = arrayToLinkedList(arr);
  
  // Find the node with value 5
  let nodeToDelete = head;
  while (nodeToDelete.val !== 5) {
    nodeToDelete = nodeToDelete.next;
  }
  
  deleteNode(nodeToDelete);
  
  const result = linkedListToArray(head);
  console.log(result); // Output: [4, 1, 9]
  



// Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50


class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeElements(head, val) {
    // Create a dummy node to handle the case of removing the head node
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let current = dummy;
  
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    return dummy.next;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = null;
    let tail = null;
  
    for (let val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test example
  const arry = [1, 2, 6, 3, 4, 5, 6];
  let heady = arrayToLinkedList(arry);
  
  const val = 6;
  head = removeElements(heady, val);
  
  const resulto = linkedListToArray(head);
  console.log(resulto); // Output: [1, 2, 3, 4, 5]
  





// Merge Two Sorted List
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.



class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;
  
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    current.next = list1 || list2;
  
    return dummy.next;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = null;
    let tail = null;
  
    for (let val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test example
  const arr1 = [1, 2, 4];
  const arr2 = [1, 3, 4];
  let list1 = arrayToLinkedList(arr1);
  let list2 = arrayToLinkedList(arr2);
  
  const mergedList = mergeTwoLists(list1, list2);
  const resultb = linkedListToArray(mergedList);
  console.log(resultb); // Output: [1, 1, 2, 3, 4, 4]
  





// Linked List Cycle
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.
// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.
 
// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function detectCycle(head) {
    let slow = head;
    let fast = head;
  
    // Phase 1: Find the meeting point of the two pointers
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        // Cycle detected, break from the loop
        break;
      }
    }
  
    if (!fast || !fast.next) {
      // No cycle, return null
      return null;
    }
  
    // Phase 2: Reset one pointer to the head and move both pointers one step at a time
    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Return the starting node of the cycle
    return slow;
  }
  
  // Helper function to create a linked list with a cycle at a given position
  function createLinkedListWithCycle(arr, pos) {
    let head = null;
    let tail = null;
    let cycleNode = null;
  
    for (let i = 0; i < arr.length; i++) {
      const newNode = new ListNode(arr[i]);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
  
      if (i === pos) {
        cycleNode = newNode;
      }
    }
  
    // Connect the tail to the cycle node to create a cycle
    tail.next = cycleNode;
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test example
  const arri = [3, 2, 0, -4];
  const pos = 1;
  let headyy = createLinkedListWithCycle(arri, pos);
  
  const cycleStart = detectCycle(headyy);
  if (cycleStart) {
    console.log(`tail connects to node index ${linkedListToArray(headyy).indexOf(cycleStart.val)}`);
  } else {
    console.log('no cycle');
  }
  




// Remove the Nth node from the linked list
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let slow = dummy;
    let fast = dummy;
  
    // Move the fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }
  
    // Move both pointers simultaneously
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Remove the nth node from the end
    slow.next = slow.next.next;
  
    return dummy.next;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = null;
    let tail = null;
  
    for (let val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test example
  const arrn = [1, 2, 3, 4, 5];
  const n = 2;
  let headc = arrayToLinkedList(arr);
  
  head = removeNthFromEnd(headc, n);
  
  const resultt = linkedListToArray(head);
  console.log(resultt); // Output: [1, 2, 3, 5]
  
// Q
// Given a singly linked list of size N. The task is to left-shift the linked list by k nodes, where k is a given positive integer smaller than or equal to the length of the linked list.
// Input: N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
// Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function leftShiftLinkedList(head, k) {
    if (!head || k <= 0) {
      return head;
    }
  
    // Find the length of the linked list
    let length = 0;
    let current = head;
    while (current) {
      length++;
      current = current.next;
    }
  
    // Adjust k to handle cases where k is greater than the length
    k = k % length;
  
    if (k === 0) {
      return head;
    }
  
    // Find the new tail and new head
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
      newTail = newTail.next;
    }
  
    let newHead = newTail.next;
  
    // Update pointers to left-shift the linked list
    newTail.next = null;
    current = newHead;
    while (current.next) {
      current = current.next;
    }
    current.next = head;
  
    return newHead;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = null;
    let tail = null;
  
    for (let val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test example
  const arrx = [2, 4, 7, 8, 9];
  const k = 3;
  let headi = arrayToLinkedList(arrx);
  
  head = leftShiftLinkedList(headi, k);
  
  const resultx = linkedListToArray(head);
  console.log(resultx); // Output: [8, 9, 2, 4, 7]
  


// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
// After doing so, return the head of the final linked list.  You may return any such answer.
// (Note that in the examples below, all sequences are serializations of ListNode objects.)
// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeZeroSumSublists(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let current = dummy;
    let sum = 0;
    const sumMap = new Map();
  
    while (current) {
      sum += current.val;
  
      if (sumMap.has(sum)) {
        // Remove nodes from sumMap.get(sum).next to current (inclusive)
        let prevSum = sumMap.get(sum).next;
        let removeSum = sum;
        while (prevSum !== current) {
          removeSum += prevSum.val;
          sumMap.delete(removeSum);
          prevSum = prevSum.next;
        }
  
        // Update the pointers to skip the removed nodes
        sumMap.get(sum).next = current.next;
      } else {
        // Store the current sum and node in the map
        sumMap.set(sum, current);
      }
  
      current = current.next;
    }
  
    return dummy.next;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = null;
    let tail = null;
  
    for (let val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test example
  const arrm = [1, 2, -3, 3, 1];
  let headm = arrayToLinkedList(arrm);
  
  headm = removeZeroSumSublists(headm);
  
  const resultm = linkedListToArray(headm);
  console.log(resultm); // Output: [3, 1] or [1, 2, 1]
  




// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function oddEvenList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead;
    let even = evenHead;
  
    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
  
    odd.next = evenHead;
  
    return oddHead;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = null;
    let tail = null;
  
    for (let val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test example
  const arru = [1, 2, 3, 4, 5];
  let headu = arrayToLinkedList(arru);
  
  headu = oddEvenList(headu);
  
  const resultu = linkedListToArray(headu);
  console.log(resultu); // Output: [1, 3, 5, 2, 4]
  