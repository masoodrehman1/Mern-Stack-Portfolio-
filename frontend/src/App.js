import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./components/home/Home";
import Header from './components/header/Header';
import Footer from './components/Footer/footer';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Login from './components/Login/Login';
import Timeline from './components/Admin/TimeLine';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/Admin/AdminPanel';
import Project from './components/Admin/Project';
import Loader from './components/Loader/Loader';
function App() {

  const dispatch= useDispatch()
  const {isauthenticated}=useSelector((state)=>state.login)
  const {loading, user}=useSelector(((state)=>state.user))
  console.log(user);

  useEffect(() => {
   dispatch(getUser())
   dispatch(loadUser())
  }, [dispatch])
  
  return (<>
    <ToastContainer autoClose={6000} />
   <Router >
    
    {loading?(
      <Loader/>
    ):(<>
      
     <Header/>
    <Routes>
      <Route path='/' element={<Home timeline={user.timeline} skills={user.skills}/>}/>
      <Route path='/About' element={<About about={user.about}/>}/>
      <Route path='/projects' element={<Projects projects={user.projects}/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/account' element={isauthenticated ? <AdminPanel/>:<Login/>}/>
      <Route path='/admin/timeline' element={isauthenticated ? <Timeline/>:<Login/>}/>
      <Route path='/admin/project' element={isauthenticated ? <Project/>:<Login/>}/>

    </Routes>
    <Footer/>
    </>)}
   
   </Router></>
  );
}

export default App;
