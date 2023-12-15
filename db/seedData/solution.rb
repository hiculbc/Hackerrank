solution = [{
  answer: "3 2 1\n",
  question_id: 1,
  testcase_id: 1
},
            {
              answer: "7 6 5\n",
              question_id: 1,
              testcase_id: 2
            },
            {
              answer: "3\n",
              question_id: 2,
              testcase_id: 3
            },
            {
              answer: "7\n",
              question_id: 2,
              testcase_id: 4
            },
            {
              answer: "2 3 1 4 5\n",
              question_id: 3,
              testcase_id: 5
            },
            {
              answer: "1 5 7 8\n",
              question_id: 3,
              testcase_id: 6
            },
            {
              answer: "go to want you do Hey\n",
              question_id: 4,
              testcase_id: 7
            },
            {
              answer: "here live to want I\n",
              question_id: 4,
              testcase_id: 8
            },
            {
              answer: "geeks\n",
              question_id: 5,
              testcase_id: 9
            },
            {
              answer: "ap\n",
              question_id: 5,
              testcase_id: 10
            },
            {
              answer: "false\n",
              question_id: 6,
              testcase_id: 11
            },
            {
              answer: "true\n",
              question_id: 6,
              testcase_id: 12
            },
            {
              answer: "c\n",
              question_id: 7,
              testcase_id: 13
            },
            {
              answer: "g\n",
              question_id: 7,
              testcase_id: 14
            },
            {
              answer: "5\n",
              question_id: 8,
              testcase_id: 15
            },
            {
              answer: "7\n",
              question_id: 8,
              testcase_id: 16
            },
            {
              answer: "1\n",
              question_id: 9,
              testcase_id: 17
            },
            {
              answer: "1\n",
              question_id: 9,
              testcase_id: 18
            },
            {
              answer: "true\n",
              question_id: 1,
              testcase_id: 19
            },
            {
              answer: "false\n",
              question_id: 1,
              testcase_id: 20
            },
            {
              answer: "3\n",
              question_id: 1,
              testcase_id: 21
            },
            {
              answer: "4\n",
              question_id: 1,
              testcase_id: 22
            }]

solution.map do |each|
  Solution.create(answer: each[:answer], question_id: each[:question_id], testcase_id: each[:testcase_id])
end
