import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const ChatForm = ({ inputValue, handleInputChange, handleSendMessage, handleKeyDown, isSidebarOpen }) => {
  return (
    <form
      onSubmit={handleSendMessage}
      className={`${isSidebarOpen ? 'w-10/12' : 'w-full'} fixed bottom-0 right-0 p-4 z-50 flex transition-all duration-300`}
    >
      <textarea
        type='text'
        rows={1}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 userInput'
        placeholder='Type a message...'
      />
      <button
        type='submit'
        className='ml-4 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none'
      >
        <AiOutlineSend size={20} />
      </button>
    </form>
  );
};

export default ChatForm;