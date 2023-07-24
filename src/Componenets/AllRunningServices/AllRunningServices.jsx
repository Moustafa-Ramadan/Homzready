import React, { useState } from 'react';
import "./AllRunningServices.scss";
// import "./AllRunningServices.css";
import img16 from '../../images/img16.png';
import img17 from '../../images/img17.png';
import img18 from '../../images/img18.png';
import img19 from '../../images/img19.png';
import Partner from '../Partner/Partner';

import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import DownloadApp from '../DownloadApp/DownloadApp';


export default function AllRunningServices() {

  return <>

{/* Projects */}
<div className='AllRunningServices'>
  
  <div className='header'>
    <span className='headline'>Home</span>
    <span className='line'>/</span>
    
      <span className='project'>Running Services</span>
  </div>
  <div className="container-fluid">
    <h2>Discover Our Running Services</h2>
    <p>We have a varieties of services that matches your home needs to make it beautiful and comfy and to have a better experience without the need to search a lot</p>
    <div className="interior-design row">
  
 {[...Array(6)].map((star,i)=>{
      
return(
 
  <div className="col-md-3">
  <Link to='/providers'>
  <div className='service'>
      <img src={img17} alt="" />
      <p className='design-info'>Home Maintenance <i className="fa-solid fa-caret-right"></i></p>
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


