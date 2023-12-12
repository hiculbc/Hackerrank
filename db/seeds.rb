# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

dataStructureQuestions = [
  {
    topic: 0,
    question: 'Given an array arr[], return the reverse of given array',
    difficulty: 'easy'
  },
  {
    topic: 0,
    question: 'Find the Maximum Number in a given array arr[]',
    difficulty: 'easy'
  },
  {
    topic: 0,
    question: 'An array arr[] is given to you, return the array with no duplicates',
    difficulty: 'easy'
  },

  {
    topic: 1,
    question: 'Reverse words in a string str and return the new string',
    difficulty: 'easy'
  },

  {
    topic: 1,
    question: 'Two strings are given str1, str2.Find the Longest Common Prefix of two strings',
    difficulty: 'hard'
  },

  {
    topic: 1,
    question: 'Check whether given parenthesis str is balanced or not',
    difficulty: 'medium'
  },

  {
    topic: 2,
    question: 'Find the first non-repeating character in a string str',
    difficulty: 'medium'
  },
  {
    topic: 2,
    question: 'Find the count of Distinct elements in an array arr[]',
    difficulty: 'easy'
  },

  {
    topic: 3,
    question: 'Find the peak index in a given mountain array arr[]',
    difficulty: 'medium'
  },
  {
    topic: 3,
    question: 'Search a element in a given rotated array arr[]',
    difficulty: 'medium'
  },

  {
    topic: 3,
    question: 'Given a sorted array arr[] consisting of N integers which denote the position of a stall. You are also given an integer K which denotes the number of aggressive cows',
    difficulty: 'hard'
  }

]

dataStructureQuestions.map do |each|
  Question.create(question: each[:question], difficulty: each[:difficulty], topic: each[:topic])
end
