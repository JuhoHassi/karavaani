import './App.css'
import React, {useState, useEffect} from 'react'
import BookingService from './services/Booking'
import VarausAdd from './VarausAdd'

import { BsPen, BsTrash } from "react-icons/bs"
import VarausEdit from './VarausEdit'

const Varaukset = ({setIsPositive, setShowMessage, setMessage}) => {
    //State 
    const [bookings, setBookings] = useState([])
    const [lisäystila, setLisäystila] = useState(false)
    const [reload, reloadNow] = useState(false) //Käyttöliitymän päivitys
    const [muokkaustila, setMuokkaustila] = useState(false)
    const [muokattavaVaraus, setMuokattavaVaraus] = useState(false)


    // Haetaan varaukset
    useEffect(() =>{
        BookingService.getAll()
        .then(data =>{
            setBookings(data)
        })
    }, [reload, lisäystila, muokkaustila])



    // Varauksen poisto
    const deleteVaraus = (booking) => {
        let vastaus = window.confirm(`Poistetaanko varaus aikaväliltä: ${booking.startDay} - ${booking.endDay}?`)
        if(vastaus === true){
            BookingService.remove(booking.bookingId)
            .then(res => {
                if(res.status === 200){
                    setMessage(`Varaus aikaväliltä: ${booking.startDay} - ${booking.endDay} on nyt poistettu.`)
                    setIsPositive(true)
                    setShowMessage(true)
                    //window.scrollBy(0, -10000) //Scrollataan ylös jotta nähdään alert viesti

                    setTimeout(() =>{
                        setShowMessage(false)
                    }, 5000)
                    reloadNow(!reload)
                }
            })
            .catch(error => {
                setMessage("Error")
                setIsPositive(false)
                setShowMessage(true)
                //window.scrollBy(0, -10000)

                setTimeout(() =>{
                    setShowMessage(false)
                }, 8000)
            })
        }
        // Jos haluat perua poiston
        else{
            setMessage('Varauksen poisto on keskeytetty!')
            setIsPositive(true)
            setShowMessage(true)
            //window.scrollBy(0, -10000)

            setTimeout(() =>{
                setShowMessage(false)
            }, 5000)
        }
    }

    // Varauksen muokkaus
    const editVaraus = (booking) =>{
        setMuokattavaVaraus(booking)
        setMuokkaustila(true)
    }

    

    return(
        <div className='varauksetTable'>
            <h2><nobr className="asiakVar">VARAUKSET</nobr>
            {!lisäystila && !muokkaustila && <button className='addVarausBtn'onClick={() => setLisäystila(true)} >Lisää uusi</button>}
            {lisäystila && <VarausAdd setLisäystila={setLisäystila} reload={reload} reloadNow={reloadNow}
                setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />}
            </h2>

            {muokkaustila && <VarausEdit setMuokkaustila={setMuokkaustila} muokattavaVaraus={muokattavaVaraus} setIsPositive={setIsPositive}
                setMessage={setMessage} setShowMessage={setShowMessage} reload={reload} reloadNow={reloadNow} />}

            {!lisäystila && !muokkaustila && <div className='varauksetList'>
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
                        <td>{String(b.gasGrill)}</td>
                        <td>{String(b.tableChairs)}</td>
                        <td>{String(b.cleaningToiletEmpty)}</td>

                        <button className='varauksetEdit' onClick={() => editVaraus(b)}><BsPen/></button>
                        <button className='varauksetDelete' onClick={() => deleteVaraus(b)}><BsTrash/></button> 
                    </tr>
                    )}
                </tbody>
            </table>
            </div>}
                      
        </div>
    )
}

export default Varaukset