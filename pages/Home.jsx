import React from 'react'
import Image from 'next/image.js'
import { AiOutlineLine } from "react-icons/ai"
import IMAGES from "../assets/images/index.js"
import AppLayout from '@/components/AppLayout/AppLayout.jsx'
import ArrowButton from '@/components/HoverButton.js'

const Home = () => {
    return (

        <AppLayout>
            <div className='h-screen'>
                <div className='w-full flex lg:flex-row flex-col-reverse h-full lg:justify-start justify-center'>
                    <div className='lg:w-2/3 w-full flex items-center justify-center lg:mb-0 mb-40'>
                        <div className='textCapital lg:text-left text-center flex flex-col items-center justify-center xl:px-40 md:px-28 sm:px-16 px-8'>
                            <h1 className='text-amber-500 font-bold xl:text-5xl md:text-4xl flex items-center'> <AiOutlineLine className='mr-4' /> I'M NUMAN KHALIL</h1>
                            <h1 className='text-white font-extrabold xl:text-5xl md:text-4xl flex my-4 pl-4'>WEB DEVELOPER</h1>
                            <h3 className='text-white font-semibold xl:text-2xl md:text-xl flex xl:pl-32 md:pl-16 normal-case'>I'm a self-taught and passionate front-end developer who always eager to learn new things</h3>
                            <div className='mt-4 flex justify-start'>
                                <ArrowButton text={"VISIT PORTFOLIO"} />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full z-30 p-10 lg:mb-0 mb-48 flex lg:items-start lg:justify-end justify-center'>
                        <Image
                            src={IMAGES.HOME_MAIN}
                            alt="home"
                            className='lg:w-1/3 w-96 rounded-3xl mainImg'
                            // width={1920}
                            // height={600}
                            priority
                        />
                    </div>
                </div>
                <div className='z-0 slanted hidden lg:block bg-amber-500 h-full' />
            </div>
        </AppLayout>
    )
}

export default Home