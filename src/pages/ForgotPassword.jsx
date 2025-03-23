import { useState } from "react";
import "../App.css";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import UserService from "../services/UserService"; // Import UserService for API call

function ForgotPasswordScreen() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [userName, setUserName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate(); 
function handlePaswordChange(event) {
  setPassword(event.target.value);
}
  function handleUsernameChange(event) {
    setUserName(event.target.value); 
  } 

  function handleNewPasswordChange(event) { 
    setNewPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  } 

  const handleForgotPassword = async (event) => { 
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const forgotpassword = {
      userName: userName, 
      password: password,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await UserService.forgotPasswordRequest(forgotpassword);
      console.log('Password Reset Successful:', response.data);
      alert("Password has been reset successfully. Please log in with your new password.");
      navigate("/");
    } catch (error) {
      console.error('Password Reset Failed:', error.response?.data || error.message);
      alert("Failed to reset password. Please try again.");
    }
  };

  function handleBackToLoginButtonClick() {
    navigate("/");
  }

  return (
    <div className="login-form">
      <h1>Forgot Password</h1> 
      <form onSubmit={handleForgotPassword}>
        <TextBox placeholder="User Name" onChange={handleUsernameChange} value={userName} /> 
        <TextBox placeholder="Old Password " onChange={handlePaswordChange} value={password}/>
        <TextBox placeholder="New Password" type="password" onChange={handleNewPasswordChange} value={newPassword} />
        <TextBox placeholder="Confirm New Password" type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} />
         
          <div className="button-container">
        <Button variant="primary"  size ="small" type="submit">
          Reset Password
        </Button>
        <Button variant="secondary"size="small" onClick={handleBackToLoginButtonClick}>
          Back to Login
        </Button>  
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordScreen;
