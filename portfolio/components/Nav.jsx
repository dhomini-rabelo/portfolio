// link (next js)
import { Link } from 'react-scroll';

// next hooks
import { usePathname } from 'next/navigation';

// framer motion
import { motion } from 'framer-motion';

const links = [
  { path: 'about', name: 'About', offset: -200, },
  { path: 'experiences', name: 'Experiences', offset: -150, },
  { path: 'projects', name: 'Projects', offset: -150, },
  { path: 'contact', name: 'Contact', offset: -200, },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            smooth={true}
            spy={true}
            offset={link.offset}
            duration={500}
            key={index}
            className={`capitalize ${linkStyles} cursor-pointer`}
          >
            {/* <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId='underline'
              className={`${underlineStyles} not:active:opacity-0`}
            /> */}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
