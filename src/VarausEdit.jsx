import './App.css'
import React, { useState } from 'react'
import BookingService from './services/Booking'
import { Switch } from 'antd'

const VarausEdit = ({setMuokkaustila, muokattavaVaraus ,reload, reloadNow, setIsPositive, setShowMessage, setMessage}) => {
    
    const [newBookingId] = useState(muokattavaVaraus.bookingId)
    const [newCustomerId, setNewCustomerId] = useState(muokattavaVaraus.customerId)
    const [newRentStart, setNewRentStart] = useState(muokattavaVaraus.startDay)
    const [newRentEnd, setNewRentEnd] = useState(muokattavaVaraus.endDay)
    const [newPersons, setNewPersons] = useState(muokattavaVaraus.persons)
    const [newGasgrill, setNewGasgrill] = useState(muokattavaVaraus.gasGrill)
    const [newTableChairs, setNewTableChairs] = useState(muokattavaVaraus.tableChairs)
    const [newCleaningWc, setNewCleaningWc] = useState(muokattavaVaraus.cleaningToiletEmpty)

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

    const Cleaning = (newCleaningWc) =>{
        if(newCleaningWc === true){
            setNewCleaningWc(true)
        }
        else{
            setNewCleaningWc(false)
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
        setNewCleaningWc(muokattavaVaraus.cleaningToiletEmpty)
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
            cleaningToiletEmpty: newCleaningWc
        }

        BookingService.update(newBooking)
        .then(response => {
            if(response.status === 200){
                setMessage("Muokattu varausta: " + newBooking.startDay + ' - ' +newBooking.endDay)
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
            setMessage("Error, tarkista päivämäärät!")
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 8000)
        })       
    }

    return(
        <div className='editAsiakas'>
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
                    <input className='addPvm' type='datetime-local' value={newRentStart} onChange={({ target }) => setNewRentStart(target.value)}/>
                </div>

                <div>
                    <label>Palautus pvm</label>
                    <br></br>
                    <input className='addPvm' type='datetime-local' placeholder='Palautus pvm' value={newRentEnd} onChange={({ target }) => setNewRentEnd(target.value)}/>
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
                    <label className='varauslb'>Loppusiivous & wc tyhjennys: </label>
                    <Switch onClick={Cleaning}/>
                    {newCleaningWc ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <br></br>
                <input className="btn btn-outline-success btn-sm" type='submit' value='Tallenna' />
                <input className="btn btn-outline-warning btn-sm" type='button' value='Tyhjentää' onClick={resetFields}/>
                <input className="btn btn-outline-dark btn-sm" type='button' value='Takaisin' onClick={() => setMuokkaustila(false)}/>
         
            </form>           
        </div>
    )
}

export default VarausEdit