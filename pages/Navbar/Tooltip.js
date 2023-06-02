import React, { useState } from 'react';
import { MdArrowDropDown } from "react-icons/md"

// Define a Tooltip component
const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (  
    <>
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
        {showTooltip && (
        <div className="absolute text-xs bottom-14 sm:bottom-16 left-1/2 transform -translate-x-1/2 p-2 bg-amber-500 text-white rounded-md">
          {text}
          <MdArrowDropDown style={{color: '#F59E0B'}} className='absolute top-4' size={36} />
        </div>
        )}
      </div>
    </>

  );
};

export default Tooltip;