import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function Login() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      axios    /// this is the api route to the req //// 
      .post("http://localhost:3000/api/user/signin", data)
      .then((res) => {
        console.log(res); 
        localStorage.clear(); 
        localStorage.setItem('token', JSON.stringify(res.data.user.token)); 
        navigate('/shop'); 
      });
    } catch (error){
      console.log(error); 
    }
    
  };

  return (
    <div className="max-w-screen-sm m-auto pt-40 ">
      <h1 className="text-center text-4xl text-gray-400 mb-3">Login</h1>
      <div className="w-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-[70%] space-y-2">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered input-accent w-full max-w-xs "
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered input-accent w-full max-w-xs "
          />
          <button class="btn btn-wide w-full max-w-xs  ">Submit</button>
        </form>
      </div>
    </div>
  );


}
