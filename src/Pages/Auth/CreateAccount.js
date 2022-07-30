import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const CreateAccount = () => {
  const { auth, setUser, navigate } = useAuth();

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameBlur = (e) => {
    setName(e.target.value);
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleFormSubmit = (e) => {
    if (confirmPassword === password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user)
          const user = userCredential.user
          setUser(user);
          navigate(-1);
        })
        .catch(error => {
          setError(error.message);
        });
    } else {
      setError('Passwords do not match');
    }
    console.log(name, email, password, confirmPassword);
    e.preventDefault();
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://i.ibb.co/5YppHvF/Hospital-Logo.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new account</h2>
          </div>
          <form onSubmit={handleFormSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="answer" className="sr-only">
                  Full Name
                </label>
                <input
                  id="full-name"
                  onBlur={handleNameBlur}
                  name="Name"
                  type="Name"
                  autoComplete="current"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  onBlur={handleEmailBlur}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  onBlur={handlePasswordBlur}
                  name="password"
                  type="password"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="password"
                  onBlur={handleConfirmPasswordBlur}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onSubmit={handleFormSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
              <p style={{ color: "red" }}>{error}</p>
            </div>
          </form>
          <div className="flex flex-col my-2 text-gray-500">
            <h1 className="mx-auto mb-2">Or continue with</h1>
            <div className="flex justify-center">
              <button className="py-2 px-8 border rounded-lg border-slate-500 mx-2"><BsIcons.BsGoogle />
              </button>
              <button className="py-2 px-8 border rounded-lg border-slate-500 mx-2"><BsIcons.BsFacebook />
              </button>
              <button className="py-2 px-8 border rounded-lg border-slate-500 mx-2"><FaIcons.FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;