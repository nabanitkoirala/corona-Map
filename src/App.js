import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mapbox from './Mapbox';
import TotalData from './totalData';
import Sidebar from './Contents/Sidebar';

import Footer from './Contents/Footer';
import Header from './Contents/Header';
import CoronaNepal from './Contents/Content';
import Province1 from './province/province1';
import Bagmati from './province/Bagmati';
import Gandaki from './province/Gandaki';
import Province5 from './province/province5';
import Karnali from './province/Karnali';
import Province2 from './province/province2';
import Sudurpaschim from './province/Sudurpaschim';
import Routing from './Routing';


function App() {
  return (
    <div>
      <Routing />
    </div>

  );
}

export default App;
