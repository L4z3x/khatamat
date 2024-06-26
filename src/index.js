import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Route,Routes, Navigate} from 'react-router-dom';  
import './style/index.css'
import Login from './js/login'
import Navbar from './js/navbar'
import Signup from './js/singup'
import Profile from './js/profile'
import DashBoard from './js/dashboard'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/dashboard' element={<DashBoard />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path={'/*'} element={<Login />}/>  
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
          
      </Router>
    </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
