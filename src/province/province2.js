import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import Header from '../Contents/Header';
import Footer from '../Contents/Footer';
import Sidebar from '../Contents/Sidebar';
function Province2() {
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
    const [Province2, setProvince2] = useState([]);
    const [Province2total, setProvince2total] = useState([]);


    useEffect(() => {
        axios.get('https://data.nepalcorona.info/api/v1/covid')
            .then(res => {
                setProvince2(res.data.filter((item) => item.province === 2))
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
                setProvince2total([res.data.province])

            })
            .catch(err => {
                console.log("error>>", err);
            })

    }, [], [])

    console.log("Province2 data>>>", Province2);
    console.log("Province2 total>>", Province2total);
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

                                                            {Province2.filter((local) => local.currentState === 'recovered').map((local) => (
                                                                <Marker key={local.id} latitude={local.point.coordinates[1]} longitude={local.point.coordinates[0]}>
                                                                    <button className="marker-btn" onClick={e => {
                                                                        e.preventDefault();
                                                                        setselectedPerson(local);
                                                                    }}>
                                                                        <img src="/recovered.jpeg" alt="recovered" />
                                                                    </button>

                                                                </Marker>
                                                            ))}
                                                            {Province2.filter((local) => local.currentState === 'active').map((local) => (
                                                                <Marker key={local.id} latitude={local.point.coordinates[1]} longitude={local.point.coordinates[0]}>
                                                                    <button className="marker-btn" onClick={e => {
                                                                        e.preventDefault();
                                                                        setselectedPerson(local);
                                                                    }}>
                                                                        <img src="/ongoing.gif" alt="ongoing" />
                                                                    </button>

                                                                </Marker>
                                                            ))}
                                                            {Province2.filter((local) => local.currentState === 'deaths').map((local) => (
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
                                    <h3 className="text-center"><strong><u>Province 2</u></strong></h3>
                                    {/* Info Boxes Style 2 */}
                                    <div className="info-box mb-3 bg-warning">
                                        <span className="info-box-icon"><i className="fas fa-lungs-virus" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Infected</span>
                                            <span className="info-box-number">{Province2total.map((item) => item.active[2].count)}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-success">
                                        <span className="info-box-icon"><i className="fas fa-band-aid" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Recovered</span>
                                            <span className="info-box-number">{Province2total.map((item) => item.recovered[5].count)}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-danger">
                                        <span className="info-box-icon"><i className="fas fa-bed" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Deaths</span>
                                            <span className="info-box-number">{Province2total.map((item, i) => item.deaths[i].province === 2 ? item.deaths[i].count : '0')}</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-info">
                                        <span className="info-box-icon"><i className="fas fa-users" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Total Cases</span>
                                            <span className="info-box-number">{Province2total.map((item) => item.cases[3].count)}</span>
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
            <Sidebar />
            <Footer />
        </div>
    )
}






export default Province2;

