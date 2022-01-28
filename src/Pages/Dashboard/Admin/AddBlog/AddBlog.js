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
        <div class="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <form style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '10px', padding: '10px' }} onSubmit={handleSubmit(onSubmit)}>
                <h2>Create a Blog</h2>
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px' }} placeholder="Blog Title" {...register("title", { required: true })} />
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px' }} placeholder="Blog Category" {...register("category", { required: true })} />
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px' }} placeholder="Your Name" {...register("traveler_name", { required: true })} />
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px' }} placeholder="Blog Thumbnail Url" {...register("thumbnail_url", { required: true })} />
                <textarea className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px', resize: 'none' }} placeholder="Blog Description" {...register("description", { required: true })} />
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px' }}  placeholder="travel Cost" {...register("travel_cost", { required: true })} />
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md" style={{ padding: '12px' }} placeholder="Location" {...register("travel_location", { required: true })} />
                <input className="rounded-md" style={{ cursor: 'pointer', padding: '12px', backgroundColor: '#000', color: '#ffffff', border: 'none', borderRadius: '3px' }} type="submit" />
            </form>
        </div>
    );
};

export default AddBlog ;