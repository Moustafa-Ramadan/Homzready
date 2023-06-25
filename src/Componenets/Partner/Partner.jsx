import React from 'react';
import "./Partner.scss";
// import "./Partner.css";

import sodic from '../../images/sodic.png';
import hanysaad from '../../images/logo-wide.png';
import Zed from '../../images/headerLogo.png';
import Morshedy from '../../images/Memaar-AL-Morshedy.png';


import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Partner() {
  return <>

{/* Partner */}
<div className="Partners">
  <div className="container">
    <h2>Our Partners</h2>
   <div className="services-design  ">  
   
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={0}
      slidesPerView={4}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    ><div className='swiper'>
       
       <SwiperSlide>
       <div className="Partner">
 <div className='partner-logo'>
   <img src={sodic} alt="sodic" className='img1' />
 </div>
    
  </div>

      
           </SwiperSlide>


           <SwiperSlide>
       <div className="Partner">
 <div className='partner-logo'>
   <img src={hanysaad} alt="hanysaad" className='img2' />
 </div>
    
  </div>

      
           </SwiperSlide>
       
           <SwiperSlide>
       <div className="Partner">
 <div className='partner-logo'>
   <img src={Zed} alt="Zed" className='img3' />
 </div>
    
  </div>

      
           </SwiperSlide>
       
           <SwiperSlide>
       <div className="Partner">
 <div className='partner-logo'>
   <img src={Morshedy} alt="Morshedy" className='img4' />
 </div>
    
  </div>

           </SwiperSlide>

           <SwiperSlide>
       <div className="Partner">
 <div className='partner-logo'>
   <img src={sodic} alt="sodic" className='img1' />
 </div>
    
  </div>

      
           </SwiperSlide>
       
       
       
       
  
           
           
    </div>
   

<div className="swiper-button-next shadow-lg swiper-button-disabled" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-163349fa5f106aa64" aria-disabled="true">
           <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
           </div>

               <div className="swiper-button-prev shadow-lg swiper-button-disabled " tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-3fe621c7d3cdca101" aria-disabled="false">
               <i className="fa-solid fa-arrow-left fa-beat-fade"></i>
               </div>

      
    </Swiper>  
 
  </div>
    
 </div>


</div>

  
  </>
    
    
}
