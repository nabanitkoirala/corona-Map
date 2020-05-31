import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from './../Contents/Sidebar';
import Footer from './../Contents/Footer';
import Header from './../Contents/Header';
import { Link } from 'react-router-dom';


export default function Hospitaldetails() {



    const [Hospital, setHospital] = useState([]);

    useEffect(() => {
        axios.get('https://nepalcorona.info/api/v1/hospitals')
            .then(res => {
                setHospital(res.data.data)


            })
            .catch(err => {
                console.log("error>>", err);
            })


    })
    return (
        <div>

            {Hospital.filter((item, _id) => item.name === `${_id}`).map((item) => (
                <div>
                    <p>key:{item._id}</p>
                    <p>{item.name}</p>
                </div>
            )
            )}
        </div>


    )

}