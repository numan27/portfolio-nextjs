import { FaHome, FaEnvelope, FaBriefcase, FaAward } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { FaHands } from 'react-icons/fa';

const NavList = [
    {
        icon: FaHome,
        label: 'Home',
        link: "/"
    },
    {
        icon: BsPersonFill,
        label: 'About',
        link: "/About"
    },
    {
        icon: FaBriefcase,
        label: 'Portfolio',
        link: "/Portfolio"
    },
    {
        icon: FaHands,
        label: 'Services',
        link: "/Services"
    },
    {
        icon: FaEnvelope,
        label: 'Contact',
        link: "/Contact"
    },
  
]

export default NavList;