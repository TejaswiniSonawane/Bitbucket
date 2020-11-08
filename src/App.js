import React 				from 'react';
import Layout 				from './screens/Layout/Layout.js';
import axios 				from 'axios';

import './App.css';
// import 'font-awesome/css/font-awesome.min.css';
// import './lib/router.js';


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';


function App() {
  return (
    <div>
      <Layout />
    </div>    
    );  
}
  
export default App;
