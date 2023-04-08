import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Navbar = () => {
  const [user, setUser] = useState(false);
  const router = useRouter();

  return (
    <div className="h-[70px] bg-app-black">
      <nav className="app-container max-w-[1280px] h-full flex items-center justify-between">
        <Image
          className="cursor-pointer"
          onClick={() => router.push('/')}
          priority={true}
          src={'/svg/NavLogo.svg'}
          width={80}
          height={80}
          alt=""
        />
        <ul className="flex app-text-3 text-app-white">
          <li className="hidden sm:flex gap-2 items-center text-app-blue sm:mr-9">
            <Image src={'/svg/plus.svg'} width={16} height={16} alt="" />
            Crear publicación
          </li>
          {!user ? (
            <div className="flex gap-5">
              <Link href={'sign-in'}>Log In</Link>
              <Link href={'sign-up'}>Sign Up</Link>
            </div>
          ) : (
            <li className="flex gap-3 items-center">
              <Image
                priority={true}
                src={'/svg/userLogged.svg'}
                width={35}
                height={35}
                alt=""
              />
              erik.perez@gmail.com
              <Image
                priority={true}
                src={'/svg/arrow.svg'}
                width={16}
                height={16}
                alt=""
              />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
