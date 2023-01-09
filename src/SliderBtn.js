import React from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SliderBtn = ({ direction, moveSlide }) =>{

    return(
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            {direction === "next" ? <BsArrowRight/> : <BsArrowLeft/>}
        </button>
    )
}

export default SliderBtn