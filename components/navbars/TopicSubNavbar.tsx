import React, { useState } from 'react';
import Button from '../buttons/Button';
import Searcher from '../inputs/Searcher';
import Image from 'next/image';
import Link from 'next/link';
import pageLinks from '../../lib/pageLinks.json';
import { useRouter } from 'next/router';

const TopicSubNavbar = () => {
  const [isActive, setisActive] = useState(false);
  const router = useRouter();

  return (
    <div className="h-[115px] flex shadow-app-thin">
      <div className="app-container flex gap-3 justify-between md:gap-[165px] lg:p-0">
        <div
          className={`w-[180px] min-h-[110px] flex flex-col px-4 py-4 bg-app-white text-app-grayDark app-subTitle-2 shadow-app-thin duration-500 absolute z-10 top-[90px] md:hidden
          ${isActive ? '-translate-x-3' : '-translate-x-60'}`}
        >
          {pageLinks?.map((pageLink) => (
            <Link
              className="my-2 hover:scale-110 duration-300"
              key={pageLink.id}
              href={pageLink.link}
            >
              {pageLink.name}
            </Link>
          ))}
        </div>
        <div>
          <button
            onClick={() => setisActive(!isActive)}
            className="w-[50px] h-[45px] flex rounded-full border-[1px] border-app-gray duration-300 app-animation-scaleInvert hover:scale-110 md:hidden"
          >
            <Image
              className="m-auto"
              src={'/svg/list.svg'}
              width={25}
              height={20}
              alt=""
            />
          </button>
          <div className="hidden md:flex gap-2">
            {pageLinks?.map((pageLink) => (
              <Button
                key={pageLink.id}
                onClick={() => router.push(pageLink.link)}
                color="white"
                className="border-[1px] border-app-gray duration-300 hover:scale-110 lg:whitespace-nowrap"
              >
                {pageLink.name}
              </Button>
            ))}
          </div>
        </div>
        <Searcher className="border-[1px] border-app-gray" />
      </div>
    </div>
  );
};

export default TopicSubNavbar;
