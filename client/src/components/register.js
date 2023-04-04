import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Register = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_USER);

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

    try {
      const { data } = await addProfile({
        variables: { ...formState },

      });
      Auth.login(data.addUser.token);
      
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="space-y-2 block flex flex-col items-center justify-center "onSubmit={handleFormSubmit}>
                <p className="text-white p-2 text-2xl text-center">Register</p>
                <input
                  className="form-input block input input-warning w-full max-w-xs text-center"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input block input input-warning w-full max-w-xs text-center"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input block input input-warning w-full max-w-xs text-center"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="block btn bg-white hover:bg-white w-full max-w-xs text-center text-black"
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
                A unique username, valid email address and password must be provided 
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
  
};

export default Register;
