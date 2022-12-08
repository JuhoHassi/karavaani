import './App.css'
import React, {useState, useEffect} from 'react'
import BookingService from './services/Booking'
import VarausAdd from './VarausAdd'

import { BsPen, BsTrash } from "react-icons/bs"

const Varaukset = ({setIsPositive, setShowMessage, setMessage}) => {
    //State 
    const [bookings, setBookings] = useState([])
    const [lisäystila, setLisäystila] = useState(false)
    const [reload, reloadNow] = useState(false) //Käyttöliitymän päivitys
    //const [muokkaustila, setMuokkaustila] = useState(false)
    //const [muokattavaAsiakas, setMuokattavaAsiakas] = useState(false)


    // Haetaan asiakkaat
    useEffect(() =>{
        BookingService.getAll()
        .then(data =>{
            setBookings(data)
        })
    }, [reload, lisäystila])    // muokkaustila



    // Asiakkaan poisto
    // const deleteAsiakas = (customer) => {
    //     let vastaus = window.confirm(`Poistetaanko asiakas ${customer.fistName} ${customer.lastName}?`)
    //     if(vastaus === true){
    //         CustomerService.remove(customer.customerId)
    //         .then(res => {
    //             if(res.status === 200){
    //                 setMessage(`Asiakas ${customer.fistName} ${customer.lastName} on nyt poistettu.`)
    //                 setIsPositive(true)
    //                 setShowMessage(true)
    //                 //window.scrollBy(0, -10000) //Scrollataan ylös jotta nähdään alert viesti

    //                 setTimeout(() =>{
    //                     setShowMessage(false)
    //                 }, 5000)
    //                 reloadNow(!reload)
    //             }
    //         })
    //         .catch(error => {
    //             setMessage("Error")
    //             setIsPositive(false)
    //             setShowMessage(true)
    //             //window.scrollBy(0, -10000)

    //             setTimeout(() =>{
    //                 setShowMessage(false)
    //             }, 8000)
    //         })
    //     }
    //     // Jos haluat perua poiston
    //     else{
    //         setMessage('Asiakkaan poisto on keskeytetty!')
    //         setIsPositive(true)
    //         setShowMessage(true)
    //         //window.scrollBy(0, -10000)

    //         setTimeout(() =>{
    //             setShowMessage(false)
    //         }, 5000)
    //     }
    // }

    // Asiakkaan muokkaus
    // const editAsiakas = (customer) =>{
    //     setMuokattavaAsiakas(customer)
    //     setMuokkaustila(true)
    // }

    

    return(
        <div className='varauksetTable'>
            <h2><nobr className="asiakVar">VARAUKSET</nobr>
            {!lisäystila && <button className='addVarausBtn'onClick={() => setLisäystila(true)} >Lisää uusi</button>}
            {lisäystila && <VarausAdd setLisäystila={setLisäystila} reload={reload} reloadNow={reloadNow}
                setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />}
            </h2>

            {!lisäystila && <div className='varauksetList'>
            <table>
                <thead>
                    <tr>
                        <th>VarauksenID</th>
                        <th>AsiakkaanID</th>
                        <th>Nouto </th>
                        <th>Palautus</th>
                        <th>Henkilömäärä</th>
                        <th>Kaasugrilli</th>
                        <th>Pöytä ja tuolit</th>
                        <th>Loppusiivous ja WC tyhjennys</th>
                    </tr>
                </thead>
                <tbody>
                    { bookings && bookings.map(b =>
                    <tr key={b.bookingId} className="trVaraukset">
                        <td>{b.bookingId}</td>
                        <td>{b.customerId}</td>
                        <td>{b.startDay}</td>
                        <td>{b.endDay}</td>
                        <td>{b.persons}</td>
                        <td>{b.gasGrill.toString()}</td>
                        <td>{b.tableChairs.toString()}</td>
                        <td>{b.cleaningToiletEmpty.toString()}</td>

                        <button className='varauksetEdit'><BsPen/></button>
                        <button className='varauksetDelete'><BsTrash/></button> 
                    </tr>
                    )}
                </tbody>
            </table>
            </div>}
                      
        </div>
    )
}

export default Varaukset