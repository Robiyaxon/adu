import React, { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";
import img1 from "../asserts/img1.jpg";
import img2 from "../asserts/img2.jpg";
import img3 from "../asserts/img3.jpg";
import img4 from "../asserts/img4.jpg";



const slides = [
    { url: img1, caption:  " " },
    { url: img2, caption: " " },
    { url: img3, caption:  " " },
    { url: img4, caption:  " " },
  ];
  

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
    <div className={styles.box}>
    {slides.map((slide, index) => (
  <div
    key={index}
    className={`${styles.slide} ${index === current ? styles.show : ""}`}
    style={{
      display: index === current ? "block" : "none",
      backgroundImage: `linear-gradient(rgba(129, 129, 129, 0.4), rgba(0, 0, 0, 0.93)), url(${slide.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80vh",
      width: "100%",
    }}
  >
    <div className={styles.caption}>{slide.caption}</div>
  </div>
))}

        
      
      
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide1} ${index === current ? styles.show : ""}`}
            style={{ display: index === current ? "block" : "none" }}
          >
            <img src={slide.url} alt={`Slide ${index}`} className={styles.image} />
            <div className={styles.caption}>{slide.caption}</div>
          </div>
        ))}
        <a className={styles.prev} onClick={prevSlide}>
          &#10094;
        </a>
        <a className={styles.next} onClick={nextSlide}>
          &#10095;
        </a>
      </div>
      </div>
    </div>
    </div>

  );
}
