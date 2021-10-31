import React, { useEffect, useState } from 'react';
const axios = require('axios').default;
const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const deleteService = (id) =>{
        // const yes = window.confirm("Delete??");
        if(true){
            axios.delete(`http://localhost:5000/services/${id}`)
            .then(res => {
                if(res.data.deletedCount>0){
                    // alert("Delete Successful!")
                    const remaningServices = services.filter(service=>service._id!==id);
                    setServices(remaningServices);
                }
                else{
                    alert("Couldn't delete")
                }
                
            }
                );
        }
        
    } 

    return (
        <div>
            <h2>Manage Your Services</h2>

            {
                services.map( service => <li key={service._id}>{service.name}
                
                <button className="m-2 btn btn-small btn-danger" onClick={()=>deleteService(service._id)} >Delete</button></li>)
            }
        </div>
    );
};

export default ManageServices;