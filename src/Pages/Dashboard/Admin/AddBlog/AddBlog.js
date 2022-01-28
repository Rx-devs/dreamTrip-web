import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


const AddBlog = () => {
    let navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://polar-savannah-45678.herokuapp.com/allblogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Successfully added a blog!", "success");
                    navigate("/home", { replace: true });
                    reset();
                }
            })
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <form style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '10px', padding: '10px' }} onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl font-semibold text-center text-gray-800 ">Add a Blog</h2>
                <div className="justify-between md:flex gap-4">
                    <div className="w-full">
                        <input className="w-full block px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" placeholder="Blog Title" {...register("title", { required: true })} />
                    </div>
                    <div className="w-full">
                        <input className="w-full block px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" placeholder="Blog Category" {...register("category", { required: true })} />
                    </div>
                </div>
                <div className="justify-between md:flex gap-4">
                    <div className="w-full">
                        <input className="w-full block px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" placeholder="Your Name" {...register("traveler_name", { required: true })} />
                    </div>
                    <div className="w-full">
                        <input className="w-full block px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" placeholder="Location" {...register("travel_location", { required: true })} />
                    </div>
                </div>
                <div className="justify-between md:flex gap-4">
                    <div className="w-full">
                        <input className="w-full block px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" placeholder="Blog Rating" type="number" min="0" max="5" {...register("user_rating", { required: true })} />
                    </div>
                    <div className="w-full">
                        <input className="w-full block px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" type="number" placeholder="travel Cost" {...register("travel_cost", { required: true })} />
                    </div>
                </div>
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px' }} placeholder="Blog Thumbnail Url" {...register("thumbnail_url", { required: true })} />
                <textarea className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px' }} placeholder="Blog Description" {...register("description", { required: true })} />
                <div className="flex justify-center mt-2">
                    <input className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-900 cursor-pointer" type="submit" />
                </div>
                
            </form>
        </div>
    );
};

export default AddBlog ;