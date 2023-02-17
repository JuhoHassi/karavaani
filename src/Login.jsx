import './App.css'
import React, { useState } from 'react'
import AuthService from './services/Auth'
import md5 from 'md5'

const Login = ({setLoggedIn, setIsPositive, setShowMessage, setMessage}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    //Input kentän tyhjennys
    const emptyFields = () => {
        setUsername("")
        setPassword("")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        var userAuth = {
            username: username,
            password: md5(password),   //Kirjautumisellä pitää käyttä salatulla salasanalla luotu käyttäjä
        }
        //console.log(userAuth)  //F12 console debuukaus

        AuthService.authenticate(userAuth)
        .then(response => {
            if(response.status === 200){
                // Talletetaan tietoja selaimen local storageen (F12 k.työkalu, Application)
                localStorage.setItem("username", response.data.username)
                localStorage.setItem("accessId", response.data.accessId)
                localStorage.setItem("token", response.data.token)

                setLoggedIn(response.data.username)

                setMessage("Tervetuloa " + userAuth.username)
                setIsPositive(true)  
                setShowMessage(true)    

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)
            }
        })
        .catch(error => {
            setMessage("Error, käyttäjätunnus tai salasana on väärä!")
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 8000)

            emptyFields()
        })       
    }

    return(
        <div className='loginWindow'>   
            <h4>Admin login</h4>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='Käyttäjätunnus' value={username} onChange={({ target }) => setUsername(target.value)} required/>
                </div>

                <div>
                    <input className='passWord' type='password' placeholder='Salasana' value={password} onChange={({ target }) => setPassword(target.value)}/>
                </div>


                <br></br>
                <input className="btn btn-dark btn-sm" type='submit' value='Kirjaudu' />
                <input id='logEmpty' className="btn btn-outline-dark btn-sm" type='button' value='Tyhjentää' onClick={emptyFields}/>         
            </form>           
        </div>
    )
}

export default Login