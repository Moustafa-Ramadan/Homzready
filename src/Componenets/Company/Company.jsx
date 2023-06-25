import React, {  useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import "./Company.scss"
import message from '../../images/tabler_message.png';

import Footer from '../Footer/Footer';


export default function Company(props) {
 
  const [services, setServices] = useState(null);

  const [company, setCompany] = useState(null);

 
const [Packages, setPackages] = useState(null);
const [payment, setPayment] = useState(null);

const [projects, setProjects] = useState(null);


const ServicesClick = () => {
  // 👇️ toggle
  setServices(current => !current);
  

 
  
  if(payment){
    setPayment(current => !current);
    
  }
   if(company){
    setCompany(current => !current);
  }
    
  if(Packages){
    setPackages(current => !current);
  }
  if(projects){
    setProjects(current => !current);
  }
};

const companyClick = () => {
  // 👇️ toggle
  setCompany(current => !current);

 
  
  if(payment){
    setPayment(current => !current);
    
  }
   if(services){
    setServices(current => !current);
  }
    
  if(Packages){
    setPackages(current => !current);
  }
  if(projects){
    setProjects(current => !current);
  }
};

const PackagesClick = () => {
  
  setPackages(current => !current);
  if(company){
    setCompany(current => !current);
    
  }
   if(services){
    setServices(current => !current);
  }
    
  if(payment){
    setPayment(current => !current);
  }
  if(projects){
    setProjects(current => !current);
  }
  
 
};



const PaymentClick = () => {
  setPayment(current => !current);
  
  if(company){
    setCompany(current => !current);
    
  }
   if(services){
    setServices(current => !current);
  }
    
  if(Packages){
    setPackages(current => !current);
  }
  if(projects){
    setProjects(current => !current);
  }
  
 
};

const ProjectsClick = () => {
  setProjects(current => !current);
  if(company){
    setCompany(current => !current);
    
  }
   if(services){
    setServices(current => !current);
  }
    
  if(Packages){
    setPackages(current => !current);
  }
  if(payment){
    
  setPayment(current => !current);

  }
  
 
};

// useEffect(() => {
  
//   setServices(true)
//   ServicesClick()

 
// }, [])

return <>

<div className="Company">
  <div className="container">
  <h3>Company Dashboard</h3>
    <div className="row ">
    <div className="col-md-3">
    <div className="Company-Dashboard">
  <img src={message} alt="message" />
  <h6>Messages</h6>
  <p><span>12</span> Messages</p>
        </div>

          </div>
          <div className="col-md-3">
    <div className="Company-Dashboard bg-color">
  <img src={message} alt="message" />
  <h6>Packages</h6>
  <p><span>3</span> Packages</p>
        </div>
        
          </div>

          <div className="col-md-3">
    <div className="Company-Dashboard">
  <img src={message} alt="message" />
  <h6>Projects</h6>
  <p><span>6</span> Projects</p>
        </div>
        
          </div>

          <div className="col-md-3">
    <div className="Company-Dashboard bg-color">
  <img src={message} alt="message" />
  <h6>Services</h6>
  <p><span>2</span> Services</p>
        </div>
        
          </div>

    </div>
<div className="row">
  <div className="col-md-4 ">
  <div className="stablish-steps">
    
 


{/* company-services */}

<div className="step" >
<Link to='companyServices'>
<h2  style={{
 color: services ? '#06B2BB' : '#898989',
}}
onClick={ServicesClick }>Your Services</h2>

<p  style={{
 color: services ? '#343434' : '#CACACA',
}}
onClick={ServicesClick }>Please choose your services </p>
</Link>
</div>
      
        <div className="step" >
<Link to='CompanyInfo'>
        <h2  style={{
         color: company ? '#06B2BB' : '#898989',
       }}
       onClick={companyClick}>Company Info </h2>
        
        <p  style={{
         color: company ? '#343434' : '#CACACA',
       }}
       onClick={companyClick}>Please provide your company information  </p>
        </Link>
        </div>

{/* company-payment */}
        <div className="step" >
        <Link to='companyPaymentOffers'>
<h2  style={{
 color: payment ? '#06B2BB' : '#898989',
}}
onClick={PaymentClick}>Payment & Offers </h2>

<p  style={{
 color: payment? '#343434' : '#CACACA',
}}
onClick={PaymentClick}>Please provide your fees, installments, and offers</p>
</Link>
</div>

{/* company-packages */}
<div className="step" >
<Link to='companyPackages'>
<h2  style={{
 color: Packages ? '#06B2BB' : '#898989',
}}
onClick={PackagesClick}>Packages </h2>

<p  style={{
 color: Packages? '#343434' : '#CACACA',
}}
onClick={PackagesClick}>Please provide your packages information </p>
</Link>
</div>

{/* company-projects*/}
<div className="step" >
<Link to='companyProject'>
<h2  style={{
 color: projects ? '#06B2BB' : '#898989',
}}
onClick={ProjectsClick}>Projects</h2>

<p  style={{
 color: projects? '#343434' : '#CACACA',
}}
onClick={ProjectsClick}>Please add your company projects</p>
</Link>
</div>  

       
        
      
       </div>
  </div>

  <div className="offset-1 col-md-7">
  <Outlet/>
  </div>
</div>

  </div>
</div>

<Footer/>
</>
}
