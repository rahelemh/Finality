import React, { useState, useEffect } from 'react';
import img1 from '../components/galery/red2.avif';
import img2 from '../components/galery/shop3.avif';
import img3 from '../components/galery/red2.avif';
import img4 from '../components/galery/shop2.avif';
import img5 from '../components/galery/red1.avif';
import './Backer.css'
const backgroundImages = [
  img1,
  img2,
  img3,
  img4,
  img5
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeBackground = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(changeBackground);
  }, []);

  return (
    <div className='m6 backer'
      style={{
        backgroundImage: `url(${backgroundImages[currentIndex]})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        height: '400px',
        width: '100%',
        transition: 'background-image 0.5s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}
    >
      
    </div>
  );
};

export default BackgroundSlider;
