import Cookies from "universal-cookie";

export const cookies = new Cookies();

export const getUserId = () => {
    return cookies.get('userId');
}

export const setUserId = (value) => {
    cookies.set("userId",value);
}

export const removeUserId = () => {
    cookies.remove('userId');
}

export const checkLoggedIn = () => {
    return (cookies.get("userId")) ? true : false;
}