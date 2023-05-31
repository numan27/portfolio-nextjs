import React from 'react';
import AppLayout from '@/components/AppLayout/AppLayout';
import PageHeading from '@/components/PageHeading';
import Image from 'next/image';
import SERVICES_LIST from './JSON/ServicesList';

const Services = () => {

  return (
    <>
      <AppLayout container={true}>
        <PageHeading titleSpan={"services"} title={"my"} backHeading={"Works"} />

        <div className='h-full pb-24 mt-60 '>
          <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-x-12 lg:gap-x-4 gap-x-2 md:gap-y-6 gap-y-4'>

            {SERVICES_LIST.map((item) => (
              <div className='w-full lg:w-full md:w-2/3 mx-auto service_item group cursor-pointer xl:p-10 p-6 rounded-xl hover:bg-gradient-to-r from-amber-500 to-amber-800 transition-all duration-500 hover:-translate-y-3 group'>
                <Image className='serviceIcon' width={52} src={item.img} alt='service' />
                <h2 className='text-2xl font-semibold xl:my-6 my-4 xl:pt-2 group-hover:text-black'>{item.title}</h2>
                <p className='xl:text-justify text-left group-hover:text-black leading-relaxed text-lg text-gray-300 group-hover:text-white'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Services;
