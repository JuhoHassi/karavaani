import './App.css'
import React from 'react'
import NavLink from 'react-bootstrap/esm/NavLink'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Yhteystiedot from './Yhteystiedot'

const Tarjoukset = () => {
    return (
        <>
        <div className='divYht'>
            <h1 className='titleName'>TARJOUKSET</h1>
            <div className='divInfo'>
                <div className='divInfo-item'>
                    <h4 className='tarjousTxt'>Toteuttaa oma unelmien loma ja vuokraa matkailuauto</h4>
                    <p style={{marginLeft: '180px', marginTop: '140px'}}>Helmikuun tarjous!</p>
                    <h5 style={{marginLeft: '120px'}}>Vuokra matkailuauto helmikuun ajaksi</h5>
                    <h5 style={{marginLeft: '180px', marginBottom:'300px'}}>viikko hinta - <b>590€</b></h5>
                

                    <Router>
                        <NavLink href='/Yhteystiedot' className='tiedotBtn' style={{marginRight: '100px'}}>Ota yhteyttä!</NavLink>
                        <Switch>
                            <Route path="/Yhteystiedot">
                                <Yhteystiedot/>
                            </Route>
                        </Switch>
                    </Router>
                </div>

                <div className='divInfo-item'>
                    <div className='container-slider'>
                        <div className='tarjousPic'></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Tarjoukset