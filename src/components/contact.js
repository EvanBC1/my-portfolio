import React from "react";
import '../style/contact.css'
import github from "../assets/GitHub-Mark-white.png";
import linkedIn from "../assets/linkedin-icon-png-transparent-background-15.jpg";

export default function Contact () {
  return (
    <>
    <h2 id='contact'>
      Contact <br/> ━━━
    </h2>

      <p id='contactText'>If you are interested in working together or have any questions, please contact me on linkedIn or at <span id='myName'>evanbc1@gmail.com</span></p>

      <div className='logosDiv2'>
        <a href="https://github.com/EvanBC1">
          <img className='logos2' src={github} alt="github link" />
        </a>
        <a href="https://www.linkedin.com/in/evan-brecht-curry/">
          <img className='logos2' src={linkedIn} alt="linked link" />
        </a>
      </div>
      </>
  )
}