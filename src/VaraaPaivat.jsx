import './App.css'
import React, { useState, useEffect } from 'react'
import CustomerBookingService from './services/CustomerBooking'
import BookingService from './services/Booking'
import CustomerService from './services/Customer'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'
import { Switch as Switch2 } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavLink from 'react-bootstrap/esm/NavLink'
import Vuokrausehdot from './Vuokrausehdot'

// Kalenterikomponentin dokumentaatio https://reactdatepicker.com/

const VaraaPaivat = ({ setMessage, setShowMessage, setIsPositive }) => {

    useEffect(() => {
        const token = localStorage.getItem('token') //Otetaan mukaan token (backend)
        CustomerBookingService
            .setToken(token)
        CustomerService
            .setToken(token)
        BookingService
            .setToken(token)

        CustomerBookingService.getAll() // Haetaan jo varatut päivät tietokannasta ja loopaan ja lukitaan ne kalenteriin
            .then(data => {
                data.forEach(element => {
                    let now = moment()
                    let fromDate = moment(element.rentingStart)
                    let toDate = moment(element.rentingEnd)

                    if (fromDate > now && toDate > now) {
                        while (fromDate <= toDate) {
                            let ld = fromDate.format('YYYY-MM-DD')
                            tempDates.push(new Date(ld))
                            fromDate = moment(fromDate).add(1, 'days');
                        }
                    }
                })
            })
    })
    let tempDates = []

    const [newEmail, setNewEmail] = useState('')
    const [newStart, setNewStart] = useState(new Date())
    const [newEnd, setNewEnd] = useState(new Date())
    const [newStartTime, setNewStartTime] = useState(new Date())
    const [newEndTime, setNewEndTime] = useState(new Date())
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newHeadCount, setNewHeadCount] = useState('')
    const [newBirthday, setNewBirthday] = useState('')

    const [newPhone, setNewPhone] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newPostalcode, setNewPostalcode] = useState('')
    const [newCity, setNewCity] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [newCompanyName, setNewCompanyName] = useState('')

    const [newTerms, setNewTerms] = useState(false)

    const Terms = () => {
        newTerms ? setNewTerms(false) : setNewTerms(true)
        console.log(newTerms, "value")
    }

    const emptyFields = () => {
        setNewEmail('')
        setNewFirstName('')
        setNewLastName('')
        setNewHeadCount('')
        setNewPhone('')
        setNewAddress('')
        setNewPostalcode('')
        setNewCity('')
        setNewCountry('')
        setNewMessage('')
        setNewCompanyName('')
        setNewBirthday('')
        setNewTerms(false)
    }

    const onChange = (dates) => {
        const [start, end, starttime, endtime] = dates;
        setNewStart(start);
        setNewEnd(end);
        setNewStartTime(starttime);
        setNewEndTime(endtime);
    };

    const handleSubmit = (event) => {
        if (!newTerms) {
            alert("Hyväksy ja lue ehdot")
        }
        else if(newEnd - newStart <= 1){
            alert("Valitse vähintään kaksi päivää")
        }
        else { //Muokataan valitut päivämäärät noutoaika ja palautusaika oikeean muotoon
            let startDay = new Date(
                newStart.getFullYear(),
                newStart.getMonth(),
                newStart.getDate(),
                newStartTime.getHours(),
                newStartTime.getMinutes(),
                newStartTime.getSeconds()
            )

            let endDay = new Date(
                newEnd.getFullYear(),
                newEnd.getMonth(),
                newEnd.getDate(),
                newEndTime.getHours(),
                newEndTime.getMinutes(),
                newEndTime.getSeconds()
            )

            let maara = newHeadCount
            localStorage.setItem("startday", startDay) // Tallenetaan päivät ja henkilömäärä localstorageen
            localStorage.setItem("endday", endDay)
            localStorage.setItem("persons", maara)
            console.log(startDay + "      " + endDay)

            event.preventDefault()

            var newCustomer = { //Luodaa uusi asiakas
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
                    if (response.status === 200) {
                        setMessage("Jatketaan varausta, " + newCustomer.firstName)
                        setIsPositive(true)     //näyttää vihreän ilmoitustekstin
                        setShowMessage(true)    //näyttää ilmoituksen

                        setTimeout(() => {
                            setShowMessage(false)
                        }, 10000)    //näyttää ilmoituksen 5sek.

                        window.location.replace("/VaraaLisatarvikkeet") //Siirrytään seuraavalle sivulle
                    }
                })
                .catch(error => {
                    setMessage("Error, tarkista kaikki kentät.")
                    setIsPositive(false)
                    setShowMessage(true)

                    setTimeout(() => {
                        setShowMessage(false)
                    }, 10000)
                })
            emptyFields()
        }
    }

    return (
        <div className='varaaSivu'>
            <h2 className='titleName'>VARAA</h2>
            <form onSubmit={handleSubmit}>
                <div className='varaaPaivat'>
                    <label>Valitse päivät (väh. 2)</label>
                    <DatePicker
                        value={newStart}
                        selected={newStart}
                        onChange={onChange}
                        startDate={newStart}
                        endDate={newEnd}
                        excludeDates={tempDates}
                        minDate={new Date()}
                        timeIntervals={10}
                        calendarStartDay={1}
                        selectsRange
                        inline
                        required
                    />
                    <label>Noutoaika</label>
                    <DatePicker
                        className='VaraaNoutoPalautus'
                        value={newStartTime}
                        selected={newStartTime}
                        onChange={(date) => setNewStartTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        // dateFormat="h:mm aa"
                        dateFormat="HH:mm"
                        timeFormat="HH:mm"
                        required
                    />
                    <label>Palautusaika</label>
                    <DatePicker
                        className='VaraaNoutoPalautus'
                        value={newEndTime}
                        selected={newEndTime}
                        onChange={(date) => setNewEndTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                        timeFormat="HH:mm"
                        required
                    />
                </div>

                <div className='varaaPaivaHlo'>
                    <div>
                        <input type='text' placeholder='Etunimi' value={newFirstName} onChange={({ target }) => setNewFirstName(target.value)} required />
                    </div>
                    <br />
                    <div>
                        <input type='text' placeholder='Sukunimi' value={newLastName} onChange={({ target }) => setNewLastName(target.value)} required />
                    </div>
                    <br />
                    <div>
                        <input type='email' placeholder='Sähköposti' value={newEmail} onChange={({ target }) => setNewEmail(target.value)} required />
                    </div>
                    <br />

                    <div>
                        <input type='number' placeholder='Henkilömäärä' value={newHeadCount} onChange={({ target }) => setNewHeadCount(target.value)} required />
                    </div>
                    <br />

                    <div>
                        <input type='text' placeholder='Osoite' value={newAddress} onChange={({ target }) => setNewAddress(target.value)} required />
                    </div>
                    <br />
                    <label>Syntymäpäivä</label>
                    <div>
                        <input type='date' className='addPvm' placeholder='ikä' value={newBirthday} onChange={({ target }) => setNewBirthday(target.value)} required />
                    </div>
                </div>

                <div className='varaaPaivatTiedot'>

                    <div>
                        <input type='text' placeholder='Postinumero' value={newPostalcode} onChange={({ target }) => setNewPostalcode(target.value)} required />
                    </div>
                    <br />

                    <div>
                        <input type='text' placeholder='Kaupunki' value={newCity} onChange={({ target }) => setNewCity(target.value)} required />
                    </div>
                    <br />

                    <div>
                        <input type='text' placeholder='Maa' value={newCountry} onChange={({ target }) => setNewCountry(target.value)} required />
                    </div>
                    <br />

                    <div>
                        <input type='phone' placeholder='Puhelin' value={newPhone} onChange={({ target }) => setNewPhone(target.value)} required />
                    </div>
                    <br />

                    <div>
                        <input type='text' placeholder='Yritys' value={newCompanyName} onChange={({ target }) => setNewCompanyName(target.value)} />
                    </div>
                    <br />

                    <div>
                        <input type='text' placeholder='Viesti' value={newMessage} onChange={({ target }) => setNewMessage(target.value)} />
                    </div>
                    <br />

                    <div>
                        <label className='varauslb'>Olen lukenut ja <br /> hyväksyn vuokrausehdot: </label>
                        <Switch2 onClick={Terms} />
                        {newTerms ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                        <Router>
                            <NavLink href="/Vuokrausehdot" className='btn btn-outline-warning' style={{ color: 'black', marginTop: '20px' }} target='_blank'>Lue vuokrausehdot</NavLink>
                            <Switch>
                                <Route path="/Vuokrausehdot" exact>
                                    <Vuokrausehdot />
                                </Route>
                            </Switch>
                        </Router>
                    </div>

                    <div>
                        <input className='btn btn-warning' style={{ paddingLeft: '150px', paddingRight: '150px', marginBottom: '20px', marginTop: '5px' }} type="submit" value="Jatka varausta" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default VaraaPaivat