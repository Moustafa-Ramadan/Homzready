import React, {  useState } from 'react'
import { Link} from 'react-router-dom'
import "./CompanyServices.scss"
import message from '../../images/tabler_message.png';


export default function CompanyServices(props) {
 
//   const [services, setServices] = useState(false);

//   const [company, setCompany] = useState(null);

 
// const [Packages, setPackages] = useState(false);

// const ServicesClick = () => {
//   // 👇️ toggle
//   setServices(current => !current);
// };

// const companyClick = () => {
//   // 👇️ toggle
//   setCompany(current => !current);
// };

// const PackagesClick = () => {
//   // 👇️ toggle
//   setPackages(current => !current);
//   // if(company){
//   //   setCompany(current => !current);
//   //   // setServices(null);
//   // }
 
// };


return <>

<div className="Company-services">

<div className='login-page '>

<div>
  <h2>Login to account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='signup-form'>
  
      <form>
<label htmlFor="name-input">Full Name</label>
 <input type="text" placeholder='Enter Your Name' className='form-control' id='name-input' />
        
 <label htmlFor="email-input">Email</label>
 <input type="email" placeholder='Enter Your Email' className='form-control' id='email-input' />

 <label htmlFor="location-input">Location</label>
 <input type="text" placeholder='Enter Your Location' className='form-control' id='location-input' />
      </form>
      
      <div class="form-check">
  <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label check-lebal" for="flexCheckDefault">
  I’ve read and agree to all the <span>Terms and Conditions</span>  about the application
  </label>
</div>

      
      <Link to='/home'>
      <button className='btn-login'>Continue</button>

      </Link>
    
  </div>


 

</div>

</div>
</div>


</>
}
