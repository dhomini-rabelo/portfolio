// link (next js)
import { Link } from 'react-scroll';

// framer motion
import { motion } from 'framer-motion';

import './css/Nav.css';

const links = [
  { path: 'about', name: 'About', offset: -50, delay: 500 },
  { path: 'experiences', name: 'Experiences', offset: -150, delay: 600 },
  { path: 'projects', name: 'Projects', offset: -150, delay: 700 },
  { path: 'contact', name: 'Contact', offset: -200, delay: 800 },
];

const Nav = ({ closeSheet = null, containerStyles, linkStyles, underlineStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            smooth={true}
            spy={true}
            offset={link.offset}
            duration={link.delay}
            key={index}
            className={`capitalize ${linkStyles} cursor-pointer nav-link-motion`}
            onClick={closeSheet}
          >
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId='underline'
              className={`${underlineStyles} hidden`}
            />
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
