import React, { useState } from 'react';
import "./AllDevelopmentsServices.scss";
// import "./AllDevelopmentsServices.css";
import design from '../../images/Subtract.svg';
import img2 from '../../images/Frame 163.png';
import img3 from '../../images/Asset-4@1x 1.png';
import img4 from '../../images/martin-knize-JjT_7MwREm4-unsplash 1.png';
import img5 from '../../images/Frame 164.png';
import img6 from '../../images/Frame 164 (1).png';
import Partner from '../Partner/Partner';

import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import DownloadApp from '../DownloadApp/DownloadApp';


export default function AllDevelopmentsServices() {

  return <>

{/* Projects */}
<div className='AllDevelopmentsServices'>
  
  <div className='header'>
    <span className='headline'>Home</span>
    <span className='line'>/</span>
    
      <span className='project'>Development Services</span>
  </div>
  <div className="container-fluid">
    <h2>Discover Our Development Services</h2>
    <p>We have a varieties of services that matches your home needs to make it beautiful and comfy and to have a better experience without the need to search a lot</p>
    <div className="interior-design row">
  
 {[...Array(12)].map((star,i)=>{
      
return(
 
  <div className="col-md-3">
  <Link to='/providers'>
  <div className='service'>
      <img src={img2} alt="" />
      <p className='design-info'>Home Renovations <i className="fa-solid fa-caret-right"></i></p>
    </div>

   
    </Link>
   
   
 
  </div>
)


    })}


</div>


 
  </div>




    
   </div>



  
{/* download App */}
<DownloadApp/>

{/* Partner*/}
<Partner/>
  
<Footer/>
  </>
    
    
}


