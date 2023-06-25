import React, { useState } from 'react';
import "./WriteReview.scss";
// import "./WriteReview.css";
import logo from '../../images/TGP.png';
import { Link } from 'react-router-dom';
// import StarRatings from './react-star-ratings';
import { FaStar } from "react-icons/fa";

import Footer from './../Footer/Footer';


export default function WriteReview() {
  

  const [ratingQuality, setRatingQuality] = useState(null);
  const [ratingTiming, setRatingTiming] = useState(null);
  const [ratingBehaviors, setRatingBehaviors] = useState(null);


  const [hoverQuality, setHoverQuality] = useState(null);
  const [hoverTiming, setHoverTiming] = useState(null);
  const [hoverBehaviors, setHoverBehaviors] = useState(null);

 


  // console.log(ratingBehaviors)
  
  return <>

{/* Projects */}


<div className="WriteReview">
<h2>Write Review</h2>
<p>Describe your company in details</p>
<div className="container">
  <div className="row">
    <div className="col-md-12">
    <div className="company">
      <Link to='/provider'>
      
  <div className="row">
    <div className="col-md-3">
      <div className="logo">
        <img src={logo} alt="logo" className='image-logo' />
      </div>
    </div>
    <div className="col-md-9">
      <div className="info">
      
      <h3 className='design-info'>TGP International</h3>
      <p className='location'><i className="fa-solid fa-location-dot me-2"></i> Fifth Settlement, New Cairo</p>

        
      
     
   

      </div>
    </div>

  </div>


 </Link>
 </div>
 <h3>Give a rating</h3>

 <div className="Give-rating ">
      <h4>Quality
        </h4>

      <div className="rate" >
    

    {[...Array(5)].map((star,i)=>{
      const ratingValue= i+1;
return(
<label>
<input 
type="radio"
name='rating' 
value={ratingValue} 
onClick={()=>{setRatingQuality(ratingValue)}} 
/>

<FaStar className='star'
color={ratingValue <=  (hoverQuality || ratingQuality) ? '#FFB400' : '#DFDFDF'} 

onMouseOver={()=>{setHoverQuality(ratingValue)}} 
onMouseLeave={()=>{setHoverQuality(null)}}
/>

</label>
)


    })}

    </div>
        
      </div>
     
      <div className="Give-rating">
      <h4>Timing & Commitment</h4>
      <div className="rate" >
    

        {[...Array(5)].map((star,i)=>{
          const ratingValue= i+1;
return(
  <label>
<input 
type="radio"
name='rating' 
value={ratingValue} 
onClick={()=>{setRatingTiming(ratingValue)}} 
/>

<FaStar className='star'
 color={ratingValue <=  (hoverTiming || ratingTiming) ? '#FFB400' : '#DFDFDF'} 
 
 onMouseOver={()=>{setHoverTiming(ratingValue)}} 
 onMouseLeave={()=>{setHoverTiming(null)}}
 />

</label>
)


        })}

        </div>
        
      </div>
    
      <div className="Give-rating Behaviors">
      <h4>Behaviors & Morals</h4>
        <div className="rate" >
      

        {[...Array(5)].map((star,i)=>{
          const ratingValue= i+1;
return(
  <label>
<input 
type="radio"
name='rating' 
value={ratingValue} 
onClick={()=>{setRatingBehaviors(ratingValue)}} 
/>

<FaStar className='star'
 color={ratingValue <=  (hoverBehaviors || ratingBehaviors) ? '#FFB400' : '#DFDFDF'} 
 
 onMouseOver={()=>{setHoverBehaviors(ratingValue)}} 
 onMouseLeave={()=>{setHoverBehaviors(null)}}
 />

</label>
)


        })}

        </div>
        
      </div>

<div className="write-review">
  <h5>Write a review</h5>
  <form>
    <textarea name="review" placeholder='Write your review here' id="review" cols="30" rows="5" className='form-control'></textarea>
    
  </form>

  
</div>

<button>Submit</button>

    </div>

   

  </div>
</div>

    
</div>

<Footer/>
  
  </>
    
    
}
