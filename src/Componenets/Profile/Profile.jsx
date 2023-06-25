import React from 'react'
import { Link } from 'react-router-dom'
import "./Profile.scss"



export default function Profile(props) {
  
return <>

<div className="ProfileForm">
  <div className="container-fluid ">
    <div className="row">

      <div className="col-md-12 ">


      <div className='Profile-page '>
    
<div>
  <h2>Profile Info</h2>
  <p>Describe your company in details</p>
 


 
  <div className='signup-form'>
  
      <form>
      <label htmlFor="image-input">Photo</label>
      <input type="file" className="form-control image-input" id='image-input' />

<label htmlFor="name-input">Full Name</label>
 <input type="text" placeholder='Enter Your Name' className='form-control' id='name-input' />

        
 <label htmlFor="number-input">Phone Number</label>
 <input type="text" placeholder='Enter Your Number' className='form-control' id='number-input' />
        
 <label htmlFor="email-input">Email</label>
 <input type="email" placeholder='Enter Your Email' className='form-control' id='email-input' />

 <label htmlFor="location-input">Location</label>
 <input type="text" placeholder='Enter Your Location' className='form-control mb-5' id='location-input' />
      </form>
      

      
      <Link to='/home'>
      <button className='btn-login'>Continue</button>

      </Link>
    
  </div>


 

</div>

</div>

</div>

   

    </div>
  </div>

</div>




</>
}
