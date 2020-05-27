import React, {useState} from "react";
import '../style/contact.css';
import axios from 'axios';
import github from "../assets/GitHub-Mark-white.png";
import linkedIn from "../assets/linkedin-icon-png-transparent-background-15.jpg";


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
      url:"https://agitated-kare-4b7757.netlify.app/",
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


  return (
    <>
      <h2 id='contact'>
        Contact <br/> ━━━
      </h2>

      <p id='contactText'>If you are interested in working together or have any questions, please contact me on linkedIn
        or at <span id='myName'>evanbc1@gmail.com</span></p>

      <div className='logosDiv2'>
        <a href="https://github.com/EvanBC1">
          <img className='logos2' src={github} alt="github link"/>
        </a>
        <a href="https://www.linkedin.com/in/evan-brecht-curry/">
          <img className='logos2' src={linkedIn} alt="linked link"/>
        </a>
      </div>
      <br/>
      <br/>
      <br/>

      <div className="App">
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={name} onChange={onNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={email}
                   onChange={onEmailChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={message} onChange={onMessageChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  )

}