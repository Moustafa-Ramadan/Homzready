import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import 'jquery/dist/jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import {DarkModeContextProvider} from './Context/DarkModeContext';
import CommunityContextProvider from './Context/UserCommunitycontext';
import { HashRouter } from 'react-router-dom';

// import { AuthenticationContext } from './Context/AuthContext ';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <React.StrictMode>
      {/* <HashRouter>      
    <App />
   </HashRouter>
     */}
    
   <HashRouter>
    <DarkModeContextProvider>
      <CommunityContextProvider> 
      
      
    <App />
    
    
         </CommunityContextProvider>
    </DarkModeContextProvider> 
   </HashRouter>
    
    
  
  </React.StrictMode>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
