import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from "./components/Nav";
import PediYa from "./components/Page/PediYa";
import GustoBurgerClub from "./components/Page/GustoBurgerClub";
import Home from "./components/Page/Home";
import Menu from "./components/Page/Menu";
import Sucursales from "./components/Page/Sucursales";
import TrabajaAca from "./components/Page/TrabajaAca";
import Nosotros from "./components/Page/Nosotros";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        {/* <Routes>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/pediya" component = {PediYa}/>
          <Route exact path="/gustoburgerclub" component = {GustoBurgerClub}/>
          <Route exact path="/menu" component = {Menu}/>
          <Route exact path="/sucursales" component = {Sucursales}/>
          <Route exact path="/trabajaaca" component = {TrabajaAca}/>
          <Route exact path="/nosotros" component = {Nosotros}/>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
