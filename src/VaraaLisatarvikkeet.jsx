import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import CustomerBookingService from './services/CustomerBooking'
import BookingService from './services/Booking'
import CustomerService from './services/Customer'
import "react-datepicker/dist/react-datepicker.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch } from 'antd'
import emailjs from '@emailjs/browser'

// Kalenterikomponentin dokumentaatio https://reactdatepicker.com/

const VaraaLisatarvikkeet = ({ setMessage, setShowMessage, setIsPositive }) => {


    useEffect(() => {
        const token = localStorage.getItem('token') //Otetaan mukaan token (backend)
        const alku = localStorage.getItem('startday')
        const loppu = localStorage.getItem('endday')
        const maara = localStorage.getItem('persons') // Otetaan VaraaPaivat sivulla valitut päivät ja henkilömäärä talteen

        setNewAlku(alku)
        setNewLoppu(loppu)
        setNewHeadCount(maara)

        CustomerBookingService
            .setToken(token)
        CustomerService
            .setToken(token)
        BookingService
            .setToken(token)

        CustomerService.getAll() // Haetaan edellisellä sivulla luodun asiakkaan ID jotta saadaan varaus lisättyä
            .then(data => {
                const viimenen = data[data.length - 1].customerId
                setViimenen(viimenen)
                console.log("JoooOoo " + viimenen)
            })
    }, [])

    const [viimenen, setViimenen] = useState(0);
    const [newAlku, setNewAlku] = useState(new Date())
    const [newLoppu, setNewLoppu] = useState(new Date())
    const [newGasGrill, setNewGasGrill] = useState(false)
    const [newTableChairs, setNewTableChairs] = useState(false)
    const [newCampChairs, setNewCampChairs] = useState(false)
    const [newScooter, setNewScooter] = useState(false)
    const [newGasRep, setNewGasRep] = useState(false)
    const [newLongW, setNewLongW] = useState(false)
    const [newDelivery, setNewDelivery] = useState(false)
    const [newCleaning, setNewCleaning] = useState(false)
    const [newWcWaterEmpt, setNewWcWaterEmpt] = useState(false)
    const [newHeadCount, setNewHeadCount] = useState(0)


    const Grill = () => {
        newGasGrill ? setNewGasGrill(false) : setNewGasGrill(true)
        console.log(newGasGrill, "value")
    }

    const TableChairs = () => {
        newTableChairs ? setNewTableChairs(false) : setNewTableChairs(true)
        console.log(newTableChairs, "value")
    }

    const CampingChairs = () => {
        newCampChairs ? setNewCampChairs(false) : setNewCampChairs(true)
        console.log(newCampChairs, "value")
    }

    const EScooter = () => {
        newScooter ? setNewScooter(false) : setNewScooter(true)
        console.log(newScooter, "value")
    }

    const GasReplacement = () => {
        newGasRep ? setNewGasRep(false) : setNewGasRep(true)
        console.log(newGasRep, "value")
    }

    const LongWeekend = () => {
        newLongW ? setNewLongW(false) : setNewLongW(true)
        console.log(newLongW, "value")
    }

    const HomeDelivery = () => {
        newDelivery ? setNewDelivery(false) : setNewDelivery(true)
        console.log(newDelivery, "value")
    }

    const Cleaning = () => {
        newCleaning ? setNewCleaning(false) : setNewCleaning(true)
        console.log(newCleaning, "value")
    }

    const WcAndWaterTank = () => {
        newWcWaterEmpt ? setNewWcWaterEmpt(false) : setNewWcWaterEmpt(true)
        console.log(newWcWaterEmpt, "value")
    }


    const emptyFields = () => {
        setNewGasGrill(false)
        setNewTableChairs(false)
        setNewCampChairs(false)
        setNewScooter(false)
        setNewLongW(false)
        setNewGasRep(false)
        setNewDelivery(false)
        setNewCleaning(false)
        setNewWcWaterEmpt(false)
    }

    const form = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()

        emailjs.sendForm('service_vjj6wdw', 'template_4bgjk34', form.current, '41BBDlyHTwF5LnCXc')
            .then((result) => {
                console.log(result.text)
                console.log("Viestin lähetys onnistui")

            }, (error) => {
                console.log(error.text)
                console.log('Ei onnistunut')
            })

        event.target.reset()

        var newBook = { 
            customerId: viimenen,
            gasGrill: newGasGrill,
            tableChairs: newTableChairs,
            campingChairs: newCampChairs,
            electricScooter: newScooter,
            longWeekend: newLongW,
            delivery: newDelivery,
            gasReplacement: newGasRep,
            cleaning: newCleaning,
            wcWaterTankEmpty: newWcWaterEmpt,
            startDay: new Date(newAlku),
            endDay: new Date(newLoppu),
            terms: true,
            persons: newHeadCount
        }
        console.log(newBook)

        BookingService.create(newBook) // Lisätään uusi varaus
            .then(response => {
                if (response.status === 200) {
                    setMessage("Kiitos varauksestasi! Varausmaksu lähetetty.")
                    setIsPositive(true)
                    setShowMessage(true)
                    window.scrollBy(0, -10000)

                    setTimeout(() => {
                        setShowMessage(false)
                        emptyFields()
                        window.location.replace("/Etusivu")
                    }, 8000)
                }
            })
            .catch(error => {
                setMessage("Error" + error)
                setIsPositive(false)
                setShowMessage(true)
                window.scrollBy(0, -10000)

                setTimeout(() => {
                    setShowMessage(false)
                }, 8000)
            })
    }
    return (
        <div className='varaaLisatarvikkeetSivu'>
            <h2 className='titleName'>Valitse halutessa lisätarvikkeet ja palvelut</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <div className='varaaLisatarvikkeet'>
                    <div>
                        <label className='varauslbVaraa'>Kaasugrilli (sisältää kaasupullon) - 45€ </label>
                        <Switch onClick={Grill} />
                        {newGasGrill ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Taittopöytä + tuolit(4kpl) - 35€ </label>
                        <Switch onClick={TableChairs} />
                        {newTableChairs ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Retkituolit - 6€ / kpl </label>
                        <Switch onClick={CampingChairs} />
                        {newCampChairs ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Sähköpotkulauta - 10€ / vrk </label>
                        <Switch onClick={EScooter} />
                        {newScooter ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Kaasupullon vaihto palautaessa - 35€  </label>
                        <Switch onClick={GasReplacement} />
                        {newGasRep ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Pidennetty viikonloppu - 100€ </label>
                        <Switch onClick={LongWeekend} />
                        {newLongW ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Toimitus kotiovelle - 1,50€ / km </label>
                        <Switch onClick={HomeDelivery} />
                        {newDelivery ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Loppusiivous - 75€ </label>
                        <Switch onClick={Cleaning} />
                        {newCleaning ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Wc ja vesisäiliöin tyhjennys - 70€ </label>
                        <Switch onClick={WcAndWaterTank} />
                        {newWcWaterEmpt ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>
                    <div className='varaaEmail'>
                        <label>Sähköposti varausmaksua varten:</label>
                        <input  type='email' name='user_email' required />
                    </div>
                    <div>
                    <input className='btn btn-warning' style={{ paddingLeft: '170px', paddingRight: '170px' }} type="submit" value="Varaa" />
                </div>
                </div>
            </form>
        </div>
    )
}

export default VaraaLisatarvikkeet