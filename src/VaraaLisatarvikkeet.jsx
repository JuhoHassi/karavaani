import './App.css'
import React, { useState, useEffect } from 'react'
import CustomerBookingService from './services/CustomerBooking'
import BookingService from './services/Booking'
import CustomerService from './services/Customer'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'antd'

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

    const handleSubmit = (event) => {
        event.preventDefault()
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
                    setMessage("Kiitos! Varaus on lisätty.")
                    setIsPositive(true)
                    setShowMessage(true)
                    window.scrollBy(0, -10000)

                    setTimeout(() => {
                        setShowMessage(false)
                        emptyFields()
                        window.location.replace("/Etusivu")
                    }, 5000)
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
            <h2 className='titleName'>Valitse lisätarvikkeet ja palvelut</h2>
            <form onSubmit={handleSubmit}>
                <div className='varaaLisatarvikkeet'>
                    <div>
                        <label className='varauslbVaraa'>Kaasugrilli: </label>
                        <Switch onClick={Grill} />
                        {newGasGrill ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Pöytä & tuolit: </label>
                        <Switch onClick={TableChairs} />
                        {newTableChairs ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Retkituolit: </label>
                        <Switch onClick={CampingChairs} />
                        {newCampChairs ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Sähköpotkulauta: </label>
                        <Switch onClick={EScooter} />
                        {newScooter ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Kaasupullon vaihto palaut. : </label>
                        <Switch onClick={GasReplacement} />
                        {newGasRep ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Pidenetty vkl: </label>
                        <Switch onClick={LongWeekend} />
                        {newLongW ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Toimitus: </label>
                        <Switch onClick={HomeDelivery} />
                        {newDelivery ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Loppusiivous: </label>
                        <Switch onClick={Cleaning} />
                        {newCleaning ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>

                    <div>
                        <label className='varauslbVaraa'>Wc ja vesisäiliöin tyhjennys: </label>
                        <Switch onClick={WcAndWaterTank} />
                        {newWcWaterEmpt ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                    </div>
                </div>
                <br />
                <div>
                    <input className='btn btn-warning' type="submit" value="Varaa" />
                </div>
            </form>
        </div>
    )
}

export default VaraaLisatarvikkeet