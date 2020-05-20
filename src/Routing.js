import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CoronaNepal from './../.../../src/Contents/Content';
import Sidebar from './Contents/Sidebar';
import Header from './Contents/Header';
import Footer from './Contents/Footer';
import Province1 from './province/province1';
import Province2 from './province/province2';
import Bagmati from './province/Bagmati';
import Province5 from './province/province5';
import Karnali from './province/Karnali';
import Sudurpaschim from './province/Sudurpaschim';
import Gandaki from './province/Gandaki';





const Routing = () => {
    return (
        <div>

            <Router>
                <Route exact path='/' component={CoronaNepal} />
                <Route path='/Overall' component={CoronaNepal} />
                <Route path='/Province1' component={Province1} />
                <Route path='/Province2' component={Province2} />
                <Route path='/Bagmati' component={Bagmati} />
                <Route path='/Gandaki' component={Gandaki} />
                <Route path='/Province5' component={Province5} />
                <Route path='/Karnali' component={Karnali} />
                <Route path='/Sudurpaschim' component={Sudurpaschim} />


            </Router>
        </div>
    )



}

export default Routing;