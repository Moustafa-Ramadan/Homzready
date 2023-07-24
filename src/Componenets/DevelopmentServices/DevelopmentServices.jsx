import React from 'react';
import "./DevelopmentServices.scss";
// import "./DevelopmentServices.css";

import design from '../../images/Subtract.svg';
import img2 from '../../images/Frame 163.png';
import img3 from '../../images/Asset-4@1x 1.png';
import img4 from '../../images/martin-knize-JjT_7MwREm4-unsplash 1.png';
import img5 from '../../images/Frame 164.png';
import img6 from '../../images/Frame 164 (1).png';

import { Link } from 'react-router-dom';


export default function DevelopmentServices() {
  return <>

{/* Development-services */}
<div className="Development-services">
  <div className="container-fluid">
    <h2>Discover Our Development Services</h2>
    <p>We have a varieties of services that matches your home needs to make it beautiful and comfy and to have a better experience without the need to search a lot</p>
 <div className="interior-design row">
  <div className="col-md-6">
    <Link to='/providers'>
    <div className="interior">
      <img src={design} alt="" />
<div className='interior-text'>
  <span>Our Services</span>
  <p className='design-text'>Interior Design</p>
  <a >View All</a>
</div>
    </div>
    <img src={img2} alt="" className='img2' />
    </Link>
  
  </div>
  
  <div className="col-md-3">
  <Link to='/providers'>
  <div>
      <img src={img3} alt="" />
      <p className='design-info'>Home Renovations</p>
    </div>

    <div>
     <img src={img5} alt="" />
     <p className='design-info'>Fishing</p>
   </div>
    </Link>
   
   
  </div>

  <div className="col-md-3">
  <Link to='/providers'>
  <div>
    <img src={img4} alt="" />
    <p className='design-info'>Landscapes</p>
  </div>
  
    <div>
      <img src={img6} alt="" />
      <p className='design-info'>Turnkey Services </p>
    </div>
      </Link>
 

      </div>
 </div>

 <Link to='/AllDevelopmentServices'>
 <button className='w-100'>Browse All Services</button>
 </Link>
 
  </div>
</div>
  
  </>
    
    
}
