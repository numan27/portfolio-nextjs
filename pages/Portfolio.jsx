import React from 'react';
import Image from 'next/image';
import AppLayout from '@/components/AppLayout/AppLayout';
import PageHeading from '@/components/PageHeading';
import {
  Tabs, TabsHeader, TabsBody, Tab, TabPanel, Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import IMAGES from '@/assets/images';

const data = [
  {
    label: "React",
    value: "react",
    src: IMAGES.PORTFOLIO_ITEM_2
  },
  {
    label: "Bootstrap",
    value: "bootstrap",
    src: IMAGES.PORTFOLIO_ITEM
  },
  {
    label: "HTML/CSS",
    value: "svelte",
    src: IMAGES.PORTFOLIO_ITEM_2,
  },
];

const Portfolio = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  // Add the "All" tab data
  const allTabData = {
    label: "All",
    value: "all",
    src: data.map(({ src }) => (
      <div key={src}>
        <Image src={src} alt='portfolio-item' width={400} height={200} />
      </div>
    )),
  };

  // Create a new array with the "All" tab as the first item
  const tabsData = [allTabData, ...data];

  return (
    <>
      <AppLayout container={true}>
        <PageHeading titleSpan={"portfolio"} title={"my"} backHeading={"catalouge"} />

        <div className='h-screen'>
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
                <TabPanel className='px-0 flex justify-center' key={value} value={value}>
                  {value === "all" ? (
                    <div onClick={handleOpen} className='grid grid-cols-3 gap-6'>{src}</div>
                  ) : (
                    <div className='grid grid-cols-3 gap-6'>
                      <Image onClick={handleOpen} className='mx-auto' src={src} alt='portfolio-item' width={400} height={200} />
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>

        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
            reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </AppLayout>
    </>
  );
};

export default Portfolio;
