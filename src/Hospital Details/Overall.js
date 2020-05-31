import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from './../Contents/Sidebar';
import Footer from './../Contents/Footer';
import Header from './../Contents/Header';
import { Link } from 'react-router-dom';



export default function Overallhospital() {

    const [Hospital, setHospital] = useState([]);
    const [totalData, setTotalData] = useState([]);
    const [isfinalData, setIsfinalData] = useState(false);
    useEffect(() => {

        axios.get('https://nepalcorona.info/api/v1/hospitals')
            .then(res => {
                setHospital(res.data.data)


            })
            .catch(err => {
                console.log("error>>", err);
            })
        axios.get('https://nepalcorona.info/api/v1/data/nepal')
            .then(res => {
                setTotalData([res.data])
                setIsfinalData(true)
            })
            .catch(err => {
                console.log("error>>", err);
            })

    }, [])


    console.log("Hospitals list >>", Hospital);


    return (
        <div>
            <Header />
            <div>

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">

                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            {/* Info boxes */}
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-lungs-virus" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Total Infected</span>
                                            <span className="info-box-number">
                                                {isfinalData ? totalData.map((item) => (<p>{item.tested_positive}</p>)) : <p>Isloading</p>}
                                            </span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-success elevation-1"><i className="fas fa-band-aid" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text"> Total Recovered</span>
                                            <span className="info-box-number">{isfinalData ? totalData.map((item) => (<p>{item.recovered}</p>)) : <p>Isloading</p>}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                {/* fix for small devices only */}
                                <div className="clearfix hidden-md-up" />
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-bed" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Total Deaths</span>
                                            <span className="info-box-number">{isfinalData ? totalData.map((item) => (<p>{item.deaths}</p>)) : <p>Isloading</p>}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Total Tests</span>
                                            <span className="info-box-number">{isfinalData ? totalData.map((item) => (<p>{item.tested_total}</p>)) : <p>Isloading</p>}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}

                            <div className="row">
                                {/* Left col */}
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Hospitals List</h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div id="accordion">
                                                {/* we are adding the .class so bootstrap.js collapse plugin detects it */}
                                                <div className="card ">
                                                    <div className="card-header">
                                                        <h4 className="card-title">

                                                            {Hospital.map((item) => <ul><li><Link to="/overall-hospital/`${item.name}`" key={item._id} value={item.name} data-toggle="collapse" data-parent="#accordion">{item.name}< br /></Link></li></ul>)}



                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne" className="panel-collapse collapse">
                                                        <div className="panel-collapse collapse">
                                                            <div className="card-body">
                                                                {Hospital.map((item, _id) => (
                                                                    <div>
                                                                        <p>key:{item._id}</p>
                                                                        <p>{item.name}</p>
                                                                    </div>
                                                                )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card card-danger">
                                                    <div className="card-header">
                                                        <h4 className="card-title">
                                                            {Hospital.map((item) => <ul><li><p key={item._id} value={item.name}><Link to='/overall/`${item.name}`'>{item.name}</Link><br /></p></li></ul>)}

                                                        </h4>
                                                    </div>
                                                    <div id="onetwo" className="panel-collapse collapse">
                                                        <div className="card-body">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                            3
                                                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                            laborum
                                                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                            nulla
                                                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                            beer
                                                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                                            labore sustainable VHS.
          </div>
                                                    </div>
                                                </div>
                                                <div className="card card-success">
                                                    <div className="card-header">
                                                        <h4 className="card-title">

                                                            {Hospital.map((item) => <ul><li><a key={item._id} value={item.name} data-toggle="collapse" data-parent="#accordion" href="`${item.name}`">{item.name}< br /></a></li></ul>)}

                                                        </h4>
                                                        <div id="`${item.name}`" className="panel-collapse collapse">
                                                            <div className="card-body">
                                                                {Hospital.filter((item) => item.name === `${item.name}`).map((item, _id) => (
                                                                    <div>
                                                                        <p>key:{item._id}</p>
                                                                        <p>{item.name}</p>
                                                                    </div>
                                                                )
                                                                )}



                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                    {/* /.col */}


                                </div>
                                {/* /.row */}
                            </div>{/*/. container-fluid */}
                        </div>
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div >
            <Sidebar />
            <Footer />

        </div >
    )
}
