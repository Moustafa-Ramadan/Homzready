import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.scss"
import loginPage from '../../images/loginPage.png';
import googleLogo from '../../images/logos_google-icon.png';
import cx from "classnames";
import { CSSTransition } from "react-transition-group";


export default function Login(props) {
  let navigation=useNavigate()
 
  const [login, setLogin] = useState(true)
  const [createAccount, setCreateAccount] = useState(false)
  const [sendCode, setSendCode] = useState(false)
  const [sendEmail, setSendEmail] = useState(false)
  const [sendEmailCode, setSendEmailCode] = useState(false)
  const [signUp, setSignUp] = useState(true)





const toggle =()=>{
  setLogin(false)
  setCreateAccount(true)
 
}

const create =()=>{
  setCreateAccount(false)
  setSendCode(true)
}

const sendcode =()=>{
  setSendCode(false)
  setSendEmail(true)
}

const sendemail =()=>{
  setSendEmail(false)
  setSendEmailCode(true)
}

const sendemailcode =()=>{
  
  setSendEmailCode(false)
}

const signup =()=>{
  setCreateAccount(false)
  setSendCode(false)
  setSendEmail(false)
  setSendEmailCode(false)
  setSignUp(true)
}



return <>

<div className="loginForm">
  <div className="container-fluid ">
    <div className="row">

      <div className="col-md-6 ">

{login? <div className='login login-page'>

<div>
  <h2>Login to account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='phone-login'>
  <span>Phone Number</span>
      <form>
        <input type="text" placeholder='Enter Your Phone Number' className='form-control' />
        
      </form>
      <button className='btn-login' onClick={toggle}>Login</button>
      <button className='google-login'>
        <img src={googleLogo} alt="" className='me-4' /> Continue with Google
        </button>
      <button className='facebook-login'><i class="fa-brands fa-facebook me-4"></i> Continue with Facebook</button>
      <Link to='/home'>
      <button className='guest-login'>Continue as Guest</button>

      </Link>
    
  </div>


 

</div>

</div> : createAccount?
<div className='createAccount login-page'>

<div>
  <h2>Create an Account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='phone-login'>
  
      
      <button className='btn-login' onClick={create}>Continue With Phone Number</button>
      <button className='google-login'>
        <img src={googleLogo} alt="" className='me-4' /> Continue with Google
        </button>
      <button className='facebook-login'><i class="fa-brands fa-facebook me-4"></i> Continue with Facebook</button>
      <Link to='/home'>
      <button className='guest-login'>Continue as Guest</button>

      </Link>
              

    
  </div>


 

</div>

</div>
:
sendCode?<div className='login-page'>

<div>
  <h2>Create an Account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='phone-login'>
  <span>Phone Number</span>
      <form>
        <input type="text" placeholder='Enter Your Phone Number' className='form-control' />
        
      </form>
      <button className='btn-login' onClick={sendcode} >Continue</button>
      
    
  </div>


 

</div>

</div> 
  : 
  sendEmail? <div className='login-page'>

<div>
  <h2>Create an Account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='code'>
      <form className='code-form'>
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />

        
        
      </form>
<p>Send Code Again</p>
<span>1:43</span>

<Link to='/signup'>
<button className='btn-login'  >Create an Account</button>
</Link>
      
    <p>If you don’t have Whatsapp</p>
    <span className='send-email' onClick={sendemail}>Send Email</span>
  </div>


 

</div>

</div>
:
sendEmailCode?<div className='login-page'>

<div>
  <h2>Create an Account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='phone-login'>
  <span>Email</span>
      <form>
        <input type="email" placeholder='Enter Your Email' className='form-control' />
        
      </form>
      <button className='btn-login' onClick={sendemailcode}>Continue</button>
      
    
  </div>


 

</div>

</div>
:
sendcode?<div className='login-page'>

<div>
  <h2>Create an Account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='code'>
      <form className='code-form'>
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />

        
        
      </form>
<p>Send Code Again</p>
<span>1:43</span>
<Link to='/signup'>
<button className='btn-login'  >Create an Account</button>
</Link>
      
    <p>If you don’t have Whatsapp</p>
    <span className='send-email' onClick={create}>Send SMS</span>
  </div>


 

</div>

</div>
:

sendcode?<div className='login-page'>

<div>
  <h2>Create an Account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='phone-login'>
  <span>Phone Number</span>
      <form>
        <input type="text" placeholder='Enter Your Phone Number' className='form-control' />
        
      </form>
      <button className='btn-login' onClick={sendcode} >Continue</button>
      
    
  </div>


 

</div>

</div>
: 

<div className='login-page'>

<div>
  <h2>Create an Account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='code'>
      <form className='code-form'>
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />
        <input type="text" placeholder='_' className='form-control' maxLength={1} />

        
        
      </form>
<p>Send Code Again</p>
<span>1:43</span>
<Link to='/signup'>
<button className='btn-login'  >Create an Account</button>
</Link>
      
      
    <p>If you don’t have Whatsapp</p>
    <span className='send-email' onClick={sendemail}>Send Email</span>
  </div>


 

</div>

</div>

 }



{/* <div className='login-page '>

<div>
  <h2>Login to account</h2>
  <p>Enter your number so there are no mistakes</p>
 
  <div className='signup-form'>
  
      <form>
<label htmlFor="name-input">Full Name</label>
 <input type="text" placeholder='Enter Your Name' className='form-control' id='name-input' />
        
 <label htmlFor="email-input"></label>
 <input type="email" placeholder='Enter Your Email' className='form-control' id='email-input' />

 <label htmlFor="location-input"></label>
 <input type="text" placeholder='Enter Your Location' className='form-control' id='location-input' />
      </form>

      
      <Link to='/home'>
      <button className='btn-login'>Continue as Guest</button>

      </Link>
    
  </div>


 

</div>

</div>  */}












   
      </div>

   
      <div className="col-md-6 ">
        <div className="image">
            {/* <img src={img11} alt="img11" /> */}
        </div>
      </div>
    </div>
  </div>
</div>



</>
}
