import React, { useEffect, useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { coronaNepal } from './../src/httpBrowsing';
import './Mapbox.css';
import * as Data from './data.json';
import axios from 'axios';


function Mapbox() {

    const [viewPort, setviewPort] = useState({
        latitude: 27.713264,
        longitude: 85.322985,
        width: "100vw",
        height: "100vh",
        zoom: 10,
    })
    const [coronaNepal, setcoronaNepal] = useState([]);
    const [selectedPerson, setselectedPerson] = useState(null);
    useEffect(() => {
        axios.get('https://data.nepalcorona.info/api/v1/covid')
            .then(res => {
                console.log("what is this>>", res);
                setcoronaNepal(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log("what is coronanepal>>", coronaNepal);

    return (
        <div>



            <ReactMapGl {...viewPort} mapboxApiAccessToken="pk.eyJ1IjoibmFiYW5pdCIsImEiOiJja2E4MXR3NDkwNGMxMzJzOWF4Zzk1cmRxIn0.PlAUDME-BUb9gV-DCutXzw" mapStyle="mapbox://styles/nabanit/cka7uauty1vpl1ip2f33744yz"
                onViewportChange={(viewPort) => setviewPort(viewPort)}>
                <div className="legend">
                    <img src="/recovered.jpeg" alt="recovered" />:Recovered<br />
                    <img src="/ongoing.gif" alt="ongoing" />:Treatment Ongoing<br />
                    <img src="/dead.gif" alt="dead" />:Death
                    </div>

                {coronaNepal.filter((local) => local.currentState === 'recovered').map((local) => (
                    <Marker key={local.id} latitude={local.point.coordinates[1]} longitude={local.point.coordinates[0]}>
                        <button className="marker-btn" onMouseOver={e => {
                            e.preventDefault();
                            setselectedPerson(local);
                        }}>
                            <img src="/recovered.jpeg" alt="recovered" />
                        </button>

                    </Marker>
                ))}
                {coronaNepal.filter((local) => local.currentState === 'active').map((local) => (
                    <Marker key={local.id} latitude={local.point.coordinates[1]} longitude={local.point.coordinates[0]}>
                        <button className="marker-btn" onMouseOver={e => {
                            e.preventDefault();
                            setselectedPerson(local);
                        }}>
                            <img src="/ongoing.gif" alt="ongoing" />
                        </button>

                    </Marker>
                ))}
                {coronaNepal.filter((local) => local.currentState === 'death').map((local) => (
                    <Marker key={local.id} latitude={local.point.coordinates[1]} longitude={local.point.coordinates[0]}>
                        <button className="marker-btn-dead" onMouseOver={e => {
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



                        <div>

                            <p>Age={selectedPerson.age}</p>
                            <p>Gender={selectedPerson.gender}</p>
                            <p>Reported On={selectedPerson.reportedOn}</p>
                            <p>Recovered On={selectedPerson.recoveredOn}</p>
                            <p>Transmission Type={selectedPerson.type}</p>
                            <p>current Status={selectedPerson.currentState}</p>
                            <p>latitude={selectedPerson.point.coordinates[1]},longitude={selectedPerson.point.coordinates[0]}</p>
                        </div>
                    </Popup>
                ) : null}



            </ReactMapGl>
        </div>
    )



}

export default Mapbox;

