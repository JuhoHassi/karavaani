import './App.css'
import React, { useState } from 'react'
import CustomerService from './services/Customer'
import { Switch } from 'antd'

const AsiakasAdd = ({setLisäystila, reload, reloadNow, setIsPositive, setShowMessage, setMessage}) => {
    const [newCompanyName, setNewCompanyName] = useState('')
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newBirthday, setNewBirthday] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newPostalcode, setNewPostalcode] = useState('')
    const [newCity, setNewCity] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [newTerms, setNewTerms] = useState('')

    const Terms = () => {
        newTerms ? setNewTerms(false) : setNewTerms(true)
        console.log(newTerms, "value")
    }


    //Input kentän tyhjennys
    const emptyFields = () => {
        setNewCompanyName('')
        setNewFirstName('')
        setNewLastName('')
        setNewBirthday('')
        setNewAddress('')
        setNewPostalcode('')
        setNewCity('')
        setNewCountry('')
        setNewEmail('')
        setNewPhone('')
        setNewMessage('')
        setNewTerms(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        var newCustomer = {
            companyName: newCompanyName,
            firstName: newFirstName,
            lastName: newLastName,
            birthDay: newBirthday,
            address: newAddress,
            postalCode: newPostalcode,
            city: newCity,
            country: newCountry,
            email: newEmail,
            phone: newPhone,
            message: newMessage,
            terms: newTerms
        }
        console.log(newCustomer)

        CustomerService.create(newCustomer)
        .then(response => {
            if(response.status === 200){
                setMessage("Lisätty uusi asiakas: " + newCustomer.firstName)
                setIsPositive(true)     //näyttää vihreän ilmoitustekstin
                setShowMessage(true)    //näyttää ilmoituksen

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)    //näyttää ilmoituksen 5sek.

                reloadNow(!reload)  //Päivitä käyttöliittymän
                setLisäystila(false)
            }
        })
        .catch(error => {
            setMessage("Tarkista vielä syntymäpäivä, hyväksyitkö ehdot?")
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 8000)
        })       
    }

    return(
        <div className='addAsVar'>
            <h4>Liää uusi asiakas</h4>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='Yritys' value={newCompanyName} onChange={({ target }) => setNewCompanyName(target.value)}/>
                </div>

                <div>
                    <input type='text' placeholder='Etunimi' value={newFirstName} onChange={({ target }) => setNewFirstName(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Sukunimi' value={newLastName} onChange={({ target }) => setNewLastName(target.value)} required/>
                </div>

                <div>
                    <label>Syntymäpäivä: </label>
                    <br></br>
                    <input type='date' className='addPvm' placeholder='Syntymäpäivä' value={newBirthday} onChange={({ target }) => setNewBirthday(target.value)}/>
                </div>

                <div>
                    <input type='text' placeholder='Osoite' value={newAddress} onChange={({ target }) => setNewAddress(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Postinumero' value={newPostalcode} onChange={({ target }) => setNewPostalcode(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Kaupunki' value={newCity} onChange={({ target }) => setNewCity(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Maa' value={newCountry} onChange={({ target }) => setNewCountry(target.value)} required/>
                </div>

                <div>
                    <input type='email' placeholder='Sähköposti' value={newEmail} onChange={({ target }) => setNewEmail(target.value)} required/>
                </div>

                <div>
                    <input type='phone' placeholder='Puhelin' value={newPhone} onChange={({ target }) => setNewPhone(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Viesti' value={newMessage} onChange={({ target }) => setNewMessage(target.value)}/>
                </div>

                <div>
                    <label className='terms'>Hyväksyn ehdot: </label>
                    <Switch onClick={Terms}/>
                    {newTerms ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                </div>

                <br></br>
                <input className="btn btn-outline-success btn-sm" type='submit' value='Tallenna' />
                <input className="btn btn-outline-warning btn-sm" type='button' value='Tyhjennä' onClick={emptyFields}/>
                <input className="btn btn-outline-dark btn-sm" type='button' value='Takaisin' onClick={() => setLisäystila(false)}/>
         
            </form>           
        </div>
    )
}

export default AsiakasAdd