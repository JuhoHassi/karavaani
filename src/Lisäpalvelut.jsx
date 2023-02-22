import './App.css'
import React from 'react'
import { BsDot } from "react-icons/bs"

const Lisäpalvelut = () => {
    return(
        <>
        <div className='divYht'>
            <h1 className='titleName'>LISÄPALVELUT JA -TUOTTEET</h1>
            <div className='divInfo'>
                <div className='divInfo-item'>
                    <div className='container-slider'>
                        <div className='palvelutPic'></div>
                    </div>
                </div>

                <div className='divInfo-item'>
                    <div className='avText'>
                        <br />
                        <h5 style={{marginTop: '40px'}}>Lisäpalveluita sekä tuotteita joita voi ostaa varauksen yhteydessä:</h5>
                        <br />
                        <p>Lisätuotteet:</p>
                        <h5><BsDot/> Taittopöytä + tuolit(4kpl) - 35€</h5>
                        <h5><BsDot/> Retkituolit - 6€ / kpl</h5>
                        <h5><BsDot/> Kaasugrilli (sisältää kaasupullon) - 45€</h5>
                        <h5><BsDot/> Sähköpotkulauta - 10€ / vrk</h5>

                        <br />
                        <p>Lisäpalvelut:</p>
                        <h5><BsDot/> Loppusiivous - 75€</h5>
                        <h5><BsDot/> WC -kasetin ja harmaavesisäiliön tyhjennys - 70€</h5>
                        <h5><BsDot/> Kaasupullon vaihto autoa palauttaessa - 35€</h5>
                        <h5><BsDot/> Pidennetty viikonloppu - 100€</h5>
                        <h5><BsDot/> Toimitus kotiovelle - 1,50€ / km (kuitenkin vähintään 50 €)</h5>
                        <br />
                        <h4 style={{fontSize: '14px'}}>Kaikki hinnat sisältävät arvonlisäveron 24%</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Lisäpalvelut
