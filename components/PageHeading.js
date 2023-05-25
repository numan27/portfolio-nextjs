import React from 'react'

const PageHeading = ({title, titleSpan, backHeading}) => {
    return (

        <div className="section-title text-white flex justify-center md:pt-28 sm:pt-20 pt-16 md:mb-16 mb-8">
            <h1 className='lg:text-9xl tracking-wide md:text-7xl text-5xl absolute lg:top-10 md:top-16 sm:top-10 top-8 z-30 text-gray-600 font-bold uppercase opacity-50'>{backHeading}</h1>
            <h2 className='md:text-6xl text-4xl relative text-amber-500 z-40 font-extrabold uppercase'>{title} <span className='text-white'>{titleSpan}</span> </h2>
        </div>

    )
}

export default PageHeading