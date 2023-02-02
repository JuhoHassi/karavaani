import React, { useState } from "react"
import SliderData from "./SliderData"
import SliderBtn from "./SliderBtn"

const Slider = () =>{
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () =>{
        if(slideIndex !== SliderData.length){
            setSlideIndex(slideIndex +1)
        }
        else if(slideIndex === SliderData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex -1)
        }
        else if(slideIndex === 1){
            setSlideIndex(SliderData.length)
        }
    }

    const moveDot = index =>{
        setSlideIndex(index)
    }

    return(
        <div className="container-slider">
            {SliderData.map((obj, index) =>{
                return(
                    <div key={obj.id} className={slideIndex === index +1 ? "slide active-anim" : "slide"}>
                        <img alt="" src={process.env.PUBLIC_URL + `/sliderImgs/img${index +1}.jpg`}/>

                        {/* <p>{obj.title}</p>  -jos halua kirjoittaa kommettin kuvalle (SliderData)*/}
                    </div>
                )
            })}
            <SliderBtn moveSlide={nextSlide} direction={"next"} />
            <SliderBtn moveSlide={prevSlide} direction={"prev"} />
            <div className="container-dots">
                {Array.from({length: 8}).map((item, index) => (
                    <div onClick={() => moveDot(index +1)}
                     className={slideIndex === index +1 ? "dot active" : "dot"}></div>
                ))}
            </div>
        </div>
    )
}

export default Slider