import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// components
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section className='container mx-auto'>
      {/* text & illustration */}
      <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        Contact
      </h2>
      {/* info text & form */}
      <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
        {/* info text */}
        <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
          {/* mail */}
          <div className='flex items-center gap-x-8'>
            <MailIcon size={18} className='text-primary' />
            <div>dhominirabelo@gmail.com</div>
          </div>
          {/* address */}
          <div className='flex items-center gap-x-8'>
            <HomeIcon size={18} className='text-primary' />
            <div>São Luís, Brazil</div>
          </div>
          {/* phone */}
          <div className='flex items-center gap-x-8'>
            <PhoneCall size={18} className='text-primary' />
            <div>+55 98 99981-1199</div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
