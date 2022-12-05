import './App.css'
import React, {useState} from 'react'


const AsiakkaanVaraus = ({customerBook}) => {
    const[show, setShow] = useState(false)


    return(
        <div className='asiDiv'>
            <h4 onClick={() => setShow(!show)} className='asVarShow'> {customerBook.rentingStart} - {customerBook.rentingEnd} {customerBook.firstName} {customerBook.lastName}</h4>
            
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
                                <th>Loppusiivous & Wc</th>
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
                                <td>{customerBook.gasGrill.toString()}</td>
                                <td>{customerBook.tableAndChairs.toString()}</td>
                                <td>{customerBook.cleaningAndWc.toString()}</td>
                                <td>{customerBook.message}</td>
                                <td>{customerBook.terms.toString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>}
        </div>
    )
}

export default AsiakkaanVaraus