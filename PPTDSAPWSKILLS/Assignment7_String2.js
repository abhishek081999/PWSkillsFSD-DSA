{/* <aside>
💡 **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

</aside> */}

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const sMap = new Map();
    const tMap = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const sChar = s[i];
      const tChar = t[i];
  
      if (sMap.has(sChar) && tMap.has(tChar)) {
        if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar) {
          return false;
        }
      } else if (!sMap.has(sChar) && !tMap.has(tChar)) {
        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
      } else {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const s = "egg";
  const t = "add";
  console.log(isIsomorphic(s, t));//true
  


//   <aside>
// 💡 **Question 2**

// Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

// A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

// **Example 1:**

// **Input:** num = "69"

// **Output:**

// true

// </aside>


function isStrobogrammatic(num) {
    const pairs = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftChar = num[left];
      const rightChar = num[right];
  
      if (!pairs.hasOwnProperty(leftChar) || pairs[leftChar] !== rightChar) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  // Example usage:
  const num = "69";
  console.log(isStrobogrammatic(num));
  


//   <aside>
// 💡 **Question 3**

// Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// **Example 1:**

// **Input:** num1 = "11", num2 = "123"

// **Output:**

// "134"

// </aside>

  function addStrings(num1, num2) {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carry = 0;
    let result = "";
  
    while (p1 >= 0 || p2 >= 0 || carry !== 0) {
      const x = p1 >= 0 ? Number(num1[p1]) : 0;
      const y = p2 >= 0 ? Number(num2[p2]) : 0;
      const currSum = x + y + carry;
      result += currSum % 10;
      carry = Math.floor(currSum / 10);
      p1--;
      p2--;
    }
  
    return result.split("").reverse().join("");
  }
  
  // Example usage:
  const num1 = "11";
  const num2 = "123";
  console.log(addStrings(num1, num2));
  


//   <aside>
// 💡 **Question 4**

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"

// </aside>

function reverseWords(sw) {
    const words = sw.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseString(words[i]);
    }
  
    return words.join(" ");
  }
  
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  // Example usage:
  const sw = "Let's take LeetCode contest";
  console.log(reverseWords(sw));
  


//   <aside>
// 💡 **Question 5**

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// **Example 1:**

// **Input:** s = "abcdefg", k = 2

// **Output:**

// "bacdfeg"

// </aside>

function reverseStr(so, k) {
    const chars = so.split("");
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, chars.length - 1);
  
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
    }
  
    return chars.join("");
  }
  
  // Example usage:
  const so = "abcdefg";
  const k = 2;
  console.log(reverseStr(so, k));
  


//   <aside>
// 💡 **Question 6**

// Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

// A **shift** on s consists of moving the leftmost character of s to the rightmost position.

// - For example, if s = "abcde", then it will be "bcdea" after one shift.

// **Example 1:**

// **Input:** s = "abcde", goal = "cdeab"

// **Output:**

// true

// </aside>

function rotateString(sc, goal) {
    if (sc.length !== goal.length) {
      return false;
    }
  
    const s2 = s + s;
    return s2.includes(goal);
  }
  
  // Example usage:
  const sc = "abcde";
  const goal = "cdeab";
  console.log(rotateString(sc, goal));
  


//   <aside>
// 💡 **Question 7**

// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"

// **Output:** true

// **Explanation:**

// Both s and t become "ac".

// </aside>

function processString(str) {
    const stack = [];
  
    for (let char of str) {
      if (char !== "#") {
        stack.push(char);
      } else if (stack.length > 0) {
        stack.pop();
      }
    }
  
    return stack.join("");
  }
  
  function backspaceCompare(sz, tz) {
    const processedS = processString(sz);
    const processedT = processString(tz);
  
    return processedS === processedT;
  }
  
  // Example usage:
  const sz = "ab#c";
  const tz = "ad#c";
  console.log(backspaceCompare(sz, tzz));
  

//   <aside>
// 💡 **Question 8**

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// **Example 1:**

// </aside>
// **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// **Output:** true


function checkStraightLine(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const slope = (y2 - y1) / (x2 - x1);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [xi, yi] = coordinates[i];
      const currentSlope = (yi - y1) / (xi - x1);
  
      if (currentSlope !== slope) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
  console.log(checkStraightLine(coordinates));
  