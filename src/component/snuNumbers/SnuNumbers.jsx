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
        setCurrentInfo(<p>Colleges & Schools & Faculties = 8</p>);
      } else if (now > 6000 && now < 8000) {
        setCurrentInfo(<p> Faculties = 635</p>);
      } else if (now > 10000 && now < 12000) {
        setCurrentInfo(<p>Students = 14 352</p>);
      } else if (now > 14000 && now < 16000) {
        setCurrentInfo(<p>Library Holdings & Fields of study = 56</p>);
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
      <h1>ASU BY THE NUMBERS</h1>
      <div className="top-info">{currentInfo}</div>
      <div className="bottom-numbers">
        <div className="number-item">
          <strong>8</strong>
          <p>Colleges & Schools</p>
        </div>
        <div className="number-item">
          <strong>635</strong>
          <p>Faculty</p>
        </div>
        <div className="number-item">
          <strong>14 352</strong>
          <p>Students</p>
        </div>
        <div className="number-item">
          <strong>56</strong>
          <p>Library Holdings</p>
        </div>
      </div>
    </div>
  );
}

export default SnuNumbers;