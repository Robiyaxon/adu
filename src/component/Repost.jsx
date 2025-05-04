
import React from 'react'
import style from "./post.module.css"
import img1 from "../asserts/img1.jpg"
import img3 from "../asserts/img2.jpg"
import videos from "../asserts/img3.jpg"
import vid from "../asserts/img4.jpg"


const Repost = () => {
  return (
    <div className={style.wrapper}>
        <h1>asu today</h1>

      <div className={style.wrap}>
      <div className={style.box}>
       <h2>Research Highlights</h2>
       <h3>Atomic lift-off epitaxial membranes  </h3>
      </div>

      <div className={style.work}>
      <div className={style.box1}>
        <img src={img1} alt="" />
        <h2>Research Highlights</h2>
        <h4>First to Uncover What Happens to mRNA Vaccines in the Body</h4>
      </div>


      <div className={style.box1}>
        <img src={img3} alt="" />
        <h2>Research Highlights</h2>
        <h4>Long term physical exercise fasilitates putative glymphatic and meningeal iymphatic vassel  flow in humans</h4>
      </div>
      </div>
      </div>






      <div className={style.say}>
        <div className={style.main}>
          <div className={style.main1}>
            <img src={videos} alt="" />
            <h2>Research Highlights</h2>
            <h4>Emergance of an oceanic CO2 uptake hole under global warming </h4>



          </div>

          <div className={style.main2}>
            <img src={vid} alt="" />
            <h2>Research Highlights</h2>
            <h4>Abrupt sea level rice and Earth's gradula pole 
              shift reveal parmanent gydrological
               regime changes in the 21 century </h4>
          </div>
        </div>


        <div className={style.card}>
         
          

          <div className={style.bar}>
         
          <h2>
          News</h2>
          </div>
        </div>































      </div>
































































    </div>
  )
}

export default Repost