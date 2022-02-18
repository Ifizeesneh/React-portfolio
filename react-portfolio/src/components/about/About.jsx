import React from 'react'
import "./about.css"
import pexels from "../../img/pexels.jpeg";
import anime from "../../img/anime.webp";

const About = () => {
  return (
    <div className='abt'>
     <div className="a-left">
         <div className="a-card bg"></div>
         <div className="a-card">
             <img src={pexels} alt="" className="a-img" />
         </div>
     </div>
     <div className="a-right">
         <h1 className="a-title">About Me</h1>
         <p className="a-sub">
         The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life
    
         </p>
         <p className="a-desc">
             I studied computer science at The polytechnic of Ibadan, and providing tech solutions has become part of my life,because
             i derive so much joy in doing just that, which is why i am not limited to just only a web developer,i'd rather say i provide web and web app 
             solutions
         </p>
         <div className="my-anime">
             <img src={anime} alt="" className="my-anime-img" />
             <div className="my-anime-texts">
                 <h4 className="my-anime-title">What keeps me going</h4>
                 <p className="my-anime-desc">
                     The fact that i always want to be better than i am yesterday makes me work harder and smarter
                 </p>
             </div>
         </div>
     </div>
    </div>
  )
}

export default About
