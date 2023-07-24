import React, {  useState } from 'react'
import { Link} from 'react-router-dom'
import "./CompanyServices.scss"
import message from '../../images/tabler_message.png';
import vector from '../../images/Vector (2).png';


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
  <h2>Choose Your Services</h2>
  <p>Choose up to 4 services</p>
  <div className='services-page'>
  <div className="container-fluid">
    <div className="row ">
<div className="col-md-4 ps-0  ">
<div className="service" >
<div className='d-flex flex-column gap-2' >
  <img src={vector} alt="vector" />
  <h3>interior Design</h3>
</div>
 

</div>
</div>


    </div>


   
  </div>
   
  

 {[...Array(9)].map((star,i)=>{
          const ratingValue= i+1;
return(



  <label>
<input 
type="checkbox"
name='rating' 
value={ratingValue} 
maxLength={4}
/>


</label>
)


        })}

      
      <Link to='/home'>
      <button className='btn-login'>Continue</button>

      </Link>
    
  </div>


 

</div>

</div>
</div>


</>
}
