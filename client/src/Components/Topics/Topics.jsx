import React from "react";
import "./Topics.scss";
import { useQuery, useQueries } from "react-query";
import axios from "axios";

export const Topics = () => {
  const fetchQuestions = () => {
    return axios.get("http://localhost:3002/questions");
  };

  const fetchTopics = () => {
    return axios.get("http://localhost:3002/topics");
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const results = useQueries([
    { queryKey: ["questions"], queryFn: fetchQuestions },
    { queryKey: ["topics"], queryFn: fetchTopics },
  ]);
  const isLoading = results.some((query) => query.isLoading);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const [{data: {data: questions}},{data: {data: topics}}] = results;

  return  (
        <div className="list">
      <div className="topics">
           {topics.map(each_topic => {
             return <button className="topic-button btn btn-light">{each_topic}</button>
           })}
        </div>
        
        <div className="questions">
        <h2>Problems</h2>
           <table>
             <tr>
                <th>S.No</th>
                <th>Question</th>
                <th>Difficulty</th>
                <th>Topic</th>
             </tr>
             {
                questions.map(question => {
                    return <tr>
                        <td>{question.id}</td>
                        <td>{question.question.substr(0,50) + (question.question.length > 50 ? "...":"")}</td>
                        <td className={question.difficulty}>{question.difficulty}</td>
                        <td>{capitalize(topics[question.topic])}</td>
                    </tr>
                })
             }
           </table>
        </div>
        </div>
  );
};
