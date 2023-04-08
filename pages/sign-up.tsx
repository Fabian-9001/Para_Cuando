import Button from '@/components/buttons/Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SignUp = () => {
  const [isView, setIsView] = useState(false);

  return (
    <div className="min-h-screen relative bg-[url(/img/register.png)] bg-center bg-no-repeat bg-cover pt-10 pb-5 md:py-36">
      <span className="w-full h-full absolute left-0 top-0 bg-gradient-to-r from-black"></span>
      <div className="app-container flex flex-col justify-center items-center md:flex-row md:justify-evenly lg:gap-[200px]">
        <div className="relative w-[21vw] h-[21vw] lg:min-w-[250px] lg:min-h-[250px] mb-5">
          <Image src={'/svg/registerLogo.svg'} fill={true} alt="" />
        </div>
        <form className="w-full max-w-[560px] relative flex flex-col bg-[rgba(0,0,0,0.7)] shadow-app-thin drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] pt-14 pb-9 px-10 rounded-[20px] border-[1px] border-app-gray text-app-grayLighter">
          <Image
            className="absolute right-5 top-5 cursor-pointer duration-300 hover:scale-110"
            src={'/svg/exit.svg'}
            width={30}
            height={30}
            alt=""
          />
          <p className="mb-3 app-title-5">Todos votamos :&#41;</p>
          <p className="mb-6 app-text-3">Registrarte, valida tu voto.</p>
          <div className="flex flex-col mb-2 relative">
            <label htmlFor="email">Email</label>
            <input
              className="outline-app-white bg-transparent h-14 rounded-md border-[1.5px] border-app-grayLighter p-4"
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
            <div
              className="absolute right-5 top-[45%]"
              onClick={() => setIsView(!isView)}
            >
              {isView ? (
                <Image src={'/svg/done.svg'} width={30} height={30} alt="" />
              ) : (
                <Image
                  src={'/svg/advertence.svg'}
                  width={30}
                  height={30}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex w-[49%] flex-col relative">
              <label htmlFor="name">Nombre</label>
              <input
                className="outline-app-white bg-transparent h-14 rounded-md border-[1.5px] border-app-grayLighter p-4"
                id="name"
                type="text"
                placeholder="Fabian"
              />
              <div
                className="absolute right-5 top-[45%]"
                onClick={() => setIsView(!isView)}
              >
                {isView ? (
                  <Image src={'/svg/done.svg'} width={30} height={30} alt="" />
                ) : (
                  <Image
                    src={'/svg/advertence.svg'}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="flex w-[49%] flex-col relative">
              <label htmlFor="lastName">Apellido</label>
              <input
                className="outline-app-white bg-transparent h-14 rounded-md border-[1.5px] border-app-grayLighter p-4"
                id="lastName"
                type="text"
                placeholder="Cruz"
              />
              <div
                className="absolute right-5 top-[45%]"
                onClick={() => setIsView(!isView)}
              >
                {isView ? (
                  <Image src={'/svg/done.svg'} width={30} height={30} alt="" />
                ) : (
                  <Image
                    src={'/svg/advertence.svg'}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-3 relative">
            <label htmlFor="password">Contraseña</label>
            <input
              className="outline-app-white bg-transparent h-14 rounded-md border-[1.5px] border-app-grayLighter p-4"
              id="password"
              type={isView ? 'text' : 'password'}
              placeholder="********"
            />
            <div
              className="absolute right-5 top-[50%]"
              onClick={() => setIsView(!isView)}
            >
              {isView ? (
                <div className="flex gap-2">
                  <Image src={'/svg/view.svg'} width={30} height={30} alt="" />
                  <Image src={'/svg/done.svg'} width={30} height={30} alt="" />
                </div>
              ) : (
                <div className="flex gap-2">
                  <Image
                    src={'/svg/notView.svg'}
                    width={30}
                    height={30}
                    alt=""
                  />
                  <Image
                    src={'/svg/advertence.svg'}
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
          <p className="text-app-grayLight mb-5 app-text-4 sm:app-text-3">
            <span className="w-1 h-1 rounded-full mr-2 mb-[2.5px] inline-block bg-white "></span>
            La contraseña debe tener números, minúsculas y mayúsculas.
          </p>
          <Button color='yellow' className="w-full mb-4 rounded-md app-subTitle-1 font-semibold duration-300 hover:scale-105">
            Crear Cuenta
          </Button>
          <Link
            className="app-text-3 text-app-yellow self-center underline"
            href={'sign-in'}
          >
            O inicia sesión
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
