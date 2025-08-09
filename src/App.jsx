import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-black min-h-screen min-w-screen text-white'>
      {/* This div will change opacity based on scroll */}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2em',
          opacity: Math.max(0, 1 - scrollY / 500) // Fades out over 500px scroll
        }}
      >
        Scroll down to see changes!
      </div>

      {/* This div will appear after scrolling down */}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2em',
          backgroundColor: scrollY > 500 ? 'darkblue' : 'transparent', // Changes background after 500px
          transition: 'background-color 0.5s ease-in-out'
        }}
      >
        {scrollY > 500 ? (
          <p>You've scrolled past 500px!</p>
        ) : (
          <p>Keep scrolling...</p>
        )}
      </div>

      {/* This div ensures there's enough scrollable content */}
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2em' }}>
        <p>More content below!</p>
      </div>
    </div>
  );
}

export default App;
