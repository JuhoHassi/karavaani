import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import BackToTopBtn from './BackToTopBtn'

import Img11 from './img/11.jpg'
import Img22 from './img/22.jpg'
import Img23 from './img/23.jpg'
import Img24 from './img/24.jpg'
import Img25 from './img/25.jpg'
import Img33 from './img/33.jpg'
import Img44 from './img/44.jpg'
import Img55 from './img/55.jpg'
import Img66 from './img/66.jpg'
import Img77 from './img/77.jpg'
import Img81 from './img/81.jpg'
import Img88 from './img/88.jpg'
import Img91 from './img/91.jpg'
import Img92 from './img/92.jpg'
import Img99 from './img/99.jpg'


const Galleria = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img11,
        },
        {
            id: 2,
            imgSrc: Img22,
        },
        {
            id: 3,
            imgSrc: Img33,
        },
        {
            id: 4,
            imgSrc: Img44,
        },
        {
            id: 5,
            imgSrc: Img55,
        },
        {
            id: 6,
            imgSrc: Img66,
        },
        {
            id: 7,
            imgSrc: Img77,
        },
        {
            id: 8,
            imgSrc: Img81,
        },
        {
            id: 9,
            imgSrc: Img88,
        },
        {
            id: 10,
            imgSrc: Img91,
        },
        {
            id: 11,
            imgSrc: Img92,
        },
        {
            id: 12,
            imgSrc: Img99,
        },
        {
            id: 13,
            imgSrc: Img23,
        },
        {
            id: 14,
            imgSrc: Img24,
        },
        {
            id: 14,
            imgSrc: Img25,
        },
    ]

    const [model, setModel] = useState(false)
    const [tempImg, setTempImg] = useState('')

    //Meetod, mis teeb klikkides pildi suuremaks
    const getImg = (imgSrc) => {
        setTempImg(imgSrc)
        setModel(true)
    }

    return (
        <div className="divEhdot">
            <h2 className="titleName">VALOKUVAT</h2>
            <div className={model ? "model open" : "model"}>
                <img src={tempImg} alt='' />
                <AiOutlineClose onClick={() => setModel(false)} className='closeBtn' />
            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)} >
                            <img alt='' src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                        
                    )
                })}
                <BackToTopBtn/>
            </div>
        </div>

    )
}

export default Galleria