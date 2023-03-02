import './App.css'
import React from 'react'
import { Table } from 'react-bootstrap'
import { BsCheck, BsDot } from "react-icons/bs"
import BackToTopBtn from './BackToTopBtn'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import NavLink from 'react-bootstrap/esm/NavLink'
import Vuokrausehdot from './Vuokrausehdot'
import Lisäpalvelut from './Lisäpalvelut'


const Hinnasto = () => {
    return(
        <>
            <div className='divYht'>
                <h1 className='titleName'>HINNASTO</h1>
                <div className='divInfo'>
                    <div className='divInfo-item'>
                        <br />
                        <h3 className='hinnastoName'>Hobby Optima T65 HKM ONTOUR, 2021</h3>
                        <Table striped bordered hover className='hinnastoTable'>
                            <thead>
                                <tr style={{ textAlign: 'center', backgroundColor: '#9183086e' }}>
                                    <th>Toukokuu & Syyskuu <br />
                                        1 - 31.05 & 1 - 30.09</th>
                                    <th>Kesäkausi <br />
                                        1.06 - 31.08</th>
                                    <th>Talvikausi <br />
                                        20.12 - 10.01</th>
                                    <th>Kevät & Syksy <br />
                                        11.01 - 30.04 & 1.10 - 19.12</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ textAlign: 'center', backgroundColor: '#ae9e0b3a' }}>
                                    <td>850€ / vko</td>
                                    <td>1290€ / vko</td>
                                    <td>790€ / vko</td>
                                    <td>690€ / vko</td>
                                </tr>
                                <tr style={{ textAlign: 'center' }}>
                                    <td>PE-MA / 490€</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>PE-MA / 490€</td>
                                </tr>
                                <tr style={{ textAlign: 'center' }}>
                                    <td>1vko / 850€</td>
                                    <td>1vko / 1290€</td>
                                    <td>1vko / 790€</td>
                                    <td>1vko / 690€</td>
                                </tr>
                                <tr style={{ textAlign: 'center' }}>
                                    <td>2vko / 1580€</td>
                                    <td>2vko / 2400€</td>
                                    <td>2vko / 1470€</td>
                                    <td>2vko / 1280€</td>
                                </tr>
                                <tr style={{ textAlign: 'center' }}>
                                    <td>3vko / 2320€</td>
                                    <td>3vko / 3520€</td>
                                    <td>3vko / 2150€</td>
                                    <td>3vko / 1880€</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h4 className='hinnastoTxt'>Kaikki hinnat sisältävät arvonlisäveron 24%</h4>
                        <br />
                        <h5>Huom! Sesonkiaikana 1.6. – 31.8 ja 20.12 - 10.01 vuokrataan autot ainostaan viikon jaksoissa. </h5>
                        <p>Muut ajat sopimuksen mukaan. Kysy tarjous!!!</p>
                        <br />
                        <p>Vuokrahintaan sisältyy:</p>
                        <h5><BsCheck/> Kilometrit:</h5>
                        <div className='leftText'>
                            <h5><BsDot/> PE-MA / 700km</h5>
                            <h5><BsDot/> 1 viikko - Kesäkausi / 2100km </h5>
                            <h5><BsDot/> 1 viikko - Touko- ja syyskuu / 2000km</h5>
                            <h5><BsDot/> 1 viikko - Talvikausi / 1900km</h5>
                            <h5><BsDot/> 1 viikko - Kevät ja Syksy / 1800km</h5>
                            <h4 style={{fontSize: '14px'}}>Lisäkilometrit jälkikäteen maksettuna 0,35€/km</h4>
                        </div>
                        <br />
                        <h5><BsCheck /> Täyskaskovakuutus 700€ omavastuulla</h5>
                        <h5><BsCheck /> Päivystyspalvelu matkan aikana</h5>
                        <h5><BsCheck /> Kirjallinen vuokrasopimus</h5>
                        <h5><BsCheck /> Käytönopastus</h5>
                        <h5><BsCheck /> WC -kemikaalit</h5>
                        <h5><BsCheck /> Kahvin- ja vedenkeitin</h5>
                        <h5><BsCheck /> Keittiövälineet ja astiat 6:lle</h5>
                        <h5><BsCheck /> Imuri</h5>
                        <h5><BsCheck /> Markiisi ja pyöräteline</h5>
                        <h5><BsCheck /> Sähköjohto + adapteri</h5>
                        <h5><BsCheck /> 2 kpl nestekaasupulloja (1 täynnä)</h5>
                        <h5><BsCheck /> Ulkopesu (autoa ei saa pestä itse)</h5>
                        <h5><BsCheck /> Oman autonne pysäköinnin vuokrauksen aikana (alueella on kameravalvonta)</h5>
                        <h5><BsCheck /> Ajokiilat auton tasaamiseksi</h5>
                    </div>


                    <div className='divInfo-item'>
                        <div className='container-slider' style={{ marginLeft: '60px' }}>
                            <div className='hinnastoPic'></div>
                        </div>

                        <div style={{ marginTop: '40px', marginLeft: '60px' }}>
                            <p>Vuokraan ei sisälly:</p>
                            <h5>- Polttoaine (diesel)</h5>
                            <h5>- Petivaatteet</h5>
                            <h5>- Loppusiivous (Katso lisäpalvelut!)</h5>
                            <br />
                            <div>
                            <h5><b>Varausmaksu / pantti:</b> 300€. Varausmaksun lasku lähetettään varauksen jälkeen sähköpostitse.</h5>
                            <h5><b>Auton noudot:</b> klo 17 - 20 välillä varauskohtaisesti aikatataulutettuna</h5>
                            <h5><b>Palautus:</b> klo 13</h5>
                            <h5>Poikkeuksellisista aikataulutoiveista kannattaa laittaa viesti tai soittaa</h5>
                            <br />
                            <p>Ole hyvä ja tutustu ennen varausta vuokrausehtoihin ja lisäpalveluihin!</p>  
                            <Router>
                                <NavLink href="/Vuokrausehdot" className='ehdotLink'>Vuokrausehdot</NavLink>
                                <NavLink href='/Lisäpalvelut' className='galleriaLink'>Lisäpalvelut ja -tuotteet</NavLink>
                                <Switch>
                                    <Route path="/Vuokrausehdot" exact>
                                        <Vuokrausehdot/>
                                    </Route>
                                    <Route path="/Lisäpalvelut" exact>
                                        <Lisäpalvelut/>
                                    </Route>
                                </Switch>
                            </Router>                         
                            </div>                            
                        </div>
                    </div>
                    <BackToTopBtn/>
                </div>
            </div>
        </>
        
    )
}

export default Hinnasto
