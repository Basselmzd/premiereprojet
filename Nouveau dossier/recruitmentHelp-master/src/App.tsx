import React from 'react';
import Layout from './components/Layout';

import "./App.css";

function App() {
  return (<div style={{ backgroundImage: `url(${require('./pages/Home/weather.avif')})` }}>
    
    <React.Fragment>
      <Layout />
    </React.Fragment>
    </div>

    
  );
}

export default App;
