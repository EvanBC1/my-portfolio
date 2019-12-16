import React from "react";
import Button from '@material-ui/core/Button';
import Sky from '../assets/diego-ph-5LOhydOtTKU-unsplash.jpg';
import '../style/intro.css';


export default function Intro () {

  return(
   <>
      <div className='front'>
        <img className='backgroundImage' src={Sky} alt="Night Sky" />
        <div className='introduction'>
          <h1> Welcome,<span className='highlightedName'> I am Evan Brecht-Curry.</span></h1>
          <h1>I am a software engineer.</h1>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </div>
      </div>
     </>
  )
}