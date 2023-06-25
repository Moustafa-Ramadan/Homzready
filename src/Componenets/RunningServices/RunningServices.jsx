import React from 'react';
import "./RunningServices.scss";
// import "./RunningServices.css";

import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import img16 from '../../images/img16.png';
import img17 from '../../images/img17.png';
import img18 from '../../images/img18.png';
import img19 from '../../images/img19.png';
import { Link } from 'react-router-dom';


export default function RunningServices() {
  return <>

{/* Running-services */}
<div className="Running-services">
  <div className="container">
    <h2>Discover Our Running Services</h2>

 <div className="services-design row ">
 <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    ><div className='swiper'>
     

       <SwiperSlide>
       <div className="project">
      
    
      <Link to='/providers'>
      <div className='image'>
      <img src={img16} alt="" className='img16' />
       
      </div>
      <p className='design-info'>Home Maintenance</p>
    
      </Link>
    </div>
       
       </SwiperSlide>
      
       <SwiperSlide>
       <div className="project">
      
    
      <Link to='/providers'>
      <div className='image'>
      <img src={img17} alt="" className='img17' />
       
      </div>
      <p className='design-info'>Gardens Care</p>
    
      </Link>
    </div>
       
       </SwiperSlide>

       <SwiperSlide>
       <div className="project">
      
    
      <Link to='/providers'>
      <div className='image'>
      <img src={img18} alt="" className='img18' />
       
      </div>
      <p className='design-info'>Pets Control</p>
    
      </Link>
    </div>
       
       </SwiperSlide>

      <SwiperSlide>
       <div className="project">
      
    
      <Link to='/providers'>
      <div className='image'>
      <img src={img19} alt="" className='img19' />
       
      </div>
      <p className='design-info'>Security Services</p>
    
      </Link>
    </div>
       
       </SwiperSlide>
       <SwiperSlide>
       <div className="project">
      
    
      <Link to='/providers'>
      <div className='image'>
      <img src={img16} alt="" className='img16' />
       
      </div>
      <p className='design-info'>Home Maintenance</p>
    
      </Link>
    </div>
       
       </SwiperSlide>
         
    </div>
   

<div className="swiper-button-next shadow-lg  swiper-button-disabled" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-163349fa5f106aa64" aria-disabled="true">
           <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
           </div>

               <div className="swiper-button-prev  shadow-lg swiper-button-disabled " tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-3fe621c7d3cdca101" aria-disabled="false">
               <i className="fa-solid fa-arrow-left fa-beat-fade"></i>
               </div>
      
    </Swiper>

  <Link to='/providers'>
  <button >Browse All Services</button>
      </Link>
  
 </div>
 


  </div>
</div>

  
  </>
    
    
}
