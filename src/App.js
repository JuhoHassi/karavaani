import './App.css';
import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/esm/NavLink'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button'
import Kalenteri from './Kalenteri'
import Etusivu from './Etusivu'
import Hinnasto from './Hinnasto'
import HyvaTietaa from './HyvaTietaa'
import Lisavarusteet from './Lisavarusteet'
import Palaute from "./Palaute"
import VuokrattavatAutot from './VuokrattavatAutot'
import Vuokrausehdot from './Vuokrausehdot'
import Yhteystiedot from "./Yhteystiedot"
import Yritys from "./Yritys"
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom'

import { AiOutlineUser } from "react-icons/ai"
import AsiakkaanVaraukset from './AsiakkaanVaraukset'
import Asiakkaat from './Asiakkaat'
import Ilmoitus from './Ilmoitus'
import Varaukset from './Varaukset'
import Admins from './Admins'
import Login from './Login'


function App(){

  //State - ilmotuksen varten
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const [isPositive, setIsPositive] = useState(false)

  const [loggedIn, setLoggedIn] = useState("")

  //LogOut tapahtumakäsittelijä
  const logOut = () =>{
    localStorage.clear()
    setLoggedIn('')
  }

  //Ei heitä ulos ja muista kirjautumiseen
  useEffect(() =>{
    let storedUser = localStorage.getItem("username")
    if(storedUser !== null){
      setLoggedIn(storedUser)
    }
  }, [])

  return(
    <div className="taustakuva">
      <Router>       
        <Navbar bg='dark' variant="dark">
        <Nav className='me-auto'/>
          <Nav className='me-auto'>
              <h2 className='tsr'>TSR </h2><h2 className='matka'> Matkailuauto</h2>
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
              {loggedIn && <NavDropdown className='appTiedot' title="Tiedot">
                <NavDropdown.Item href="/AsiakkaanVaraukset">Asiakkaiden varaukset</NavDropdown.Item>
                <NavDropdown.Item href="/Asiakkaat">Asiakkaat</NavDropdown.Item>
                <NavDropdown.Item href="/Varaukset">Varaukset</NavDropdown.Item>
                <NavDropdown.Item href="/Admins">Käyttäjät</NavDropdown.Item>
              </NavDropdown>}
              {!loggedIn && <NavLink className='loginBtn' href="/Login"><AiOutlineUser color='smokewhite'/></NavLink>}
              {loggedIn && <button className='logOutBtn' onClick={() => logOut()}>LogOut</button>}
            </Nav>     
        </Navbar>

        {showMessage && <Ilmoitus message={message} isPositive={isPositive}/>}

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
          <Route path="/Yhteystiedot"><Yhteystiedot setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/></Route>
          {loggedIn && <Route path="/AsiakkaanVaraukset"><AsiakkaanVaraukset/></Route>}
          {loggedIn && <Route path="/Asiakkaat"><Asiakkaat setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/></Route>}
          {loggedIn && <Route path="/Varaukset"><Varaukset setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/></Route>}
          {loggedIn && <Route path="/Admins"><Admins setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/></Route>}
          {!loggedIn && <Route path="/Login"><Login setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} setLoggedIn={setLoggedIn}/></Route>}
        </Switch >
      </Router>
    </div>    
  )
}

export default App
