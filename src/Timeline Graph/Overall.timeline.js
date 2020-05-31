import React, { useState, useEffect } from 'react';


import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Sidebar from '../Contents/Sidebar';
import Footer from '../Contents/Footer';
import Header from '../Contents/Header';



export default function CoronaNepal() {

    const [coronaNepal, setcoronaNepal] = useState([]);
    const [totalData, setTotalData] = useState([]);
    const [isfinalData, setIsfinalData] = useState(false);
    const [Timelinedata, setTimelinedata] = useState([]);
    const [Datasets, setDatasets] = useState({
        labels: [],
        datasets: [
            {
                label: 'Total Cases',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'yellow',
                borderColor: 'blue',
                borderWidth: 2,
                data: []
            },
            {
                label: 'Total Recovered',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'white',
                borderColor: 'green',
                borderWidth: 2,
                data: []
            },
            {
                label: 'Total Deaths',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'cyan',
                borderColor: 'red',
                borderWidth: 2,
                data: []
            }

        ]
    })



    useEffect(() => {
        const { data, datasets } = Datasets;
        axios.get('https://data.nepalcorona.info/api/v1/covid')
            .then(res => {
                console.log("what is this>>", res);
                setcoronaNepal(res.data)


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
        axios.get('https://data.nepalcorona.info/api/v1/covid/timeline')
            .then(res => {
                setTimelinedata(res.data)

                let newDatasets = { ...Datasets };
                newDatasets.datasets[0].data = res.data.map((item) => item.totalCases);
                newDatasets.datasets[1].data = res.data.map((item) => item.totalRecoveries);
                newDatasets.datasets[2].data = res.data.map((item) => item.totalDeaths);
                setDatasets({ ...Datasets, ...newDatasets });
                setDatasets({ ...Datasets, labels: res.data.map((item) => item.date) });





            })
            .catch(err => {
                console.log("error>>", err);
            })

    }, [])



    console.log("timeline data >>", Timelinedata);
    console.log("corona", coronaNepal);



    console.log("what is Datasets>>>", Datasets);



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
                                    {/* MAP & BOX PANE */}
                                    <div className="card">

                                        {/* /.card-header */}
                                        <div className="card-body p-0">
                                            <div className="d-md-flex">
                                                <div className="p-1 flex-fill" style={{ overflow: 'hidden' }}>
                                                    {/* Map will be created here */}
                                                    <div id="world-map-markers" style={{ height: 600, overflow: 'hidden' }}>
                                                        <div className="map" />
                                                        <Line
                                                            data={Datasets}
                                                            options={{
                                                                title: {
                                                                    display: true,
                                                                    text: 'Total Data Update',
                                                                    fontSize: 20
                                                                },
                                                                legend: {
                                                                    display: true,
                                                                    position: 'right'
                                                                },
                                                                scales: {
                                                                    yAxes: [{
                                                                        ticks: {
                                                                            beginAtZero: true,
                                                                            min: 0

                                                                        }
                                                                    }]
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                            </div>{/* /.d-md-flex */}
                                        </div>
                                        {/* /.card-body */}
                                    </div>

                                </div>

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

        </div >
    )
}
