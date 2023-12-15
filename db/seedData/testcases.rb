testCases = [{
  testcase: '3 1 2 3',
  question_id: 1
},
             {
               testcase: '3 5 6 7',
               question_id: 1
             },
             {
               testcase: '3 1 2 3',
               question_id: 2
             },
             {
               testcase: '3 5 6 7',
               question_id: 2
             },
             {
               testcase: '9 2 2 2 3 1 1 4 5 5',
               question_id: 3
             },
             {
               testcase: '7 1 1 5 5 5 7 8',
               question_id: 3
             },
             {
               testcase: '6 Hey do you want to go',
               question_id: 4
             },
             {
               testcase: '5 I want to live here',
               question_id: 4
             },
             {
               testcase: '2 geeksforgeeks geeks',
               question_id: 5
             },
             {
               testcase: '2 apple ape',
               question_id: 5
             },
             {
               testcase: '1 "()((()))))(())"',
               question_id: 6
             },
             {
               testcase: '1 "((((((()))))))"',
               question_id: 6
             },
             {
               testcase: '1 cooperation',
               question_id: 7
             },
             {
               testcase: '1 government',
               question_id: 7
             },
             {
               testcase: '8 1 2 3 4 5 2 3 1',
               question_id: 8
             },
             {
               testcase: '7 89 23 4 5 7 3 2',
               question_id: 8
             },
             {
               testcase: '3 0 1 0',
               question_id: 9
             },
             {
               testcase: '4 0 2 1 0',
               question_id: 9
             },
             {
               testcase: '8 6 7 8 9 10 1 2 2 3',
               question_id: 10
             },
             {
               testcase: '5 30 40 50 99 10 20',
               question_id: 10
             },
             {
               testcase: '5 1 2 4 8 9 3',
               question_id: 11
             },
             {
               testcase: '4 10 1 2 7 5',
               question_id: 11
             }]

testCases.map do |each|
  Testcase.create(question_id: each[:question_id], testcase: each[:testcase])
end
