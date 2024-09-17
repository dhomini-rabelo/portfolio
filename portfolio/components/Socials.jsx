'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiTelegramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/dhomini-rabelo/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/dhomini-rabelo',
    name: <RiGithubFill />,
  },
  {
    path: 'https://t.me/fael_07',
    name: <RiTelegramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            key={index}
            href={icon.path}
            target='_blank'
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
