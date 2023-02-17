import './App.css'
import React, { useState, useEffect } from 'react'
import FeedbackService from './services/Feedback'
import { BsTrash } from "react-icons/bs"
import BackToTopBtn from './BackToTopBtn'

const Palaute = ({ setMessage, setShowMessage, setIsPositive }) => {
    const [feedback, setFeedback] = useState([])
    const [reload, reloadNow] = useState(false)


    //const [number, setNumber] = useState(0)

    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newText, setNewText] = useState('')
    const [newRating, setNewRating] = useState('')
    const [newDay, setNewDay] = useState('')

    //Input kentän tyhjennys
    const emptyFields = () => {
        setNewName('')
        setNewEmail('')
        setNewText('')
        setNewRating('')
        setNewDay('')
    }

    //Haetaan palautteet
    useEffect(() => {
        FeedbackService.getAll()
            .then(data => {
                setFeedback(data)
                console.log(data)
            })
    }, [reload])

    //Palauteen lisäys
    const handleSubmit = (event) => {
        event.preventDefault()
        var newFeedback = {
            customerName: newName,
            customerEmail: newEmail,
            feedbackText: newText,
            rating: newRating,
            feedbackDay: newDay
        }
        //console.log(newFeedback)

        FeedbackService.create(newFeedback)
            .then(response => {
                if (response.status === 200) {
                    setMessage("Kiitos! Palaute on lisätty.")
                    setIsPositive(true)
                    setShowMessage(true)
                    window.scrollBy(0, -10000)

                    setTimeout(() => {
                        setShowMessage(false)
                    }, 5000)

                    reloadNow(!reload)
                    emptyFields()
                }
            })
            .catch(error => {
                setMessage("Error")
                setIsPositive(false)
                setShowMessage(true)
                window.scrollBy(0, -10000)

                setTimeout(() => {
                    setShowMessage(false)
                }, 8000)
            })
    }

    //Poista palaute
    const deleteFeedback = (feedback) => {
        let vastaus = window.confirm("Poistetaanko palaute?")
        if (vastaus === true) {
            FeedbackService.remove(feedback.feedbackId)
                .then(res => {
                    if (res.status === 200) {
                        setMessage(`${feedback.customerName} palaute on poistettu.`)
                        setIsPositive(true)
                        setShowMessage(true)
                        window.scrollBy(0, -10000)

                        setTimeout(() => {
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

                    setTimeout(() => {
                        setShowMessage(false)
                    }, 8000)
                })
        }
        //Mutta jos halutaankin perua poisto
        else {
            setMessage("Palauteen poistaminen on keskeytetty.")
            setIsPositive(true)
            setShowMessage(true)
            window.scrollBy(0, -10000)

            setTimeout(() => {
                setShowMessage(false)
            }, 5000)
        }
    }

    return (
        <div className='divBack'>
            <h2 className='titleName'>PALAUTTEET</h2>
            <div className='divInfo'>
                <div className='divInfo-item'>
                    {feedback && feedback.map(f =>
                        <div key={f.feedbackId} className='feed'>
                            <h3 className='feedName'>{f.customerName}</h3>
                            <h3 className='feedRating'>{f.rating}</h3>
                            <h3 className='feedText'>{f.feedbackText}</h3>
                            <h3 className='feedText'>{f.feedbackDay}</h3>
                            <button className='feedDelete' onClick={() => deleteFeedback(f)}><BsTrash /></button>
                        </div>
                        )}
                </div>

                <div className='divInfo-item'>
                    <form onSubmit={handleSubmit} className='divPalaute'>
                        <h4 className='pText'>Anna meille palautetta...</h4>
                        <div>
                            <input type='text' placeholder='Nimi' value={newName} onChange={({ target }) => setNewName(target.value)} required />
                        </div>
                        <div>
                            <input type='email' placeholder='Sähköposti' value={newEmail} onChange={({ target }) => setNewEmail(target.value)} required/>
                        </div>
                        <div>
                            <input type='number' max='10' min='1' placeholder='Arvio asteikolla 1-10' value={newRating} onChange={({ target }) => setNewRating(target.value)} required/>
                        </div>
                        <div>
                            <textarea placeholder='Kirjoittaa tänne kommentti ...' type='text' value={newText} onChange={({ target }) => setNewText(target.value)} required ></textarea>                          
                        </div>
                        <div>
                            <input type="datetime-local" value={newDay} onChange={({ target }) => setNewDay(target.value)}/>
                        </div>
                        <div>
                            <input className='btn btn-outline-warning' type='button' value='Tyhjentää' onClick={emptyFields}/>
                            <input className='btn btn-warning' type="submit" value="Lähetä"/>                            
                        </div>
                    </form>
                    <BackToTopBtn/>
                </div>
            </div>
        </div>
    )
}

export default Palaute
