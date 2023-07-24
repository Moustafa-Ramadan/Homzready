
import Navbar from './Componenets/Navbar/Navbar';

import Home from './Componenets/Home/Home';
import "./Style.scss"
// import { AuthenticationContext } from './Context/AuthContext ';

import  Axios  from 'axios';
import { Route, Routes } from 'react-router-dom';
import ProjectsPage from './Componenets/ProjectsPage/ProjectsPage';
import Provider from './Componenets/Provider/Provider';
import Providers from './Componenets/Providers/Providers';
import Project from './Componenets/Project/Project';
import WriteReview from './Componenets/WriteReview/WriteReview';
import Login from './Componenets/Login/Login';
import Signup from './Componenets/Signup/Signup';
import Profile from './Componenets/Profile/Profile';
import Company from './Componenets/Company/Company';
import CompanyServices from './Componenets/CompanyServices/CompanyServices';
import CompanyInfo from './Componenets/CompanyInfo/CompanyInfo';
import CompanyPackages from './Componenets/CompanyPackages/CompanyPackages';
import CompanyPaymentOffers from './Componenets/CompanyPaymentOffers/CompanyPaymentOffers';
import CompanyProjects from './Componenets/CompanyProjects/CompanyProjects';
import CompanyProject from './Componenets/CompanyProject/CompanyProject';
import JoinAsProvider from './Componenets/JoinAsProvider/JoinAsProvider';
import AllDevelopmentsServices from './Componenets/AllDevelopmentsServices/AllDevelopmentsServices';
import AllRunningServices from './Componenets/AllRunningServices/AllRunningServices';
import MessagePage from './Componenets/MessagePage/MessagePage';

export default function App() {
 return <>
  <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='/projects' element={<ProjectsPage/>}/>
    <Route path='/provider' element={<Provider/>}/>
  <Route path='/providers' element={<Providers/>}/>
  <Route path='/WriteReview' element={<WriteReview/>}/>
  <Route path='/profile' element={<Profile/>}/>

  <Route path='/company' element={<Company/>}>
  <Route path='companyServices' element={<CompanyServices/>}/>
  <Route path='companyInfo' element={<CompanyInfo/>}/>
  <Route path='companyPackages' element={<CompanyPackages/>}/>
  <Route path='companyPaymentOffers' element={<CompanyPaymentOffers/>}/>
  <Route path='companyProject' element={<CompanyProject/>}/>


  </Route>

  <Route path='/AllDevelopmentServices' element={<AllDevelopmentsServices/>}/>
  <Route path='/AllRunningServices' element={<AllRunningServices/>}/>
  <Route path='/Messages' element={<MessagePage/>}/>



  <Route path='/JoinAsProvider' element={<JoinAsProvider/>}>
  <Route path='companyServices' element={<CompanyServices/>}/>
  <Route path='companyInfo' element={<CompanyInfo/>}/>
  <Route path='companyPackages' element={<CompanyPackages/>}/>
  <Route path='companyPaymentOffers' element={<CompanyPaymentOffers/>}/>
  <Route path='companyProject' element={<CompanyProject/>}/>JoinAsProvider

  </Route>


  {/* <Route path='/company' element={<Company/>}>
     <Route path='companyServices' element={<CompanyServices/>}/>
  </Route> */}



  




  <Route path='*' element={<h4 className='d-flex vh-100 bg-warning align-items-center justify-content-center  text-danger'>PAGE NOT FOUND!!</h4>}/>


</Routes>

  
</>
  
}






// element:<ProtectedRoute><Layout/></ProtectedRoute>,
// children:[
//  {
   
//    path:'/',
//    element: <Home/> 
//  },
//  // {
//  //   path:'/profile/:id',
//  //   element:<Profile refreshUserData={refreshUserData}/> 
//  // },
// ,
// ]
// },