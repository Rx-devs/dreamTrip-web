import React, { useState } from "react";
import { AiOutlineLock } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };

  return (
    <div className="overflow-hidden">
      <Navigation></Navigation>
      <div className="bg-white sm:bg-gray-200 min-h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-2/6 h-screen sm:h-auto py-6">
          <div className="text-left w-full text-gray-700 mb-4">
          <p className="text-2xl font-semibold mb-2">Register Now!</p>
            <p>Join the DreamTrip community tody &amp; set up a free account.</p>
          </div>
          <form onSubmit={handleRegisterSubmit}>
            <div className="flex text-left flex-col gap-5 px-0 py-4">
              <div className="flex flex-col gap-2">
              <div  className="relative">
                {/* <label className="text-gray-700">Email address</label> */}
                <GoMail className="absolute w-5 h-5 m-4 text-gray-700"/>
                <input
                  onBlur={handleOnBlur}
                  className="py-3 pl-12 border border-gray-200 w-full"
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              </div>
              <div  className="relative">
                {/* <label className="text-gray-700">Password</label> */}
                <AiOutlineLock className="absolute w-5 h-5 m-4 text-gray-700"/>
                <input
                  onBlur={handleOnBlur}
                  className="py-3 pl-12 border border-gray-200 w-full"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>
              <div  className="relative">
                {/* <label className="text-gray-700">Password</label> */}
                <AiOutlineLock className="absolute w-5 h-5 m-4 text-gray-700"/>
                <input
                  onBlur={handleOnBlur}
                  className="py-3 pl-12 border border-gray-200 w-full"
                  placeholder="Confirm Password"
                  type="password"
                  name="password2"
                />
              </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <button
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-full text-indigo-500 py-4 flex flex-row justify-center items-center gap-1"
                  type="submit">
                  <FaRegEdit  className="h-5 w-5"/>
                  <span className="text-base font-semibold">Register</span>
                </button>
                <button className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-2 flex flex-row justify-center items-center gap-1">
                  <svg className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <Link style={{ textDecoration: "none", color: 'inherit' }} to="/login"> Login Here
                  </Link>
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

export default Register;