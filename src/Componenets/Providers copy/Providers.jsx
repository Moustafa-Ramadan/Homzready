import React, { useState } from 'react';
import "./Providers.scss";
// import "./Providers.css";
import Partner from '../Partner/Partner';
import logo from '../../images/TGP.png';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Footer from '../Footer/Footer';


export default function Providers() {

 
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
  };

  // const handle= () => {
  //   // 👇️ toggle
  //   setIsActive(current => !current);
  // };

  


  return <>

{/* Projects */}
<div className='Providers'>
  <div className='container-fluid'>
  <div className='header'>
    <span className='headline'>Home</span>
    <span className='line'>/</span>
    
      <span className='project'>Renovation Services</span>
  </div>
    <div className="row">
      <div className="col-md-3">
        <div className="Filter">
          <h2>Filters</h2>
          <div className="location">
            <h3>Location</h3>
            <select class="form-select" aria-label="Default select example">
  <option selected>Select Location</option>
  <option value="1">Cairo</option>
  <option value="2">Giza</option>
  <option value="3">Alexandria</option>
</select>
          </div>

          <div className="Installments">
          <h3>Installments</h3>
            <select class="form-select" aria-label="Default select example">
  <option selected>Select Installments ways</option>
  <option value="1">3 Months</option>
  <option value="2">6 Months</option>
  <option value="3">9 Months</option>
</select>
          </div>

          <div className="Warranty">
          <h3>Warranty</h3>
            <select class="form-select" aria-label="Default select example">
  <option selected>Select Warranty's years</option>
  <option value="1">2 Years</option>
  <option value="2">5 Years</option>
  <option value="3">10 Years</option>
</select>
          </div>

<div className="Types">
<h3>Types of Realty</h3>
<div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Apartment
  </label>
 </div>

<div class="form-check">
  
  <input class="form-check-input" type="radio" name="Types" id="Villa"/>
  <label class="form-check-label" for="Villa">
  Villa 
    </label>


</div>

<div class="form-check">

  <input class="form-check-input" type="radio" name="Types" id="Restaurant"/>
  <label class="form-check-label" for="Restaurant">
  Restaurant
  </label>

 

</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Office"/>
  <label class="form-check-label" for="Office">
  Office
  </label>



</div>


<div class="form-check">
 

  <input class="form-check-input" type="radio" name="Types" id="Hotels"/>
  <label class="form-check-label" for="Hotels">
  Hotels
  </label>

 

</div>
<div class="form-check">

  <input class="form-check-input" type="radio" name="Types" id="Resorts"/>
  <label class="form-check-label" for="Resorts">
  Resorts
  </label>

</div>

</div>


<div className="Service">
<h3>Service</h3>
<div class="dropdown">
  <p class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Development
  </p>
  
  <ul class="dropdown-menu">
    <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Home Maintenance
  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Air Conditioning
  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Pets Control
  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Gardens Care
  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Pools Care  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Security Services
  </label>
</div>
</li>
  </ul>
</div>

<div class="dropdown">
  <p class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Running
  </p>
  
  <ul class="dropdown-menu">
    <li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Home Maintenance
  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Air Conditioning
  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Pets Control
  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Gardens Care
  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Pools Care  </label>
</div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Security Services
  </label>
</div>
</li>
  </ul>
</div>
</div>


        </div>
      </div>
      <div className="col-md-9">
      <p className='results'>25 Results</p>
      <div className="container">

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
      <div className="contact">
      <h3 className='design-info'>TGP International</h3>
      <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
<span>4.8</span>
        </div>

        </div>
      
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Fifth Settlement, New Cairo</p>
      <p className='description'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque morbi eu turpis integer mauris nunc. Viverra nisi eleifend facilisi nulla. </p>
      
    <div className='service'>
      <button className='design'>Interior Design</button>
      <button className='Turnkey'>Turnkey services</button>
      <button className='design'>Land Scape & Planting</button>

      
  </div>
  <button className='btn-design'>View All Projects</button>

      </div>
    </div>

  </div>


 </Link>
 </div>
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
      <div className="contact">
      <h3 className='design-info'>TGP International</h3>
      <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
<span>4.8</span>
        </div>

        </div>
      
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Fifth Settlement, New Cairo</p>
      <p className='description'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque morbi eu turpis integer mauris nunc. Viverra nisi eleifend facilisi nulla. </p>
      
    <div className='service'>
      <button className='design'>Interior Design</button>
      <button className='Turnkey'>Turnkey services</button>
      <button className='design'>Land Scape & Planting</button>

      
  </div>
  <button className='btn-design'>View All Projects</button>

      </div>
    </div>

  </div>


 </Link>
 </div>
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
      <div className="contact">
      <h3 className='design-info'>TGP International</h3>
      <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
<span>4.8</span>
        </div>

        </div>
      
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Fifth Settlement, New Cairo</p>
      <p className='description'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque morbi eu turpis integer mauris nunc. Viverra nisi eleifend facilisi nulla. </p>
      
    <div className='service'>
      <button className='design'>Interior Design</button>
      <button className='Turnkey'>Turnkey services</button>
      <button className='design'>Land Scape & Planting</button>

      
  </div>
  <button className='btn-design'>View All Projects</button>

      </div>
    </div>

  </div>


 </Link>
 </div>
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
      <div className="contact">
      <h3 className='design-info'>TGP International</h3>
      <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
<span>4.8</span>
        </div>

        </div>
      
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Fifth Settlement, New Cairo</p>
      <p className='description'>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque morbi eu turpis integer mauris nunc. Viverra nisi eleifend facilisi nulla. </p>
      
    <div className='service'>
      <button className='design'>Interior Design</button>
      <button className='Turnkey'>Turnkey services</button>
      <button className='design'>Land Scape & Planting</button>

      
  </div>
  <button className='btn-design'>View All Projects</button>

      </div>
    </div>

  </div>


 </Link>
 </div>


<div className="pagination">
<div className='direction'>
  <i class="fa-solid fa-angle-left"></i>
</div>



    

<div className="number" style={{
          backgroundColor: isActive ? '#06B2BB' :'transparent',
          color: isActive ? '#FFFFFF' : '#898989',
        }}
        onClick={handleClick}>
  <span>1</span>
</div>
<div className="number" style={{
          backgroundColor: isActive ? '#06B2BB' :'transparent',
          color: isActive ? '#FFFFFF' : '#898989',
        }}
        onClick={handleClick}>
  <span>2</span>
</div>
<div className="number" style={{
          backgroundColor: isActive ? '#06B2BB' :'transparent',
          color: isActive ? '#FFFFFF' : '#898989',
        }}
        onClick={handleClick}>
  <span>3</span>
</div>
<div className="number" style={{
          backgroundColor: isActive ? '#06B2BB' :'transparent',
          color: isActive ? '#FFFFFF' : '#898989',
        }}
        onClick={handleClick}>
  <span>4</span>
</div>
<div className="number" style={{
          backgroundColor: isActive ? '#06B2BB' :'transparent',
          color: isActive ? '#FFFFFF' : '#898989',
        }}
        onClick={handleClick}>
  <span>5</span>
</div>

<div className='direction'>
  <i class="fa-solid fa-angle-right"></i>
</div>

</div>


    </div>

  </div>

</div>





    
   </div>



  </div>

     
  
      
  
    
   
  


{/* Partner*/}
<Partner/>
  
<Footer/>
  </>
    
    
}



// {[...Array(5)].map((star,i)=>{
//   const ratingValue= i+1;
// return(

// <label>
// <input 
// type="radio"
// name='rating' 
// value={ratingValue} 
// onClick={()=>{setRatingQuality(ratingValue)}} 
// />
// <div className="number" 
// style={ratingValue <=   ratingQuality ? { backgroundColor:'#06B2BB',color:'#FFFFFF'}:{ backgroundColor:'transparent',color:'#898989'}
// }>
// <span>{ratingValue}</span>
// </div>
// {/* <FaStar className='star'
// // color={ratingValue <=   ratingQuality ? '#FFB400' : '#DFDFDF'} 

// style={ratingValue <=   ratingQuality ? { backgroundColor:'#06B2BB',color:'#FFFFFF'}:{ backgroundColor:'transparent',color:'#898989'}
// }
// /> */}

// </label>

// )


// })}