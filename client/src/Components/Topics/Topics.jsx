import React from "react";
import "./Topics.scss";
import { useQuery, useQueries } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const filteredQuestions = questions;
   

  return  (
        <div className="list">
      <div className="topics">
      <button className="topic-button btn btn-light">All</button>
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
                questions.map((question,index) => {
                    return <tr>
                        <td>{index+1}</td>
                        <td><Link to={`/question/${question.id}`}>{question.question.substr(0,50) + (question.question.length > 50 ? "...":"")}</Link></td>
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
