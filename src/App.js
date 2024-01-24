import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const overlay = document.createElement('div');
    overlay.classList.add('background-overlay');
    document.body.appendChild(overlay);

    const handleMouseMove = (event) => {
      if (showOverlay) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Calculate offsets to center the overlay
        const offsetX = -600;
        const offsetY = -600;

        // Update overlay position with offsets
        overlay.style.left = `${mouseX + offsetX}px`;
        overlay.style.top = `${mouseY + offsetY}px`;

        // Ensure the overlay class is applied
        overlay.classList.add('background-overlay');
      }
    };

    const handleMouseEnter = () => {
      // Show overlay when mouse enters the document
      if (showOverlay) {
        overlay.style.display = 'block';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      // Cleanup event listeners when component unmounts
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [showOverlay]);

  return (
    <>
      <div className={showOverlay ? 'background-overlay' : ''}></div>
      <div className="container">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
