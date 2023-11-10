import React, { useState } from 'react';
import Image from 'next/image';
import AppLayout from '@/components/AppLayout/AppLayout';
import PageHeading from '@/components/PageHeading';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';
import { BiCodeAlt, BiLinkExternal } from 'react-icons/bi';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Dialog,
  DialogBody,
} from '@material-tailwind/react';
import Link from 'next/link';
import PortfolioList from '../components/JSON/PortfolioList';


const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <>
      <AppLayout container={true}>
        <PageHeading titleSpan={'portfolio'} title={'my'} backHeading={'catalogue'} />

        <div className='min-h-screen pb-20'>
          <Tabs value="all">
            <TabsHeader className="bg-[#0C3A53] bg-opacity-1 tabs_ul">
              <Tab className="tabsList text-[#0EBBB2]" key="all" value="all">
                All
              </Tab>
              <Tab className="tabsList text-[#0EBBB2]" key="react" value="react">
                React/Next
              </Tab>
              <Tab className="tabsList text-[#0EBBB2]" key="bootstrap" value="bootstrap">
                HTML/Bootstrap
              </Tab>
              <Tab className="tabsList text-[#0EBBB2]" key="wordpress" value="wordpress">
                WordPress
              </Tab>
            </TabsHeader>

            <TabsBody>
              <TabPanel className="px-0 flex justify-center max-h-full" key="all" value="all">
                {/* Render all portfolio items */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  {PortfolioList.map((image, index) => (
                    <div
                      key={index}
                      className="max-h-screen overflow-hidden rounded-lg shadow-lg"
                      onClick={() => handleOpen(image)}
                    >
                      <Image
                        src={image.src}
                        alt={image.value}
                        className="cursor-pointer md:h-64 xs:h-56 h-full rounded-lg shadow-xl hover:scale-105 transition-scale duration-300"
                      />
                    </div>
                  ))}
                </div>
              </TabPanel>

              <TabPanel className='px-0 flex justify-center max-h-full' key='react' value='react'>
                {/* Render data for 'react' category */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  {PortfolioList
                    .filter((item) => item.category === 'react')
                    .map((image, index) => (
                      <div
                        key={index}
                        className="max-h-screen overflow-hidden rounded-lg shadow-lg"
                        onClick={() => handleOpen(image)}
                      >
                        <Image
                          src={image.src}
                          alt={image.value}
                          className="cursor-pointer md:h-64 xs:h-56 h-full rounded-lg shadow-xl hover:scale-105 transition-scale duration-300"
                        />
                      </div>
                    ))}
                </div>
              </TabPanel>

              <TabPanel className='px-0 flex justify-center max-h-full' key='bootstrap' value='bootstrap'>
                {/* Render data for 'bootstrap' category */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  {PortfolioList
                    .filter((item) => item.category === 'bootstrap')
                    .map((image, index) => (
                      <div
                        key={index}
                        className="max-h-screen overflow-hidden rounded-lg shadow-lg"
                        onClick={() => handleOpen(image)}
                      >
                        <Image
                          src={image.src}
                          alt={image.value}
                          className="cursor-pointer md:h-64 xs:h-56 h-full rounded-lg shadow-xl hover:scale-105 transition-scale duration-300"
                        />
                      </div>
                    ))}
                </div>
              </TabPanel>

              <TabPanel className='px-0 flex justify-center max-h-full' key='wordpress' value='wordpress'>
                {/* Render data for 'wordpress' category */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  {PortfolioList
                    .filter((item) => item.category === 'wordpress')
                    .map((image, index) => (
                      <div
                        key={index}
                        className="max-h-screen overflow-hidden rounded-lg shadow-lg"
                        onClick={() => handleOpen(image)}
                      >
                        <Image
                          src={image.src}
                          alt={image.value}
                          className="cursor-pointer md:h-64 xs:h-56 h-full rounded-lg shadow-xl hover:scale-105 transition-scale duration-300"
                        />
                      </div>
                    ))}
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>

        <Dialog
          className='bg-gray-900 pt-3 px-0 relative text-white xl:max-w-[40%] lg:max-w-[50%] md:max-w-[60%] sm:max-w-[85%] max-w-[78%] dialog'
          open={open}
          handler={() => setOpen(!open)}
        >
          <MdOutlineCancel
            onClick={() => setOpen(false)}
            className='md:text-5xl text-4xl text-gray-400 transition-all duration-200 hover:text-white cancelIcon absolute cursor-pointer'
          />
          <DialogBody className=''>
            {selectedImage && (
              <div key={selectedImage.value}>
                <h2 className='text-center text-[#0EBBB2] sm:text-2xl text-normal font-bold tracking-widest uppercase mb-3'>
                  {selectedImage.label}
                </h2>
                {/* Related info */}
                <div className='py-4 px-2'>
                  <div className='grid md:grid-cols-2 grid-cols-1'>
                    {/* <div className='flex items-center mb-2'>
                    <BiCodeAlt className='md:text-2xl text-xl' />{' '}
                    <p className='mb-0 ml-2 lg:text-md text-base text-gray-300'>
                      Tech Stack:
                    </p>
                  </div> */}
                    <div className='flex items-center mb-2'>
                      <AiOutlineProject className='md:text-2xl text-xl ' />{' '}
                      <p className='mb-0 ml-2 lg:text-md text-base text-gray-300'>
                        Platform/ Client: <span className='font-medium text-sm text-white'>{selectedImage.client}</span>
                      </p>
                    </div>

                    <div className=''>
                      <Link target='_blank' href={selectedImage.previewLink || ''} className='hover:underline outline-0 flex items-center gap-2 font-medium text-sm text-white'>
                        <BiLinkExternal className='md:text-2xl text-xl text-blue-gray-500' />{' '}
                        Live Preview
                      </Link>
                    </div>
                  </div>

                  <div className='flex items-start mt-2'>
                    <div className='w-8 flex justify-start'>
                    <BiCodeAlt className='md:text-2xl text-xl' />{' '}
                    </div>
                    <p className='md:mb-0 mb-2 lg:text-md text-base text-gray-300'>
                      Tech Stack: <span className='font-medium ml-2 text-sm text-white'>{selectedImage.stack}</span>
                    </p>
                  </div>
                </div>

                <div className='relative group'>
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.label}
                    className='w-full h-auto h-full rounded-lg object-cover'
                  />
                  <div className='flex h-full items-center justify-center absolute w-full inset-0 bg-gray-900 opacity-0 px-4 transition-opacity duration-300 group-hover:opacity-90'>
                    <span className="text-white text-center md:text-lg sm:text-base text-xs">
                      {selectedImage.description}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </DialogBody>
        </Dialog>
      </AppLayout>
    </>
  );
};

export default Portfolio;
