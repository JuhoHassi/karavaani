import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerBookingService from './services/CustomerBooking'
import AsiakkaanVaraus from './AsiakkaanVaraus'
import Asiakkaat from './Asiakkaat'



const AsiakkaanVaraukset = () => {
    const [customerBookings, setCustomerBookings] = useState([])
    const [customers, setCustomers] = useState(false)

    //const [reload, reloadNow] = useState(false)  //Käyttöliitymän päivitys

    useEffect(() => {
        CustomerBookingService.getAll()
        .then(data => {
            setCustomerBookings(data)   
        })

    }, [customers])  //backendin päivitys


    return(
        <div className='custBookDiv'>
            {!customers && <h3 className='asiakVar'>ASIAKKAAN VARAUKSET</h3>}
            {!customers && <button className='asiakkaatBtn' onClick={() => setCustomers(true)} >Asiakkaat</button>}
            {!customers && <button className='varauksetBtn'>Varaukset</button>}
            
            {!customers && customerBookings && customerBookings.map(c =>(
                <AsiakkaanVaraus key={c.customerId} customerBook={c}></AsiakkaanVaraus>
            ))}

            {customers && <Asiakkaat ></Asiakkaat>}



        </div>

    )
}

export default AsiakkaanVaraukset
