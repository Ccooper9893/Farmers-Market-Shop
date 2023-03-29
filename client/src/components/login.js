import React, { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";



  
  const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
        console.log(data); 
        Auth.login(data.loginUser.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    if (Auth.loggedIn()) {
          return (
      <p className="py-20 text-white text-center text-lg ">
        You are already logged In
      </p>
          );
    }

  
    return (
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body ">
              {data ? (
                <p>
                  Success! You may now head{' '}
                    update here 
                </p>
              ) : (
                <form className="space-y-2 block flex flex-col items-center justify-center "onSubmit={handleFormSubmit}>
                  <p className="text-white p-2 text-2xl text-center ">Login</p>
                  <input
                    className="block input input-accent w-full max-w-xs text-center"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="block input input-accent w-full max-w-xs text-center"
                    placeholder="Your password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="block btn btn-accent w-full max-w-xs text-center text-white"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>

              )}
  
              {error && (
                <div className="flex flex-col items-center justify-center">
                <div className="my-3 p-3 bg-red-600 rounded-lg max-w-xs text-center text-white">
                  {"Invalid login or Password.  Please try again"}
                </div>

                </div>
                
              )}
              <div className="text-white py-6 text-center">
                    <a href="/register">Would you like to register? </a>
                  </div>
            </div>
          </div>
        </div>
      </main>
    );
  };

export default Login; 