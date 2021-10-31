import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";
const axios = require('axios').default;
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const insertUrl = "http://localhost:5000/services";
        axios.post(insertUrl,data)
        .then(res=>console.log(res.data));

    };
    return (
        <div className="addservice">
            <h1>Add A service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="description" {...register("description")} />
                <input placeholder="price" type="number" {...register("price")} />
                <input placeholder="img" {...register("img")} />
                <input type="submit" />
            </form>



        </div>
    );
};

export default AddService;