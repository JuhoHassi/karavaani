import './App.css'
import React, { useState } from 'react'
import CustomerService from './services/Customer'
import { Switch } from 'antd'

const AsiakasEdit = ({setMuokkaustila, muokattavaAsiakas ,reload, reloadNow, setIsPositive, setShowMessage, setMessage}) => {
    
    const [newCustomerId] = useState(muokattavaAsiakas.customerId)
    const [newCompanyName, setNewCompanyName] = useState(muokattavaAsiakas.companyName)
    const [newFirstName, setNewFirstName] = useState(muokattavaAsiakas.firstName)
    const [newLastName, setNewLastName] = useState(muokattavaAsiakas.lastName)
    const [newBirthday, setNewBirthday] = useState(muokattavaAsiakas.birthDay)
    const [newAddress, setNewAddress] = useState(muokattavaAsiakas.address)
    const [newPostalcode, setNewPostalcode] = useState(muokattavaAsiakas.postalcode)
    const [newCity, setNewCity] = useState(muokattavaAsiakas.city)
    const [newCountry, setNewCountry] = useState(muokattavaAsiakas.country)
    const [newEmail, setNewEmail] = useState(muokattavaAsiakas.email)
    const [newPhone, setNewPhone] = useState(muokattavaAsiakas.phone)
    const [newMessage, setNewMessage] = useState(muokattavaAsiakas.message)
    const [newTerms, setNewTerms] = useState(muokattavaAsiakas.terms)

    const Terms = (newTerms) => {
        if(newTerms === true){
            setNewTerms(true)
        }
        else{
            setNewTerms(false)
        }
    }


    //Input kentän tyhjennys
    const resetFields = () => {
        setNewCompanyName(muokattavaAsiakas.companyName)
        setNewFirstName(muokattavaAsiakas.firstName)
        setNewLastName(muokattavaAsiakas.lastName)
        setNewBirthday(muokattavaAsiakas.birthDay)
        setNewAddress(muokattavaAsiakas.address)
        setNewPostalcode(muokattavaAsiakas.postalCode)
        setNewCity(muokattavaAsiakas.city)
        setNewCountry(muokattavaAsiakas.country)
        setNewEmail(muokattavaAsiakas.email)
        setNewPhone(muokattavaAsiakas.phone)
        setNewMessage(muokattavaAsiakas.message)
        setNewTerms(muokattavaAsiakas.terms)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        var newCustomer = {
            customerId: newCustomerId,
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

        CustomerService.update(newCustomer)
        .then(response => {
            if(response.status === 200){
                setMessage("Muokattu asiakasta: " + newCustomer.firstName + ' ' +newCustomer.lastName)
                setIsPositive(true)     //näyttää vihreän ilmoitustekstin
                setShowMessage(true)    //näyttää ilmoituksen

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)    //näyttää ilmoituksen 5sek.

                reloadNow(!reload)  //Päivitä käyttöliittymän
                setMuokkaustila(false)
            }
        })
        .catch(error => {
            setMessage("Error")
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 8000)
        })       
    }

    return(
        <div className='editAsVar'>
            <h4>Asiakkaan muokkaus</h4>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>AsiakasID:</label>
                    <br></br>
                    <input type="text" placeholder='AsiakasID' value={newCustomerId} disabled />
                </div>
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
                    <label>Syntymäpäivä:</label>
                    <br></br>
                    <input className='editPvm' type='date' placeholder='Syntymäpäivä' value={newBirthday} onChange={({ target }) => setNewBirthday(target.value)}/>
                </div>

                <div>
                    <input type='text' placeholder='Osoite' value={newAddress} onChange={({ target }) => setNewAddress(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Postinumero' value={newPostalcode} onChange={({ target }) => setNewPostalcode(target.value)}/>
                </div>

                <div>
                    <input type='text' placeholder='Kaupunki' value={newCity} onChange={({ target }) => setNewCity(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Maa' value={newCountry} onChange={({ target }) => setNewCountry(target.value)} required/>
                </div>

                <div>
                    <input type='email' placeholder='Sähköposti' value={newEmail} onChange={({ target }) => setNewEmail(target.value)}/>
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
                <input className="btn btn-outline-warning btn-sm" type='button' value='Tyhjennä' onClick={resetFields}/>
                <input className="btn btn-outline-dark btn-sm" type='button' value='Takaisin' onClick={() => setMuokkaustila(false)}/>
         
            </form>           
        </div>
    )
}

export default AsiakasEdit