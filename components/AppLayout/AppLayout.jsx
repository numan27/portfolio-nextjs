import Navbar from '@/pages/Navbar/Navbar'
import React from 'react'

const AppLayout = ({ children, container }) => {
    return (
        <div>
            <div className='h-full w-full bg-black z-30'>
                <Navbar />
                <main className={`text-white ${container ? 'xl:px-44 lg:px-36 md:px-16 sm:px-8 px-6' : ''}`}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AppLayout
