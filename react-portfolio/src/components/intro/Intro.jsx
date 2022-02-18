import React from 'react';
import "./intro.css"
import pictureportBG2 from "../../img/pictureportBG2.png"





const Intro = () => {
  return(
  <div className="i">
      <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name"><span>Dele-Oyero</span> Ifeoluwa</h1>
              <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Web Developer</div>
                      <div className="i-title-item">Computer Engineer </div>
                      <div className="i-title-item">Content Creator</div>
                      <div className="i-title-item">Software Developer</div>
                      
                  </div>
              </div>
              <p className="i-desc">
                  I design and develop web services,Specialized in creating Really Cool Modern Websites,and Web Applications.
                My passion is to create Solutions in every way i can with a beautiful design to suit my clients. 
              </p>
          </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <div className="i-img">
              <img src={pictureportBG2} alt="myself" />
          </div>
      
      </div>



  </div>
  ) 
}

export default Intro;
 
