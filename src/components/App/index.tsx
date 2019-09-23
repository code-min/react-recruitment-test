import './App.scss';

import React from 'react';
import Card from '../Cards/Card';
import Cars from '../../cars.json';

import logo from '../../assets/logo-2.svg';
import menu from '../../assets/list-menu.svg';
import { Link } from 'react-router-dom';

//function to get the car manufacturing year 
function getYear(year: any) {
  return new Date(year).getFullYear();
}

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <img src={logo} width="125px" alt="logo"></img>
        <span className="nav-center">Autosuche</span>
        <Link to={"/contact"} >
        <img src={menu} width="15px" alt=""></img>
        </Link>
      </nav>

      <main>
        <div>
          <h2>Wähle dein Traumauto</h2>
        </div>

        {/*Display card component multiple times, for all cars that are rentable*/}
        <div className="card-group">
        {Cars.map(Car => (Car.Rentable) ? 
          (<Card name={Car.Name} jahr={getYear(Car.Year)}></Card>) : ""
        )}
        </div>
      </main>

    </div>
  );
}

export default App;
