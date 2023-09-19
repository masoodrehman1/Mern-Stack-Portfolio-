import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./components/home/Home";
import Header from './components/header/Header';
import Footer from './components/Footer/footer';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Login from './components/Login/Login';
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/account' element={<Login/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
