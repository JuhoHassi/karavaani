import './App.css'
import React from 'react'
import NavLink from 'react-bootstrap/esm/NavLink'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Yhteystiedot from './Yhteystiedot'
import VaraaPaivat from './VaraaPaivat'
import BackToTopBtn from './BackToTopBtn'

const Tarjoukset = () => {
    return (
        <>
        <div className='divYht'>
            <h1 className='titleName'>TARJOUKSET</h1>
            <div className='divInfo'>
                <div className='divInfo-item'>
                    <h3 className='tarjousTxt'>Toteuta oma unelmien loma ja vuokraa matkailuauto</h3>
                    <h3 className='tarjousTxt2'>Helmikuun tarjous!</h3>
                    <h3 className='tarjousTxt3'>Vuokraa matkailuauto helmikuun ajaksi</h3>
                    <h3 className='tarjousTxt4'>viikko hinta - <b>590€</b></h3>
                

                    <Router>
                        <NavLink href='/Yhteystiedot' className='tarjousYhtLink'>Ota yhteyttä!</NavLink>
                        <Switch>
                            <Route path="/Yhteystiedot">
                                <Yhteystiedot/>
                            </Route>
                        </Switch>
                        <NavLink className='tarjousVaraaLink' href='/VaraaPaivat'>Varaa</NavLink>
                        <Switch>
                            <Route path="/VaraaPaivat">
                                <VaraaPaivat/>
                            </Route>
                        </Switch>
                    </Router>
                </div>

                <div className='divInfo-item'>
                    <div className='tarjousContainer-slider'>
                        <div className='tarjousPic'></div>
                    </div>
                </div>
            </div>
            <BackToTopBtn/>
        </div>
        </>
    )
}

export default Tarjoukset