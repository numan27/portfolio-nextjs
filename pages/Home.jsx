import React from 'react'
import Image from 'next/image.js'
import { AiOutlineLine } from "react-icons/ai"
import IMAGES from "../assets/images/index.js"
import AppLayout from '@/components/AppLayout/AppLayout.jsx'
import ArrowButton from '@/components/HoverButton.js'

const Home = () => {
    return (

        <AppLayout>
            <div className='h-screen accordion-collapse'>
                <div className='w-full flex md:flex-row flex-col-reverse h-full lg:justify-start justify-center'>
                    <div className='md:w-3/6 w-full flex items-center md:justify-start'>
                        <div className='textCapital text-teal-900 flex flex-col md:items-start items-center md:justify-start justify-center xl:px-36 lg:pl-28 md:pl-8 px-8 mb-8 sm:mb-0'>
                            <h1 className='text-[#0EBBB2] font-bold xl:text-4xl md:text-3xl text-xl flex items-center'>
                                Hi ! I'm a
                            </h1>
                            <h1 className='font-extrabold md:text-left text-center xl:text-4xl md:text-3xl my-4 uppercase text-xl'>
                                Web Developer <span className='text-[#0EBBB2]'>&</span> Web Designer
                            </h1>
                            <h3 className='font-semibold xl:text-xl md:text-lg normal-case tracking-wider text-center md:text-left'>
                            Code and Creativity Unleashed: Explore my diverse experience as a web developer and designer.
                            </h3>
                            <div className='mt-6 flex md:justify-start'>
                                <ArrowButton path={"/Portfolio"} text={"VISIT PORTFOLIO"} />
                            </div>
                        </div>
                    </div>

                    <div className='md:w-3/6 w-full flex items-center justify-center'>
                        <div className='md:w-3/4 sm:w-1/4 w-60'>
                            <Image
                                src={IMAGES.BANNER}
                                alt="home"
                                className=''
                                priority
                            />
                        </div>
                    </div>
                    {/* <div className='lg:w-3/6 w-full z-30 p-10 lg:mb-0 mb-40 flex lg:justify-end justify-center'>
                        <div className='lg:w-1/2 w-96 flex lg:items-start lg:justify-end -mt-4 justify-center bg-[#0EBBB2] lg:pr-6 lg:pt-6 rounded-lg h-full'>
                            <Image
                                src={IMAGES.BANNER}
                                alt="home"
                                className='rounded-lg mainImg'
                                priority
                            />
                        </div>
                    </div> */}
                </div>
                {/* <div className='z-0 slanted hidden lg:block bg-amber-500 h-full' /> */}
            </div>
        </AppLayout>
    )
}

export default Home