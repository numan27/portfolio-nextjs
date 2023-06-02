import { useState  } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const ChatBotApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const messageContainerRef = useRef(null);

  // useEffect(() => {
  //   messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
  // }, [messages]);

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
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue('');
      setShowWelcomeMessage(false);
      setIsChatActive(true);
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

      <div className={`${isSidebarOpen ? 'pl-64' : 'pl-0'} h-full flex-1 flex flex-col transition-all duration-300`}>


      {/* Chat */}
        <div
          className='p-4 overflow-y-auto mt-12 flex justify-end'
          style={{ direction: 'ltr', maxHeight: 'calc(100% - 64px)' }}
          // ref={messageContainerRef}
        >
          {showWelcomeMessage && !isChatActive && ( 
            <div className='text-gray-600 text-center w-6/12 mx-auto px-24'>
              <h6>Welcome - your go-to source for answering instant queries relating to System and UI. Ask me, I am here to help you navigate the system!</h6>
            </div>
          )}

          {isChatActive && (
            <div className='flex flex-col-reverse'>
              {messages.slice(0).reverse().map((message, index) => (
                <div key={index} className='flex justify-end my-2'>
                  <div className='bg-blue-200 py-2 px-4 rounded-lg'>{message}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Form */}

        <form onSubmit={handleSendMessage} className={`${isSidebarOpen ? 'w-10/12' : 'w-full'} fixed bottom-0 right-0 p-4 flex transition-all duration-300`}>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200'
            placeholder='Type a message...'
          />
          <button
            type='submit'
            className='ml-4 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none'
          >
            <AiOutlineSend size={20} />
          </button>
        </form>
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
