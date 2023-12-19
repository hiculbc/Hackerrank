import axios from "axios";
import React from "react";
import "./profile.scss";
import { useQueries } from "react-query";
import { getUserId } from "../../CommonFunctionalities/cookies";
import { Link } from "react-router-dom";
import { useIfLoggedIn } from "../../CommonFunctionalities/navigate";

export const Profile = () => {

    useIfLoggedIn();

    const userId = getUserId();

    const fetchUser = () => {
        return axios.get(`http://localhost:3002/users/${userId}`);
    }

    const fetchSolvedQuestions = () => {
        return axios.post("http://localhost:3002/solved",{
          user_id: userId,
          only_ids: false
        })
      }

      const results = useQueries([
        { queryKey: ["user"], queryFn: fetchUser },
        { queryKey: ["solved_questions"],queryFn: fetchSolvedQuestions }
      ]);
      const isLoading = results.some((query) => query.isLoading);

      if(isLoading){
        return <h1>Loading...</h1>;
      }

      console.log(results);

      const [{data: {data: user}}, {data: {data: solved_questions}}] = results;


    return (
        <div className="profile">
            <div className="personal-details">
                <img src="profile_photo2.jpg"></img>
                <p>{user.name}</p>
                <p>{user.email}</p>
                 
            </div>
            <div className="solved-questions">
                <h3>Solved({solved_questions.length})</h3>
           <table>
             {
                solved_questions.map((question,index) => {
                    return <tr>
                        <td>{index+1}</td>
                        <td><Link to={`/question/${question.id}`}>{question?.question?.substr(0,70) + (question.question.length > 50 ? "...":"")}</Link></td>
                    </tr>
                })
             }
           </table>
        </div>
        </div>
        
    )
};