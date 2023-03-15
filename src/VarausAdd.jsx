import './App.css'
import React, { useState } from 'react'
import BookingService from './services/Booking'
import { Switch } from 'antd'
import { format } from 'date-fns'

const VarausAdd = ({setLisäystila, reload, reloadNow, setIsPositive, setShowMessage, setMessage}) => {
    const [newCustomerId, setNewCustomerId] = useState('')
    const [newRentStart, setNewRentStart] = useState('')
    const [newRentEnd, setNewRentEnd] = useState('')
    const [newPersons, setNewPersons] = useState('')
    const [newGasgrill, setNewGasgrill] = useState(false)
    const [newTableChairs, setNewTableChairs] = useState(false)
    const [newCampChairs, setNewCampChairs] = useState(false)
    const [newScooter, setNewScooter] = useState(false)
    const [newGasRep, setNewGasRep] = useState(false)
    const [newLongW, setNewLongW] = useState(false)
    const [newDelivery, setNewDelivery] = useState(false)
    const [newCleaning, setNewCleaning] = useState(false)
    const [newWcWaterEmpt, setNewWcWaterEmpt] = useState(false)


    const Grill = () => {
        newGasgrill ? setNewGasgrill(false) : setNewGasgrill(true)
        console.log(newGasgrill, "value")
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


    //Input kentän tyhjennys
    const emptyFields = () => {
        setNewCustomerId('')
        setNewRentStart('')
        setNewRentEnd('')
        setNewPersons('')
        setNewGasgrill(false)
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
        //console.log(newBook)

        BookingService.create(newBook)
        .then(response => {
            if(response.status === 200){
                setMessage("Lisätty uusi varaus ajalle: " + format(new Date(newBook.startDay), 'dd.MM.yyyy') +' - '+ format(new Date(newBook.endDay), 'dd.MM.yyyy'))
                setIsPositive(true)     //näyttää vihreän ilmoitustekstin
                setShowMessage(true)    //näyttää ilmoituksen

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)    //näyttää ilmoituksen 5sek.

                reloadNow(!reload)  //Päivitä käyttöliittymän
                setLisäystila(false)
            }
        })
        .catch(error => {
            setMessage("Tarkista päivämäärät, min 2pv!")  //Pitää olla response.data - pelkkään error ei riitä, backendistä tarvitaan vastaus!
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 8000)
        })       
    }

    return(
        <div className='addAsVar'>
            <h4>Liää uusi varaus</h4>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type='number' placeholder='Asiakkaan ID' value={newCustomerId} onChange={({ target }) => setNewCustomerId(target.value)} required/>
                </div>

                <div>
                    <label>Nouto pvm:</label>
                    <br></br>
                    <input className='addVarausPvm' type='datetime-local' placeholder='Nouto pvm' value={newRentStart} onChange={({ target }) => setNewRentStart(target.value)}/>
                </div>

                <div>
                    <label>Palautus pvm:</label>
                    <br></br>
                    <input className='addVarausPvm' type='datetime-local' placeholder='Palautus pvm' value={newRentEnd} onChange={({ target }) => setNewRentEnd(target.value)}/>
                </div>

                <div>
                    <input type='number' placeholder='Henkilömäärä' value={newPersons} onChange={({ target }) => setNewPersons(target.value)} required/>
                </div>

                <div>
                    <label className='varauslb'>Kaasugrilli: </label>
                    <Switch onClick={Grill}/>
                    {newGasgrill ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <div>
                    <label className='varauslb'>Pöytä & tuolit: </label>
                    <Switch onClick={TableChairs}/>
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
                <input className="btn btn-outline-warning btn-sm" type='button' value='Tyhjennä' onClick={emptyFields}/>
                <input className="btn btn-outline-dark btn-sm" type='button' value='Takaisin' onClick={() => setLisäystila(false)}/>
         
            </form>           
        </div>
    )
}

export default VarausAdd