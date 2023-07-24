import React, {  useState } from 'react'
import { Link} from 'react-router-dom'
import "./CompanyProject.scss"
import img15 from '../../images/img15.png';
import { useRef } from 'react';


export default function CompanyProject(props) {
 
  const [projects, setProjects] = useState(true);

  const Addproject = () => {
    // 👇️ toggle
    setProjects((current => !current))
  
  };

  // const images=[
  //   {
  //     image:"../../images/img15.png"
  //   },
  //   {
  //     image:"../../images/img15.png"
  //   },
  //   {
  //     image:"../../images/img15.png"
  //   },
  //   {
  //     image:"../../images/img15.png"
  //   },
  //   {
  //     image:"images/img15.png"
  //   }
  // ]

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

<div className="CompanyProject">




      <div className='CompanyProject-page '>
  <h2>Projects</h2>
  <p>Describe your company in details</p>
 
 {projects? <div className="CompanyProjects container-fluid px-0">
  <div className="row">
    <div className="col-md-5">
<div className="image">
  <img src={img15 } alt="img15" />
</div>


    </div>
<div className="col-md-7">
<div className="project-info">
  <div className='header'>
    <h4>Modern Villa</h4>
    <i className='fa-solid fa-trash text-danger'></i>
  </div>
  <p><i className="fa-solid fa-location-dot bg-white me-2"></i> Sodic West, New Cairo</p>
<p className='details'>Lorem ipsum dolor sit amet consectetur.
   Massa faucibus scelerisque sed leo sed
    ornare. Sit lobortis egestas turpis mauris
     vitae montes id consectetur nisl. Urna et 
     gravida nibh facilisi. Faucibus pellentesque morbi eu turpis integer mauris nunc
     . Viverra nisi eleifend facilisi nulla. </p>
</div>
</div>

  </div>

  <button className='btn-addProject' onClick={Addproject} >Add New Project</button>

  <Link to='/home'>
  <button className='btn-login' >Save</button>

      </Link> 
 </div>:<div className='CompanyInfo-form'>
      
          <form>
          
    
    <label htmlFor="ProjectName-input">Project Name</label>
     <input type="text" placeholder='Enter Your Project Name' className='form-control' id='ProjectName-input' />
    
     <label htmlFor="City-input">City</label>
     <input type="text" placeholder='Enter Your City' className='form-control' id='City-input' />
            
            
    
     <label htmlFor="Zone-input">Zone</label>
     <input type="text" placeholder='Enter Your Project City' className='form-control' id='Zone-input' />
            
    
     <label htmlFor="location-input">Location</label>
     <input type="text" placeholder='Enter Your Location' className='form-control mb-5' id='location-input' />
          </form>
          
     <label htmlFor="ProjectDetails-input">Project Details</label>
    <textarea name="review" placeholder='About your project' id="ProjectDetails-input" cols="30" rows="4" className='form-control'></textarea>
          

    <label htmlFor="image-input">Project Images</label>
      <div className='container-fluid' >
        <div className="row">

{[...Array(9)].map((image,i)=>{
     
return(
  <div className="col-md-3">
<img src={img15} alt="company-logo" className='iamge-logo' onClick={handleImageClick} />
  </div>

)


    })}
     
<div className="col-md-3">
<div className='addimage'>
      <i className="fa-solid fa-plus fa-2x" onClick={handleImageClick}></i>
     
      </div>
       <input type="file" className="form-control image-input" ref={inputref} id='image-input' onChange={uploadimage} />
          
</div>

        </div>
     
        

     </div>
          <input type="file" className="form-control image-input mb-5" id='ProjectImages-input' />
          <Link to='/home'>
          <button className='btn-login'>Save</button>
    
          </Link>
        
      </div>
    
    
     
    
    
   }



  

</div>

</div>

   

 


</>
}
