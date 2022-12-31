import './App.css'
import React, {useState} from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Palaute = ( item ) => {
    const [number, setNumber] = useState(0)

    return(
        <div className='custBookDiv'>
            <h2>Palaute</h2>
            <div>
                <h4>Rating</h4>
                {Array(5).fill().map((_,index) =>
                number >= index +1 ? (
               <AiFillStar style={{color: 'orange'}} onClick={() => setNumber(index +1)}/>     
                ) : (
                    <AiOutlineStar style={{color: 'orange'}} onClick={() => setNumber(index +1)}/>
                )
                )}
            </div>
            <textarea placeholder='comment here...'></textarea>
            <button>Submit</button>
        </div>
    )

}

export default Palaute
