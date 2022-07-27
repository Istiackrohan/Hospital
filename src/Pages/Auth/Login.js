import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const {signInWithGoogle, error} = useAuth();

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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Create an account
                </a>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
              <div className="flex flex-col my-2 text-gray-500">
                <h1 className="mx-auto mb-2">Or continue with</h1>
                <div className="flex justify-center">
                  <button onClick={signInWithGoogle} className="py-2 px-8 border rounded-lg border-slate-500 mx-2"><BsIcons.BsGoogle />
                  </button>
                  <button className="py-2 px-8 border rounded-lg border-slate-500 mx-2"><BsIcons.BsFacebook />
                  </button>
                  <button className="py-2 px-8 border rounded-lg border-slate-500 mx-2"><FaIcons.FaGithub />
                  </button>
                </div>
                <p style={{ color: "red" }}>{error}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;