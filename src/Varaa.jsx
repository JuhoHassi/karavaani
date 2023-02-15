import './App.css'
import React, { useState, useEffect } from 'react'
import CustomerBookingService from './services/CustomerBooking'
import BookingService from './services/Booking'
import CustomerService from './services/Customer'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'
import { Switch } from 'antd'

// Kalenterikomponentin dokumentaatio https://reactdatepicker.com/

const Varaa = ({ setLisäystila, setMessage, setShowMessage, setIsPositive, reload, reloadNow }) => {

    // const [reload, reloadNow] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token') //Otetaan mukaan token (backend)
        CustomerBookingService
            .setToken(token)
        CustomerService
            .setToken(token)
        BookingService
            .setToken(token)

        CustomerBookingService.getAll()
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

    const [viimenen, setViimenen] = useState('');
    const [bookings, setBookings] = useState([])

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

    const [newGasGrill, setNewGasGrill] = useState(false)
    const [newTableChairs, setNewTableChairs] = useState(false)
    const [newCampChairs, setNewCampChairs] = useState(false)
    const [newScooter, setNewScooter] = useState(false)
    const [newGasRep, setNewGasRep] = useState(false)
    const [newLongW, setNewLongW] = useState(false)
    const [newDelivery, setNewDelivery] = useState(false)
    const [newCleaning, setNewCleaning] = useState(false)
    const [newWcWaterEmpt, setNewWcWaterEmpt] = useState(false)
    const [newTerms, setNewTerms] = useState(false)

    const Grill = () => {
        newGasGrill ? setNewGasGrill(false) : setNewGasGrill(true)
        console.log(newGasGrill, "value")
    }

    const TableChairs = () => {
        newTableChairs ? setNewTableChairs(false) : setNewTableChairs(true)
        console.log(newTableChairs, "value")
    }

    const CampingChairs = () => {
        newCampChairs ? setNewCampChairs(false) : setNewCampChairs(true)
        console.log(newCampChairs, "value")
    }

    const EScooter = () => {
        newScooter ? setNewScooter(false) : setNewScooter(true)
        console.log(newScooter, "value")
    }

    const GasReplacement = () => {
        newGasRep ? setNewGasRep(false) : setNewGasRep(true)
        console.log(newGasRep, "value")
    }

    const LongWeekend = () => {
        newLongW ? setNewLongW(false) : setNewLongW(true)
        console.log(newLongW, "value")
    }

    const HomeDelivery = () => {
        newDelivery ? setNewDelivery(false) : setNewDelivery(true)
        console.log(newDelivery, "value")
    }

    const Cleaning = () => {
        newCleaning ? setNewCleaning(false) : setNewCleaning(true)
        console.log(newCleaning, "value")
    }

    const WcAndWaterTank = () => {
        newWcWaterEmpt ? setNewWcWaterEmpt(false) : setNewWcWaterEmpt(true)
        console.log(newWcWaterEmpt, "value")
    }

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
        setNewGasGrill(false)
        setNewTableChairs(false)
        setNewCampChairs(false)
        setNewScooter(false)
        setNewLongW(false)
        setNewGasRep(false)
        setNewDelivery(false)
        setNewCleaning(false)
        setNewWcWaterEmpt(false)
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
            console.log("Ehdot 3" + newTerms)
        }
        else {
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
                    if (response.status === 200) {
                        setMessage("Lisätty uusi asiakas: " + newCustomer.firstName)
                        setIsPositive(true)     //näyttää vihreän ilmoitustekstin
                        setShowMessage(true)    //näyttää ilmoituksen

                        setTimeout(() => {
                            setShowMessage(false)
                        }, 5000)    //näyttää ilmoituksen 5sek.

                        // reloadNow(!reload)  //Päivitä käyttöliittymän
                        // setLisäystila(false)
                    }
                })
                .catch(error => {
                    setMessage("Error, tarkista ehdot ja syntymäpäivä?")
                    setIsPositive(false)
                    setShowMessage(true)

                    setTimeout(() => {
                        setShowMessage(false)
                    }, 8000)
                })

                CustomerService.getAll()
                .then(data =>{
                    // console.log("TULEEKO MITTÄÄ "+data.customerId +"   "+data.customerEmail)
                    setBookings(data)
                    // console.log(data.map(bookings => 
                    //     console.log("NYTE? " + bookings.firstName + "  " + bookings.customerId)))


                    const viimenen = data[data.length-1].customerId
                    setViimenen(viimenen)
                    console.log("JoooOoo " + viimenen)
                })
                .catch(error => {
                    setMessage("EI TUU")
                    console.log("EI TUUUUU")
                    setIsPositive(false)
                    setShowMessage(true)

                    setTimeout(() => {
                        setShowMessage(false)
                    }, 8000)
                })

                // {bookings && bookings.map(b =>
                //     console.log("ID " + b.customerId + "NIMI " + b.firstName))}
                var newBook = {
                    // customerId: viimenen,
                    firstName: newFirstName,
                    lastName: newLastName,
                    customerEmail: newEmail,
                    birthday: newBirthday,
                    people: newHeadCount,
                    gasGrill: newGasGrill,
                    tableChairs: newTableChairs,
                    campingChairs: newCampChairs,
                    electricScooter: newScooter,
                    longWeekend: newLongW,
                    delivery: newDelivery,
                    gasReplacement: newGasRep,
                    cleaning: newCleaning,
                    wcWaterTankEmpty: newWcWaterEmpt,
                    terms: newTerms,
                    startDay: new Date(
                        newStart.getFullYear(),
                        newStart.getMonth(),
                        newStart.getDate(),
                        newStartTime.getHours(),
                        newStartTime.getMinutes(),
                        newStartTime.getSeconds()
                    ),
                    endDay: new Date(
                        newEnd.getFullYear(),
                        newEnd.getMonth(),
                        newEnd.getDate(),
                        newEndTime.getHours(),
                        newEndTime.getMinutes(),
                        newEndTime.getSeconds()
                    )
                
            }
            console.log(newBook)
            BookingService.create(newBook)
                .then(response => {
                    if (response.status === 200) {
                        setMessage("Kiitos! Varaus on lisätty.")
                        setIsPositive(true)
                        setShowMessage(true)
                        window.scrollBy(0, -10000)

                        setTimeout(() => {
                            setShowMessage(false)
                        }, 5000)

                        // reloadNow(!reload)
                        emptyFields()
                    }
                })
                .catch(error => {
                    setMessage("Error" + error)
                    setIsPositive(false)
                    setShowMessage(true)
                    window.scrollBy(0, -10000)

                    setTimeout(() => {
                        setShowMessage(false)
                    }, 8000)
                })
                emptyFields()
        }
    }
    return (
        <div className='varaaSivu'>
            <h2 className='titleName'>VARAA</h2>
            <form onSubmit={handleSubmit}>
                <div className='varaaKalenteri'>
                    <div className='varaa1'>
                    <DatePicker
                        value={newStart}
                        selected={newStart}
                        onChange={onChange}
                        startDate={newStart}
                        endDate={newEnd}
                        excludeDates={tempDates}
                        minDate={new Date()}
                        timeIntervals={10}
                        selectsRange
                        inline
                        required
                    />
                    </div>
                        <div className='varaa2'>
                            <label>Noutoaika</label>
                            <DatePicker
                                value={newStartTime}
                                selected={newStartTime}
                                onChange={(date) => setNewStartTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                required
                                isClearable
                            />
                            <label>Palautusaika</label>
                            <DatePicker
                                value={newEndTime}
                                selected={newEndTime}
                                onChange={(date) => setNewEndTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                required
                                isClearable
                            />
                        <div className='varaa3'>
                            <label>Syötä sähköpostisi</label>
                            <div>
                                <input type='text' placeholder='Etunimi' value={newFirstName} onChange={({ target }) => setNewFirstName(target.value)} />
                            </div>
                            <br />
                            <div>
                                <input type='text' placeholder='Sukunimi' value={newLastName} onChange={({ target }) => setNewLastName(target.value)} />
                            </div>
                            <br />
                            <div>
                                <input type='email' placeholder='Sähköposti' value={newEmail} onChange={({ target }) => setNewEmail(target.value)} />
                            </div>
                            <br />
                            <div>
                                <input type='text' placeholder='hlö' value={newHeadCount} onChange={({ target }) => setNewHeadCount(target.value)} />
                            </div>
                            <br />
                            <div>
                                <input type='datetime-local' placeholder='ikä' value={newBirthday} onChange={({ target }) => setNewBirthday(target.value)} />
                            </div>
                            <div>
                                <input type='text' placeholder='Osoite' value={newAddress} onChange={({ target }) => setNewAddress(target.value)} required />
                            </div>

                            <div>
                                <input type='text' placeholder='Postinumero' value={newPostalcode} onChange={({ target }) => setNewPostalcode(target.value)} required />
                            </div>

                            <div>
                                <input type='text' placeholder='Kaupunki' value={newCity} onChange={({ target }) => setNewCity(target.value)} required />
                            </div>

                            <div>
                                <input type='text' placeholder='Maa' value={newCountry} onChange={({ target }) => setNewCountry(target.value)} required />
                            </div>
                            <div>
                                <input type='phone' placeholder='Puhelin' value={newPhone} onChange={({ target }) => setNewPhone(target.value)} required />
                            </div>
                            <div>
                                <input type='text' placeholder='Yritys' value={newCompanyName} onChange={({ target }) => setNewCompanyName(target.value)} />
                            </div>
                            <div>
                                <input type='text' placeholder='Viesti' value={newMessage} onChange={({ target }) => setNewMessage(target.value)} />
                            </div>
                            {/* <div>
                                <input type='checkbox' value={newGasGrill} onChange={onChange2} />
                            </div>
                            <div>
                                <input type='checkbox' value={newTableAndChairs} onChange={onChange3} />
                            </div>
                            <div>
                                <input type='checkbox' value={newCleaningAndWc} onChange={onChange4} />
                            </div>
                            <div>
                                <input type='checkbox' value={newTerms} onChange={onChange5} />
                            </div> */}
                            <div>
                                <label className='varauslb'>Kaasugrilli: </label>
                                <Switch onClick={Grill} />
                                {newGasGrill ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Pöytä & tuolit: </label>
                                <Switch onClick={TableChairs} />
                                {newTableChairs ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Retkituolit: </label>
                                <Switch onClick={CampingChairs} />
                                {newCampChairs ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Sähköpotkulauta: </label>
                                <Switch onClick={EScooter} />
                                {newScooter ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Kaasupullon vaihto palaut. : </label>
                                <Switch onClick={GasReplacement} />
                                {newGasRep ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Pidenetty vkl: </label>
                                <Switch onClick={LongWeekend} />
                                {newLongW ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Toimitus: </label>
                                <Switch onClick={HomeDelivery} />
                                {newDelivery ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Loppusiivous: </label>
                                <Switch onClick={Cleaning} />
                                {newCleaning ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Wc ja vesisäiliöin tyhjennys: </label>
                                <Switch onClick={WcAndWaterTank} />
                                {newWcWaterEmpt ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>

                            <div>
                                <label className='varauslb'>Vuokrausehdot: </label>
                                <Switch onClick={Terms} />
                                {newTerms ? <span className='true'>Kyllä</span> : <span className='false'>Ei</span>}
                            </div>
                        </div>
                        <br />
                        <div>
                            <input className='btn btn-warning' type="submit" value="Lähetä" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Varaa