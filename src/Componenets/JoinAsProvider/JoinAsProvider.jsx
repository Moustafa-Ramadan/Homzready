import React, {  useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import "./JoinAsProvider.scss"
import message from '../../images/tabler_message.png';

import Footer from '../Footer/Footer';


export default function JoinAsProvider(props) {
 
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
<div className="row">
  <div className="col-md-4 ">
  <div className="stablish-steps">
    
{/* company-services */}


<Link to='companyServices'>
<div className="step" >
  <div style={{
 color: services ? ' #06B2BB' : '#898989',
 border:services ? '2px solid #06B2BB' : '2px solid #898989'
}}
onClick={ServicesClick }  className='correct'>
    <i className="fa-solid  fa-check">
      </i></div>
<div>
  <h2  style={{
   color: services ? '#06B2BB' : '#898989',
  }}
  onClick={ServicesClick }> Your Services</h2>
  
  <p  style={{
   color: services ? '#343434' : '#CACACA',
  }}
  onClick={ServicesClick }>Please choose your services </p>
</div>
</div>
</Link>

      
       
<Link to='CompanyInfo'>
<div className="step" >
<div style={{
 color: company ? ' #06B2BB' : '#898989',
 border:company ? '2px solid #06B2BB' : '2px solid #898989'
}}
onClick={companyClick }  className='correct'>
    <i className="fa-solid  fa-check">
      </i></div>

   <div>
         <h2  style={{
          color: company ? '#06B2BB' : '#898989',
        }}
        onClick={companyClick}>Company Info </h2>
         
         <p  style={{
          color: company ? '#343434' : '#CACACA',
        }}
        onClick={companyClick}>Please provide your company information  </p>
         
   </div>
        </div>
        </Link>
        

{/* company-payment */}
       
  <Link to='companyPaymentOffers'>
        <div className="step" >
       
        <div style={{
 color: payment ? ' #06B2BB' : '#898989',
 border:payment  ? '2px solid #06B2BB' : '2px solid #898989'
}}
onClick={PaymentClick }  className='correct'>
    <i className="fa-solid  fa-check">
      </i></div>

<div>
  <h2  style={{
   color: payment ? '#06B2BB' : '#898989',
  }}
  onClick={PaymentClick}>Payment & Offers </h2>
  
  <p  style={{
   color: payment? '#343434' : '#CACACA',
  }}
  onClick={PaymentClick}>Please provide your fees, installments, and offers</p>
  
</div>

</div>
</Link>


{/* company-packages */}

<Link to='companyPackages'>
<div className="step" >

<div style={{
 color: Packages ? ' #06B2BB' : '#898989',
 border:Packages ? '2px solid #06B2BB' : '2px solid #898989'
}}
onClick={PackagesClick }  className='correct'>
    <i className="fa-solid  fa-check">
      </i></div>

<div>
  <h2  style={{
   color: Packages ? '#06B2BB' : '#898989',
  }}
  onClick={PackagesClick}>Packages </h2>
  
  <p  style={{
   color: Packages? '#343434' : '#CACACA',
  }}
  onClick={PackagesClick}>Please provide your packages information </p>
  
</div>
</div>
</Link>


{/* company-projects*/}

<Link to='companyProject'>
<div className="step" >

<div style={{
 color: projects ? ' #06B2BB' : '#898989',
 border:projects ? '2px solid #06B2BB' : '2px solid #898989'
}}
onClick={ProjectsClick}  className='correct'>
    <i className="fa-solid  fa-check">
      </i></div>

<div>
  <h2  style={{
   color: projects ? '#06B2BB' : '#898989',
  }}
  onClick={ProjectsClick}>Projects</h2>
  
  <p  style={{
   color: projects? '#343434' : '#CACACA',
  }}
  onClick={ProjectsClick}>Please add your company projects</p>
  
</div>
</div>  

</Link>


       
        
      
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
