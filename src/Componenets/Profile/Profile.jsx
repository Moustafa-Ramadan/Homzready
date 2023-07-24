import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Profile.scss"
import Tgp from '../../images/TGP.png';



export default function Profile(props) {

  const [image, setImage] = useState(false)
  const inputref = useRef(null)
  const handleImageClick=()=>{
    inputref.current.click();
  }

  const uploadimage=(e)=>{
    const file=e.target.files[0]
    console.log(file)
    setImage(e.target.files[0])
  }

return <>


<div className="profile">
  <div className="container-fluid">
   <div className="row">
    <div className="col-md-12">
      <div className="profilepage">
        <h2>Profile Info</h2>
        <p>Describe your company in details</p>
        <div className="profile-info">
        <form>
      <label htmlFor="image-input">Photo</label>
     <div >
      {image?  <img src={URL.createObjectURL(image)} alt="company-logo" className='iamge' onClick={handleImageClick} />:
      <div className='addimage'>
      <i className="fa-solid fa-plus fa-2x" onClick={handleImageClick}></i>
     
      </div>}
     
       
       <input type="file" className="form-control image-input" ref={inputref} id='image-input' onChange={uploadimage} />
          
     </div>
     

<label htmlFor="name-input">Full Name</label>
 <input type="text" placeholder='Enter Your Name' className='form-control' id='name-input' />

        
 <label htmlFor="number-input">Phone Number</label>
 <input type="text" placeholder='Enter Your Number' className='form-control' id='number-input' />
        
 <label htmlFor="email-input">Email</label>
 <input type="email" placeholder='Enter Your Email' className='form-control' id='email-input' />

 <label htmlFor="location-input">Location</label>
 <input type="text" placeholder='Enter Your Location' className='form-control mb-5' id='location-input' />
      </form>
      <Link to='/home'>
      <button className='btn-login'>Continue</button>

      </Link>
        </div>
      </div>
    </div>
   </div>
  </div>
</div>



</>
}
