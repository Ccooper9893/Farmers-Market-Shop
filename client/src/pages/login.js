import React from "react";
import LoginForm from "../components/login"; 



// /////// script //////////////////

//if state = not logged in, register login page 
// if state = logged in, then return text, already logged in/// 





function Login() {
  return (
    <>
      <div>
        Login/Register
        <LoginForm />
      <div className="text-white text-center">
      <a href="/register">Would you like to register? </a>
         
      </div>
        
        </div>

    </>
  );
}

export default Login;
