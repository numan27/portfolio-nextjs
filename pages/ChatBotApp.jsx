import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ChatForm from './components/ChatForm';
import DefaultMessage from './components/DefaultMessage';
import Loader from 'react-loader-spinner';

const ChatBotApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isBotLoading, setIsBotLoading] = useState(false);



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() !== '') {
      setShowWelcomeMessage(false);
    }
  };


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          userMessage: inputValue,
          botMessage: "Static message from chatbot",
          isBotLoading: true // Set loading state for bot's message
        }
      ]);
      setInputValue('');
      setShowWelcomeMessage(false);
      setIsChatActive(true);

      // Simulate response delay for bot's message
      setTimeout(() => {
        setMessages((prevMessages) => {
          const updatedMessages = prevMessages.map((message, index) => {
            if (index === prevMessages.length - 1) {
              // Reset loading state for bot's message
              return { ...message, isBotLoading: false };
            }
            return message;
          });
          return updatedMessages;
        });
      }, 1000);
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInputValue('');
    setShowWelcomeMessage(true);
    setIsChatActive(true);
  };

  const handleDeleteChat = () => {
    setInputValue('');
    setShowWelcomeMessage(true);
    setIsChatActive(false);
    setMessages([]);
  };

  return (
    <div className='min-h-screen flex flex-col'>

      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className={`${isSidebarOpen ? 'pl-80' : 'pl-0'} flex-1 flex flex-col transition-all duration-300 z-10`}>

        {/* Chat */}
        <div
          className='p-4 overflow-y-auto min-h-auto z-10 mt-12 flex justify-end'
          style={{ direction: 'ltr' }}
        >

          {/* Default Message */}

          {showWelcomeMessage && !isChatActive && (
            <DefaultMessage />
          )}

          {isChatActive && (
            <div className='flex flex-col-reverse w-full'>
              {messages
                .slice(0)
                .reverse()
                .map((message, index) => (
                  <div key={index} className='flex justify-between w-full'>

                    {message.isLoading ? (
                      <div className="flex justify-center mt-5">
                        <Loader type="Oval" color="#4F46E5" height={30} width={30} />
                      </div>
                    ) : (
                      <>
                        {message.botMessage && (
                          <div className='mt-10 w-5/6'>
                            <div className='bg-green-200 py-2 mt-16 px-4 rounded-lg w-fit'>
                              {message.botMessage}
                            </div>
                          </div>
                        )}
                        <div className='mt-5 w-5/6'>
                          <div className='bg-blue-200 py-2 my-10 px-4 rounded-lg userChat w-fit float-right'>
                            {message.userMessage}
                          </div>
                        </div>
                      </>
                    )}

                  </div>
                ))}
            </div>
          )}

        </div>

        {/* Loader */}
        {isBotLoading && (
          <div className="flex justify-center mt-5">
            <Loader type="Oval" color="#4F46E5" height={30} width={30} />
          </div>
        )}

        {/* Input Form */}

        {isChatActive && (
          <ChatForm
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleSendMessage={handleSendMessage}
            handleKeyDown={handleKeyDown}
            isSidebarOpen={isSidebarOpen}
          />
        )}
      </div>

      {/* Sidebar */}

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        handleNewChat={handleNewChat}
        handleDeleteChat={handleDeleteChat}
        isChatActive={isChatActive}
      />


    </div>
  );
};

export default ChatBotApp;
