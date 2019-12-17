import React from "react";
import Button from '@material-ui/core/Button';
import Sky from '../assets/diego-ph-5LOhydOtTKU-unsplash.jpg';
import '../style/intro.css';
import github from '../assets/GitHub-Mark-64px.png'
import linkedIn from '../assets/linkedin-icon-png-transparent-background-15.jpg'


export default function Intro () {

  return(
   <>
      <div className='front'>
        <img className='backgroundImage' src={Sky} alt="Night Sky" />

        <div className='introduction'>
          <h1> Welcome,<span className='highlightedName'> I am Evan Brecht-Curry.</span></h1>
          <h1>I am a software engineer.</h1>
          <Button variant="contained" color="primary" href='#about'>
            Learn More
          </Button>
        </div>

        <div className='logosDiv'>
          <a href="wss://github.com/EvanBC1">
          <img className='logos' src={github} alt="github link" />
          </a>
            <a href="wss://www.linkedin.com/in/evan-brecht-curry/">
          <img className='logos' src={linkedIn} alt="linked link" />
            </a>
        </div>

      </div>
     </>
  )
}