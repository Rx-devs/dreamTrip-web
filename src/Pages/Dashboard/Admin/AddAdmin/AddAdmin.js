import React, { useState } from "react";
const AddAdmin = () => {
    const [email, setEmail] = useState('');
    //const [success, setSuccess] = useState(false);
    // const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) => {
        const user = { email }
        /* fetch('https://quiet-sierra-31697.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   // setSuccess(true);
                    setEmail('');
                }
            }) */
        

        e.preventDefault();
    }
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <h2 className="mb-4">Create An Admin</h2>
            <form onSubmit={handleAdminSubmit} className="space-y-6">
                <div className="text-left">
                    <label className="text-gray-700" for="username">Email Address</label>
                    <input onBlur={handleOnBlur} id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>
            <div className="flex justify-start mt-6">
                <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Admin</button>
            </div>
        </form>
        </div>
    );
};

export default AddAdmin ;