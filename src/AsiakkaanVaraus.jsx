import './App.css'
import React, {useState} from 'react'
import { format } from 'date-fns'
import BackToTopBtn from './BackToTopBtn'


const AsiakkaanVaraus = ({customerBook}) => {
    const[show, setShow] = useState(false)


    return(
        <div>
            <h4 onClick={() => setShow(!show)} className='asVarShow'> {format(new Date(customerBook.rentingStart), 'dd.MM.yyyy HH:mm')} - {format(new Date(customerBook.rentingEnd), 'dd.MM.yyyy HH:mm')} {customerBook.firstName} {customerBook.lastName}</h4>
            
            {show && <div className='asVarList'>
                <table>
                        <thead>
                            <tr>
                                <th>Osoite</th>
                                <th>Postinumero</th>
                                <th>Kaupunki</th>
                                <th>Maa</th>
                                <th>Sähköposti</th>
                                <th>Puhelin</th>
                                <th>Henkilömäärä</th>
                                <th>Kaasugrilli</th>
                                <th>Pöytä & tuolit</th>
                                <th>Retkituolit</th>
                                <th>Sähköpotkulauta</th>
                                <th>Kaasupullon vaihto palaut.</th>
                                <th>Pidenetty vkl</th>
                                <th>Toimitus</th>
                                <th>Loppusiivous</th>
                                <th>Wc & vesisäiliön tyhjennys</th>
                                <th>Viesti</th>
                                <th>Ehdot</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{customerBook.address}</td>
                                <td>{customerBook.postalCode}</td>
                                <td>{customerBook.city}</td>
                                <td>{customerBook.country}</td>
                                <td>{customerBook.email}</td>
                                <td>{customerBook.phone}</td>
                                <td>{customerBook.people}</td>
                                <td>{String(customerBook.gasGrill)}</td>
                                <td>{String(customerBook.tableAndChairs)}</td>
                                <td>{String(customerBook.campChairs)}</td>
                                <td>{String(customerBook.eScooter)}</td>
                                <td>{String(customerBook.gasRep)}</td>
                                <td>{String(customerBook.lWeekend)}</td>
                                <td>{String(customerBook.homeDelivery)}</td>
                                <td>{String(customerBook.cleaning)}</td>
                                <td>{String(customerBook.wcAndWaterTankEmpty)}</td>
                                <td>{customerBook.message}</td>
                                <td>{String(customerBook.terms)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>}
            <BackToTopBtn/>
        </div>
    )
}

export default AsiakkaanVaraus