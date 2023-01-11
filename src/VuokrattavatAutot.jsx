import './App.css'
import React from 'react'
import Slider from './Slider'
import { BsDot } from "react-icons/bs"
import BackToTopBtn from './BackToTopBtn'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import NavLink from 'react-bootstrap/esm/NavLink'
import Vuokrausehdot from './Vuokrausehdot'
import Galleria from './Galleria'

const VuokrattavatAutot = () => {
    return (
        <div className='divEhdot'>
            <h1 className='titleName'>VUOKRATTAVAT AUTOT</h1>
            <div className='divInfo'>
                <div className='divInfo-item'>
                    <Slider />
                    <br />
                    <Router>
                            <NavLink href="/Vuokrausehdot" className='ehdotLink'>Lue vuokrausehdot</NavLink>
                            <NavLink href="/Galleria" className='galleriaLink'>Valokuva galleria</NavLink>          
                        <Switch>
                            <Route path="/Vuokrausehdot" exact>
                                <Vuokrausehdot />
                            </Route>
                            <Route path="/Galleria" exact>
                                <Galleria/>
                            </Route>
                        </Switch>
                    </Router>
                    {/* <button>Valokuva galleria</button> */}

                </div>

                <div className='divInfo-item'>
                    <div className='avText'>
                        <h4 className='vaTitle'>Hobby Optima T65 HKM ONTOUR, 2021</h4>
                        <h5><BsDot /> CITROËN Jumper 2,2 l BlueHDi 140, start-stop-järjestelmällä</h5>
                        <h5><BsDot /> Pituus 7m ja kokonaismassa 3500kg</h5>
                        <h5><BsDot /> Etuveto, manuaali vaihtesto</h5>
                        <h5><BsDot /> Vakionopeudensäädin, peruutuskamera</h5>
                        <h5><BsDot /> Polkupyöräteline (max. 4 pyörälle)</h5>
                        <h5><BsDot /> Markiisi</h5>
                        <h5><BsDot /> B- ajokortti riittää! / 120km/h</h5>
                        <br />

                        <h4 className='vaTitle'>Varustelu - sisätilat ja mukavuudet: </h4>
                        <h5><BsDot /> Ajoaikainen ilmastointi</h5>
                        <h5><BsDot /> Truma Combi E6- ilmakeskuslömmitys (kaasu/ sähkö)</h5>
                        <h5><BsDot /> Korkea 133l jääkaappi pakaistinlokerolla (kaasu/ sähkö)</h5>
                        <h5><BsDot /> Kaasuliesi</h5>
                        <h5><BsDot /> Ruokailuvälineet ja astiasto kuudelle</h5>
                        <h5><BsDot /> Ruanlaittovälineet</h5>
                        <h5><BsDot /> Kahvin- ja vedenkeitin</h5>
                        <h5><BsDot /> Pölynimuri</h5>
                        <h5><BsDot /> WC / Suihku</h5>
                        <h5><BsDot /> 22" Smart TV (Netflix, Youtube ...)</h5>
                        <h5><BsDot /> CD - Radio, Navigaattori</h5>
                        <h5><BsDot /> Pimennys- ja hyönteisverkot ikkunoissa</h5>
                        <h5><BsDot /> Tilava tavaratila</h5>
                        <h5><BsDot /> Sänkyt: </h5>
                        <div className='leftText'>
                            <h5> - Takana kerrossänky (sopii myös aikuisille)</h5>
                            <h5> - Keskellä alaslaskettava parivuode</h5>
                            <h5> - Keskellä sohvaryhmä yhdistettävissä isoksi parivuoteeksi</h5>
                        </div>

                    </div>
                </div>
            </div>
            <BackToTopBtn />
        </div>
    )
}

export default VuokrattavatAutot
