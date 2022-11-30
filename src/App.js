import './App.css';
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/esm/NavLink'
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button'
import Kalenteri from './Kalenteri'
import Etusivu from './Etusivu';
import Asiakkaat from "./Asiakkaat"
import Hinnasto from './Hinnasto';
import HyvaTietaa from './HyvaTietaa';
import Lisavarusteet from './Lisavarusteet';
import Palaute from "./Palaute"
import VuokrattavatAutot from './VuokrattavatAutot';
import Vuokrausehdot from './Vuokrausehdot';
import Yhteystiedot from "./Yhteystiedot"
import Yritys from "./Yritys"
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom'

import { AiOutlineUser } from "react-icons/ai"


function App(){
  return(
    <div className="taustakuva">
      <Router>        
        <Navbar bg='dark' variant="dark">
        <Nav className='me-auto'/>
          <Nav className='me-auto'>
              <h className='tsr'>TSR </h><h className='matka'> Matkailuauto</h>
          </Nav>
          <Nav className='me-auto' style={{fontSize:20}}>
            {/* <NavLink to={'/Etusivu'}>Etusivu</NavLink> */}
            <NavLink href='/Etusivu'>Etusivu</NavLink>
            {/* <Link to={'/Etusivu'} className='nav-link'>Etusivu</Link> */}
            <NavLink href='/Yritys'>Yritys</NavLink>
              <NavDropdown title="Vuokraus" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="/VuokrattavatAutot">Vuokrattavat autot</NavDropdown.Item>
                <NavDropdown.Item href="/Kalenteri">Varaa</NavDropdown.Item>
                <NavDropdown.Item href="/Hinnasto">Hinnasto</NavDropdown.Item>
                <NavDropdown.Item href="/Lisavarusteet">Lisävarusteet</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/HyvaTietaa">Hyvä tietää</NavDropdown.Item>
                <NavDropdown.Item href="/Vuokrausehdot">Vuokrausehdot</NavDropdown.Item>
              </NavDropdown>
            <NavLink href="/Palaute" >Palaute</NavLink>
            <NavLink href="/Yhteystiedot">Yhteystiedot</NavLink>  
          </Nav>
            <Nav style={{fontSize:20}} >
              <NavLink href="/Asiakkaat">Asiakkaat</NavLink>
              <NavLink className='loginBtn'><AiOutlineUser color='smokewhite'/></NavLink>
            </Nav>
            
        </Navbar>
        <Switch >
          <Route path="/Etusivu"><Etusivu/></Route>
          <Route path="/Yritys"><Yritys/></Route>
          <Route path="/VuokrattavatAutot"><VuokrattavatAutot/></Route>
          <Route path="/Kalenteri"><Kalenteri/></Route>
          <Route path="/Hinnasto"><Hinnasto/></Route>
          <Route path="/Lisavarusteet"><Lisavarusteet/></Route>
          <Route path="/HyvaTietaa"><HyvaTietaa/></Route>
          <Route path="/Vuokrausehdot"><Vuokrausehdot/></Route>
          <Route path="/Palaute"><Palaute/></Route>
          <Route path="/Asiakkaat"><Asiakkaat/></Route>
          <Route path="/Yhteystiedot"><Yhteystiedot/></Route>
        </Switch >
      </Router>
    </div>
  )
}

export default App;
