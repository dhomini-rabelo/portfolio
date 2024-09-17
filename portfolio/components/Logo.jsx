import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/header/me.jpg'
        width={72}
        height={72}
        priority
        alt="Owner's portfolio photo"
        className="block rounded-full border-4 border-transparent outline outline-2 outline-primary"
      />
    </Link>
  );
};

export default Logo;
