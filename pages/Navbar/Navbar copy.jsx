import React, { useState } from 'react';
import NAV_LIST from './NavList';
import Link from 'next/link';
import Tooltip from './Tooltip';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="z-50 lg:left-8 lg:bottom-1/3 bottom-0 fixed lg:w-32 w-full flex items-center lg:justify-start justify-center">
      <div className='flex lg:flex-col flex-row justify-around sm:w-2/3 w-full sm:px-0 px-8 pb-1'>
        {NAV_LIST.map((item, index) => (
          <Link className='lg:block hidden' href={item.link} key={index}>
            <div
              key={index}
              className={`group inline-flex items-center bg-amber-500 rounded-full sm:p-4 p-3 my-2 transition-all duration-500 hover:w-44 cursor-pointer ${hoveredItem === index ? 'w-40' : 'sm:w-[53px]'
                }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center">
                {React.createElement(item.icon, { size: 20, color: 'white' })}
              </div>
              {hoveredItem === index && (
                <h3 className="text-white absolute ml-10 text-xl tracking-widest transition-all duration-500 font-semibold">{item.label}</h3>
              )}
            </div>
          </Link>
        ))}

        {/* mobile */}
        {NAV_LIST.map((item, index) => (
          <Link className="lg:hidden block" href={item.link} key={index}>
            <Tooltip text={item.label}>
              <div
                key={index}
                className="items-center bg-amber-500 rounded-full sm:p-4 p-3 my-2 cursor-pointer"
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
  );
};

export default Navbar;
