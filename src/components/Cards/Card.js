import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

//function to get the first word from car model -> to display image
function firstWordOfModel(name) {
  return name.split(" ")[0].toLowerCase();
}

function Card({name, jahr}) {
  return (
    <div className="card">
      <Link to={"/contact"} style={{ textDecoration: 'none' }}>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
              {name}
            </h5>
            <p className="card-text">Baujahr {jahr}</p>
            <br></br>
            <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <img className={"card-img-bottom float-right " + (firstWordOfModel(name) === 'ferrari' ? 'moveImgDown' : '')} src={require(`../../assets/Cars/${firstWordOfModel(name)}.png`)}></img>
          </div>
        </Link>
    </div>
  )
}

export default Card;

