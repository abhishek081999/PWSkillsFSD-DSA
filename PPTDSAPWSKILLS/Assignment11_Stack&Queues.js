// Make the String Great
// Given a string s of lower and upper case English letters.
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
// Notice that an empty string is also good.

// Example 1:
// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:
// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:
// Input: s = "s"
// Output: "s"
// Constraints:
// 1 <= s.length <= 100
// s contains only lower and upper case English letters.

function makeGood(s) {
    const stack = [];
  
    for (let char of s) {
      const lastChar = stack[stack.length - 1];
  
      if (lastChar && isBadPair(lastChar, char)) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  
    return stack.join('');
  }
  
  function isBadPair(char1, char2) {
    return (
      (char1.toUpperCase() === char2 && char1 === char2.toLowerCase()) ||
      (char1.toLowerCase() === char2 && char1 === char2.toUpperCase())
    );
  }
  
  // Test examples
  console.log(makeGood("leEeetcode")); // Output: "leetcode"
  console.log(makeGood("abBAcC")); // Output: ""
  console.log(makeGood("s")); // Output: "s"
  



// Remove all adjacent duplicates in a String
// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"
 
// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.

function removeDuplicates(s) {
    const stack = [];
  
    for (let char of s) {
      if (stack.length && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  
    return stack.join('');
  }
  
  // Test examples
  console.log(removeDuplicates("abbaca")); // Output: "ca"
  console.log(removeDuplicates("azxxzy")); // Output: "ay"
  



// Online Stock Span

// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
// The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.
// For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
// Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
// Implement the StockSpanner class:

// StockSpanner() Initializes the object of the class.
// int next(int price) Returns the span of the stock's price given that today's price is price.
 

// Example 1:

// Input
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]

// Explanation
// StockSpanner stockSpanner = new StockSpanner();
// stockSpanner.next(100); // return 1
// stockSpanner.next(80);  // return 1
// stockSpanner.next(60);  // return 1
// stockSpanner.next(70);  // return 2
// stockSpanner.next(60);  // return 1
// stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
// stockSpanner.next(85);  // return 6
 

// Constraints:

// 1 <= price <= 105
// At most 104 calls will be made to next.

class StockSpanner {
    constructor() {
      this.stack = []; // Store [price, span] pairs in the stack
    }
  
    next(price) {
      let span = 1;
      while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        // Pop elements from the stack with prices less than or equal to the current price
        span += this.stack.pop()[1];
      }
      this.stack.push([price, span]); // Push [price, span] pair into the stack
      return span;
    }
  }
  
  // Test example
  const stockSpanner = new StockSpanner();
  console.log(stockSpanner.next(100)); // Output: 1
  console.log(stockSpanner.next(80));  // Output: 1
  console.log(stockSpanner.next(60));  // Output: 1
  console.log(stockSpanner.next(70));  // Output: 2
  console.log(stockSpanner.next(60));  // Output: 1
  console.log(stockSpanner.next(75));  // Output: 4
  console.log(stockSpanner.next(85));  // Output: 6
  

// Time Needed to buy tickets
// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
// Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.
// Return the time taken for the person at position k (0-indexed) to finish buying tickets.
// Example 1:

// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation: 
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.
// Example 2:

// Input: tickets = [5,1,1,1], k = 0
// Output: 8
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [4, 0, 0, 0].
// - In the next 4 passes, only the person in position 0 is buying tickets.
// The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds.
 

// Constraints:

// n == tickets.length
// 1 <= n <= 100
// 1 <= tickets[i] <= 100
// 0 <= k < n


function timeToBuyTickets(tickets, k) {
    const n = tickets.length;
    let time = 0;
  
    while (tickets[k] > 0) {
      for (let i = 0; i < n; i++) {
        if (tickets[i] > 0) {
          tickets[i]--;
          time++;
        }
        if (i === k && tickets[i] === 0) {
          return time;
        }
      }
    }
  
    return time;
  }
  
  // Test examples
  console.log(timeToBuyTickets([2, 3, 2], 2)); // Output: 6
  console.log(timeToBuyTickets([5, 1, 1, 1], 0)); // Output: 8
  


// Product of the last K Numbers

// Design an algorithm that accepts a stream of integers and retrieves the product of the last k integers of the stream.
// Implement the ProductOfNumbers class:
// ProductOfNumbers() Initializes the object with an empty stream.
// void add(int num) Appends the integer num to the stream.
// int getProduct(int k) Returns the product of the last k numbers in the current list. You can assume that always the current list has at least k numbers.
// The test cases are generated so that, at any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.
// Example:

// Input
// ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
// [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]

// Output
// [null,null,null,null,null,null,20,40,0,null,32]

// Explanation
// ProductOfNumbers productOfNumbers = new ProductOfNumbers();
// productOfNumbers.add(3);        // [3]
// productOfNumbers.add(0);        // [3,0]
// productOfNumbers.add(2);        // [3,0,2]
// productOfNumbers.add(5);        // [3,0,2,5]
// productOfNumbers.add(4);        // [3,0,2,5,4]
// productOfNumbers.getProduct(2); // return 20. The product of the last 2 numbers is 5 * 4 = 20
// productOfNumbers.getProduct(3); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
// productOfNumbers.getProduct(4); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
// productOfNumbers.add(8);        // [3,0,2,5,4,8]
// productOfNumbers.getProduct(2); // return 32. The product of the last 2 numbers is 4 * 8 = 32 
 

// Constraints:

// 0 <= num <= 100
// 1 <= k <= 4 * 104
// At most 4 * 104 calls will be made to add and getProduct.
// The product of the stream at any point in time will fit in a 32-bit integer.

class ProductOfNumbers {
    constructor() {
      this.prefixProduct = [1]; // Initialize with 1 for easy calculation
      this.stream = []; // Initialize an empty stream
    }
  
    add(num) {
      if (num === 0) {
        this.prefixProduct = [1]; // Reset prefix product array when encountering 0
      } else {
        this.prefixProduct.push(this.prefixProduct[this.prefixProduct.length - 1] * num);
      }
      this.stream.push(num); // Add the integer to the stream
    }
  
    getProduct(k) {
      if (k >= this.stream.length) {
        return 0; // If k is greater than or equal to the stream length, the product is 0
      }
      return this.prefixProduct[this.prefixProduct.length - 1] / this.prefixProduct[this.prefixProduct.length - 1 - k];
    }
  }
  
  // Test example
  const productOfNumbers = new ProductOfNumbers();
  productOfNumbers.add(3);
  productOfNumbers.add(0);
  productOfNumbers.add(2);
  productOfNumbers.add(5);
  productOfNumbers.add(4);
  console.log(productOfNumbers.getProduct(2)); // Output: 20
  console.log(productOfNumbers.getProduct(3)); // Output: 40
  console.log(productOfNumbers.getProduct(4)); // Output: 0
  productOfNumbers.add(8);
  console.log(productOfNumbers.getProduct(2)); // Output: 32
  




// Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4
 
// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

function largestRectangleArea(heights) {
    const n = heights.length;
    const stack = [];
    let maxArea = 0;
  
    for (let i = 0; i <= n; i++) {
      while (stack.length > 0 && (i === n || heights[stack[stack.length - 1]] >= heights[i])) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }
      stack.push(i);
    }
  
    return maxArea;
  }
  
  // Test examples
  console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Output: 10
  console.log(largestRectangleArea([2, 4])); // Output: 4
  


// Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length


function maxSlidingWindow(nums, k) {
    const n = nums.length;
    const result = [];
    const deque = [];
  
    for (let i = 0; i < n; i++) {
      // Remove elements outside the current sliding window from the front of the deque
      while (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift();
      }
  
      // Remove elements that are smaller than the current element from the back of the deque
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
  
      // Add the current element's index to the back of the deque
      deque.push(i);
  
      // The maximum element for the current sliding window is the front element of the deque
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
  
    return result;
  }
  
  // Test example
  console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]
  
// Design a circular queue data structure with the following operations: enQueue, deQueue, Front, Rear, and isEmpty.
class CircularQueue {
    constructor(k) {
      this.queue = new Array(k);
      this.front = 0;
      this.rear = -1;
      this.size = 0;
      this.capacity = k;
    }
  
    enQueue(value) {
      if (this.isFull()) {
        return false;
      }
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = value;
      this.size++;
      return true;
    }
  
    deQueue() {
      if (this.isEmpty()) {
        return false;
      }
      this.front = (this.front + 1) % this.capacity;
      this.size--;
      return true;
    }
  
    Front() {
      if (this.isEmpty()) {
        return -1;
      }
      return this.queue[this.front];
    }
  
    Rear() {
      if (this.isEmpty()) {
        return -1;
      }
      return this.queue[this.rear];
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    isFull() {
      return this.size === this.capacity;
    }
  }
  
  // Test example
  const queue = new CircularQueue(3);
  console.log(queue.enQueue(1)); // Output: true
  console.log(queue.enQueue(2)); // Output: true
  console.log(queue.enQueue(3)); // Output: true
  console.log(queue.enQueue(4)); // Output: false (queue is full)
  console.log(queue.Rear()); // Output: 3
  console.log(queue.isFull()); // Output: true
  console.log(queue.deQueue()); // Output: true
  console.log(queue.enQueue(4)); // Output: true
  console.log(queue.Rear()); // Output: 4
  