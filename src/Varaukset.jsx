import './App.css'
import React, {useState, useEffect} from 'react'
import BookingService from './services/Booking'
import VarausAdd from './VarausAdd'
import { format } from 'date-fns'

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
        const token = localStorage.getItem('token')
        BookingService
        .setToken(token)

        BookingService.getAll()
        .then(data =>{
            setBookings(data)
        })
    }, [reload, lisäystila, muokkaustila])



    // Varauksen poisto
    const deleteVaraus = (booking) => {
        let vastaus = window.confirm(`Poistetaanko varaus aikaväliltä: ${format(new Date(booking.startDay), 'dd.MM.yyyy')} - ${format(new Date(booking.endDay), 'dd.MM.yyyy')}?`)
        if(vastaus === true){
            BookingService.remove(booking.bookingId)
            .then(res => {
                if(res.status === 200){
                    setMessage(`Varaus aikaväliltä: ${format(new Date(booking.startDay), 'dd.MM.yyyy')} - ${format(new Date(booking.endDay), 'dd.MM.yyyy')} on nyt poistettu.`)
                    setIsPositive(true)
                    setShowMessage(true)
                    window.scrollBy(0, -10000) //Scrollataan ylös jotta nähdään alert viesti

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
                window.scrollBy(0, -10000)

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
            window.scrollBy(0, -10000)

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
        <div className='divBack'>
            <h2><nobr className="titleName">VARAUKSET</nobr>
            {!lisäystila && !muokkaustila && <button className='addBtn'onClick={() => setLisäystila(true)} >Lisää uusi</button>}
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
                        <th>Retkituolit</th>
                        <th>Sähköpotkulauta</th>
                        <th>Kaasupullon vaihto palaut.</th>
                        <th>Pidenetty vkl</th>
                        <th>Toimitus</th>
                        <th>Loppusiivous</th>
                        <th>Wc ja h.vesisäiliöin tyhjennys</th>
                    </tr>
                </thead>
                <tbody>
                    { bookings && bookings.map(b =>
                    <tr key={b.bookingId} className="trVaraukset">
                        <td>{b.bookingId}</td>
                        <td>{b.customerId}</td>
                        <td>{format(new Date(b.startDay), 'dd.MM.yyyy HH:mm')}</td>
                        <td>{format(new Date(b.endDay), 'dd.MM.yyyy HH:mm')}</td>
                        <td>{b.persons}</td>
                        <td>{String(b.gasGrill)}</td>
                        <td>{String(b.tableChairs)}</td>
                        <td>{String(b.campingChairs)}</td>
                        <td>{String(b.electricScooter)}</td>
                        <td>{String(b.gasReplacement)}</td>
                        <td>{String(b.longWeekend)}</td>
                        <td>{String(b.delivery)}</td>
                        <td>{String(b.cleaning)}</td>
                        <td>{String(b.wcWaterTankEmpty)}</td>

                        <button className='asvarEditDelete' onClick={() => editVaraus(b)}><BsPen/></button>
                        <button className='asvarEditDelete' onClick={() => deleteVaraus(b)}><BsTrash/></button> 
                    </tr>
                    )}
                </tbody>
            </table>
            </div>}
                      
        </div>
    )
}

export default Varaukset