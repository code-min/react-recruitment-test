import React from 'react';
import './Contact.scss';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="Background">
      <Link to={"/"} >
      <img className="close" src={require("../../../assets/close.svg")} width="15px"></img>
      </Link>

    <div className="container">
      <img src={require("../../../assets/logo-2-white.svg")} width="150px"></img>
      <hr width="10%"></hr>
      <p>Autohaus Hella Wahnsinn<br></br>
      Am Bremsweg 3<br></br>
      54689 Irrhausen</p>
    </div>
    </div>
  )
}

export default Contact;

