import React from "react";
import '../style/project.css'
import Button from "@material-ui/core/Button";
import SortingVisualizer from '../assets/Sorting Visualizer.png'
import Petster from '../assets/petster.png'
import Heeded from '../assets/heeded.png'
import CaseHawk from '../assets/caseHawk.png'

export default function Projects () {
  return (
    <>
    <div className='projects' id='projects'>
      <h2>Projects <br/> ━━━</h2>

      <h3>Sorting Visualizer</h3>
      <img className='projectImages' src={SortingVisualizer} alt="project image" />
      <Button variant="outlined" color="primary" href='https://github.com/EvanBC1/Sorting-Visualizer'>
        GitHub Repo
      </Button>
      <Button variant="outlined" color="secondary" href='https://evans-sorting-visualizer.herokuapp.com/'>
        Live Version
      </Button>
      <p>The sorting visualizer is something i created to show a step by step look of how sorting algorithms step by step. Currently it can bubble sort and selection sort and I have plans to add additional sort types in the future. It is built in React and uses Redux</p>

      <h3>Petster</h3>
      <img className='projectImages' id='petster' src={Petster} alt="project image" />
      <Button variant="outlined" color="primary" href='https://github.com/NaamaBarIlan/Petster'>
      GitHub Repo
    </Button>
    <Button variant="outlined" color="secondary" href='https://petster-2.herokuapp.com/'>
      Live Version
    </Button>
      <p>Petster is an animal adoption app that helps you find a new member of your family. Petster uses the pet finder API to allow you to quickly swipe through potential pets with a streamlined UI.</p>

      <h3>Case Hawk</h3>
      <img className='projectImages' src={CaseHawk} alt="project image" />
      <Button variant="outlined" color="primary" href='https://github.com/JS-401-Final'>
        GitHub Repo
      </Button>
      <p>Description</p>

      <h3>Heeded</h3>
      <img className='projectImages' src={Heeded} alt="project image" />
      <Button variant="outlined" color="primary" href='https://github.com/401-heeded/Heeded-Final-App'>
        GitHub Repo
      </Button>
      <p>Description</p>-
    </div>
      </>
  )
}