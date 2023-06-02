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
                'group relative inline-flex items-center rounded-full sm:px-6 px-0 md:py-2 py-1 transition-all duration-500',
                {
                    'bg-amber-500': isHovered,
                    'bg-black': !isHovered,
                }
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <FiArrowLeft
                size={16}
                className={classnames(
                    'text-white transition-all duration-500 absolute left-0 top-0 rounded-full h-full',
                    {
                        'bg-amber-500 w-0': isHovered,
                        'bg-amber-500 w-full': !isHovered,
                    }
                )}
            />

            <span
                className='text-white md:px-8 sm:px-4 px-2 text-xl font-semibold py-1'
            >
                {text}
            </span>
        </button>
    );
};

export default ArrowButton;
