import React from 'react'
import Intro from "../intro";
import About from "../about";
import NavBar from '../navBar';
import Project from "../project";
import Contact from '../contact'

const Portfolio = () => {
  return(
    <>
    <Intro />
    <NavBar/>
    <About />
    <Project />
    <Contact/>
    </>
  )
}

export default Portfolio;