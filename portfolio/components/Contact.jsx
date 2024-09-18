import { MailIcon } from 'lucide-react';
import {
  RiLinkedinFill,
  RiTelegramFill,
} from 'react-icons/ri';
// components
import Form from '@/components/Form';
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';

const Contact = () => {
  return (
    <section
      id='contact'
      className='container mx-auto'>
      {/* text & illustration */}
      <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        Contact
      </h2>
      {/* info text & form */}
      <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
        {/* info text */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
          {/* mail */}
          <div className='flex items-center gap-x-8'>
            <MailIcon size={18} className='text-primary' />
            <Link
              target='_blank'
              href='mailto:dhominirabelo@gmail.com'
              className='flex items-center gap-x-2'
            >
              dhominirabelo@gmail.com
              <FiExternalLink size={18} className='text-primary' />
            </Link>
          </div>
          <div className='flex items-center gap-x-8'>
            <RiLinkedinFill size={18} className='text-primary' />
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/dhomini-rabelo/'
              className='flex items-center gap-x-2'
            >
              Dhomini Rabelo
              <FiExternalLink size={18} className='text-primary' />
            </Link>
          </div>
          <div className='flex items-center gap-x-8'>
            <RiTelegramFill size={18} className='text-primary' />
            <Link
              target='_blank'
              href='https://t.me/fael_07'
              className='flex items-center gap-x-2'
            >
              Dhomini Rabelo
              <FiExternalLink size={18} className='text-primary' />
            </Link>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
