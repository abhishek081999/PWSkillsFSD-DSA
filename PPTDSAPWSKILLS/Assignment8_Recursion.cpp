/* <aside>
💡 **Question 1**

Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

</aside> */

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int minimumDeleteSum(string s1, string s2) {
    int n1 = s1.length();
    int n2 = s2.length();

    // Initialize the 2D vector dp with dimensions (n1+1) x (n2+1)
    vector<vector<int>> dp(n1 + 1, vector<int>(n2 + 1));

    // Initialize base cases
    for (int i = 1; i <= n1; i++) {
        dp[i][0] = dp[i - 1][0] + int(s1[i - 1]);
    }
    for (int j = 1; j <= n2; j++) {
        dp[0][j] = dp[0][j - 1] + int(s2[j - 1]);
    }

    // Compute dp values
    for (int i = 1; i <= n1; i++) {
        for (int j = 1; j <= n2; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = min(dp[i - 1][j] + int(s1[i - 1]), dp[i][j - 1] + int(s2[j - 1]));
            }
        }
    }

    return dp[n1][n2];
}

int main() {
    string s1 = "sea";
    string s2 = "eat";
    int result = minimumDeleteSum(s1, s2);
    cout << result << endl;
    return 0;
}



//   <aside>
// 💡 **Question 2**

// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

// </aside>
#include <iostream>
#include <stack>
using namespace std;

bool isValid(string s) {
    stack<char> parentheses;

    for (char c : s) {
        if (c == '(')
            parentheses.push(c);
        else if (c == ')') {
            if (!parentheses.empty())
                parentheses.pop();
            else
                return false;
        } else if (c == '*') {
            if (!parentheses.empty())
                parentheses.pop();
        }
    }

    return parentheses.empty();
}

int main() {
    string s = "()";
    bool result = isValid(s);
    cout << boolalpha << result << endl;
    return 0;
}




//   <aside>
// 💡 **Question 3**

// Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

// In one **step**, you can delete exactly one character in either string.

// **Example 1:**

// **Input:** word1 = "sea", word2 = "eat"

// **Output:** 2

// **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

// </aside>

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int minDistance(string word1, string word2) {
    int n1 = word1.length();
    int n2 = word2.length();

    // Initialize the 2D vector dp with dimensions (n1+1) x (n2+1)
    vector<vector<int>> dp(n1 + 1, vector<int>(n2 + 1));

    // Initialize base cases
    for (int i = 0; i <= n1; i++) {
        dp[i][0] = i;
    }
    for (int j = 0; j <= n2; j++) {
        dp[0][j] = j;
    }

    // Compute dp values
    for (int i = 1; i <= n1; i++) {
        for (int j = 1; j <= n2; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[n1][n2];
}

int main() {
    string word1 = "sea";
    string word2 = "eat";
    int result = minDistance(word1, word2);
    cout << result << endl;
    return 0;
}




//   <aside>
// 💡 **Question 4**

// You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the **left** child node of the parent first if it exists.

// </aside>
// **Input:** s = "4(2(3)(1))(6(5))"

// **Output:** [4,2,6,3,1,5]


#include <iostream>
#include <string>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int value) : val(value), left(nullptr), right(nullptr) {}
};

TreeNode* buildTree(string& s, int start, int end) {
    if (start > end)
        return nullptr;

    // Find the root value
    int value = 0;
    int i = start;
    while (i <= end && isdigit(s[i])) {
        value = value * 10 + (s[i] - '0');
        i++;
    }

    TreeNode* root = new TreeNode(value);

    if (i <= end && s[i] == '(') {
        // Find the end position of the left child substring
        int count = 0;
        int j = i;
        while (j <= end) {
            if (s[j] == '(')
                count++;
            else if (s[j] == ')')
                count--;

            if (count == 0)
                break;

            j++;
        }

        // Construct the left child
        root->left = buildTree(s, i + 1, j - 1);

        if (j + 1 <= end && s[j + 1] == '(') {
            // Construct the right child
            root->right = buildTree(s, j + 2, end - 1);
        }
    }

    return root;
}

TreeNode* str2tree(string s) {
    int n = s.length();
    if (n == 0)
        return nullptr;

    return buildTree(s, 0, n - 1);
}

void printTree(TreeNode* root) {
    if (root == nullptr)
        return;

    cout << root->val << " ";
    printTree(root->left);
    printTree(root->right);
}

int main() {
    string s = "4(2(3)(1))(6(5))";
    TreeNode* root = str2tree(s);
    printTree(root);

    return 0;
}


// <aside>
// 💡 **Question 5**

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

// - If the group's length is 1, append the character to s.
// - Otherwise, append the character followed by the group's length.

// The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done **modifying the input array,** return *the new length of the array*.

// You must write an algorithm that uses only constant extra space.

// **Example 1:**

// **Input:** chars = ["a","a","b","b","c","c","c"]

// **Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// **Explanation:**

// The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// </aside>

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int compress(vector<char>& chars) {
    int n = chars.size();
    if (n == 0)
        return 0;

    int readPtr = 0;
    int writePtr = 0;
    int count = 1;

    for (int i = 1; i <= n; i++) {
        if (i < n && chars[i] == chars[i - 1]) {
            count++;
        } else {
            chars[writePtr] = chars[readPtr];
            writePtr++;

            if (count > 1) {
                string countStr = to_string(count);
                for (char c : countStr) {
                    chars[writePtr] = c;
                    writePtr++;
                }
            }

            count = 1;
            readPtr = i;
        }
    }

    return writePtr;
}

int main() {
    vector<char> chars = {'a', 'a', 'b', 'b', 'c', 'c', 'c'};
    int newLength = compress(chars);

    cout << "New Length: " << newLength << endl;
    cout << "Compressed Array: [";
    for (int i = 0; i < newLength; i++) {
        cout << chars[i];
        if (i != newLength - 1)
            cout << ",";
    }
    cout << "]" << endl;

    return 0;
}


// <aside>
// 💡 **Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

// </aside>

#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<int> findAnagrams(string s, string p) {
    vector<int> result;
    int n = s.length();
    int m = p.length();
    if (n < m)
        return result;

    vector<int> freqP(26, 0);
    vector<int> freqS(26, 0);

    for (char c : p)
        freqP[c - 'a']++;

    for (int i = 0; i < n; i++) {
        freqS[s[i] - 'a']++;

        if (i >= m)
            freqS[s[i - m] - 'a']--;

        if (freqS == freqP)
            result.push_back(i - m + 1);
    }

    return result;
}

void printResult(const vector<int>& result) {
    cout << "[";
    for (int i = 0; i < result.size(); i++) {
        cout << result[i];
        if (i != result.size() - 1)
            cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    string s = "cbaebabacd";
    string p = "abc";
    vector<int> result = findAnagrams(s, p);
    printResult(result);

    return 0;
}


// <aside>
// 💡 **Question 7**

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

// </aside>

#include <iostream>
#include <stack>
#include <string>
using namespace std;

string decodeString(string s) {
    stack<int> countStack;
    stack<string> resultStack;

    string result = "";
    int count = 0;

    for (char c : s) {
        if (isdigit(c)) {
            count = count * 10 + (c - '0');
        } else if (c == '[') {
            countStack.push(count);
            resultStack.push(result);
            count = 0;
            result = "";
        } else if (c == ']') {
            string decodedString = resultStack.top();
            resultStack.pop();
            int repetitionCount = countStack.top();
            countStack.pop();

            for (int i = 0; i < repetitionCount; i++) {
                decodedString += result;
            }

            result = decodedString;
        } else {
            result += c;
        }
    }

    return result;
}

int main() {
    string s = "3[a]2[bc]";
    string decodedString = decodeString(s);
    cout << "Decoded String: " << decodedString << endl;

    return 0;
}

// <aside>
// 💡 **Question 8**

// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// </aside>

#include <iostream>
#include <string>
using namespace std;

bool buddyStrings(string s, string goal) {
    int n = s.length();
    int m = goal.length();

    if (n != m)
        return false;

    int diffCount = 0;
    int diffIndex1 = -1;
    int diffIndex2 = -1;

    for (int i = 0; i < n; i++) {
        if (s[i] != goal[i]) {
            diffCount++;
            if (diffCount == 1)
                diffIndex1 = i;
            else if (diffCount == 2)
                diffIndex2 = i;
            else
                return false;
        }
    }

    if (diffCount == 2 && s[diffIndex1] == goal[diffIndex2] && s[diffIndex2] == goal[diffIndex1])
        return true;

    return false;
}

int main() {
    string s = "ab";
    string goal = "ba";
    bool result = buddyStrings(s, goal);
    cout << "Result: " << (result ? "true" : "false") << endl;

    return 0;
}
