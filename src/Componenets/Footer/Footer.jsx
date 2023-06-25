import React from 'react'
// import "./Footer.scss";
import "./Footer.css";

import logo from '../../images/Logo (1).png';


export default function ChangePassword(props) {

  
  return <>
 <div className="Footer">
 <div className="container-fluid">
  <div className="row">
  <div className="col-md-2 p-2 ">
 <img src={logo} alt="logo" className='mb-5' />
  <p>We are a company where we give you 
    a lot of options related to building 
    with many varieties you can choose from,
   and many providers with a very good quality
     you can choose from to help you get a better experience</p>
<div>
  
</div>
 </div>

 <div className="col-md-2 p-2 d-flex justify-content-end  ">
  <div>
    <h3>Development Services</h3>
    <div className='line'></div>
    <p>Interior Design</p>
    <p>Landscape & Planting</p>
    <p>Security Systems</p>
    <p>Smart Homes</p>
    <p>Furniture Moving</p>
    <a className='d-block'>More Services</a>
  </div>
 </div>

 <div className="col-md-2 p-2 d-flex justify-content-end ">
 <div>
   <h3>Running Services</h3>
   <div className='line'></div>
   <p>Air Conditioning Main</p>
   <p>Pets Control</p>
   <p>Gardens Care</p>
   <p>Pools Care</p>
   <p>Security Services</p>
  <a className='d-block '>More Services</a>
 </div>
 </div>
 
 <div className="col-md-2 p-2 d-flex justify-content-end ">
  <div>
    <h3>Contact</h3>
    <div className='line'></div>
    <p className='d-flex align-items-center'><i className="fa-regular fa-envelope  me-2"></i>info@homzready.com</p>
    <p className='d-flex align-items-center'><i class="fa-solid fa-phone  me-2"></i> (02) 0112233249</p>
    <div className='line'></div>
    <div className="social">
               <a href="https:www.facebook.com/mo.ramadan01/" target="_blank">
               <i className='fa-brands fa-facebook  me-2 '></i>
               </a>
    
               
               <a href="https:www.instagram.com/mo.ramadan96/" target="_blank">
               <i className='fa-brands fa-instagram   me-2' ></i> 
               </a>
    
               <a href="https:www.instagram.com/mo.ramadan96/" target="_blank">
               <i className='fa-brands fa-twitter   me-2' ></i> 
               </a>
    
               <a href="https:www.linkedin.com/in/mostafa-ramadan-2539691ab/" target="_blank">
               <i className='fa-brands fa-linkedin   me-2 ' ></i>
               </a>
              
             </div>
  </div>
 </div>

 <div className="col-md-2 p-2  d-flex justify-content-end">
 <div>
   <h3>Terms</h3>
   <div className='line'></div>
  <a className='d-block mb-3'>Terms and Conditions</a>
  <a className='d-block mb-3'>Privacy Policy</a>
 </div>

 </div>
  </div>
 


    
    </div>
 </div>

  
  

 
  
  
  </>
}

