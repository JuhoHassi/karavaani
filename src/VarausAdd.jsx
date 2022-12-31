import './App.css'
import React, { useState } from 'react'
import BookingService from './services/Booking'
import { Switch } from 'antd'

const VarausAdd = ({setLisäystila, reload, reloadNow, setIsPositive, setShowMessage, setMessage}) => {
    const [newCustomerId, setNewCustomerId] = useState('')
    const [newRentStart, setNewRentStart] = useState('')
    const [newRentEnd, setNewRentEnd] = useState('')
    const [newPersons, setNewPersons] = useState('')
    const [newGasgrill, setNewGasgrill] = useState(false)
    const [newTableChairs, setNewTableChairs] = useState(false)
    const [newCleaningWc, setNewCleaningWc] = useState(false)


    const Grill = () => {
        newGasgrill ? setNewGasgrill(false) : setNewGasgrill(true)
        console.log(newGasgrill, "value")
    }

    const TableChairs = () => {
        newTableChairs ? setNewTableChairs(false) : setNewTableChairs(true)
        console.log(newTableChairs, "value")
    }

    const Cleaning = () => {
        newCleaningWc ? setNewCleaningWc(false) : setNewCleaningWc(true)
        console.log(newCleaningWc, "value")
    }


    //Input kentän tyhjennys
    const emptyFields = () => {
        setNewCustomerId('')
        setNewRentStart('')
        setNewRentEnd('')
        setNewPersons('')
        setNewGasgrill(false)
        setNewTableChairs(false)
        setNewCleaningWc(false)
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
            cleaningToiletEmpty: newCleaningWc
        }
        //console.log(newBook)

        BookingService.create(newBook)
        .then(response => {
            if(response.status === 200){
                setMessage("Lisätty uusi varaus ajalle: " + newBook.startDay +' - '+ newBook.endDay)
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
            setMessage("Error, tarkista päivämäärät!")  //Pitää olla response.data - pelkkään error ei riitä, backendistä tarvitaan vastaus!
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
                    <input className='addPvm' type='datetime-local' placeholder='Nouto pvm' value={newRentStart} onChange={({ target }) => setNewRentStart(target.value)}/>
                </div>

                <div>
                    <label>Palautus pvm:</label>
                    <br></br>
                    <input className='addPvm' type='datetime-local' placeholder='Palautus pvm' value={newRentEnd} onChange={({ target }) => setNewRentEnd(target.value)}/>
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
                    <label className='varauslb'>Loppusiivous & wc tyhjennys: </label>
                    <Switch onClick={Cleaning}/>
                    {newCleaningWc ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <br></br>
                <input className="btn btn-outline-success btn-sm" type='submit' value='Tallenna' />
                <input className="btn btn-outline-warning btn-sm" type='button' value='Tyhjentää' onClick={emptyFields}/>
                <input className="btn btn-outline-dark btn-sm" type='button' value='Takaisin' onClick={() => setLisäystila(false)}/>
         
            </form>           
        </div>
    )
}

export default VarausAdd