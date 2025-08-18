import React, { useState, useEffect } from 'react';
import animateString from '../utils/stringUtils';

const Home: React.FC = () => {
  const [firstHeader, setFirstHeader] = useState(''); // justdimonn
  const [secondHeader, setSecondHeader] = useState(''); // Developer

  useEffect(() => {
    const runAnimation = async () => {
      await animateString('justdimonn', setFirstHeader, 100);
      await animateString('Developer', setSecondHeader, 100);
    };

    runAnimation();
  }, []);

  return (
    <div className='block-center block-1'>
      <h1 style={{ fontSize: '80px' }}>{firstHeader}</h1>
      <div style={{ width: '400px', height: '2px', backgroundColor: 'white' }}></div>
      <p style={{ fontSize: '50px' }}>{secondHeader}</p>
    </div>
  );
};

export default Home;
