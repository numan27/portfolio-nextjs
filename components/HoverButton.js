import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import classnames from 'classnames';
import Link from 'next/link';

const ArrowButton = ({ text, path }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link
        href={path}
        >
            <button
                className={classnames(
                    'group relative inline-flex items-center rounded-lg sm:px-6 px-0 md:py-2 transition-all duration-500',
                    {
                        'bg-[#0C3A53]': isHovered,
                        'bg-black': !isHovered,
                    }
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                <FiArrowLeft
                    className={classnames(
                        'text-white transition-all duration-500 absolute left-0 top-0 rounded-lg h-full',
                        {
                            'bg-[#0C3A53]  w-0': isHovered,
                            'bg-[#0EBBB2] w-full': !isHovered,
                        }
                    )}
                />

                <span
                    className='text-white md:px-8 sm:px-4 px-2 text-xl font-semibold py-0.5'
                >
                    {text}
                </span>
            </button>
        </Link>
    );
};

export default ArrowButton;
