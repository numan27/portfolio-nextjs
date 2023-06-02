import React from 'react';
import Image from 'next/image';
import AppLayout from '@/components/AppLayout/AppLayout';
import PageHeading from '@/components/PageHeading';
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";
import IMAGES from '@/assets/images';
import Link from 'next/link';

const data = [
  {
    label: "React",
    value: "react",
    src: [
      [
        IMAGES.REACT_1,
        IMAGES.REACT_2,
        IMAGES.REACT_3,
      ],
      [
        IMAGES.REACT_2_1,
        IMAGES.REACT_2_2,
        IMAGES.REACT_2_3,
      ],
      [
        IMAGES.REACT_3_1,
        IMAGES.REACT_3_2,
      ],
    ],
  },
  {
    label: "Bootstrap",
    value: "bootstrap",
    src: [
      [
        IMAGES.BS_1,
        IMAGES.BS_2,
      ],
      [
        IMAGES.BS_2_1,
        IMAGES.BS_2_2,
        IMAGES.BS_2_3,
      ],
    ],
  },
  {
    label: "HTML",
    value: "HTML",
    src: [
      [
        IMAGES.HTML_1,
        IMAGES.HTML_2,
      ],
      [
        IMAGES.HTML_2_1,
        IMAGES.HTML_2_2,
      ],
    ],
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (image) => {
    const { label, src } = image;
    const srcArray = Array.isArray(src) ? src : [[src]]; // Wrap single image in an array
    setSelectedImage({ label, src: srcArray });
    setOpen(true);
  };
  
  

  const allTabData = {
    label: "All",
    value: "all",
    src: data.flatMap((item) =>
      item.src.flatMap((group) => group[0]) // Retrieve the first image from each group
    ),
  };


  const tabsData = [
    {
      label: "All",
      value: "all",
      src: allTabData.src,
    },
    ...data.map((category) => ({
      label: category.label,
      value: category.value,
      src: category.src.flatMap((group) => group[0]),
    })),
  ];

  return (
    <>
      <AppLayout container={true}>
        <PageHeading titleSpan={"portfolio"} title={"my"} backHeading={"catalouge"} />

        <div className='min-h-screen pb-20'>
          <Tabs value="all">
            <TabsHeader>
              {tabsData.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>

            <TabsBody>
              {tabsData.map(({ value, src }) => (
                <TabPanel className="px-0 flex justify-center max-h-full" key={value} value={value}>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {src.map((image, index) => (
                      <div className='max-h-screen' key={index} onClick={() => handleOpen({ label: value, src: image })}>
                        <Image
                          src={image}
                          alt={value}
                          width={400}
                          height={200}
                          className="cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>

          </Tabs>
        </div>

        <Dialog className='bg-gray-900 sm:pb-4 sm:pt-6 pt-3 sm:px-4 px-0 relative text-white xl:max-w-[40%] lg:max-w-[50%] md:max-w-[60%] sm:max-w-[85%] max-w-[78%] dialog' open={open} handler={() => setOpen(!open)}>
          <MdOutlineCancel onClick={() => setOpen(false)} className='md:text-6xl text-4xl text-gray-400 transition-all duration-200 hover:text-white cancelIcon absolute cursor-pointer' />
          <h2 className='text-center text-amber-500 sm:text-3xl text-2xl font-bold tracking-widest uppercase mb-3'>{selectedImage?.label}</h2>

          <div className='p-4 grid md:grid-cols-2 grid-cols-1'>
            <div className='flex items-center mb-2'>
              <AiOutlineProject className='md:text-2xl text-xl' /> <p className='mb-0 ml-2 lg:text-lg text-base text-gray-300'>Project: <span className='font-medium text-white'>Website</span></p>
            </div>
            <div className='flex items-center mb-2'>
              <AiOutlineProject className='md:text-2xl text-xl ' /> <p className='mb-0 ml-2 lg:text-lg text-base  text-gray-300'>Client: <span className='font-medium text-white'>Mr. XYZ</span></p>
            </div>
            <div className='flex items-center'>
              <BiCodeAlt className='md:text-2xl text-xl' /> <p className='md:mb-0 mb-2 ml-2 lg:text-lg text-base text-gray-300'>Stack: <span className='font-medium text-white'>React, Tailwind CSS</span></p>
            </div>
            <div className='flex items-center'>
              <BiLinkExternal className='md:text-2xl text-xl' /> <p className='mb-0 ml-2 lg:text-lg text-base  text-gray-300'>Preview: <Link href="" className='font-medium text-white'>www.abc123.com</Link></p>
            </div>
          </div>

          <DialogBody className='relative'>
            {selectedImage && (
              <Carousel
                loop
                autoplay
                className="rounded-xl"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 -translate-y-2/4 left-4"
                  >
                    <BsArrowLeft strokeWidth={2} className="w-6 h-6" />
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 -translate-y-2/4 !right-4"
                  >
                    <BsArrowRight strokeWidth={2} className="w-6 h-6" />
                  </IconButton>
                )}
              >
                {selectedImage.src.flatMap((group) =>
                  group.map((item, index) => (
                    <Image
                      key={index}
                      src={item}
                      alt={selectedImage.label}
                      className="w-full rounded-lg object-cover"
                    />
                  ))
                )}
              </Carousel>
            )}
            <span className='absolute bottom-0 w-full bg-gray-900 opacity-60 h-16 px-4' />
          </DialogBody>

        </Dialog>
      </AppLayout>
    </>
  );
};

export default Portfolio;
