import "./components/Button";
import Button from "./components/Button";
import TextBox from "./components/TextBox";
import "./App.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react"; 
 import UserService from "./services/UserService"; 
 import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const [userName, setUserName] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

   const handleSignIn = async(event) => {
event.preventDefault();  
const login = {
userName: userName,
password: password,
} ;

try {
  const response = await UserService.signIn(login);
  console.log('Login Successful:', response.data);
  localStorage.setItem('token', response.data.token);

  navigate('/dashboard'); 
} catch (error) {
  console.error('Login Failed:', error.response?.data || error.message);
  alert('Invalid username or password.');
}

   } ;
 
  function handleClickEvent(event) {
    console.log(event.target.textContent);
  }

  function onUserNameChange(event) {
    setUserName(event.target.value);
  } 
   function  onPasswordChange(event) { 
      setPassword(event.target.value);
   }

  function handleSignUpScreen(event) {
    console.log(event.target.textContent);
    navigate("/sign-up", { state: { userNameFromLoginScreen: userName } });
  }    


  function handleForgotPassword() {
    navigate("/forgot-password");
  }  


  return (
    <>
      <div className="login-form">
      <form onSubmit={handleSignIn}>
        <h1>Login</h1>  
        <TextBox placeholder="User name"    icon="fa-user" onChange={onUserNameChange} value={userName} />
        <TextBox
          placeholder="Password"
          type="password" 
          icon="fa-lock"  
          className="password-input-container"
          value={password}
          onChange={onPasswordChange}
        /> 
       <div className="link-container">
         <Button  variant="link" onClick={handleForgotPassword}>
          Forgot Password?
        </Button>
        </div>
< div className="button-container">
        <Button variant="primary"  type="submit" size ="small" >
          Login
        </Button>
        <Button size ="small" variant="secondary"   onClick={handleSignUpScreen} >
        Sign Up
        </Button> 
        </div>
        </form> 
      </div>
    </>
  );
}

export default App;