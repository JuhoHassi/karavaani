import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerBookingService from './services/CustomerBooking'
import AsiakkaanVaraus from './AsiakkaanVaraus'



const AsiakkaanVaraukset = () => {
    const [customerBookings, setCustomerBookings] = useState([])

    //const [reload, reloadNow] = useState(false)  //Käyttöliitymän päivitys

    useEffect(() => {
        CustomerBookingService.getAll()
        .then(data => {
            setCustomerBookings(data)   
        })

    }, [])  //backendin päivitys

    return(
        <div className='custBookDiv'>
            <h3 className='asiakVar'>ASIAKKAAN VARAUKSET</h3>
            <button className='asiakkaatBtn'>Asiakkaat</button>
            <button className='varauksetBtn'>Varaukset</button>
            
            {customerBookings && customerBookings.map(c =>(
                <AsiakkaanVaraus key={c.customerId} customerBook={c}></AsiakkaanVaraus>
            ))}
        </div>

    )
}

export default AsiakkaanVaraukset
