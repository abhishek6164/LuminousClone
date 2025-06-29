import React from 'react'
import text1 from '../assets/text1.webp'
import text2 from '../assets/text2.webp'
import text3 from '../assets/text3.webp'

const NormalText = () => {
    return (
        <div className="text-center px-6 py-40 ">

            {/* Bold Black Line */}
            <h1 className="text-xl  font-semibold text-black ">
                In 2050, material wealth will not be
            </h1>

            {/* Faded Grey Line with Icons */}
            <p className="text-[#B0ADA8] text-2xl text-pretty  font-medium leading-[1]">
                impressive. Your VO<sub>2</sub>Max,
                <img src={text1} alt="VO2" className="inline h-6 w-12 px-1  rounded-full" />
                speed of aging,<br />
                HRV
                <img src={text2} alt="HRV" className="inline h-6  w-12 px-1  rounded-full" />
                and body fat percentage
                <img src={text3} alt="Body Fat" className="inline h-6  w-12 px-1 mx-1 rounded-full" />
                will be.
            </p>

        </div>
    )
}

export default NormalText
