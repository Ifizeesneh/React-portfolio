import React from 'react'
import "./projectList.css"
import moviepic from "../../img/moviepic.png"
import fedelick from "../../img/fedelick.png"
import simplepage from "../../img/simplepage.png"
import hyper from "../../img/hyper.png"
import smart from "../../img/smart.png"
import dezy from "../../img/dezy.png";


const projectList = () => {
  return (
    
      <div className="pl">
          <div className="pl-texts">
              <h1 className="pl-title">My projects </h1>
              <p className="pl-desc">They say,little wins matters, this are the litttle stuffs i have worked on
              and i am currently working on bigger stuffs</p>
          </div>
<div className="pl-list">
    <div className="box1">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://ifizeeflix.netlify.app" target="_blank" rel="noreferrer">
            <img src={moviepic} alt="" className='p-img'></img>
        </a>
    </div>
    <div className="box1">
    <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://fedelick.netlify.app" target="_blank" rel="noreferrer">
            <img src={fedelick} alt="" className='p-img'></img>
        </a>
    </div>
    <div className="box1">
    <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://my-simple-page.netlify.app" target="_blank" rel="noreferrer">
            <img src={simplepage} alt="" className='p-img'></img>
        </a>
    </div>
    <div className="box1">
    <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://hyper-culture.netlify.app" target="_blank" rel="noreferrer">
            <img src={hyper} alt="" className='p-img'></img>
        </a>
    </div>
    <div className="box1">
    <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://smartwatch-page.netlify.app" target="_blank" rel="noreferrer">
            <img src={smart} alt=""className='p-img'></img>
        </a>
    </div>
    <div className="box1">
    <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://simple-webpage2.netlify.app" target="_blank" rel="noreferrer">
            <img src={dezy} alt="" className='p-img'></img>
        </a>
    </div>
    
</div>
      </div>
    
  )
}

export default projectList
