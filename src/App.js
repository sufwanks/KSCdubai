
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home';
import Footer from './Components/Footer/footer';
import About from './Pages/About/about';
import Gallery from './Pages/Gallery/gallery';
import Contact from './Pages/Contact/contact';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/gallery' element = {<Gallery/>}></Route>
        <Route path='/contact' element = {<Contact />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/register' element = {<Register />}></Route>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
