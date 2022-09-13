import React from 'react';
import './CSS/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
