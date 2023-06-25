import React from 'react';
import "./Home.scss";
// import "./Home.css";


import img20 from '../../images/img20.png';

import DownloadApp from '../DownloadApp/DownloadApp';
import Projects from '../Projects/Projects';
import Partner from '../Partner/Partner';
import { Link } from 'react-router-dom';
import DevelopmentServices from '../DevelopmentServices/DevelopmentServices';
import RunningServices from '../RunningServices/RunningServices';
import Services from './../Services/Services';
import Footer from './../Footer/Footer';


export default function Home() {
  return <>
  <div className='Home'>

<div className="layer">
  {/* <img src={img1} alt="" className='homzimage' /> */}
  <div className="discription">
<div className="info">
<i className="fa-solid fa-couch text-white mb-3"></i>
<p className='text-white'>House Improvments Services For</p>
<p className='homes-p'>Homes That
  <br />
  Tell a Story
</p>
<button className='btn bg-white rounded-pill text-center'> Discover Now <i className="fa-solid fa-arrow-right fa-beat-fade ms-2"></i></button>
</div>
  </div>
</div>



{/* Development-services */}

<DevelopmentServices/>

{/* download App */}
<DownloadApp/>

{/* Projects */}
<div className="projects">
  <div className="container">
    <h2>Projects</h2>
    <Projects/> 
    <Link to='projects'>
    <button className='btn-design ' to='projects'>View All Projects</button>

    </Link>

  </div>
</div>



{/* Running-services */}
<RunningServices/>

{/* Advertisment */}

<div className="Advertisment">

  <div className='w-100 mb-5'>
    <img src={img20} alt="img20" className='w-100' />
  </div>
</div>

{/* services */}
<Services/>

{/* Partner */}
<Partner/>

<div className="signupForm">
  <div className="container-fluid ">
    <div className="row">
      <div className="col-md-8 signup">
        <div >
          <p>SignUp To Get The Best Experience 
            <br />
            and The Best Results</p>
          <form>
            <input type="email" placeholder='Your Email Address' className='email-input' />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="col-md-4 image">
      </div>
    </div>
  </div>
</div>


  </div>
  
  <Footer/>
  
  </>
    
    
}
