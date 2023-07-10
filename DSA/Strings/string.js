/* <aside>
💡 ********************Question 1********************

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

**Example 1:**

**Input:** s = ["h","e","l","l","o"]

**Output:** ["o","l","l","e","h"]

******************Solution:******************

**Two Pointers Approach**

In this approach, two pointers are used to process two array elements

at the same time. Usual implementation is to set one pointer in the

beginning and one at the end and then to move them until they both meet.

**Algorithm**

- Set pointer left at index 0, and pointer right at index n - 1,
    
    where n is a number of elements in the array.
    
- While left < right:
    - Swap s[left] and s[right].
    - Move left pointer one step right, and right pointer one step left.

**Complexity Analysis**

// - Time complexity: O(*N*) to swap ////*////N*/2 element.
// - Space complexity: O(1), it's a constant space solution.
// </aside> */

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const tmp = s[left];
        s[left++] = s[right];
        s[right--] = tmp;
    }
}




{/* <aside>
💡 ********************Question 2********************

Given a string s, *find the first non-repeating character in it and return its index*. If it does not exist, return -1.

**Example 1:**

**Input:** s = "leetcode"

**Output:** 0

******************Solution:******************

The best possible solution here could be of a linear time because to ensure that the character is unique you have to check the whole string anyway. The idea is to go through the string and save in a hash map the number of times each character appears in the string.

And then we go through the string the second time, this time we use the hash map as a reference to check if a character is unique or not. 

If the character is unique, one could just return its index.

**Complexity Analysis**

- Time complexity : O(*N*) since we go through the string of length N two times.
- Space complexity : O(1) because English alphabet contains 26 letters.
</aside> */}

function firstUniqChar(s) {
    const count = new Map();
    const n = s.length;
    // build hash map: character and how often it appears
    for (let i = 0; i < n; i++) {
        const c = s.charAt(i);
        count.set(c, (count.get(c) || 0) + 1);
    }

    // find the index
    for (let i = 0; i < n; i++) {
        if (count.get(s.charAt(i)) === 1) {
            return i;
        }
    }
    return -1;
}




{/* <aside>
💡 ********************Question 3********************

Given an input string s, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in s will be separated by at least one space.

Return *a string of the words in reverse order concatenated by a single space.*

**Note** that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

**Example 1:**

**Input:** s = "the sky is blue"

**Output:** "blue is sky the"

******************Solution:******************

**Approach 1: Built-in Split + Reverse**

**Complexity Analysis**

- Time complexity: O(*N*), where N is a number of characters in the input string.
- Space complexity: O(*N*), to store the result of split by spaces.
</aside> */}

function reverseWords(s) {
    // remove leading and trailing spaces
    s = s.trim();
    // split by multiple spaces
    let wordList = s.split(/\s+/);
    // reverse the array of words
    wordList.reverse();
    // join the words with a space separator
    return wordList.join(' ');
}


// **Approach 2: Deque of Words**


// **Complexity Analysis**

// - Time complexity: O(*N*).
// - Space complexity: O(*N*)

function reverseWords(s) {
    let left = 0, right = s.length - 1;
    // remove leading spaces
    while (left <= right && s.charAt(left) === ' ') {
        left++;
    }

    // remove trailing spaces
    while (left <= right && s.charAt(right) === ' ') {
        right--;
    }

    const d = [];
    let word = '';
    // push word by word in front of deque
    while (left <= right) {
        const c = s.charAt(left);

        if (word.length !== 0 && c === ' ') {
            d.unshift(word);
            word = '';
        } else if (c !== ' ') {
            word += c;
        }
        left++;
    }
    d.unshift(word);

    return d.join(' ');
}




// <aside>
// 💡 **************Question 4**************

// Given a string s consisting of words and spaces, return *the length of the **last** word in the string.*

// A **word** is a maximal substring consisting of non-space characters only.

// **Example 1:**

// **Input:** s = "Hello World"

// **Output:** 5

// **Explanation:** The last word is "World" with length 5.

// ******************Solution:******************

// One can break down the solution into two steps:

// - First, we would try to locate the last word, starting from the end of the string. We iterate the string in reverse order, consuming the empty spaces. When we first come across a non-space character, we know that we are at the last character of the last word.
// - Second, once we locate the last word. We count its length, starting from its last character. Again, we could use a loop here.
// </aside>
{/* <aside>
💡 **************Question 4**************

Given a string s consisting of words and spaces, return *the length of the **last** word in the string.*

A **word** is a maximal substring consisting of non-space characters only.

**Example 1:**

**Input:** s = "Hello World"

**Output:** 5

**Explanation:** The last word is "World" with length 5.

******************Solution:******************

One can break down the solution into two steps:

- First, we would try to locate the last word, starting from the end of the string. We iterate the string in reverse order, consuming the empty spaces. When we first come across a non-space character, we know that we are at the last character of the last word.
- Second, once we locate the last word. We count its length, starting from its last character. Again, we could use a loop here.


**Complexity**

- Time Complexity: O(*N*), where *N* is the length of the input string.
    
    In the worst case, the input string might contain only a single word, which implies that we would need to iterate through the entire string to obtain the result.
    
- Space Complexity: O(1), only constant memory is consumed, regardless the input.
</aside> */}
function lengthOfLastWord(s) {
    // trim the trailing spaces
    let p = s.length - 1;
    while (p >= 0 && s.charAt(p) === ' ') {
        p--;
    }

    // compute the length of last word
    let length = 0;
    while (p >= 0 && s.charAt(p) !== ' ') {
        p--;
        length++;
    }
    return length;
}



{/* <aside>
💡 ********************Question 5********************

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

**Example 1:**

**Input:** strs = ["flower","flow","flight"]

**Output:** "fl"

******************Solution:******************

</aside> */}


function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix.length === 0) {
                return "";
            }
        }
    }
    return prefix;
}



{/* <aside>
💡 ********************Question 6********************

Given a string s, find the length of the **longest substring** without repeating characters.

**Example 1:**

**Input:** s = "abcabcbb"

**Output:** 3

**Explanation:** The answer is "abc", with the length of 3.

</aside> */}

// ### **Complexity Analysis**

// - Time complexity : *O*(*n*). Index *j* will iterate *n* times.
// - Space complexity : *O*(*min*(*m*, *n*)). Same as the previous approach.


function lengthOfLongestSubstring(s) {
    const n = s.length;
    let ans = 0;
    const map = new Map(); // current index of character
    // try to extend the range [i, j]
    let i = 0;
    for (let j = 0; j < n; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(s.charAt(j), j + 1);
    }
    return ans;
}