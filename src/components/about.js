import React from "react";
import '../style/about.css'
import me from "../assets/me.jpg";

export default function About () {

  return(
    <>
      <div id='about' className='about'>
        <h2>About <br/> ━━</h2>
        <img className='me' src={me} alt="picture of me" />
        <p>I am a Software Engineer with a background in project management and analytics based out of Seattle, Washington. I am passionate about using bleeding-edge technology to build tools that contribute to the long term success of humanity on earth and in space.</p>
      </div>
    </>
  )
}