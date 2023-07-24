import React from 'react';
import "./Provider.scss";
import { useState } from 'react';
// import "./Provider.css";
import logo from '../../images/TGP.png';
import CompanyProjects from '../CompanyProjects/CompanyProjects';
import Footer from './../Footer/Footer';
import Reviews from '../Reviews/Reviews';


export default function Provider() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
  };

  // const handle= (e) => {
  //   // 👇️ toggle
  //   handleClick()
  // };

 
  
  return <>



{/* Projects */}
<div className='provider'>
  <div className='container-fluid'>
    <div className="row">
      <div className="col-md-4">
        <div className="Filter">
         
          <h2  style={{
          backgroundColor: isActive ? 'white ' :'transparent',
          color: isActive ? '#06B2BB' : '#343434',
        }}
        onClick={handleClick}
       >Company Info </h2>
         
          <h2 style={{
          backgroundColor: isActive ? 'white ' :'transparent',
          color: isActive ? '#06B2BB' : '#343434',
        }}
        onClick={handleClick}>Services</h2>
         
          <h2 style={{
          backgroundColor: isActive ? 'white ' :'transparent',
          color: isActive ? '#06B2BB' : '#343434',
        }}
        onClick={handleClick}>Installments</h2>
         
          <h2 style={{
          backgroundColor: isActive ? 'white ' :'transparent',
          color: isActive ? '#06B2BB' : '#343434',
        }}
        onClick={handleClick}>Fees</h2>
          
          <h2 style={{
          backgroundColor: isActive ? 'white ' :'transparent',
          color: isActive ? '#06B2BB' : '#343434',
        }}
        onClick={handleClick}>Offers</h2>
          
          <h2 style={{
          backgroundColor: isActive ? 'white ' :'transparent',
          color: isActive ? '#06B2BB' : '#343434',
        }}
        onClick={handleClick}>Warranty</h2>
         
          <h2 style={{
          backgroundColor: isActive ? 'white ' :'transparent',
          color: isActive ? '#06B2BB' : '#343434',
        }}
        onClick={handleClick}>Registration NO.</h2>
          
          <h2 href="servicers" style={{
          backgroundColor: isActive ? 'white ' :'transparent',
          color: isActive ? '#06B2BB' : '#343434',
        }}
        onClick={handleClick}>Packages</h2>


        </div>
      </div>

      <div className="col-md-8">
     <div className="container">
<div className="company">
  <div className="row">
    <div className="col-md-3">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
    <div className="col-md-9">
      <div className="info">
      <p className='design-info'>TGP International</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West, New Cairo</p>
      <div className="contact">
        <button className='btn  call'>Call</button>
        <button className='btn  chat'>chat</button>

        </div>
  
      </div>
    </div>

  </div>

</div>

<div className="About company-info">
    <h3>About Company</h3>
    <p className='details'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque  Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. </p>
  </div>

  <div className="Services company-info">
    <h3 >Services</h3>
    <div className='service'>
      <button className='design'>Interior Design</button>
      <button className='Turnkey'>Turnkey services</button>
      <button className='design'>Land Scape & Planting</button>

      
    </div>
  </div>

  <div className="Installments company-info">
    <h3 className='text-style'>Installments</h3>
    <p>Yes</p>
    <a >Details</a>
    <p className='details'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque  Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. </p>

  </div>

  <div className="Fees company-info">
    <h3 className='text-style'>Fees</h3>
    <a >Details</a>
    <p className='details'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque  Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. </p>

  </div>

  <div className="Offers company-info" href="servicers">
    <h3 className='text-style'>Offers </h3>
    <a >Details</a>
    <p className='details'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque  Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. </p>

  </div>

  <div className="Warranty company-info">
    <h3 className='text-style'>Warranty </h3>
    <a >Details</a>
    <p className='details'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque  Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. </p>

  </div>

  <div className="Registration company-info">
    <h3 className='text-style'>Registration NO. </h3>
    <a >225468711234486</a>
   

  </div>

  <div className="Packages company-info">
    <h3 className='text-style'>Packages </h3>
   {/* <div className='company-package'>
     <div className="package">
       <h5>Silver</h5>
       <div className="cost">
         <p>1000 LE</p>
         <i className="fa-solid fa-arrow-up "></i>
       </div>
     </div>
     <p className='details'>Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra</p>
    
   </div> */}

  

   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <div className="info">
        <h5 className='text-style'>silver</h5>
        <p>1000 LE</p>
       </div>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body details">
      Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className="info">
        <h5 className='text-style'>Gold</h5>
        <p>2000 LE</p>
       </div>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body details">
      Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <div className="info">
        <h5 className='text-style'>Platinum</h5>
        <p>3000 LE</p>
       </div>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body details">
      Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra
      
      </div>
    </div>
  </div>
</div>

  </div>

     </div>
  
      </div>
  
    </div>
   

  {/* Company's Projects */}
<CompanyProjects/>

{/* Reviews */}
<Reviews/>

  </div>
</div>

<Footer/>
  
  </>
    
    
}
