import React, { useState } from 'react';
import "./Projects.scss";
// import "./Projects.css";

import img10 from '../../images/img10.png';
import img11 from '../../images/img11.png';
import img12 from '../../images/img12.png';
import img13 from '../../images/img13.png';
import img14 from '../../images/img14.png';
import img15 from '../../images/img15.png';
import { Link } from 'react-router-dom';


export default function Projects() {

  const [favaorite, setFavaorite] = useState([])
  
  const handlefavoriteproject=(index)=>{
    console.log(index)
    setFavaorite(index)
  }
  return <>

{/* Projects */}
<div className="container">
  <div className="project-design row">
  {[...Array(6)].map((star,i)=>{
      
      return(
       
        <div className="col-md-4 ">
        <div className="project">
        
          
          <div className='image'>
          <Link to='/project'>
            <img src={img11} alt="" className='img11' />
            </Link>
            {/* {favaorite?<div className='favorite' ><i className="fa-regular fa-heart"></i></div>:
            <div className='favorite'><i className="fa-solid fa-heart text-danger "></i></div>}
             */}
             
            <div className='favorite' onClick={()=>{handlefavoriteproject(i)}}>
              {favaorite?<i className="fa-regular fa-heart"></i>
              :<i className="fa-solid fa-heart text-danger "></i>}
             
            </div>

            {/* <div className='favorite' onClick={()=>{handlefavoriteproject(i)}}>
              {favaorite.filter(project,ind)=>ind===favaorite 
              return<i className="fa-solid fa-heart text-danger "></i>)} */}
            {/* <div className='favorite' onClick={()=>{handlefavoriteproject(i)}}>
            {favaorite.filter(project => project.includes(i)).map(favaoriteproject => (
    <i className="fa-solid fa-heart text-danger "></i>
  ))}

            </div>   */}
            {/* </div>?<i className="fa-regular fa-heart"></i>
              : */}


          </div>
          
          <Link to='/project'>
          <p className='design-info'>Modern Apartment</p>
          </Link>
          <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
          <span>Encore</span>
          
            </div>
         
       
        </div>
      )
      
      
          })}

    {/* <div className="col-md-4 ">
      <div className="project">
      <Link to='/project'>
    <div className='image'>
        <img src={img10} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Villa</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>TGP International</span>
      </Link>
      </div>
   
    
    </div>
    <div className="col-md-4 ">
    <div className="project">
    <Link to='/project'>
      
      <div className='image'>
        <img src={img11} alt="" className='img11' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      </Link>
      <Link to='/project'>
      <p className='design-info'>Modern Apartment</p>
      </Link>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Encore</span>
      
        </div>
     
   
    </div>
    <div className="col-md-4 ">
    <div className="project">
    <Link to='/project'>
    <div className='image'>
        <img src={img12} alt="" className='img12' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Scandinavian Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Mural</span>
      </Link>
        </div>
    
    
    </div> */}
   </div>
   {/* <div className="project-design row">
    
    <div className="col-md-4 ">
      <div className="project">
      <Link to='/project'>
    <div className='image'>
        <img src={img10} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Villa</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>TGP International</span>
      </Link>
      </div>
   
    
    </div>
    <div className="col-md-4 ">
    <div className="project">
    <Link to='/project'>
      <div className='image'>
        <img src={img11} alt="" className='img11' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Encore</span>
      </Link>
        </div>
     
   
    </div>
    <div className="col-md-4 ">
    <div className="project">
    <Link to='/project'>
    <div className='image'>
        <img src={img12} alt="" className='img12' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Scandinavian Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Mural</span>
      </Link>
        </div>
    
    
    </div>
   </div>
   <div className="project-design row">
    
    <div className="col-md-4 ">
      <div className="project">
      <Link to='/project'>
    <div className='image'>
        <img src={img10} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Villa</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>TGP International</span>
      </Link>
      </div>
   
    
    </div>
    <div className="col-md-4 ">
    <div className="project">
    <Link to='/project'>
      <div className='image'>
        <img src={img11} alt="" className='img11' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Encore</span>
      </Link>
        </div>
     
   
    </div>
    <div className="col-md-4 ">
    <div className="project">
    <Link to='/project'>
    <div className='image'>
        <img src={img12} alt="" className='img12' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Scandinavian Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Mural</span>
      </Link>
        </div>
    
    
    </div>
   </div> */}
  
   {/* <div className="project-design row">
    <div className="col-md-4 project">
    <div className='image'>
        <img src={img13} alt="" className='img13' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Villa</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>TGP International</span>
    </div>
    <div className="col-md-4 project">
    <div className='image'>
        <img src={img14} alt="" className='img14' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Encore</span>
    </div>
    <div className="col-md-4 project">
    <div className='image'>
        <img src={img15} alt="" className='img15' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Scandinavian Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span >Mural</span>
    </div>
  
   </div>

   <div className="project-design row">
    <div className="col-md-4 project">
    <div className='image'>
        <img src={img13} alt="" className='img13' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Villa</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>TGP International</span>
    </div>
    <div className="col-md-4 project">
    <div className='image'>
        <img src={img14} alt="" className='img14' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Encore</span>
    </div>
    <div className="col-md-4 project mb-5">
    <div className='image'>
        <img src={img15} alt="" className='img15' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Scandinavian Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span >Mural</span>
    </div>
  
   </div> */}
  
    </div>
  
  </>
    
    
}
