import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventCard = () => {
  return (
    <div className="w-[300px] h-[455px] bg-app-white shadow-app-thin rounded-[20px] overflow-hidden">
      <div className="w-full h-[240px] relative overflow-hidden">
        <Image
          className="hover:scale-110 duration-300"
          loading="lazy"
          src={'/img/ExampleEvent.jpg'}
          fill={true}
          alt=""
        />
      </div>
      <div className="w-full pt-4 pb-10 px-5">
        <p className="app-title-3 text-app-blackLight truncate">
          Concierto de Lady Gaga
        </p>
        <p className="h-[70px] overflow-hidden app-text-1 text-app-grayDark mt-1 mb-3 relative">
          El concierto con la temática de Lady gaga en Las Vegas. El concierto
          con la temática de Lady gaga en Las Vegas.El concierto con la
          temática.
          <span className="w-full h-[50px] absolute top-[30px] left-0 bg-gradient-to-t from-white"></span>
        </p>
        <Link
          className="inline-block w-[85%] app-text-3 text-app-blue truncate"
          href={''}
        >
          ladygaga.com
        </Link>
        <div className="flex gap-3 app-text-3 text-app-blackLight mt-3">
          <Image src={'/svg/person.svg'} width={16} height={16} alt="" />
          <p>90’800’756 votos</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
