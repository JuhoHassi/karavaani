import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerService from './services/Customer'
import AsiakasAdd from './AsiakasAdd'

import { BsPen, BsTrash } from "react-icons/bs"

const Asiakkaat = ({setIsPositive, setShowMessage, setMessage}) => {
    //State 
    const [customers, setCustomers] = useState([])
    const [lisäystila, setLisäystila] = useState(false)
    const [reload, reloadNow] = useState(false) //Käyttöliitymän päivitys



    useEffect(() => {
        CustomerService.getAll()
        .then(data => {
            setCustomers(data)
        })
    }, [lisäystila, reload])
    

    return(
        <div className='asiakkaatTable'>
            <h2><nobr className="asiakVar">ASIAKKAAT</nobr>
            {!lisäystila && <button className='addAsiakasBtn' onClick={() => setLisäystila(true)} >Lisää uusi</button>}
            {lisäystila && <AsiakasAdd setLisäystila={setLisäystila} reload={reload} reloadNow={reloadNow} setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />}
            </h2>

            

            {!lisäystila && <div className='asiakkaatList'>
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
                        <td>{c.fistName}</td>
                        <td>{c.lastName}</td>
                        <td>{c.birthDay}</td>
                        <td>{c.address}</td>
                        <td>{c.postalcode}</td>
                        <td>{c.city}</td>
                        <td>{c.country}</td>
                        <td>{c.email}</td>
                        <td>{c.phone}</td>
                        <td>{c.message}</td>
                        <td>{c.terms.toString()}</td>

                        <button className='asiakkaatEdit'><BsPen/></button>
                        <button className='asiakkaatDelete'><BsTrash/></button> 
                    </tr>
                    )}
                </tbody>
            </table>
            </div>}
                      
        </div>
    )
}

export default Asiakkaat