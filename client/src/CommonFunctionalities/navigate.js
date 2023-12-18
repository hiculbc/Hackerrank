import { useNavigate } from "react-router-dom";
import { checkLoggedIn } from "./cookies";



export const useIfLoggedIn = () => { 
    const navigate = useNavigate();

    if(checkLoggedIn() == false){
  navigate('/login',{
    state: {
        message: "Please LogIn First"
    }
  });
}};
