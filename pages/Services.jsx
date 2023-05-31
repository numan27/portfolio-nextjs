import React from 'react';
import AppLayout from '@/components/AppLayout/AppLayout';
import PageHeading from '@/components/PageHeading';
import Image from 'next/image';
import IMAGES from '@/assets/images';
import SERVICES_LIST from './JSON/ServicesList';

const Services = () => {

  return (
    <>
      <AppLayout container={true}>
        <PageHeading titleSpan={"services"} title={"my"} backHeading={"Works"} />

        <div className='h-full pb-24'>

          <div className='grid grid-cols-3 gap-x-12 gap-y-6'>

          {SERVICES_LIST.map((item)=>(
             <div className='service_item group px-8 py-6 rounded-xl hover:bg-gradient-to-r from-amber-500 to-amber-800 transition-all duration-500 hover:-translate-y-3 group'>
             <Image className='serviceIcon' width={52} src={item.img} alt='service' />
             <h2 className='text-2xl font-semibold my-4 pt-2 group-hover:text-black leading-none'>{item.title}</h2>
             <p className='text-justify mb-0 group-hover:text-black leading-tight text-lg text-gray-300 group-hover:text-white'>{item.desc}</p>
           </div>

          ))}
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Services;
