import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout';
import PageHeading from '/components/PageHeading';
import Image from 'next/image';
import SERVICES_LIST from '../components/JSON/ServicesList';

const Services = () => {

  return (
    <>
      <AppLayout container={true}>
        <PageHeading titleSpan={"services"} title={"my"} backHeading={"Works"} />

        <div className='h-full pb-20 md:pt-6 pt-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 sm-gap-y-2 gap-y-8 xl:gap-x-10 md:gap-x-6 gap-x-0 '>

          {SERVICES_LIST.map((item) => (
            <div className='service_item shadow group cursor-pointer xl:py-6 xl-px-8 p-6 rounded-xl hover:bg-gradient-to-br from-teal-300 to-cyan-600 transition-all duration-500 hover:-translate-y-3 group'>
              <Image className='serviceIcon' width={52} src={item.img} alt='service' />
              <h2 className='text-2xl text-[#0EBBB2] font-semibold xl:my-6 my-4 xl:pt-2 group-hover:text-white'>{item.title}</h2>
              <p className='xl:text-justify text-left group-hover:text-black leading-relaxed text-lg text-gray-900 group-hover:text-white'>{item.desc}</p>
            </div>
          ))}
        </div>
      </AppLayout>
    </>
  );
};

export default Services;
