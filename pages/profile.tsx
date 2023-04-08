import Button from '@/components/buttons/Button';
import EventCard from '@/components/cards/EventCard';
import Image from 'next/image';
import React from 'react';

const profile = () => {
  return (
    <div>
      <div className="app-banner bg-app-blue h-32 flex justify-center">
        <Image
          className="w-[120px] h-[120px] rounded-full object-cover translate-y-[50%]"
          src={'/img/homeHero.png'}
          width={120}
          height={120}
          alt=""
        />
      </div>
      <div className="app-container lg:px-0">
        <section className="flex justify-center gap-3 mb-16 mt-20">
          <Button
            color="white"
            className="border-[1px] border-app-gray sm:max-h-[30px]"
          >
            Mis votos
          </Button>
          <Button
            color="white"
            className="border-[1px] border-app-gray sm:max-h-[30px]"
          >
            Mis publicaciones
          </Button>
        </section>
        <section className="flex flex-wrap gap-5">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </section>
      </div>
    </div>
  );
};

export default profile;
