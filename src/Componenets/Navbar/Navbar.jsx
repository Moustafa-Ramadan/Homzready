import React, { useContext } from 'react'
import "./Navbar.scss"
// import "./Navbar.css"

import img1 from '../../images/logo.png';
import mostafa from '../../images/mo.jpg';

import { Link } from 'react-router-dom';
import { DarkModeContext } from './../../Context/DarkModeContext';
import { useState } from 'react';
import  Axios  from 'axios';
import Development from '../Development/Development';
import Running from '../Running/Running';

export default function Navbar(props) {
const{darkMode,toggle}=useContext(DarkModeContext)

const [navbarshow, setNavbarShow] = useState(true)
const [menushow, setMenuShow] = useState(false)
const [runningshow, setRunningShow] = useState(false)

const DevelopmentClick = () => {
  // 👇️ toggle
  setMenuShow(current => !current);
  

 
  
  if(runningshow){
    setRunningShow(current => !current);
    
  }
   
};

const RunningClick = (e) => {
  // 👇️ toggle
  
  setRunningShow(current => !current);

 
  
  if(menushow){
    setMenuShow(current => !current);
    
  }
   
};

const handleClick = (e) => {
  // 👇️ toggle
  
  if(runningshow){
    setRunningShow(current => !current);
    
  }
  else if(menushow){
    setMenuShow(current => !current);
    
  }
  

   
};


let userData=  JSON.parse(localStorage.getItem('userData'))

const [searchshow, setSearchShow] = useState(false)
const [search, setSearch] = useState({
  keyword:""
})

const [searchResult, setSearchResult] = useState("")


function BlurSearch(e){
  
  setInterval(() => {
    setSearchShow(false)
    setSearchResult("")
    
  }, 200);
 
  e.target.value=""
}

const getkeyWord=async(e)=>{
search['keyword']=(e.target.value)
console.log(e.target.value)
const{data}=await Axios.post(`http://localhost:3001/users/search`,search)
console.log(data)
if(data.message==="success"){
  setSearchResult(data)
  console.log(searchResult.users)
}
  }

  return <>
  <nav className="navbar   navbar-expand-lg " onClick={handleClick}>
  <div className="container-fluid social">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={()=>setNavbarShow(!navbarshow)} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {navbarshow &&  <div className="collapse navbar-collapse " id="navbarSupportedContent">
  
   <div className='community'>
   <div className="left">
             <a href="https:www.facebook.com/mo.ramadan01/" target="_blank">
             <i className='fa-brands fa-facebook me-2 '></i>
             </a>

             
             <a href="https:www.instagram.com/mo.ramadan96/" target="_blank">
             <i className='fa-brands fa-instagram  me-2' ></i> 
             </a>
             <a href="https:www.instagram.com/mo.ramadan96/" target="_blank">
             <i className='fa-brands fa-twitter  me-2' ></i> 
             </a>
             <a href="https:www.linkedin.com/in/mostafa-ramadan-2539691ab/" target="_blank">
             <i className='fa-brands fa-linkedin  me-2 ' ></i>
             </a>
            
           </div>
  
      <div className="center">
      <form  role="search">
        <input className="form-control me-2" type="search" placeholder="Search here..." onFocus={()=>setSearchShow(!searchshow)} onBlur={BlurSearch} onChange={getkeyWord}  aria-label="Search"/>
        {searchshow &&   <div className="searchResults">
          {searchResult.users ? searchResult.users.map((user,idx)=><div key={idx} className="userInfo mb-2">
       <Link to={`/profile/${user._id}`} style={{textDecoration:"none",color:"inherit"}}>
       <img src={user.image} alt="" />
         </Link> 
        
           
          <div className="details">
         <Link to={`/profile/${user._id}`} style={{textDecoration:"none",color:"inherit"}}>
         <span className='name'>{user.name}</span>
         </Link>
         
         </div>
         
       </div>)  :<div className='text-center'>No recent searches</div>}
          
        
  </div>
}
      
      </form>
    <ul className='dropdown-categories'>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Categories
            </a>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to='settings'>settings</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li onClick={props.logout}><span class="dropdown-item"  ><i className="fa-solid fa-right-from-bracket me-2"></i>LogOut</span></li>
            </ul>
          </li>
    </ul> 
    <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    
   </div>
     
      <div className="right">
        <Link to="JoinAsProvider">
        <div className='btn'>Join as Provider </div>
        </Link>
      
      <button >En</button>
      </div>
    </div> }
   
  </div>
  
  <div className="container-fluid services ">
  
    {/* {navbarshow &&  } */}
  
    <div className="collapse navbar-collapse  d-flex justify-content-between" id="navbarSupportedContent">
    <Link className="navbar-brand"  to="/"><img src={img1} alt="Homzready-logo" /></Link>
      <ul className="navbar-nav apps ms-0  mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle menu-hover"  role="button"  onClick={DevelopmentClick} data-bs-toggle="dropdown" aria-expanded="false">
          Development Services
          
          </a>
          
      
          {/* <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to='settings'>settings</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li onClick={props.logout}><span class="dropdown-item"  ><i className="fa-solid fa-right-from-bracket me-2"></i>LogOut</span></li>
          </ul> */}
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" onClick={RunningClick} aria-expanded="false">
          Running Services
          </a>
          {/* <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to='settings'>settings</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li onClick={props.logout}><span class="dropdown-item"  ><i className="fa-solid fa-right-from-bracket me-2"></i>LogOut</span></li>
          </ul> */}
        </li> 

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/projects" >Projects</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" >About</Link>
        </li>
       
        
      </ul>
      
     
      <ul className="navbar-nav    mb-2 mb-lg-0">
        
        <li className="nav-item user ">
   
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mostafa Ramadan
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to='/profile'>My Account</Link></li>
            

            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to='/company'>My Company</Link></li>

           

            {/* <li onClick={props.logout}><span class="dropdown-item"  ><i className="fa-solid fa-right-from-bracket me-2"></i>LogOut</span></li> */}
          </ul>
        </li>
<li className='image '>
  <img src={mostafa} alt=""  />   
  {/* <Link to={`/profile/${userData.id}`} >
       <img src={userData.image} alt="" />
         </Link>  */}
</li> 
<div className='user-notification'>
          
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='Messages' ><i className="fa-regular fa-envelope"></i></Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link active" aria-current="page" ><i className="fa-regular fa-bell"></i></Link>
          </li>
      </div>
</li>
       
      </ul>
    </div>
   
  </div>
 
  
    {runningshow && <Running/>}
    {menushow && <Development/>} 
  

</nav>



    </>
    
}
