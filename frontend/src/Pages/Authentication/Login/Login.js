import React, { useState } from "react";
import { AiOutlineLock } from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import { HiOutlineLogin } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";

const Login = () => {
  const [userLoginData, setUserLoginData] = useState({});
    const {logInUser, signInWithGoogle } = useAuth();
    const location = useLocation();
  const navigate = useNavigate();
  
  // handle input fields onBlur
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...userLoginData };
    newLoginData[field] = value;
    setUserLoginData(newLoginData);
}

// handle Login Submit
const handleLoginSubmit = e => {
    logInUser(userLoginData.email, userLoginData.password, location, navigate);
  e.preventDefault();
  console.log(e,userLoginData.email,userLoginData.password);
}

// handle google Sign In
const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
}
  return (
    <div className="overflow-hidden">
      <Navigation></Navigation>
      <div className="bg-white sm:bg-gray-200 min-h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-2/6 h-screen sm:h-auto py-6">
          <div className="text-left w-full text-gray-700 mb-4">
            <p className="text-2xl font-semibold mb-2">Login In Here!</p>
            <p>Log into your account in just a few simple steps.</p>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="flex text-left flex-col gap-5 px-0 py-4">
              <div>
              <div className="relative mb-2">
                <GoMail className="absolute w-5 h-5 m-4 text-gray-700"/>
                <input
                  onBlur={handleOnBlur}
                  className="py-3 pl-12 border border-gray-200 w-full"
                  type="email"
                  name="email"
                  autoComplete="username"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <AiOutlineLock className="absolute w-5 h-5 m-4 text-gray-700"/>
                <input
                  onBlur={handleOnBlur}
                  className="py-3 pl-12 border border-gray-200 w-full"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Password"
                />
              </div>
              </div>
              <div className="flex items-center">
                <input type="radio" id="rememberMe" name="" value="Remember me"/>
                <label for="rememberMe" className="mx-2 text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <p className="text-sm text-red-500 font-semibold">Lost Your Password?</p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <button
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-full text-indigo-500 py-4 flex flex-row justify-center items-center gap-1"
                  type="submit"
                >
                  <HiOutlineLogin className="h-5 w-5"/>
                  <span className="text-base font-semibold">Log In</span>
                </button>
                
                <button className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-2 flex flex-row justify-center items-center gap-1">
                  <svg className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <Link style={{ textDecoration: "none", color: 'inherit' }} to="/register"> Register Here
                  </Link>
                </button>
                
              </div>
              <div className="my-2 text-center">
                <p className="text-sm">Log in with Facebook or Google</p>
              </div>
              <div className="w-full flex gap-0">
                <button onClick={handleGoogleSignIn} className="bg-red-500 text-white w-full px-2 py-3 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
                  Google
                </button>
                <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white w-full px-2 py-3 flex flex-row justify-center gap-2 items-center hover:bg-blue-600 duration-100 ease-in-out">
                  Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Login;