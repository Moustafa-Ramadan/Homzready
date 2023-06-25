import React from 'react';
import "./Services.scss";
// import "./Services.css";

import img21 from '../../images/img21.png';
import { Link } from 'react-router-dom';


export default function Services() {
  return <>

{/* services */}
<div className="services">


<div className='container service '>
   <div className='row g-5'>
   <div className="col md-6">
    <div className="image">
    <img src={img21} alt="img21" className='layer'/>
    <div className='line'></div>
    </div>
     
    
     </div>

     <div className="col md-6  d-flex align-content-center">
    <div className='align-self-center '>
       <p className='design-info'>We provide the best services for you & your home</p>
       <p>We are here to help you make your dream come true by providing you many services that your home needs to make it beautiful and comfy</p>
       <p>Browse for services, choose the one that suits your home for better experience</p>
       <Link to='/providers'>
       <button className='btn-design '>Browse All Services</button>
      </Link>
     

    </div>
     </div>
     
   </div>
</div>
 
</div>

  
  </>
    
    
}
