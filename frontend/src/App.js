import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./components/home/Home";
import Header from './components/header/Header';
import Footer from './components/Footer/footer';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/Admin/AdminPanel';
function App() {
  const dispatch= useDispatch()
  const {isauthenticated}=useSelector((state)=>state.login)


  useEffect(() => {
   dispatch(getUser())
   dispatch(loadUser())
  }, [dispatch])
  
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/account' element={isauthenticated ? <AdminPanel/>:<Login/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
