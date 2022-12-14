import React from "react";
import './landing.css'
import Events from './Events'
import { Whyus } from "./Whyus";
import { Contact } from "./Contact";
export const Landing = () => {
  return (
    <> 
    <div id="landing"className="landing__container">
      <video src="/essentials/landingvideo.mp4" autoPlay loop muted />
      <h1 className="landing__head">HYPE THE HIKE</h1>
      <em><p className="under__head">India's <span className="text__color">largest travelling</span> community built on <span className="text__color">WEB3</span></p></em>
    </div>
    <Events />
    <Whyus/>
    <Contact/>
    </>
  );
};
