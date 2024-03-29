import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerService from './services/Customer'
import AsiakasAdd from './AsiakasAdd'
import AsiakasEdit from './AsiakasEdit'
import { format } from 'date-fns'

import { BsPen, BsTrash } from "react-icons/bs"

const Asiakkaat = ({setIsPositive, setShowMessage, setMessage}) => {
    //State 
    const [customers, setCustomers] = useState([])
    const [lisäystila, setLisäystila] = useState(false)
    const [reload, reloadNow] = useState(false) //Käyttöliitymän päivitys
    const [muokkaustila, setMuokkaustila] = useState(false)
    const [muokattavaAsiakas, setMuokattavaAsiakas] = useState(false)


    // Haetaan asiakkaat
    useEffect(() => {
        const token = localStorage.getItem('token') //Otetaan mukaan token (backend)
        CustomerService
        .setToken(token)

        CustomerService.getAll()
        .then(data => {
            setCustomers(data)
        })
    }, [lisäystila, muokkaustila, reload])


    // Asiakkaan poisto
    const deleteAsiakas = (customer) => {
        let vastaus = window.confirm(`Poistetaanko asiakas ${customer.firstName} ${customer.lastName}?`)
        if(vastaus === true){
            CustomerService.remove(customer.customerId)
            .then(res => {
                if(res.status === 200){
                    setMessage(`Asiakas ${customer.firstName} ${customer.lastName} on nyt poistettu.`)
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
                setMessage("Error, tarkista onko asiakkaalla varauksia.")
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
            setMessage('Asiakkaan poisto on keskeytetty!')
            setIsPositive(true)
            setShowMessage(true)
            window.scrollBy(0, -10000)

            setTimeout(() =>{
                setShowMessage(false)
            }, 5000)
        }
    }

    // Asiakkaan muokkaus
    const editAsiakas = (customer) =>{
        setMuokattavaAsiakas(customer)
        setMuokkaustila(true)
    }

    

    return(
        <div className='divBack'>
            <h2><nobr className="titleName">ASIAKKAAT</nobr>
            {!lisäystila && !muokkaustila && <button className='addBtn' onClick={() => setLisäystila(true)} >Lisää uusi</button>}
            {lisäystila && <AsiakasAdd setLisäystila={setLisäystila} reload={reload} reloadNow={reloadNow} setIsPositive={setIsPositive}
                setMessage={setMessage} setShowMessage={setShowMessage} />}
            </h2>

            {muokkaustila && <AsiakasEdit setMuokkaustila={setMuokkaustila} muokattavaAsiakas={muokattavaAsiakas} setIsPositive={setIsPositive}
            setMessage={setMessage} setShowMessage={setShowMessage} reload={reload} reloadNow={reloadNow} />}

            

            {!lisäystila && !muokkaustila && <div className='asiakkaatList'>
            <table>
                <thead>
                    <tr>
                        <th>AsiakasID</th>
                        <th>Yritys</th>
                        <th>Etunimi</th>
                        <th>Sukunimi</th>
                        <th>Syntymäaika</th>
                        <th>Osoite</th>
                        <th>Postinumero</th>
                        <th>Kaupunki</th>
                        <th>Maa</th>
                        <th>Sähköposti</th>
                        <th>Puhelin</th>
                        <th>Viesti</th>
                        <th>Ehdot</th>
                    </tr>
                </thead>
                <tbody>
                    { customers && customers.map(c =>
                    <tr key={c.customerId} className="trAsiakkaat">
                        <td>{c.customerId}</td>
                        <td>{c.companyName}</td>
                        <td>{c.firstName}</td>
                        <td>{c.lastName}</td>
                        <td>{format(new Date(c.birthDay), 'dd.MM.yyyy')}</td>
                        <td>{c.address}</td>
                        <td>{c.postalcode}</td>
                        <td>{c.city}</td>
                        <td>{c.country}</td>
                        <td>{c.email}</td>
                        <td>{c.phone}</td>
                        <td>{c.message}</td>
                        <td>{c.terms.toString()}</td>

                        <button className='asvarEditDelete' onClick={() => editAsiakas(c)}><BsPen/></button>
                        <button className='asvarEditDelete' onClick={() => deleteAsiakas(c)}><BsTrash/></button> 
                    </tr>
                    )}
                </tbody>
            </table>
            </div>}
                      
        </div>
    )
}

export default Asiakkaat