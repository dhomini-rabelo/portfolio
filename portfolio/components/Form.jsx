'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
import { sendEmail } from '../actions/send-email';
import { useState } from 'react';


const Form = () => {
  const [formState, setFormState] = useState({
    isLoading: false,
    wasSentSuccessfully: null,
  });


  return (
    <form
      className='flex flex-col gap-y-4'
      action={
        async (formData) => {
          try {
            setFormState(prev => ({
              ...prev,
              isLoading: true,
            }))
            const { data, error } = await sendEmail(formData);
            const wasSentSuccessfully = !error && data.status === 200;

            console.log({
              data,
              error,
              wasSentSuccessfully,
            })

            setFormState(prev => ({
              ...prev,
              isLoading: false,
              wasSentSuccessfully,
            }))
          } catch {
            setFormState(prev => ({
              ...prev,
              isLoading: false,
              wasSentSuccessfully: false,
            }))
          }
        }
      }
    >
      {/* input */}
      <div className='relative flex items-center'>
        <Input
          type='name' id='name' name='name' required placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex items-center'>
        <Input
          type='email' id='email' name='email' required placeholder='Email' />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* textarea */}
      <div className='relative flex items-center'>
        <Textarea
          name='message'
          required placeholder='Type Your Message Here.' />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button disabled={formState.isLoading} className='flex items-center gap-x-1 w-full'>
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
      {
        formState.wasSentSuccessfully === true && (
          <span className='block pt-4 text-green-500'>Message sent successfully!</span>
        )
      }
      {
        formState.wasSentSuccessfully === false && (
          <span className='block pt-4 text-red-500'>Failed to send message!</span>
        )
      }


    </form>
  );
};

export default Form;
