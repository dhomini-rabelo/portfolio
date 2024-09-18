import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import { useState } from 'react';

import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const closeSheet = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              closeSheet={closeSheet}
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl'
            />
          </div>
          <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
