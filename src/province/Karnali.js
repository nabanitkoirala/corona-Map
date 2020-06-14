import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import Header from '../Contents/Header';
import Footer from '../Contents/Footer';
import { Link } from 'react-router-dom';
function Karnali() {
    const [viewPort, setviewPort] = useState({
        latitude: 27.042144,
        longitude: 87.610950,
        width: "100vw",
        height: "100vh",
        zoom: 6,
    })


    const [selectedPerson, setselectedPerson] = useState(null);

    const [totalData, setTotalData] = useState([]);
    const [isfinalData, setIsfinalData] = useState(false);
    const [Karnali, setKarnali] = useState([]);
    const [Karnalitotal, setKarnalitotal] = useState([]);
    const [Kardist, setKardist] = useState([]);//districts of Bagmati state
    const [Karnalidubs, setKarnalidubs] = useState([]);//duplicate data of bagmati fetched from api for seleccting district form province




    useEffect(() => {
        axios.get('https://data.nepalcorona.info/api/v1/covid')
            .then(res => {
                setKarnali(res.data.filter((item) => item.province === 6))
                setKarnalidubs(res.data.filter((item) => item.province === 6))
            })
            .catch(err => {
                console.log(err);
            })


        axios.get('https://nepalcorona.info/api/v1/data/nepal')
            .then(res => {
                setTotalData([res.data])
                setIsfinalData(true)
            })
            .catch(err => {
                console.log("error>>", err);
            })
        axios.get('https://data.nepalcorona.info/api/v1/covid/summary')
            .then(res => {
                setKarnalitotal([res.data.province])

            })
            .catch(err => {
                console.log("error>>", err);
            })
        axios.get('https://data.nepalcorona.info/api/v1/districts')

            .then(res => {
                setKardist(res.data.filter((item) => item.province === 6))


            })
            .catch(err => {
                console.log("error>>", err);
            })

    }, [], [])

    console.log("karnali data>>>", Karnali);
    console.log("karnali total>>", Karnalitotal);
    return (
        <div>
            <Header />
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Overall</h1>
                                </div>{/* /.col */}

                            </div>{/* /.row */}
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
                                            <span className="info-box-text">Infected</span>
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
                                            <span className="info-box-text">Recovered</span>
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
                                            <span className="info-box-text">Deaths</span>
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
                                <div className="col-md-8">
                                    {/* MAP & BOX PANE */}
                                    <div className="card">

                                        {/* /.card-header */}
                                        <div className="card-body p-0">
                                            <div className="d-md-flex">
                                                <div className="p-1 flex-fill" style={{ overflow: 'hidden' }}>
                                                    {/* Map will be created here */}
                                                    <div id="world-map-markers" style={{ height: 600, overflow: 'hidden' }}>
                                                        <div className="map" />
                                                        <ReactMapGl className="map-react" {...viewPort} mapboxApiAccessToken="pk.eyJ1IjoibmFiYW5pdCIsImEiOiJja2E4MXR3NDkwNGMxMzJzOWF4Zzk1cmRxIn0.PlAUDME-BUb9gV-DCutXzw" mapStyle="mapbox://styles/nabanit/ckagghg6a0jfi1il7gdyjpt4c"
                                                            onViewportChange={(viewPort) => setviewPort(viewPort)}>
                                                            <div className="legend">
                                                                <img src="/recovered.jpeg" alt="recovered" />:Recovered<br />
                                                                <img src="/ongoing.gif" alt="ongoing" />:Treatment Ongoing<br />
                                                                <img src="/dead.gif" alt="dead" />:Death

                                                    </div>

                                                            {Karnali.filter((local) => local.currentState === 'recovered').map((local) => (
                                                                <Marker key={local.id} latitude={local.point.coordinates[1]} longitude={local.point.coordinates[0]}>
                                                                    <button className="marker-btn" onClick={e => {
                                                                        e.preventDefault();
                                                                        setselectedPerson(local);
                                                                    }}>
                                                                        <img src="/recovered.jpeg" alt="recovered" />
                                                                    </button>

                                                                </Marker>
                                                            ))}
                                                            {Karnali.filter((local) => local.currentState === 'active').map((local) => (
                                                                <Marker key={local.id} latitude={local.point.coordinates[1]} longitude={local.point.coordinates[0]}>
                                                                    <button className="marker-btn" onClick={e => {
                                                                        e.preventDefault();
                                                                        setselectedPerson(local);
                                                                    }}>
                                                                        <img src="/ongoing.gif" alt="ongoing" />
                                                                    </button>

                                                                </Marker>
                                                            ))}
                                                            {Karnali.filter((local) => local.currentState === 'deaths').map((local) => (
                                                                <Marker key={local.id} latitude={local.point.coordinates[1]} longitude={local.point.coordinates[0]}>
                                                                    <button className="marker-btn-dead" onClick={e => {
                                                                        e.preventDefault();
                                                                        setselectedPerson(local);
                                                                    }}>
                                                                        <img src="/dead.gif" alt="dead" />
                                                                    </button>

                                                                </Marker>
                                                            ))}

                                                            {selectedPerson ? (
                                                                <Popup latitude={selectedPerson.point.coordinates[1]} longitude={selectedPerson.point.coordinates[0]}
                                                                    onClose={() => (setselectedPerson(null))}>



                                                                    <div className="btn btn-success popup">

                                                                        <p>Age={selectedPerson.age}</p>
                                                                        <p>Gender={selectedPerson.gender}</p>
                                                                        <p>Reported On={selectedPerson.reportedOn}</p>
                                                                        <p>Recovered On={selectedPerson.recoveredOn}</p>
                                                                        <p>Transmission Type={selectedPerson.type}</p>
                                                                        <p>current Status={selectedPerson.currentState}</p>
                                                                        <p>latitude={selectedPerson.point.coordinates[1]}</p>
                                                                        <p> longitude={selectedPerson.point.coordinates[0]}</p>
                                                                    </div>
                                                                </Popup>
                                                            ) : null}



                                                        </ReactMapGl>
                                                    </div>
                                                </div>

                                            </div>{/* /.d-md-flex */}
                                        </div>
                                        {/* /.card-body */}
                                    </div>

                                </div>
                                {/* /.col */}

                                <div className="col-md-4">
                                    <h3 className="text-center"><strong><u>Karnali</u></strong></h3>
                                    {/* Info Boxes Style 2 */}
                                    <div className="info-box mb-3 bg-warning">
                                        <span className="info-box-icon"><i className="fas fa-lungs-virus" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Infected</span>
                                            <span className="info-box-number">{Karnalitotal.map((item) => item.active[0].count)}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-success">
                                        <span className="info-box-icon"><i className="fas fa-band-aid" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Recovered</span>
                                            <span className="info-box-number">{Karnalitotal.map((item, i) => item.recovered[i].province === 6 ? item.recovered[i].count : 'Not Recovered Yet')}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-danger">
                                        <span className="info-box-icon"><i className="fas fa-bed" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Deaths</span>
                                            <span className="info-box-number">{Karnalitotal.map((item, i) => item.deaths[5].count)}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-info">
                                        <span className="info-box-icon"><i className="fas fa-users" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Total Cases</span>
                                            <span className="info-box-number">{Karnalitotal.map((item) => item.cases[0].count)}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>




                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>{/*/. container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>

            {/* Main Sidebar Container */}
            < aside className="main-sidebar sidebar-dark-primary elevation-4" >
                {/* Brand Logo */}
                < Link to="/overall" className="brand-link" >
                    <span className="brand-text font-weight-light">Corona Data Nepal</span>
                </Link >
                {/* Sidebar */}
                < div className="sidebar" >

                    {/* Sidebar Menu */}
                    < nav className="mt-2" >
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
with font-awesome or any other icon font library */}
                            <li className="nav-item has-treeview">
                                <Link to="/#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Province Wise Data
    <i className="right fas fa-angle-left" />
                                    </p>
                                </Link>

                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/overall" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Overall</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/province1" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province1</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/province2" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province2</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/bagmati" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Bagmati</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/gandaki" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Gandaki</p>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/province5" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province 5</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/karnali" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Karnali</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/sudurpaschim" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Sudurpaschim</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav >
                    {/* /.sidebar-menu */}
                </div >
                {/* /.sidebar */}

                <div className="col-sm-9">
                    {/* select */}
                    <div className="form-group">

                        <select className="form-control" onChange={(e) => {
                            if (e.target.value === "Overall") {
                                return (setKarnali(Karnalidubs))
                            }
                            else {
                                return (setKarnali(Karnalidubs.filter((item) => item.district === Number(e.target.value))))
                            }

                        }} >
                            <option >Choose District</option>
                            <option value="Overall">Overall</option>
                            {Kardist.map((item, _id) => <option key={_id} value={item.id}>{item.title_ne}</option>)}
                        </select>
                    </div>
                </div>
            </aside >
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
            {/* /.control-sidebar */}

            <Footer />
        </div>
    )
}






export default Karnali;

