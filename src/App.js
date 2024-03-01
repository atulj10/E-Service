import Layout from './Components/Layout';
import './App.css';
import Home from './Components/Homepage/Home';
import Spinner from './Components/spinner/spinner';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Career from './Components/Career'
import Projects from './Components/Projects'
import Services from './Components/Services'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
  );
}

export default App;
