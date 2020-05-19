import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mapbox from './Mapbox';
import TotalData from './totalData';
import Sidebar from './Contents/Sidebar';

import Footer from './Contents/Footer';
import Header from './Contents/Header';
import CoronaNepal from './Contents/Content';

function App() {
  return (
    <div>

      <Header />
      <Sidebar />
      <CoronaNepal />
      <Footer />
    </div>

  );
}

export default App;
