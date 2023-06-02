import { BsPlusSquareFill } from "react-icons/bs";
import { AiFillDelete } from 'react-icons/ai';

const Sidebar = ({ isSidebarOpen, handleNewChat, handleDeleteChat, isChatActive }) => {
  return (
    <div className={`w-2/12 border-r-2 shadow-2xl border-gray-300 h-screen fixed top-0 left-0 bottom-0 z-50 bg-gray-200 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className='bg-blue-400 flex items-center justify-between py-2 text-white'>
        <div className="flex flex-col w-full px-4">
          <button onClick={handleNewChat} className='w-full flex items-center justify-center hover:bg-blue-600 bg-blue-500 py-2 rounded border border-blue-600'>
            New Chat
            <BsPlusSquareFill className='text-xl cursor-pointer ml-5' />
          </button>
        </div>
      </div>

      <div>
        {isChatActive && (
          <div className="px-4 w-full">
            <button onClick={handleDeleteChat} className='w-full text-white bg-red-500 hover:bg-red-600 flex items-center justify-center mt-2 py-2 rounded border border-red-600'>
               Delete Chat <AiFillDelete className='ml-4 text-2xl' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
