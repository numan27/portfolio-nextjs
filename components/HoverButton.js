import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import classnames from 'classnames';

const ArrowButton = ({text}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            className={classnames(
                'group relative inline-flex items-center rounded-full px-6 py-3 transition-all duration-500',
                {
                    'bg-amber-500': isHovered,
                    'bg-gray-700': !isHovered,
                }
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <FiArrowLeft
                size={20}
                className={classnames(
                    'text-white transition-all duration-500 absolute left-0 top-0 rounded-full h-full',
                    {
                        'bg-amber-500 w-0': isHovered,
                        'bg-amber-500 w-full': !isHovered,
                    }
                )}
            />

            <span
                className='text-white px-8 text-xl font-semibold py-1'
            >
                {text}
            </span>
        </button>
    );
};

export default ArrowButton;
