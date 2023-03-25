import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [user, setUser] = useState(false);

  return (
    <div className="app-banner h-[70px] bg-app-black px-4">
      <nav className="max-w-[1280px] mx-auto h-full flex items-center justify-between">
        <Image
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
              <li>Log In</li>
              <li>Sign Up</li>
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
