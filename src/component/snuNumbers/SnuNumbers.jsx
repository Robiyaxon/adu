import React, { useState, useEffect } from 'react';
import './SnuNumbers.css';

function SnuNumbers() {
  const [currentInfo, setCurrentInfo] = useState(
    <p>Seoul National University has <strong>16</strong> Colleges and <strong>11</strong> Professional Graduate Schools.</p>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // This is a simplified way to simulate the line's progress.
      // A more precise method might involve listening to animation events,
      // but for a continuous animation, intervals can work.

      const now = Date.now() % 20000; // Get the current time within our 20s animation

      if (now > 2000 && now < 4000) {
        setCurrentInfo(<p>Seoul National University has lots of different schools and colleges where you can learn about all sorts of cool things!</p>);
      } else if (now > 6000 && now < 8000) {
        setCurrentInfo(<p>The faculty are the teachers and professors here. They're really smart and help students learn.</p>);
      } else if (now > 10000 && now < 12000) {
        setCurrentInfo(<p>Students are the people who come to SNU to study. There are many students learning different things!</p>);
      } else if (now > 14000 && now < 16000) {
        setCurrentInfo(<p>The library has tons of books and other things you can read and learn from. It's a very big collection!</p>);
      } else {
        setCurrentInfo(
          <p>Seoul National University has <strong>16</strong> Colleges and <strong>11</strong> Professional Graduate Schools.</p>
        );
      }
    }, 200); // Check every 200 milliseconds
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="snu-numbers-container">
      <h1>SNU BY THE NUMBERS</h1>
      <div className="top-info">{currentInfo}</div>
      <div className="bottom-numbers">
        <div className="number-item">
          <strong>27</strong>
          <p>Colleges & Schools</p>
        </div>
        <div className="number-item">
          <strong>6,397</strong>
          <p>Faculty</p>
        </div>
        <div className="number-item">
          <strong>31,544</strong>
          <p>Students</p>
        </div>
        <div className="number-item">
          <strong>5,477,022</strong>
          <p>Library Holdings</p>
        </div>
      </div>
    </div>
  );
}

export default SnuNumbers;