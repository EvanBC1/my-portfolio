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
      <a href='https://evans-sorting-visualizer.herokuapp.com/'>
      <img className='projectImages' src={SortingVisualizer} alt="sorting visualizer" />
      </a>
      <Button variant="outlined" color="primary" href='https://github.com/EvanBC1/Sorting-Visualizer'>
        GitHub Repo
      </Button>
      <Button variant="outlined" color="secondary" href='https://evans-sorting-visualizer.herokuapp.com/'>
        Live Version
      </Button>
      <p>The sorting visualizer is something i created to show a step by step look of how sorting algorithms step by step. Currently it can bubble sort and selection sort and I have plans to add additional sort types in the future. It is built in React and uses Redux</p>

      <h3>Petster</h3>
      <a href='https://petster-2.herokuapp.com/'>
      <img className='projectImages' id='petster' src={Petster} alt="petster" />
      </a>
      <Button variant="outlined" color="primary" href='https://github.com/NaamaBarIlan/Petster'>
      GitHub Repo
    </Button>
    <Button variant="outlined" color="secondary" href='https://petster-2.herokuapp.com/'>
      Live Version
    </Button>
      <p>Petster is an animal adoption app that helps you find a new member of your family. Petster uses the pet finder API to allow you to quickly swipe through potential pets with a streamlined UI.</p>

      <h3>Case Hawk</h3>
      <a href='https://github.com/JS-401-Final'>
      <img className='projectImages' src={CaseHawk} alt="casehawk login" />
      </a>
      <Button variant="outlined" color="primary" href='https://github.com/JS-401-Final'>
        GitHub Repo
      </Button>
      <p>Description</p>

      <h3>Heeded</h3>
      <a href='https://github.com/401-heeded/Heeded-Final-App'>
      <img className='projectImages' src={Heeded} alt="heeded uml" />
      </a>
      <Button variant="outlined" color="primary" href='https://github.com/401-heeded/Heeded-Final-App'>
        GitHub Repo
      </Button>
      <p>Heeded allows user to measure the engagement of their audience to better understand the impact of their speeches. Heeded was built to be used on a raspberry pi with a webcam and uses the following technologies: Node.js, AWS Cognito, AWS S3, and, AWS Rekognition</p>-
    </div>
      </>
  )
}