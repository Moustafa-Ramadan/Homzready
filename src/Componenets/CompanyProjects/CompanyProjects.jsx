import React from 'react';
import "./CompanyProjects.scss";
// import "./CompanyProjects.css";

import img10 from '../../images/img10.png';
import img11 from '../../images/img11.png';
import img12 from '../../images/img12.png';
import img13 from '../../images/img13.png';
import img14 from '../../images/img14.png';
import img15 from '../../images/img15.png';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CompanyProjects() {
  return <>

{/* company's Projects */}
<div className="companyProjects">
<h3>TGP International Projects</h3>

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
       <div className="project">
      
      <div className='image'>
        <img src={img10} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Villa</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>TGP International</span>
    </div>
       
       </SwiperSlide>

      

       <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img11} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Scandinavian Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Mural</span>
    </div>
       
       </SwiperSlide>

       <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img12} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Scandinavian Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Mural</span>
    </div>
           </SwiperSlide>

           <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img13} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Villa</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>TGP International</span>
    </div>
           </SwiperSlide>

           <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img14} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Villa</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>TGP International</span>
    </div>
           </SwiperSlide>


           <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img15} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      <p className='design-info'>Modern Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West</p>
      <span>Encore</span>
    </div>
       
       </SwiperSlide>
           
           
    </div>
   

<div className="swiper-button-next  swiper-button-disabled" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-163349fa5f106aa64" aria-disabled="true">
           <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
           </div>

               <div className="swiper-button-prev swiper-button-disabled " tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-3fe621c7d3cdca101" aria-disabled="false">
               <i className="fa-solid fa-arrow-left fa-beat-fade"></i>
               </div>

      
    </Swiper>

    
</div>
  
  </>
    
    
}
