import Header from './Navbar/Navbar';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      {children}
    </>
  );
};

export default Layout;
