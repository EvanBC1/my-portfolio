import React, {useState} from "react";
import '../style/contact.css';
import axios from 'axios';
import github from "../assets/GitHub-Mark-white.png";
import linkedIn from "../assets/linkedin-icon-png-transparent-background-15.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Petster from "../assets/petster.jpg";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onMessageChange(event) {
    setMessage(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    let stateObj = {
      name: name,
      email: email,
      message: message
    }
    axios({
      method: "POST",
      url:"https://evans-portfolio.herokuapp.com/send",
      data:  stateObj
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent.");
        resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
    console.log(stateObj)
  }

  function resetForm() {
    setName('');
    setEmail('');
    setMessage('');
  }

  const useStyles = makeStyles({
    card: {
      width: '95%',
      maxWidth: 600,
    },
    media: {
      height: 400,
    },
  });
  const classes = useStyles();
  return (
    <>
      <h2 id='contact'>
        Contact <br/> ━━━
      </h2>


      <div className='projects'>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: '1.5em'}}>
                If you are interested in working together or have any questions, please contact me below.
              </Typography>
              <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <br/>
                  <input type="text" className="form-control" value={name} onChange={onNameChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <br/>
                  <input type="email" className="form-control" aria-describedby="emailHelp" value={email}
                         onChange={onEmailChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <br/>
                  <textarea id="message-box" className="form-control" rows="5" value={message} onChange={onMessageChange}/>
                </div>
                <Button type="submit" variant="contained" size="medium" color="primary">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className='logosDiv2'>
        <a href="https://github.com/EvanBC1">
          <img className='logos2' src={github} alt="github link"/>
        </a>
        <a href="https://www.linkedin.com/in/evan-brecht-curry/">
          <img className='logos2' src={linkedIn} alt="linked link"/>
        </a>
      </div>
    </>
  )

}