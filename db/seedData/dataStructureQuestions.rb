dataStructureQuestions = [
  {
    title: 'Reverse Array',
    topic: 0,
    question: "Given an array, the task is \nto reverse the array and return the reversed array.\nExamples : \n \nInput  : arr[] = {1, 2, 3}\nOutput : arr[] = {3, 2, 1}\n\nInput :  arr[] = {4, 5, 1, 2}\nOutput : arr[] = {2, 1, 5, 4}\n",
    difficulty: 'easy'
  },
  {
    title: 'Maximum element',
    topic: 0,
    question: "Given an array arr[] of size N, \nthe task is to find the largest element in the given array and return it. \n\nExamples: \n\nInput: arr[] = {10, 20, 4}\nOutput: 20\nExplanation: Among 10, 20 and 4, 20 is the largest. \n\nInput : arr[] = {20, 10, 20, 4, 100}\nOutput : 100\n",
    difficulty: 'easy'
  },
  {
    title: 'Distinct elements array',
    topic: 0,
    question: "Given an integer array, \nReturn an array with no duplicates. The given array may contain duplicates and the output should be an array which does not contain any duplicates. The given array is not sorted and it must preserve the order.\n\nExamples:\n\nInput: arr[] = {12, 10, 9, 45, 2, 10, 10, 45}\nOutput: 12, 10, 9, 2\n\nInput: arr[] = {1, 2, 3, 4, 5}\nOutput: 1, 2, 3, 4, 5\n\nInput: arr[] = {1, 1, 1, 1, 1}\nOutput: 1\",\n",
    difficulty: 'easy'
  },

  {
    title: 'Reverse string',
    topic: 1,
    question: "Given a string, the task is to \nreverse the order of the words in the given string. \n\nExamples:\n\nInput: s = “geeks quiz practice code” \nOutput: s = “code practice quiz geeks”\n\nInput: s = “i love programming very much” \nOutput: s = “much very programming love i” \n",
    difficulty: 'easy'
  },

  {
    title: 'Longest Common Prefix',
    topic: 1,
    question: "Given a set of strings,\nfind the longest common prefix and return it. \n\nExamples: \n\nInput  : {“geeksforgeeks”, “geeks”, “geek”, “geezer”}\nOutput : \"gee\"\n\nInput  : {\"apple\", \"ape\", \"april\"}\nOutput : \"ap\"\n",
    difficulty: 'hard'
  },

  {
    title: 'Balanced parenthesis',
    topic: 1,
    question: "Given an expression string exp,\n write a program to examine whether the pairs and \nthe orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression and return true/false.\n\nExample: \n\nInput: exp = “[()]{}{[()()]()}” \nOutput: Balanced\nExplanation: all the brackets are well-formed\n\nInput: exp = “[(])” \nOutput: Not Balanced \nExplanation: 1 and 4 brackets are not balanced because \nthere is a closing ‘]’ before the closing ‘(‘\n",
    difficulty: 'medium'
  },

  {
    title: 'One occurence of character',
    topic: 2,
    question: "Given a string S consisting of lowercase\n Latin Letters, the task is to find the first \nnon-repeating character in S \n and return it.\n\nExamples: \n\nInput: “geeksforgeeks”\nOutput: f\nExplanation: As ‘f’ is first character in the string which does not repeat.\n\nInput: “algorithm”\nOutput: a\nExplanation: As ‘a’ is first character in the string which does not repeat.\n",
    difficulty: 'medium'
  },
  {
    title: 'Distinct elements count',
    topic: 2,
    question: "Given an array arr[] of length N, \nThe task is to count all distinct elements in arr[] \n and return the count.\n\nExamples: \n\nInput: arr[] = {10, 20, 20, 10, 30, 10}\nOutput: 3\nExplanation: There are three distinct elements 10, 20, and 30.\n\nInput: arr[] = {10, 20, 20, 10, 20}\nOutput: 2\n",
    difficulty: 'easy'
  },
  {
    title: 'Peak Index',
    topic: 3,
    question: "An array arr is a mountain \nif the following properties hold:\n\narr.length >= 3\nThere exists some i with 0 < i < arr.length - 1 such that:\narr[0] < arr[1] < ... < arr[i - 1] < arr[i] \narr[i] > arr[i + 1] > ... > arr[arr.length - 1]\nGiven a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].\n\nYou must solve it in O(log(arr.length)) time complexity.\n and return the index",
    difficulty: 'medium'
  },
  {
    title: 'Search element',
    topic: 3,
    question: "Given a sorted and rotated array \narr[] of size N and a key,\n the task is to find the key in the array\n and return true/false .\n\nNote: Find the element in O(logN) time and assume that all the elements are distinct.\n\nExample:  \n\nInput  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3\nOutput : Found at index 8\n\nInput  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 30\nOutput : Not found\n\nInput : arr[] = {30, 40, 50, 10, 20}, key = 10   \nOutput : Found at index 3\n",
    difficulty: 'medium'
  },
  {
    title: 'Aggressive Cows',
    topic: 3,
    question: "Problem Statement: You are given an array \n‘arr’ of size ‘n’ which denotes \nthe position of stalls.\nYou are also given an integer ‘k’ which denotes the number of aggressive cows.\nYou are given the task of assigning stalls to ‘k’ cows such that the minimum distance between \nany two of them is the maximum possible.\nFind the maximum possible minimum distance \nand return it.\n\nExamples\nExample 1:\nInput Format: N = 6, k = 4, arr[] = {0,3,4,7,10,9}\nResult: 3\nExplanation: The maximum possible minimum distance between any two cows \nwill be 3 when 4 cows are placed at positions {0, 3, 7, 10}. Here the distances between cows are 3, 4, and 3 \nrespectively. We cannot make the minimum distance greater than 3 in any ways.\n\nExample 2:\nInput Format: N = 5, k = 2, arr[] = {4,2,1,3,6}\nResult: 5\nExplanation: The maximum possible minimum distance between any two cows will be 5 \nwhen 2 cows are placed at positions {1, 6}. \n",
    difficulty: 'hard'
  }

]

dataStructureQuestions.map do |each|
  Question.create(title: each[:title], question: each[:question], difficulty: each[:difficulty], topic: each[:topic])
end
