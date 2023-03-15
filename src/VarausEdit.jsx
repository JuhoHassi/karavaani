import './App.css'
import React, { useState } from 'react'
import BookingService from './services/Booking'
import { Switch } from 'antd'
import { format } from 'date-fns'

const VarausEdit = ({setMuokkaustila, muokattavaVaraus ,reload, reloadNow, setIsPositive, setShowMessage, setMessage}) => {
    
    const [newBookingId] = useState(muokattavaVaraus.bookingId)
    const [newCustomerId, setNewCustomerId] = useState(muokattavaVaraus.customerId)
    const [newRentStart, setNewRentStart] = useState(muokattavaVaraus.startDay)
    const [newRentEnd, setNewRentEnd] = useState(muokattavaVaraus.endDay)
    const [newPersons, setNewPersons] = useState(muokattavaVaraus.persons)
    const [newGasgrill, setNewGasgrill] = useState(muokattavaVaraus.gasGrill)
    const [newTableChairs, setNewTableChairs] = useState(muokattavaVaraus.tableChairs)
    const [newCampChairs, setNewCampChairs] = useState(muokattavaVaraus.campingChairs)
    const [newScooter, setNewScooter] = useState(muokattavaVaraus.electricScooter)
    const [newGasRep, setNewGasRep] = useState(muokattavaVaraus.gasReplacement)
    const [newLongW, setNewLongW] = useState(muokattavaVaraus.longWeekend)
    const [newDelivery, setNewDelivery] = useState(muokattavaVaraus.delivery)
    const [newWcWaterEmpt, setNewWcWaterEmpt] = useState(muokattavaVaraus.wcWaterTankEmpty)
    const [newCleaning, setNewCleaning] = useState(muokattavaVaraus.cleaning)

    const Grill = (newGasgrill) =>{
        if(newGasgrill === true){
            setNewGasgrill(true)
        }
        else{
            setNewGasgrill(false)
        }
    }

    const Table = (newTableChairs) =>{
        if(newTableChairs === true){
            setNewTableChairs(true)
        }
        else{
            setNewTableChairs(false)
        }
    }

    const CampingChairs = (newCampChairs) => {
        if(newCampChairs === true){
            setNewCampChairs(true)
        }
        else{
            setNewCampChairs(false)
        }
    }

    const EScooter = (newScooter) => {
        if(newScooter === true){
            setNewScooter(true)
        }
        else{
            setNewScooter(false)
        }
    }

    const GasReplacement = (newGasRep) => {
        if(newGasRep === true){
            setNewGasRep(true)
        }
        else{
            setNewGasRep(false)
        }
    }

    const HomeDelivery = (newDelivery) => {
        if(newDelivery === true){
            setNewDelivery(true)
        }
        else{
            setNewDelivery(false)
        }
    }

    const LongWeekend = (newLongW) => {
        if(newLongW === true){
            setNewLongW(true)
        }
        else{
            setNewLongW(false)
        }
    }

    const Cleaning = (newCleaningWc) =>{
        if(newCleaningWc === true){
            setNewCleaning(true)
        }
        else{
            setNewCleaning(false)
        }
    }

    const WcAndWaterTank = (newWcWaterEmpt) => {
        if(newWcWaterEmpt === true){
            setNewWcWaterEmpt(true)
        }
        else{
            setNewWcWaterEmpt(false)
        }
    }


    //Input kentän tyhjennys
    const resetFields = () => {
        setNewCustomerId(muokattavaVaraus.customerId)
        setNewRentStart(muokattavaVaraus.startDay)
        setNewRentEnd(muokattavaVaraus.endDay)
        setNewPersons(muokattavaVaraus.persons)
        setNewGasgrill(muokattavaVaraus.gasGrill)
        setNewTableChairs(muokattavaVaraus.tableChairs)
        setNewCampChairs(muokattavaVaraus.campingChairs)
        setNewScooter(muokattavaVaraus.electricScooter)
        setNewGasRep(muokattavaVaraus.gasReplacement)
        setNewLongW(muokattavaVaraus.longWeekend)
        setNewDelivery(muokattavaVaraus.delivery)
        setNewCleaning(muokattavaVaraus.cleaningToiletEmpty)
        setNewWcWaterEmpt(muokattavaVaraus.wcWaterTankEmpty)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        var newBooking = {
            bookingId: newBookingId,
            customerId: newCustomerId,
            startDay: newRentStart,
            endDay: newRentEnd,
            persons: newPersons,
            gasGrill: newGasgrill,
            tableChairs: newTableChairs,
            campingChairs: newCampChairs,
            electricScooter: newScooter,
            longWeekend: newLongW,
            delivery: newDelivery,
            gasReplacement: newGasRep,
            cleaning: newCleaning,
            wcWaterTankEmpty: newWcWaterEmpt
        }

        BookingService.update(newBooking)
        .then(response => {
            if(response.status === 200){
                setMessage("Muokattu varausta: " + format(new Date(newBooking.startDay), 'dd.MM.yyyy') + ' - ' + format(new Date(newBooking.endDay), 'dd.MM.yyyy'))
                setIsPositive(true)     //näyttää vihreän ilmoitustekstin
                setShowMessage(true)    //näyttää ilmoituksen

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)    //näyttää ilmoituksen 5sek.

                reloadNow(!reload)  //Päivitä käyttöliittymän
                setMuokkaustila(false)
            }
        })
        .catch(error => {
            setMessage("Tarkista päivämäärät, min 2pv!")
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 8000)
        })       
    }

    return(
        <div className='editAsVar'>
            <h4>Varauksen muokkaus</h4>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Varauksen ID:</label>
                    <br></br>
                    <input type="text" placeholder='Varauksen ID' value={newBookingId} disabled />
                </div>
                <div>
                    <label>Asiakkaan ID</label>
                    <br></br>
                    <input type='number' value={newCustomerId} onChange={({ target }) => setNewCustomerId(target.value)} required/>
                </div>

                <div>
                    <label>Nouto pvm </label>
                    <br></br>
                    <input className='addVarausPvm' type='datetime-local' value={newRentStart} onChange={({ target }) => setNewRentStart(target.value)}/>
                </div>

                <div>
                    <label>Palautus pvm</label>
                    <br></br>
                    <input className='addVarausPvm' type='datetime-local' placeholder='Palautus pvm' value={newRentEnd} onChange={({ target }) => setNewRentEnd(target.value)}/>
                </div>

                <div>
                    <label>Henkilömäärä</label>
                    <br></br>
                    <input type='number' value={newPersons} onChange={({ target }) => setNewPersons(target.value)} required/>
                </div>

                <div>
                    <label className='varauslb'>Kaasugrilli: </label>
                    <Switch onClick={Grill}/>
                    {newGasgrill ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Pöytä & tuolit: </label>
                    <Switch onClick={Table}/>
                    {newTableChairs ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Retkituolit: </label>
                    <Switch onClick={CampingChairs}/>
                    {newCampChairs ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Sähköpotkulauta: </label>
                    <Switch onClick={EScooter}/>
                    {newScooter ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Kaasupullon vaihto palaut. : </label>
                    <Switch onClick={GasReplacement}/>
                    {newGasRep ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Pidenetty vkl: </label>
                    <Switch onClick={LongWeekend}/>
                    {newLongW ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Toimitus: </label>
                    <Switch onClick={HomeDelivery}/>
                    {newDelivery ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Loppusiivous: </label>
                    <Switch onClick={Cleaning}/>
                    {newCleaning ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Wc ja vesisäiliöin tyhjennys: </label>
                    <Switch onClick={WcAndWaterTank}/>
                    {newWcWaterEmpt ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <br></br>
                <input className="btn btn-outline-success btn-sm" type='submit' value='Tallenna' />
                <input className="btn btn-outline-warning btn-sm" type='button' value='Tyhjennä' onClick={resetFields}/>
                <input className="btn btn-outline-dark btn-sm" type='button' value='Takaisin' onClick={() => setMuokkaustila(false)}/>
         
            </form>           
        </div>
    )
}

export default VarausEdit