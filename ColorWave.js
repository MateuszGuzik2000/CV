import React, { useState, useEffect } from 'react';

const ColorWaveText = () => {
  const [text, setText] = useState("Mateusz Guzik");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % text.length);
    }, 200); // Zmienia literę co 200ms

    return () => clearInterval(interval);
  }, [text.length]);

  const waveText = text.split('').map((char, index) => {
    return (
      <span key={index} style={{ color: index === counter ? 'green' : 'black' }}>
        {char}
      </span>
    );
  });

  return <div>{waveText}</div>;
};

export default ColorWaveText;
