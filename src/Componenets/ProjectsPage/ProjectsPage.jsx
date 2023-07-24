import React, { useState } from 'react';
import "./ProjectsPage.scss";
// import "./ProjectsPage.css";

import DownloadApp from '../DownloadApp/DownloadApp';
import Partner from '../Partner/Partner';
import Projects from '../Projects/Projects';
import Footer from './../Footer/Footer';


export default function ProjectsPage() {

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
  };

  return <>

{/* Projects */}
<div className='project-page'>
  <div className='container-fluid'>
  <div className='header'>
    <span className='headline'>Home</span>
    <span className='line'>/</span>
    
      <span className='project'>Project</span>
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

{/* Development services */}
<div class="dropdown">
  <p class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Development
  </p>
  
  <ul class="dropdown-menu">
    <li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Home Maintenance
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Air Conditioning
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Pets Control
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Gardens Care
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Pools Care
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Security Services
  </label>
 </div>
</li>


 
  </ul>
</div>

{/* Running services */}
<div class="dropdown">
  <p class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Running
  </p>
  
  <ul class="dropdown-menu">
    <li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Home Maintenance
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Air Conditioning
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Pets Control
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Gardens Care
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
  Pools Care
  </label>
 </div>
</li>

<li><div class="form-check">
  <input class="form-check-input" type="radio" name="Types" id="Apartment"/>
  <label class="form-check-label" for="Apartment">
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
      <Projects/>
  
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

{/* DownloadApp */}
<DownloadApp/>

{/* Partner*/}
<Partner/>

  <Footer/>
  
  </>
    
    
}
