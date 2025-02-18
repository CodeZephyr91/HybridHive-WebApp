import React, { useRef, useEffect } from 'react';
import './homepage.css';
import { Typed } from 'react-typed';
import myimage from './assets/hybridwork.webp'
import { Link } from 'react-router-dom'
const Homepage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: ['Seamlessly Connect, Collaborate, Thrive'],
        typeSpeed:60,
        backSpeed:30,
        backDelay:500,
        startDelay:100, 
        loop:true
      });
    }
  }, []);

  return (
    <div className='parentdiv'>
      <header className='Navbar'>
        <nav className='Navlinks'>
          <button className='button'>
          <Link to="/recommendations" className='links'>Get Recommendations</Link>
          </button>
          <button className='button'>
          <Link to="/schedule" className='links'>Schedule Meetings</Link>
          </button>
          <button className='button'>
            <Link to="/about" className='links'>About</Link>
          </button>
          <button className='button'>
            <Link to="/thoughtspace" className='links'>Thought Space</Link>
          </button>
        </nav>
      </header>
      <section className='herosection'>
        <div className='Textalignment'>
          <h1 className='hybridhive-title'>HybridHive</h1>
          <p className='typing-text' ref={typedRef}></p>
        </div>
        <div className='myimage-style'>
          <img src={myimage} alt="Raods connection" />
        </div>
      </section>
      <footer className='Footercopyright'>
        <p className='parafooter'>
          © 2025 HybridHive. All rights reserved. Collaborate Grow and Achieve.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;