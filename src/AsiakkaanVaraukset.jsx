import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerBookingService from './services/CustomerBooking'
import AsiakkaanVaraus from './AsiakkaanVaraus'
import Asiakkaat from './Asiakkaat'
import Varaukset from './Varaukset'


const AsiakkaanVaraukset = () => {
    const [customerBookings, setCustomerBookings] = useState([])
    const [customers, setCustomers] = useState(false)
    const [showAsiakkaat, setShowAsiakkaat] = useState(false)

    //const [reload, reloadNow] = useState(false)  //Käyttöliitymän päivitys

    useEffect(() => {
        const token = localStorage.getItem('token') //Otetaan mukaan token (backend)
        CustomerBookingService
        .setToken(token)

        CustomerBookingService.getAll()
        .then(data => {
            setCustomerBookings(data)   
        })

    }, [customers])  //backendin päivitys


    return(                                             // ! -tarkoittaa että sitä ei näytettäisi kun ollaan esim showAsiakkaat sivulla
        <div className='divBack'>
            {!customers && !showAsiakkaat && <h3 className='titleName'>ASIAKKAAN VARAUKSET</h3>}
            {!customers && !showAsiakkaat && <button className='asvarBtn' onClick={() => setCustomers(true)} >Asiakkaat</button>}
            {!customers && !showAsiakkaat && <button className='asvarBtn' onClick={() => setShowAsiakkaat(true)}>Varaukset</button>}
            
            {!showAsiakkaat && !customers && customerBookings && customerBookings.map(c =>(
                <AsiakkaanVaraus key={c.customerId} customerBook={c}></AsiakkaanVaraus>
            ))}

            {customers &&  <Asiakkaat ></Asiakkaat>}
            {showAsiakkaat && <Varaukset></Varaukset>}
        </div>

    )
}

export default AsiakkaanVaraukset
