import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";

const ResetPassModal = ({ removeModal }) => {
  const [userData, setUserData] = useState({});
  const { resetPass } = useAuth();

  // handle input fields onBlur
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...userData };
    newData[field] = value;
    setUserData(newData);
  }

  // handle Login Submit
  const handleResetPassword = e => {
    resetPass(userData.email);

    e.preventDefault();
  }

  const notify = () => toast.success(`We sent an email to reset your password, check your email inbox & spam box too!!`, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });



  return (
    <>
      <div className="bg-white border-2 border-gray-200 px-8 py-10 flex flex-col gap-4">
        <h2 className="text-xl">Trouble Logging In?</h2>
        <p className="text-sm">Enter your email and we'll send you a link to get back into your account.</p>
        <form className="p-2 mb-4" onSubmit={handleResetPassword}>
          <input
            onBlur={handleOnBlur}
            className="py-3 mb-3 pl-6 border border-gray-200 w-full"
            type="email"
            name="email"
            autoComplete="@gmail.com"
            placeholder="Email"
          />
          <button onClick={notify} type="submit" className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-full text-indigo-500 py-4 flex flex-row justify-center items-center gap-1">Reset Password</button>
        </form>
        <div className="px-2">
          <button
            onClick={removeModal}
            className="text-sm w-full py-3 text-white text-bold bg-indigo-500">Back To Login</button>
        </div>
      </div>
      <ToastContainer
        className="text-sm w-3/4 md:w-2/4"
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};


export default ResetPassModal;