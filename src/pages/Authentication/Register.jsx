import React, { useState } from "react";
import { AiOutlineLock } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";
import Layout from "../../layouts/Layout";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  // const { user, registerUser, isLoading, authError } = useAuth();
  const { registerUser } = useAuth();

  function showToast(email, pass) {
    const notify = () => toast.success('A verfication email has been sent to your email, check inbox & spam box too !!', {
      position: "bottom-left",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    (email && pass) && notify();
  }

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
    else {
      showToast();
    }
    // console.log(e);

    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };

  return (
    <div className="overflow-hidden">
      <Layout>
        <div className="bg-white sm:bg-gray-200 py-10 w-screen flex flex-col justify-center items-center">
          <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-2/6 h-screen sm:h-auto py-4">
            <div className="text-left w-full text-gray-700 my-4">
              <p className="text-2xl font-semibold mb-2">Register Now!</p>
              <p>Join the DreamTrip community tody &amp; set up a free account.</p>
            </div>
            <form onSubmit={handleRegisterSubmit}>
              <div className="flex text-left flex-col gap-5 px-0 py-4">
                <div className="flex flex-col gap-2">
                  <div className="relative">
                    {/* <label className="text-gray-700">Email address</label> */}
                    <GoMail className="absolute w-5 h-5 m-4 text-gray-700" />
                    <input
                      onBlur={handleOnBlur}
                      className="py-3 pl-12 border border-gray-200 w-full"
                      placeholder="Email"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="relative">
                    {/* <label className="text-gray-700">Password</label> */}
                    <AiOutlineLock className="absolute w-5 h-5 m-4 text-gray-700" />
                    <input
                      onBlur={handleOnBlur}
                      className="py-3 pl-12 border border-gray-200 w-full"
                      placeholder="Password"
                      type="password"
                      name="password"
                    />
                  </div>
                  <div className="relative">
                    {/* <label className="text-gray-700">Password</label> */}
                    <AiOutlineLock className="absolute w-5 h-5 m-4 text-gray-700" />
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
                    onClick={() => showToast(loginData.email, loginData.password)}
                    className="border border-indigo-500 bg-color-main text-white duration-100 ease-in-out w-full rounded py-4 flex flex-row justify-center items-center gap-1"
                    type="submit">
                    <FaRegEdit className="h-5 w-5" />
                    <span className="text-base font-semibold">Register</span>
                  </button>
                  <div className="text-center mt-4">
                    <span>Have an account?</span>
                    <Link to="/login">
                      <span className="color-main font-medium"> Log in </span>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
          className="text-sm w-3/4 md:w-2/4"
          position="bottom-left"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Layout>
    </div>
  );
};

export default Register;
