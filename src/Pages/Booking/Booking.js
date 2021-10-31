import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const axios = require('axios').default;
const Booking = () => {
    const {serviceId} = useParams();
    const [service,setService] = useState({});
    useEffect(()=>{
        axios.get(`https://ghastly-ghost-15172.herokuapp.com/services/${serviceId}`)
        .then(res=>{
            setService(res.data);
        })
    },[]);
    return (
        <div>
            <h2>Details of : {service.name}</h2>
            <h1>Book {serviceId}</h1>
        </div>
    );
};

export default Booking;