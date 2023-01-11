import React, {useState, useEffect} from 'react'
import { FaArrowCircleUp } from "react-icons/fa"
import './App.css'

function TakaisinYlösNappi() {
    const [takaisnNappi, setTakaisinNappi] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 90){
                setTakaisinNappi(true)
            }
            else{
                setTakaisinNappi(false)
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
    <div>
        {takaisnNappi && <button className='backTopBtn' onClick={scrollUp}><FaArrowCircleUp/></button>}
    </div>
    )
}

export default TakaisinYlösNappi