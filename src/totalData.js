import React, { Component } from 'react';
import axios from 'axios';



export default class TotalData extends Component {
    constructor() {
        super();
        this.state = {
            totalData: [],
            isfinalData: false
        }
    }
    componentDidMount() {
        axios.get('https://nepalcorona.info/api/v1/data/nepal')
            .then(res => {
                this.setState({
                    totalData: [res.data],
                    isfinalData: true
                })
            })
    }
    render() {
        console.log("final data>>", this.state);
        const { totalData, isfinalData } = this.state;
        let finalData = isfinalData
            ? this.state.totalData.map((item) => (
                <div>
                    <p id="overall">Overall </p>
                    <p>Infected = {item.tested_positive}</p>
                    <p>Recovered = {item.recovered}</p>
                    <p>Deaths = {item.deaths}</p>
                    <p>Quarentine = {item.quarantined}</p>
                    <p>Total Test = {item.tested_total}</p>
                    <p>Negative Test Report = {item.tested_negative}</p>
                    <p>Positive Test Report = {item.tested_positive}</p>
                    <p>Total RDT Test = {item.tested_rdt}</p>
                    <p>Updated On ={item.updated_at}</p>


                </div>

            ))
            : <p>Isloading</p>
        return (
            <div>
                {finalData}

            </div>
        )
    }

}



