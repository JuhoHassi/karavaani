import './App.css';
import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/esm/NavLink'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import Etusivu from './Etusivu'
import Hinnasto from './Hinnasto'
import Lisäpalvelut from './Lisäpalvelut'
import Palaute from './Palaute'
import VaraaPaivat from './VaraaPaivat';
import VaraaLisatarvikkeet from './VaraaLisatarvikkeet';
import VuokrattavatAutot from './VuokrattavatAutot'
import Vuokrausehdot from './Vuokrausehdot'
import Yhteystiedot from "./Yhteystiedot"
import Tarjoukset from "./Tarjoukset"
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai"
import Galleria from './Galleria'
import AsiakkaanVaraukset from './AsiakkaanVaraukset'
import Asiakkaat from './Asiakkaat'
import Ilmoitus from './Ilmoitus'
import Varaukset from './Varaukset'
import Admins from './Admins'
import Login from './Login'
import Container from 'react-bootstrap/Container';

function App() {

  //State - ilmotuksen varten
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const [isPositive, setIsPositive] = useState(false)

  const [loggedIn, setLoggedIn] = useState("")

  //LogOut tapahtumakäsittelijä
  const logOut = () => {
    localStorage.clear()
    setLoggedIn('')
  }

  //Ei heitä ulos ja muista kirjautumiseen
  useEffect(() => {
    let storedUser = localStorage.getItem("username")
    if (storedUser !== null) {
      setLoggedIn(storedUser)
    }
  }, [])

  return (
    <div className="taustakuva">
      <Router>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Nav className='me-auto'><h2 className='tsr'>TSR </h2><h2 className='matka'> Matkailuauto</h2></Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" style={{ fontSize: 20, marginLeft:'20%' }}>
                <Nav.Link href="/Etusivu">Etusivu</Nav.Link>
                <Nav.Link href="/Tarjoukset">Tarjoukset</Nav.Link>
                <NavDropdown title="Vuokraus" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/VuokrattavatAutot">Vuokrattavat autot</NavDropdown.Item>
                  <NavDropdown.Item href="/VaraaPaivat">Varaa</NavDropdown.Item>

                  <NavDropdown.Item href="/Hinnasto">Hinnasto</NavDropdown.Item>
                  <NavDropdown.Item href="/Lisäpalvelut">Lisäpalvelut</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Galleria">Valokuvat</NavDropdown.Item>
                  <NavDropdown.Item href="/Vuokrausehdot">Vuokrausehdot</NavDropdown.Item>
                </NavDropdown>
                <NavLink href="/Palaute" >Palaute</NavLink>
                <NavLink href="/Yhteystiedot">Yhteystiedot</NavLink>
              </Nav>
              <Nav  style={{ fontSize: 20 }}>
                {loggedIn && <NavDropdown className='appTiedot' title="Tiedot">
                  <NavDropdown.Item href="/AsiakkaanVaraukset">Asiakkaiden varaukset</NavDropdown.Item>
                  <NavDropdown.Item href="/Asiakkaat">Asiakkaat</NavDropdown.Item>
                  <NavDropdown.Item href="/Varaukset">Varaukset</NavDropdown.Item>
                  <NavDropdown.Item href="/Admins">Käyttäjät</NavDropdown.Item>
                </NavDropdown>}
                {!loggedIn && <NavLink className='loginBtn' href="/Login"><AiOutlineUser color='smokewhite' /></NavLink>}
                {loggedIn && <button className='logOutBtn' onClick={() => logOut()}>LogOut</button>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {showMessage && <Ilmoitus message={message} isPositive={isPositive} />}

        <Switch >
          <Route path="/Etusivu"><Etusivu /></Route>
          <Route path="/Tarjoukset"><Tarjoukset /></Route>
          <Route path="/VuokrattavatAutot"><VuokrattavatAutot /></Route>
          <Route path="/VaraaPaivat"><VaraaPaivat setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/></Route>
          <Route path="/VaraaLisatarvikkeet"><VaraaLisatarvikkeet setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/></Route>

          <Route path="/Hinnasto"><Hinnasto /></Route>
          <Route path="/Lisäpalvelut"><Lisäpalvelut /></Route>
          <Route path="/Galleria"><Galleria /></Route>
          <Route path="/Vuokrausehdot"><Vuokrausehdot /></Route>
          <Route path="/Palaute"><Palaute setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} /></Route>
          <Route path="/Yhteystiedot"><Yhteystiedot setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} /></Route>
          {loggedIn && <Route path="/AsiakkaanVaraukset"><AsiakkaanVaraukset /></Route>}
          {loggedIn && <Route path="/Asiakkaat"><Asiakkaat setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} /></Route>}
          {loggedIn && <Route path="/Varaukset"><Varaukset setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} /></Route>}
          {loggedIn && <Route path="/Admins"><Admins setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} /></Route>}
          {!loggedIn && <Route path="/Login"><Login setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} setLoggedIn={setLoggedIn} /></Route>}
        </Switch >
      </Router>
    </div>
  )
}

export default App
