import './App.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import BackToTopBtn from './BackToTopBtn'

const Yhteystiedot = ({setIsPositive, setShowMessage, setMessage}) => {
    const form = useRef()
    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_vjj6wdw', 'template_xiskw9n', form.current, '41BBDlyHTwF5LnCXc')
        .then((result) => {
            console.log(result.text)
            console.log("Viestin lähetys onnistui")          
            setMessage("Viesti on lähetetty!")
            setIsPositive(true)
            setShowMessage(true)

            setTimeout(() =>{
                setShowMessage(false)
            }, 5000)
            
            //alert("Viestin on lähetetty!")
        }, (error) =>{
            console.log(error.text)
            setMessage("Viestin lähetys ei onnistunut")
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() =>{
                setShowMessage(false)
            }, 8000)
        })

        e.target.reset()
    }

    return(
        <div className='divYht'>
            <h1 className='titleName'>YHTEYSTIEDOT</h1>
            <div className='divInfo'>
                <div className='divInfo-item'>
                    <h4 className='vaTitle'>TSR Uusimaa Oy</h4>
                    <h4 className='vaTitle'>3162110-9</h4>
                    <br />
                    <h5>Puhelin:<p>0407377606 / 0458812550</p></h5>
                    <h5>Sähköposti:<p>tsrcaravan@gmail.com</p></h5>
                    <h5>Osoite: <p>Liekokuja 6, 03100 Vihti</p></h5>
                    <iframe className='gMap' title='googlemap'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.0187245369555!2d24.332375416023847!3d60.345806382025955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468de9b0d25bd9ed%3A0x6fe556540c2aea63!2sLiekokuja%206%2C%2003100%20Vihti!5e0!3m2!1sfi!2sfi!4v1672433158957!5m2!1sfi!2sfi"></iframe>

                    <br></br>
                    <p>Palvelemme sopimuksen mukaan ja meille voi soittaa myös iltaisin ja viikonloppuisin!</p>
                </div>

                <div className='divInfo-item'>
                    <form className='yhtForm' ref={form} onSubmit={sendEmail}>
                        <h4>LÄHETÄ VIESTIÄ</h4>
                        <br></br>
                        <label>Nimi</label>
                        <input type="text" name="user_name" className='form-control' required />

                        <label>Sähköposti</label>
                        <input type="email" name="user_email" className='form-control' required />

                        <label>Aihe</label>
                        <input type="text" name="subject" className='form-control' />

                        <label>Viesti</label>
                        <textarea name="message" className='form-control' required />

                        <input type="submit" style={{ marginTop: '20px' }}
                            className='form-control btn btn-dark' value="Lähetä" />
                    </form>
                </div>
            </div>
            <BackToTopBtn/>
        </div>
        
    )
}

export default Yhteystiedot
