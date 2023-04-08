import Image from 'next/image';
import React from 'react';
import Searcher from '../inputs/Searcher';
import Button from '../buttons/Button';
import { useRouter } from 'next/router';
import pageLinks from '../../lib/pageLinks.json';

const HomeHero = () => {
  const router = useRouter();

  return (
    <div className="h-[490px] py-[70px] bg-[url(/img/homeHero.png)] bg-center bg-no-repeat bg-cover">
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
          {pageLinks?.map((pageLink) => (
            <Button
              key={pageLink.id}
              onClick={() => router.push(pageLink.link)}
              color="white"
              className="duration-300 hover:scale-110 sm:max-h-[30px] lg:whitespace-nowrap"
            >
              {pageLink.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
