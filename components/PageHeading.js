import React from 'react'

const PageHeading = ({title, titleSpan, backHeading}) => {
    return (

        <div className="section-title text-white flex justify-center md:pt-28 sm:pt-20 pt-16 md:mb-16 mb-8 relative">
            <h1 className='lg:text-8xl tracking-wide md:text-5xl text-4xl absolute lg:top-10 md:top-20 sm:top-12 top-10 z-30 text-gray-600 font-bold uppercase opacity-50 absolute'>{backHeading}</h1>
            <h2 className='md:text-6xl text-4xl text-amber-500 z-40 font-extrabold uppercase'>{title} <span className='text-white'>{titleSpan}</span> </h2>
        </div>

    )
}

export default PageHeading