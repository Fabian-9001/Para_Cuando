import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Like from '../svg/Like';

export interface ICardEvent {
  design?: 'normal' | 'alternative';
}

const EventCard: React.FC<ICardEvent> = ({ design = 'normal' }) => {
  const router = useRouter();
  const [isVoted, setIsVoted] = useState(false);
  return design == 'normal' ? (
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
      <button
        onClick={() => setIsVoted(!isVoted)}
        className="absolute top-[205px] right-6 duration-300 hover:scale-110"
      >
        <Like isVoted={isVoted} />
      </button>
      <div className="w-full pt-4 pb-10 px-5">
        <p
          onClick={() => router.push('/event/1')}
          className="app-title-3 text-app-blackLight truncate"
        >
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
  ) : (
    <div className="w-full relative max-w-[930px] h-[200px] bg-app-white shadow-app-thin rounded-[20px] overflow-hidden flex sm:h-[240px]">
      <div className="w-full min-w-[120px] max-w-[300px] rounded-[20px] relative overflow-hidden">
        <Image
          className="hover:scale-110 duration-300 object-cover"
          loading="lazy"
          src={'/img/ExampleEvent.jpg'}
          fill={true}
          alt=""
        />
      </div>
      <button
        onClick={() => setIsVoted(!isVoted)}
        className="absolute right-3 w-10 h-10 duration-300 hover:scale-110 sm:top-4 sm:right-8 sm:w-12 sm:h-12"
      >
        <Like isVoted={isVoted} />
      </button>
      <div className="w-auto px-6 self-end pb-4 md:pl-14 sm:pb-7 md:pr-40">
        <p
          onClick={() => router.push('/event/1')}
          className="app-subTitle-1 font-semibold text-app-blackLight truncate sm:app-title-3"
        >
          Concierto de Lady Gaga
        </p>
        <p className="h-[70px] overflow-hidden app-subTitle-2 text-app-grayDark mt-1 mb-3 relative">
          El concierto con la temática de Lady gaga en Las Vegas. El concierto
          con la temática de Lady gaga en Las Vegas.El concierto con la
          temática. El concierto con la temática de Lady gaga en Las Vegas. El
          concierto con la temática de Lady gaga en Las Vegas.El concierto con
          la temática.
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
