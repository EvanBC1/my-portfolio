import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../style/project.css'
import SortingVisualizer from '../assets/Sorting Visualizer.png'
import Petster from '../assets/petster.jpg'
import Heeded from '../assets/heeded.png'
import CaseHawk from '../assets/caseHawk.png'

const useStyles = makeStyles({
  card: {
    width: '95%',
    maxWidth: 600,
  },
  media: {
    height: 400,
  },
});

export default function Projects () {
  const classes = useStyles();

  return (
    <>
      <div className='projectsDiv' id="projects">
        <h2>Projects <br/> ━━━</h2>

        <div id="petster" className='projects'>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Petster}
                id="petsterImage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Petster
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "1.5em"}}>
                  Petster is an animal adoption app on the Google Play store that helps you find a new member of your family. Petster uses the pet finder API to allow you to quickly swipe through potential pets with a streamlined UI.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
              <Button variant="contained" size="medium" color="primary"  href='https://github.com/petster-app'>
                GitHub Repo
              </Button>
              <Button variant="contained" size="medium"  color="secondary" href='https://play.google.com/store/apps/details?id=com.lilvan.petster'>
                Live Version
              </Button>
            </CardActions>
          </Card>
        </div>

        <div id="sortingVisualizer" className='projects'>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={SortingVisualizer}
                id="sortingVisualizerImage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Sorting Visualizer
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "1.5em"}}>
                  The sorting visualizer is something i created to show a step by step look of how sorting algorithms step by step. Currently it can bubble sort and selection sort and I have plans to add additional sort types in the future. It is built in React and uses Redux
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
              <Button variant="contained" size="medium" color="primary" className="button" href='https://github.com/EvanBC1/Sorting-Visualizer'>
                GitHub Repo
              </Button>
              <Button variant="contained" size="medium"  color="secondary" className="button" href='https://evans-sorting-visualizer.herokuapp.com/'>
                Live Version
              </Button>
            </CardActions>
          </Card>
        </div>

        <div id="caseHawk" className='projects'>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={CaseHawk}
                id="caseHawkImage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Case Hawk
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "1.5em"}}>
                  Case Hawk is a legal case management app built for a local law firm. Case Hawk was built using React, Redux, Prisma, and Google Authentication.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
              <Button variant="contained" size="medium" color="primary" href='https://github.com/JS-401-Final'>
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        </div>

        <div id="heeded" className='projects'>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Heeded}
                id="heededImage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Heeded
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "1.5em"}}>
                  Heeded allows user to measure the engagement of their audience to better understand the impact of their speeches. Heeded was built to be used on a raspberry pi with a webcam and uses the following technologies: Node.js, AWS Cognito, AWS S3, and, AWS Rekognition
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
              <Button variant="contained" size="medium" color="primary" href='https://github.com/401-heeded/Heeded-Final-App'>
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  )
}