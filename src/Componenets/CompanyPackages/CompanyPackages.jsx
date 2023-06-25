import React, {  useState } from 'react'
import { Link} from 'react-router-dom'
import "./CompanyPackages.scss"
import message from '../../images/tabler_message.png';


export default function CompanyPackages(props) {
 


return <>

<div className="CompanyPackages">

<div className="container-fluid ">
    <div className="row">

      <div className="col-md-12 ">


      <div className='CompanyPackages-page '>
    
<div>
  <h2>Packages</h2>
  <p>Describe your company in details</p>
 


 
  <div className='CompanyPackages-form'>
  
      <form>

        {/* First Package */}
       

 <div className="Package">
 <h4>First Package</h4>
        <p>Type details about the fees your company use</p>
      <label htmlFor="FirstPackageName-input">Package Name</label>
      <input type="text" className="form-control " 
      placeholder='Enter Your Package Name' id='FirstPackageName-input'  required/>

<label htmlFor="FirstPackagePrice-input">Package Price</label>
      <input type="text" className="form-control " 
      placeholder='Enter Your Package Price' id='FirstPackagePrice-input'  required/>

<label htmlFor="FirstPackageDetails-input">Package Details</label>
      
<textarea name="FirstPackageDetails"
 placeholder='Enter Your Package Details'
 id='FirstPackageDetails-input'  required cols="30"  
 className='form-control'></textarea>

 </div>

     {/* second Package */}
     <div className="Package">
     <h4>second Package</h4>
        <p>Type details about the fees your company use</p>
      <label htmlFor="secondPackageName-input">Package Name</label>
      <input type="text" className="form-control " 
      placeholder='Enter Your Package Name' id='secondPackageName-input'  required/>

<label htmlFor="secondPackagePrice-input">Package Price</label>
      <input type="text" className="form-control " 
      placeholder='Enter Your Package Price' id='secondPackagePrice-input'  required/>

<label htmlFor="secondPackageDetails-input">Package Details</label>
      
<textarea name="secondPackageDetails"
 placeholder='Enter Your Package Details'
 id='secondPackageDetails-input'  required cols="30"  className='form-control'></textarea>
     </div>
  
  {/* Third Package*/}
  <div className="Package">
     <h4>Third Package</h4>
        <p>Type details about the fees your company use</p>
      <label htmlFor="ThirdPackageName-input">Package Name</label>
      <input type="text" className="form-control " 
      placeholder='Enter Your Package Name' id='ThirdPackageName-input'  required/>

<label htmlFor="ThirdPackagePrice-input">Package Price</label>
      <input type="text" className="form-control " 
      placeholder='Enter Your Package Price' id='ThirdPackagePrice-input'  required/>

<label htmlFor="ThirdPackageDetails-input">Package Details</label>
      
<textarea name="ThirdPackageDetails"
 placeholder='Enter Your Package Details'
 id='ThirdPackageDetails-input'  required cols="30"  className='form-control'></textarea>
     </div>
  

      <button className='btn-login' type='submit'>Save</button>

      </form>
 

    
    
  </div>


 

</div>

</div>

</div>

   

    </div>
  </div>



</div>


</>
}
