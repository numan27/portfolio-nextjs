import React from 'react'

const PageHeading = ({title, titleSpan, backHeading}) => {
    return (

        <div className="section-title flex justify-center md:pt-28 sm:pt-20 pt-16 md:mb-16 mb-8 relative">
            <h1 className='lg:text-8xl tracking-wide md:text-7xl text-5xl sm:-mt-6 -mt-3 absolute z-30 text-gray-800 font-bold uppercase opacity-10 absolute'>{backHeading}</h1>
            <h2 className='md:text-6xl text-4xl text-[#0EBBB2] z-40 font-extrabold uppercase'>{title} <span className='text-teal-900'>{titleSpan}</span> </h2>
        </div>

    )
}

export default PageHeading