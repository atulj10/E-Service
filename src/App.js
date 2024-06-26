import './App.css';
import Home from './Components/Homepage/Home';
import Spinner from './Components/spinner/spinner';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'
import Projects from './Components/Project/Projects'
import Services from './Components/Services/Services'
import Career from './Components/Career/Career';

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
