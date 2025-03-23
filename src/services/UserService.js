import axios from 'axios';
import config from '../config.json';  

const BASE_URL = config.BASE_URL;  // No need to add extra `/`

const UserService = {
    signUp: (user) => {
        return axios.post(`${BASE_URL}user`, user);    
    }, 
    signIn: (login) => {
        return axios.post(`${BASE_URL}login`, login, {
            headers: {
                'Content-Type': 'application/json'
            } 
        });     
    }  , 
    forgotPasswordRequest: (forgotpassword) => {
        return axios.post(`${BASE_URL}change_password`, forgotpassword,{
            headers: {
                'Content-Type': 'application/json'
            }
        });  
    }
     
};

export default UserService;
