import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const AddAdmin = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) => {
        const user = { email }
        fetch('https://polar-savannah-45678.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail('');
                    swal("Good job!", "Successfully added an Admin!", "success");
                    navigate("/home", { replace: true });
                }
            });
        e.preventDefault();
    }
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md p-6 lg:p-10">
            <h2 className="mb-4 text-2xl">Create An Admin</h2>
            <form onSubmit={handleAdminSubmit} className="space-y-6">
                <div className="text-left">
                    <label className="text-gray-700" for="username">Email Address</label>
                    <input onBlur={handleOnBlur} id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>
                <div className="flex justify-start mt-6">
                    <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Admin</button>
                </div>
            </form>
        </div>
    );
};

export default AddAdmin ;