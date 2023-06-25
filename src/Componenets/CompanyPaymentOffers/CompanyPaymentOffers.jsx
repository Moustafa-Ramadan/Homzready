import React, {  useState } from 'react'
import { Link} from 'react-router-dom'
import "./CompanyPaymentOffers.scss"
import message from '../../images/tabler_message.png';


export default function CompanyPaymentOffers(props) {
 

  const [inputYes, setInputYes] = useState(null);
  const [inputNo, setInputNo] = useState(null);




  const Yes= (e) => {
    setInputYes(current => !current)
    if(inputNo){
      setInputNo(current => !current)
    }
    console.log(e.target.value)
  };

  const No= (e) => {
    setInputNo(current => !current)
    if(inputYes){
      setInputYes(current => !current)
    }
 console.log(e.target.value)
  };
return <>

<div className="CompanyPaymentOffers">

<div className="container-fluid ">
    <div className="row">

      <div className="col-md-12 ">


      <div className='CompanyPaymentOffers-page '>
    
<div>
  <h2>Payments & Offers</h2>
  <p>Describe Your Company Payments & offers</p>
 


 
  <div className='CompanyPaymentOffers-form'>
  
      <form>

        {/* Fees details */}
        <h4>Fees</h4>
        <p>Type details about the fees your company use</p>
      <label htmlFor="Fees-input">Fees Details</label>
      <input type="text" className="form-control " 
      placeholder='Fees Details' id='Fees-input'  required/>

{/* Installments details */}
      <h4>Installments</h4>
      <p>Type details about the installments your company use</p>

<input type="radio" className="btn-check form-control " 
name="options-outlined" id="success-outlined" 
autocomplete="off" checked value='Yes' required
onFocus={Yes} 
/>
<label className="btn radio-input  me-4" for="success-outlined"
style={{
  border: inputYes? '1px solid #06B2BB' : '1px solid #898989',
  color:inputYes?' #06B2BB' : ' #898989',
  lineBreak:'break'

}} required>Yes</label>

<input type="radio" className="btn-check form-control " 
name="options-outlined" id="danger-outlined" 
autocomplete="off"  value='No' required
onFocus={No}/>
<label className="btn radio-input  me-4" for="danger-outlined"
style={{
  border: inputNo ? '1px solid #06B2BB' : '1px solid #898989',
  color:inputNo?' #06B2BB' : ' #898989'
}} required
>No</label>
<label htmlFor="Installments-input" className='d-block'>Installments Details</label>
 <input type="text" placeholder='Installments Details'
  className='form-control' id='Installments-input' required />

{/* Offers details */}
 <h4>Offers</h4>
        <p>Type details about the fees your company use</p>
 <label htmlFor="Offers-input">Offers Details</label>
 <input type="text" placeholder='Offers Details'
  className='form-control' id='Offers-input' required />
        
        
{/* Warranty details */}
    <h4>Warranty</h4>
        <p>Type details about the fees your company use</p>      

 <label htmlFor="Warranty-input">Warranty Details</label>
 <input type="text" placeholder='Warranty Details' 
 className='form-control' id='Warranty-input' required />
 
 <label htmlFor="location-input">Location</label>
 <input type="text" placeholder='Enter Your Location'
  className='form-control mb-5' id='location-input' required />
      
      <button className='btn-login' type='submit'>Save</button>

      </form>
 

      {/* <Link to='/home'>

      </Link> */}
    
  </div>


 

</div>

</div>

</div>

   

    </div>
  </div>



</div>


</>
}
