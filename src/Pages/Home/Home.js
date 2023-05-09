import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import quote1 from './pic/image-1.jpg';
import quote2 from './pic/image-2.jpg';
import quote3 from './pic/image-3.jpg';
import quote4 from './pic/image-4.jpg';
import quote5 from './pic/images-5.jpg';
import "./Home.css"
//slideshow images
const QUOTES = [
  { src: quote1, alt: 'Quote 1' },
  { src: quote2, alt: 'Quote 2' },
  { src: quote3, alt: 'Quote 3' },
  { src: quote4, alt: 'Quote 4' },
  { src: quote5, alt: 'Quote 5' },
];

const QuotesSlideshow = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((index) => (index + 1) % QUOTES.length);
    }, 4000);

    setTimeout(() => {
      setIsConfettiActive(false);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = QUOTES[currentQuoteIndex];

  const handlePrevClick = () => {
    setCurrentQuoteIndex((index) => (index + QUOTES.length - 1) % QUOTES.length);
  };

  const handleNextClick = () => {
    setCurrentQuoteIndex((index) => (index + 1) % QUOTES.length);
  };

  return (
    <div>
      {isConfettiActive && <Confetti />}
      <div className="header">
        <h2 className='welcome'>Welcome to Wellness Hub</h2>
        <p className='slogan'>Your go-to site for inspiration and habit tracking </p>
      </div>
      <div className="slider">
        <div className="prev" onClick={handlePrevClick}>
          &lt;
        </div>
        <img src={currentQuote.src} alt={currentQuote.alt} />
        <div className="next" onClick={handleNextClick}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default QuotesSlideshow;
