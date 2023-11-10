import React, { useState } from 'react';
import { useRouter } from 'next/router';
import NAV_LIST from '../../components/JSON/NavList';
import Link from 'next/link';
import classnames from 'classnames';
import Tooltip from './Tooltip';
import Image from 'next/image';
import IMAGES from '@/assets/images';

const Navbar = () => {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isMobileActive = (link) => {
    // Check if the current path matches the link
    if (router.pathname === link) {
      return true;
    }
    return false;
  };

  return (
    <div className="z-50 lg:left-8 md:inset-y-1/2 accordion-item bottom-0 fixed lg:w-32 w-full flex items-center lg:justify-start justify-center">
      <div className='fixed top-2 left-2'
      >
        <Image className='sm:w-16 w-12' height={120} src={IMAGES.FAV} />
      </div>
      <div className='flex lg:flex-col flex-row justify-around sm:w-2/3 w-full sm:px-0 px-8 pb-1'>
        {NAV_LIST.map((item, index) => (
          <Link className='lg:block hidden' href={item.link} key={index}>
            <div
              key={index}
              className={classnames(
                'group inline-flex items-center rounded-lg p-3 my-2 transition-all duration-500 hover:w-36 cursor-pointer',
                {
                  'w-40': hoveredItem === index,
                  'sm:w-[45.5px]': hoveredItem !== index,
                  'bg-[#0EBBB2]': hoveredItem === index || (router.pathname === item.link && hoveredItem === null),
                  'bg-[#0C3A53]': hoveredItem !== index && !(router.pathname === item.link && hoveredItem === null),
                }
              )}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center">
                {React.createElement(item.icon, { size: 20, color: 'white' })}
              </div>
              {hoveredItem === index && (
                <h3 className="text-white absolute ml-8 text-xl tracking-wider transition-all duration-500 font-semibold">{item.label}</h3>
              )}
            </div>
          </Link>
        ))}


        {/* Mobile Nav */}
        <div className='bg-gray-800 lg:hidden block fixed bottom-0 sm:w-10/12 w-11/12 rounded-lg'>
          <div className='flex justify-around'>
            {NAV_LIST.map((item, index) => (
              <Link className="" href={item.link} key={index}>
                <Tooltip text={item.label}>
                  <div
                    key={index}
                    className={classnames(
                      'items-center rounded-lg sm:p-3 p-2 my-1.5 cursor-pointer',
                      {
                        'bg-[#0EBBB2]': isMobileActive(item.link),
                        'bg-gray-900': !isMobileActive(item.link),
                      }
                    )}
                  >
                    <div className="flex items-center justify-center">
                      {React.createElement(item.icon, { size: 16, color: 'white' })}
                    </div>
                  </div>
                </Tooltip>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
