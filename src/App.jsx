import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Experience from './Components/Experience';

// Loader Component
const Loader = () => {
  return (
    <div className="loader">
      <div class="pyramid-loader h-screen bg-black">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Hero/> <About /> <Education /> <Experience/> <Projects /> <Skills /> <Tools /> <Contact /> </>} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
