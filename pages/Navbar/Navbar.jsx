import React, { useState } from 'react';
import { useRouter } from 'next/router';
import NAV_LIST from './NavList';
import Link from 'next/link';
import classnames from 'classnames';
import Tooltip from './Tooltip';

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
    <div className="z-50 lg:left-8 lg:bottom-1/3 bottom-0 fixed lg:w-32 w-full flex items-center lg:justify-start justify-center">
      <div className='flex lg:flex-col flex-row justify-around sm:w-2/3 w-full sm:px-0 px-8 pb-1'>
        {NAV_LIST.map((item, index) => (
          <Link className='lg:block hidden' href={item.link} key={index}>
            <div
              key={index}
              className={classnames(
                'group inline-flex items-center rounded-full sm:p-4 p-3 my-2 transition-all duration-500 hover:w-36 cursor-pointer',
                {
                  'w-40': hoveredItem === index,
                  'sm:w-[53px]': hoveredItem !== index,
                  'bg-amber-500': hoveredItem === index || (router.pathname === item.link && hoveredItem === null),
                  'bg-gray-900': hoveredItem !== index && !(router.pathname === item.link && hoveredItem === null),
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
        <div className='bg-gray-800 lg:hidden block fixed bottom-0 sm:w-10/12 w-11/12 rounded-full'>
          <div className='flex justify-around'>
            {NAV_LIST.map((item, index) => (
              <Link className="" href={item.link} key={index}>
                <Tooltip text={item.label}>
                  <div
                    key={index}
                    className={classnames(
                      'items-center rounded-full sm:p-4 p-3 my-2 cursor-pointer',
                      {
                        'bg-amber-500': isMobileActive(item.link),
                        'bg-gray-900': !isMobileActive(item.link),
                      }
                    )}
                  >
                    <div className="flex items-center justify-center">
                      {React.createElement(item.icon, { size: 20, color: 'white' })}
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
