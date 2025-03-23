import { useState } from "react";
import "../App.css";
import TextBox from "../components/TextBox"; 
import Button from "../components/Button";    
import UserService from "../services/UserService";

import { useNavigate, useLocation } from 'react-router-dom'; 
function SignUpScreen() {         
  const [userName, setUserName] = useState("");
  const [PassWorrd, setPassword] = useState("");
  const [ConfirmPassWord, setConfirmPassword] = useState(""); 
  const [tenantId, setTenantId] = useState(""); 
  const [userStatus , setUserStatus] = useState(""); 
  const[userRole , setuserRole] = useState(""); 
  const [department , setDepartment] = useState(""); 
   const [tenant , setTenant] = useState(""); 
  const [name , setName] = useState(""); 
   const [userId , setUserId] = useState(""); 

  const navigate = useNavigate();
  const location = useLocation();

  const { userNameFromLoginScreen } = location.state || {};

  function handleUsernameChange(event) {
    setUserName(event.target.value);
  } 
   function handleUserIdChange(event) {
    setUserId(event.target.value);
   }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  } 

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  } 
  function handleTenantIdChange(event) {
    setTenantId(event.target.value);
  } 
   function handleUserStatusChange(event) {
    setUserStatus(event.target.value) ;
   } 
    function handleUserRoleChange(event) {
      setuserRole(event.target.value); 
    } 
     function handleDepartmentChange(event) {
      setDepartment(event.target.value);
     }
 function handleTenantChange(event) {
       setTenant(event.target.value);
 } 
  function handleNameChange(event) {
    setName(event.target.value);
  }
 

  function handleSignupButtonClick() {
    console.log(
      "Send forgot password email for " +
        userName +
        " and email " +
        email +
        " and password " +
        PassWorrd +
        " and confirm password " +
        ConfirmPassWord+ " and tenant id " + tenatId + " and user status " + userStatus+ " and user role " + userRole + " and department " + department + " and tenant " + tenant + " and full name " + fullName
    );
  }

  function handleBackToLoginButtonClick() {
    navigate("/");
  } 
  const handleSaveuser = async (event) => {
    event.preventDefault();   
    const user = { 
       userId :userId ,
      userName: userName,
      password: PassWorrd,
      confirmPassword: ConfirmPassWord,
      tenantId: tenantId,
      userStatus: userStatus,
      userRole: userRole,
      department: department,
      tenant: tenant,
      name: name 
    };

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await UserService.signUp(user); 
      alert("User registered successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register user. Please try again.");
    }
  };
   
  return (
    <div className="login-form">
      <h1>Sing Up</h1>  
      <form onSubmit={(event) => handleSaveuser(event)}>
      <TextBox placeholder="Full Name " onChange={handleNameChange}/>
      <TextBox
        placeholder="User name"
        onChange={handleUsernameChange}
        value={userName || userNameFromLoginScreen || ""}
    
        
      />
      <TextBox placeholder="password" onChange={handlePasswordChange} /> 
      <TextBox placeholder="Confirm Password" onChange={handleConfirmPasswordChange} />  
      <TextBox placeholder="User Role" onChange={handleUserRoleChange}/> 
      <TextBox placeholder="User Status" onChange={handleUserStatusChange}/>
      <TextBox placeholder="Tenant Id " onChange={handleTenantIdChange}/> 
      <TextBox placeholder="Tenant " onChange={handleTenantChange}/>
     
       
      
      <TextBox placeholder="Department" onChange={handleDepartmentChange}/> 
       <div className="button-container"> 

      <Button variant="primary" size="small" onClick={handleSignupButtonClick}> 
        Save
      </Button>
      <Button variant="secondary"  size="small" onClick={handleBackToLoginButtonClick}>
        Back to Login
      </Button>  
      </div>
      </form>  
    </div>
  );
}

export default SignUpScreen;