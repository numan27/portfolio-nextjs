import React from 'react';
import { BsListNested } from 'react-icons/bs';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className={`px-4 shadow py-2 border-b border transition-all duration-300 fixed top-0 right-0 z-50 ${isSidebarOpen ? 'w-10/12' : 'w-full'}`}>
      <div className="flex items-center justify-between">
        <button
          className="text-white focus:outline-none hover:bg-blue-600 focus:bg-blue-400 bg-blue-400 rounded-md p-2 mr-auto"
          onClick={toggleSidebar}
        >
          <BsListNested className="text-2xl" />
        </button>

        <h2 className='text-black fixed left-1/2 font-bold text-xl'>Virtual Assistant</h2>
     
      </div>
    </nav>
  );
};

export default Navbar;
