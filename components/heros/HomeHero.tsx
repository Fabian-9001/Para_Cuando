import Image from 'next/image';
import React from 'react';
import Searcher from '../inputs/Searcher';
import Button from '../buttons/Button';
import { useRouter } from 'next/router';

const HomeHero = () => {
  const router = useRouter();

  return (
    <div className="app-banner h-[490px] py-[70px] bg-[url(/img/homeHero.png)] bg-center bg-no-repeat bg-cover">
      <div className="app-container h-full flex flex-col items-center justify-center relative">
        <Image
          className="mb-14"
          priority={true}
          src={'/svg/heroLogo.svg'}
          width={215}
          height={190}
          alt=""
        />
        <Searcher />
        <div className="flex items-center justify-center gap-3 mt-5">
          <Button
            onClick={() => router.push('/stores')}
            className="sm:max-h-[30px]"
            color="white"
          >
            Marcas y tiendas
          </Button>
          <Button
            onClick={() => router.push('/concerts')}
            className="sm:max-h-[30px]"
            color="white"
          >
            Artistas y conciertos
          </Button>
          <Button
            onClick={() => router.push('/tournaments')}
            className="sm:max-h-[30px]"
            color="white"
          >
            Torneos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
