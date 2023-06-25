import React from 'react';
import "./Running.scss";
// import "./Running.css";
import vector from '../../images/Vector (1).png';

export default function Running() {
  return <>

{/* Running-services */}

<div className='menu-services'>
            <div className="line"></div>

           <div className='menu'>
             <div className='container-fluid'>
               <div className="row pt-5 justify-content-between  ">
            
                 <div className="col-md-3">
                   <div className="service">
                   <img src={vector} alt="vector" />
                     <h3>interior Design</h3>
                     <p>take care of everything in your garden to make it better</p>
                   </div>
                 </div>

                 <div className="col-md-3">
                   <div className="service">
                   <img src={vector} alt="vector" />
                     <h3>interior Design</h3>
                     <p>take care of everything in your garden to make it better</p>
                   </div>
                 </div>

                 <div className="col-md-3">
                   <div className="service">
                   <img src={vector} alt="vector" />
                     <h3>interior Design</h3>
                     <p>take care of everything in your garden to make it better</p>
                   </div>
                 </div>
                 
                 
               </div>
            
               <div className="row pt-5 justify-content-between  ">
            
            <div className="col-md-3">
              <div className="service">
              <img src={vector} alt="vector" />
                <h3>interior Design</h3>
                <p>take care of everything in your garden to make it better</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="service">
              <img src={vector} alt="vector" />
                <h3>interior Design</h3>
                <p>take care of everything in your garden to make it better</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="service">
              <img src={vector} alt="vector" />
                <h3>interior Design</h3>
                <p>take care of everything in your garden to make it better</p>
              </div>
            </div>
            
            
          </div>
              <span>View All Services<i class="fa-solid fa-angles-right"></i></span>
             </div>
           </div>
          </div>
  
  </>
    
    
}
