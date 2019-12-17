import React from "react";
import '../style/navBar.css'

export default function NavBar () {
  return (
    <ul>
      <li><a className="active" href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  )
}