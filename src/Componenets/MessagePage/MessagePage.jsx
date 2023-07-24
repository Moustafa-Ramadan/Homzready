import React, { useRef } from 'react';
import "./MessagePage.scss";
import { useState } from 'react';
// import "./MessagePage.css";
import mostafa from '../../images/mo.jpg';



export default function MessagePage() {
 

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
 
  

  const [attachment, setAttachment] = useState(false)
  const inputrefAttch = useRef(null)
  const handleAttchClick=()=>{
    inputref.current.click();
  }

 
  const uploadAttachment=(e)=>{
    const file=e.target.files[0]
    console.log(file)
    setAttachment(e.target.files[0])
  }
 

  
  return <>



{/* Projects */}
<div className="messages">
  <div className="container-fluid">
    <div className='row'>
      <div className="col-md-4">
      <div className="message-search">
    <h2>Messages</h2>
    <div className="search">
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
<div className="users">
  
  
  <div className="online-users">
    <div className="users-image">
    <img src={mostafa} alt=""  /> 
    <div className="online"></div> 
    <div className="info">
      <h3>Encore</h3>
      <p>There is a discount 20% </p>
    </div>
    </div>
    <div className="time-notification">
      <h5>23, Mar</h5>
      <div className="notification">
        1
      </div>
    </div>
  </div>
  
  <div className="online-users">
    <div className="users-image">
    <img src={mostafa} alt=""  /> 
    <div className="online"></div> 
    <div className="info">
      <h3>Encore</h3>
      <p>There is a discount 20% </p>
    </div>
    </div>
    <div className="time-notification">
      <h5>23, Mar</h5>
      <div className="notification">
        1
      </div>
    </div>
  </div>

  <div className="online-users">
    <div className="users-image">
    <img src={mostafa} alt=""  /> 
    <div className="online"></div> 
    <div className="info">
      <h3>Encore</h3>
      <p>There is a discount 20% </p>
    </div>
    </div>
    <div className="time-notification">
      <h5>23, Mar</h5>
      <div className="notification">
        1
      </div>
    </div>
  </div>
</div>
      </div>

      <div className="col-md-8">
        <div className="user">
        <div className="users-image">
    <img src={mostafa} alt=""  /> 
    <div className="info">
      <h3>Encore</h3>
      <p className='online-user'>Online</p>
    </div>
    </div>
        </div>
        <div className="chat">
          <div className="user1">
            <img src={mostafa} alt="" />
            <div className="user-info">
              <h3>Ekalgo Design Studio</h3>
              <div className='chat-text'>
              <p>We offer you a silver package for 3,000 EGP only for 1 week.</p>

              </div>
              <p className='time'>
              09:22
              </p>

            </div>
          </div>
          <div className="user2">
            
            <div className="user-info">
              <h3>You</h3>
              <div className='chat-text'>
              <p>We offer you a silver package for 3,000 EGP only for 1 week.</p>

              </div>
             <div className='time-user2'>
             <p className='time'>
              09:22
              </p>
             </div>

            </div>
            <img src={mostafa} alt="" />
          </div>

               <div className="user1">
            <img src={mostafa} alt="" />
            <div className="user-info">
              <h3>Ekalgo Design Studio</h3>
              <div className='chat-text'>
              <p>We offer you a silver package for 3,000 EGP only for 1 week.</p>

              </div>
              <p className='time'>
              09:22
              </p>

            </div>
          </div>

          <div className="user2">
            
            <div className="user-info">
              <h3>You</h3>
              <div className='chat-text'>
              <p>We offer you a silver package for 3,000 EGP only for 1 week.</p>

              </div>
              <p className='time'>
              09:22
              </p>
             {/* <div className='time-user2'>
             <p>We offer you a silver package for 3,000 EGP only for 1 week.</p>

              
             </div> */}

            </div>
            <img src={mostafa} alt="" />
          </div>

              <div className="user1">
            <img src={mostafa} alt="" />
            <div className="user-info">
              <h3>Ekalgo Design Studio</h3>
              <div className='chat-text'>
              <p>We offer you a silver package for 3,000 EGP only for 1 week.</p>

              </div>
              <p className='time'>
              09:22
              </p>

            </div>
          </div>

        </div>

        <div className="writeMessage">
        <form >
       
     
        {attachment?  <img src={URL.createObjectURL(attachment)} alt="company-logo" className='iamge' onClick={handleAttchClick} />:
         "" }

         {image?  <img src={URL.createObjectURL(image)} alt="company-logo" className='iamge' onClick={handleImageClick} />:
         <input type="text" placeholder="Type a message"   className='form-control me-2' />}

        <div  className='add-image-attach'>

{/* it's not finish yet */}
 {/* attchment */}
 
       <div className='addimage'>

<i className="fa-solid fa-paperclip" onClick={handleAttchClick}></i> 
<input type="file" className="form-control image-input" ref={inputrefAttch} id='attchment-input' onChange={uploadAttachment} />
</div>
    
{/* image */}
   
<div className='addimage'>

      <i className="fa-solid fa-image" onClick={handleImageClick}></i> 
      <input type="file" className="form-control image-input" ref={inputref} id='image-input' onChange={uploadimage} />
      </div>
    
          
     </div>
          

      
      </form>
        </div>
        </div>
    </div>
  </div>
</div>


  
  </>
    
    
}
