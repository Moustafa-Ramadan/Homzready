import React from 'react';
import "./DownloadApp.scss";
// import "./DownloadApp.css";

import img7 from '../../images/Google_Play_Store_badge_EN 1.png';
import img8 from '../../images/get-it-on-app-store-300x104 1.png';
import img9 from '../../images/Layer 1 1.png';

export default function DownloadApp() {
  return <>


{/* download App */}
<div className="downloadApp">
<div className="app">

<div className='container h-100'>
   <div className='row h-100'>
     <div className="col md-6 d-flex align-content-center  ">
    <div className='align-self-center '>
       <p>Download Our App</p>
       <p className='AppStore mb-4'>Get the application now on Play Store or App Store</p>
       <img src={img7} alt="Google-play" className='me-2' />
       <img src={img8} alt="App-Store" />
    </div>
     </div>
     <div className="col md-6 d-flex justify-content-end">
     
     <img src={img9} alt="layer" className='layerimage'/>
     
     </div>
   </div>
</div>
 
</div>
<div className="line">

</div>
</div>

  
  </>
    
    
}
