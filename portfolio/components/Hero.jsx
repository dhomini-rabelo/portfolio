'use client';

import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-center gap-x-8'>
          <div className='flex max-w-[600px] flex-col justify-center items-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] text-center'>
              FULL STACK DEVELOPER
            </div>
            <h1 className='h1 mb-4 text-center'>Hello, my name is Dhomini Rabelo</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0 text-center w-full'>
              I'm a Brazilian Full Stack Developer with a huge experience in big companies. I love to learn new subjects and technologies,
              and I'm always looking for new challenges.
            </p>
            <div className='flex gap-3 flex-row flex-wrap mx-auto xl:mx-0 mb-12 w-full justify-center items-center'>
              <ScrollLink
                to='contact'
                smooth={true}
                spy={true}
                offset={-200}
                duration={800}
              >
                <Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </ScrollLink>
              <Link
                target='_blank'
                href='/hero/resume.pdf'
                className='flex items-center gap-x-2 text-secondary hover:text-primary transition-all'
              >
                <Button variant='secondary' className='gap-x-2'>
                  Download CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* <div className='hidden xl:flex relative'>
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText='Years Of Experience'
            />
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText='k'
              badgeText='Finished Projects'
            />
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText='k'
              badgeText='Happy Clients'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developer.png'
            />
          </div> */}
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
