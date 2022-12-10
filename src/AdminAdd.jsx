import './App.css'
import React, { useState } from 'react'
import AdminService from './services/Admin'
import md5 from 'md5'

const AdminAdd = ({setLisäystila, reload, reloadNow, setIsPositive, setShowMessage, setMessage}) => {
    const [newUsername, setNewUsername] = useState('')
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newAccessid, setNewAccessid] = useState('')

    const [pwTarkistus, setPwTarkistus] = useState('')
    const [tarkistusColor, setTarkistusColor] = useState('')

    //Salasanan tarkistus
    const tarkistus = (param) =>{
        if(param !== newPassword){
            setPwTarkistus("Salasana EI täsmää!")
            setTarkistusColor("red")
        }
        else{
            setPwTarkistus("OK!")
            setTarkistusColor("green")
        }
    }

    //Input kentän tyhjennys
    const emptyFields = () => {
        setNewName("")
        setNewEmail("")
        setNewUsername("")
        setNewPassword("")
        setNewAccessid("")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        var newAdmin = {
            name: newName,
            email: newEmail,
            userName: newUsername,
            password: md5(newPassword),   // md5 - salasanan salaus
            accessId: parseInt(newAccessid)  // parseInt - varmistettaan kokonaisluku
        }
        //console.log(newAdmin)  //F12 console debuukaus

        AdminService.create(newAdmin)
        .then(response => {
            if(response.status === 200){
                setMessage("Lisätty uusi käyttäjä: " + newAdmin.name)
                setIsPositive(true)  
                setShowMessage(true)    

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)

                reloadNow(!reload) 
                setLisäystila(false)
            }
        })
        .catch(error => {
            setMessage(error.response.data)
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 8000)
        })       
    }

    return(
        <div className='addAsiakas'>
            <h4>Liää uusi käyttäjä</h4>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='Nimi' value={newName} onChange={({ target }) => setNewName(target.value)} required/>
                </div>

                <div>
                    <input type='email' placeholder='Sähköposti' value={newEmail} onChange={({ target }) => setNewEmail(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Access Id' value={newAccessid} onChange={({ target }) => setNewAccessid(target.value)} required/>
                </div>

                <div>
                    <input type='text' placeholder='Käyttäjätunnus' value={newUsername} onChange={({ target }) => setNewUsername(target.value)} required/>
                </div>

                <div>
                    <input type='password' placeholder='Salasana' value={newPassword} onChange={({ target }) => setNewPassword(target.value)}/>
                </div>

                <div>
                    <input type='password' placeholder='Salasanan tarkistus' onChange={({ target }) => tarkistus(target.value)} />
                </div>
                <div>
                    <br></br>
                    {tarkistusColor === "red" ? 
                    <label style={{color: "red"}}> {pwTarkistus} </label> : <label style={{color: "green"}}> {pwTarkistus} </label> 
                    }
                </div>


                <br></br>
                {tarkistusColor === "green" && <input className="btn btn-outline-success btn-sm" type='submit' value='Tallenna' />}
                <input className="btn btn-outline-warning btn-sm" type='button' value='Tyhjentää' onClick={emptyFields}/>
                <input className="btn btn-outline-dark btn-sm" type='button' value='Takaisin' onClick={() => setLisäystila(false)}/>
         
            </form>           
        </div>
    )
}

export default AdminAdd