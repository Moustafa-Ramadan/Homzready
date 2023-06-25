import React from 'react';
import "./Project.scss";
// import "./Project.css";

import CompanyProjects from '../CompanyProjects/CompanyProjects';
import logocompany from '../../images/logo.company.png';
import img10 from '../../images/img10.png';
import img11 from '../../images/img11.png';
import img12 from '../../images/img12.png';
import img13 from '../../images/img13.png';
import img14 from '../../images/img14.png';
import img15 from '../../images/img15.png';

import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Footer from './../Footer/Footer';

export default function Project() {

 
  
  return <>



{/* Projects */}
<div className='project'>
  <div className='container-fluid'>
    <div className="row">
      <div className="col-md-6">
     
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className='swiper'>

       <SwiperSlide>
       <div className="project">
      
      <div className='image'>
        <img src={img10} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      
    </div>
       
       </SwiperSlide>

      

       <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img11} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      
    </div>
       
       </SwiperSlide>

       <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img12} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      
    </div>
           </SwiperSlide>

           <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img13} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      
    </div>
           </SwiperSlide>

           <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img14} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      
    </div>
           </SwiperSlide>


           <SwiperSlide>
       <div className="project">
       <div className='image'>
        <img src={img15} alt="" className='img10' />
        <div className='favorite'><i className="fa-regular fa-heart "></i></div>
      </div>
      
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

      <div className="col-md-6">
     <div className="container">
<div className="company">
      <div className="info">
      <p className='design-info'>Modern Apartment</p>
      <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West, New Cairo</p>
      <span><img src={logocompany} alt="logocompany" className='me-3' />Encore</span>
   

  </div>
<div className="Details">
  <h4>Details</h4>
  <p>Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque morbi eu turpis integer mauris nunc. Viverra nisi eleifend facilisi nulla.  Lorem ipsum dolor sit amet consectetur. Massa faucibus scelerisque sed leo sed ornare. Sit lobortis egestas turpis mauris vitae montes id consectetur nisl. Urna et gravida nibh facilisi. Faucibus pellentesque morbi eu turpis integer mauris nunc. Viverra nisi eleifend facilisi nulla. </p>
<div className="contact">
        <button className='btn  call'>Call</button>
        <button className='btn  chat'>chat</button>

    </div>
</div>
 

</div>


     </div>
  
      </div>
  
    </div>
   

  {/* Company's Projects */}
<CompanyProjects/>


  </div>
</div>

<Footer/>
  
  </>
    
    
}
